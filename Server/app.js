const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const documents = {};
const userId = {};


io.on('connection', socket => {
    let previousId;
    const safeJoin = currentId => {
        socket.leave(previousId);
        socket.join(currentId, () => console.log(`Socket ${socket.id} joined room ${currentId}`));
        previousId = currentId;
    }

    socket.on('getDocArr', docId => {
        safeJoin(docId);
        socket.emit('doc-Arr', documents[docId]);
    });

    socket.on('userAuth', clientId => {
        if(clientId[0].length > 0 && clientId[1].length > 0 ){
            if(userId[clientId[0]] !== undefined){
                
                if(userId[clientId[0]] == clientId[1]){

                    console.log("user: "+clientId[0]+" confirmed");
                    io.emit('userAuth'+clientId[2], ['confirm']);
                }else{

                    console.log("user: "+clientId[0]+" denied");
                    io.emit('userAuth'+clientId[2], ['Password Error. Or Username Already in use.']);
                }
            }else{
                userId[clientId[0]] = clientId[1];
                console.log("user: "+clientId[0]+" Added");
                io.emit('userAuth'+clientId[2], ['User Added. You Can now log in.']);
            }       
        }else{
            io.emit('userAuth'+clientId[2], ['Username or Password Missing']);
        }
    });

    socket.on('addDoc', doc => {
        documents[doc.id] = doc;
        safeJoin(doc.id);
        user1 = doc.users[0];
        user2 = doc.users[1];
        io.emit('documents'+user1, getDocs(user1));
        io.emit('documents'+user2, getDocs(user2));
    });

    socket.on('editArr', doc => {
        documents[doc.id] = doc;
        socket.to(doc.id).emit('doc-Arr', doc);
    });

    socket.on('sendMsg', doc => {
        documents[doc.id].doc.push(doc.doc[0]);
        socket.to(doc.id).emit('doc-Msg', doc);
    });

    socket.on('arrDocuments', user => {
        io.emit('documents'+user, getDocs(user));
    });

    console.log(`Socket ${socket.id} has connected`);
});

http.listen(3000, () => {
    console.log('Listening on port 3000');
});

function getDocs(userId){
    // Get List Of Contacts
        var keys = Object.keys(documents);
        var i;
        var found = [];
        for (i = 0; i < keys.length; i++) { 
            if(documents[keys[i]].users[0].indexOf(userId) > -1){
                var a = [keys[i],documents[keys[i]].users[1]];
                found.push(a);
            } else if(documents[keys[i]].users[1].indexOf(userId) > -1){            
                var a = [keys[i],documents[keys[i]].users[0]];
                found.push(a);
            } 
        }
        found.sort(function(a,b){ return a[1] > b[1] ? 1 : -1; });
    return found;
}

