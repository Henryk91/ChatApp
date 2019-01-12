import { Component, OnInit, OnDestroy } from '@angular/core';
import { DocumentService } from 'src/app/services/document.service';
import { Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { Document } from 'src/app/models/document';
import { Globals } from '../../globals';

@Component({
    selector: 'app-document',
    templateUrl: './document.component.html',
    styleUrls: ['./document.component.scss']
  })
    export class DocumentComponent implements OnInit, OnDestroy {
    docArr: Document;
    private _docSub: Subscription;
    receiver:string;

    constructor(private documentService: DocumentService, public globals:Globals) { }
   
    ngOnInit() {
        this._docSub = this.documentService.currDocument.pipe(
        startWith({ id: '', users: [''], doc: [{sender:'', content:'', time: '', date: ''}]})
        ).subscribe(docArr =>{ this.docArr = docArr});
        
        this._docSub = this.documentService.currDocMsg.subscribe(
            docArr =>{ this.docArr.doc.push(docArr.doc[0])});
    }

    ngOnDestroy() {
        this._docSub.unsubscribe();
    }
    
    sendMsg(text: string) {
        var d = new Date;
        var time = d.getHours()+":"+d.getMinutes();
        var date = d.getUTCDate()+"";
        var msgCont = {sender:this.globals.userName,content:text, time:time, date:date};
        var msg = {id: this.docArr.id, doc: [msgCont]};
        this.docArr.doc.push(msgCont);
        this.documentService.sendMsg(msg);
    }

    showNav(){
        var x = document.getElementById('nav');
        x.style.display = "block";
    }

    isUser(name: string){
        var confirm = false;
        if(this.globals.userName == name){
            confirm = true;
        }
        return confirm;
    }

    contactName(){
        if(this.docArr.users[0] == this.globals.userName){
            return this.docArr.users[1]; 
        }else{
            return this.docArr.users[0];
        }
    }

    notEmpty(text: string){    
        if(text.length > 0){
            return true;
        }else {
            return false;
        }
    }
}