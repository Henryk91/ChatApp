import { Injectable } from '@angular/core';

import { Socket } from 'ngx-socket-io';

import { Document } from '../models/document';

import { Globals } from '../globals';
@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  uniqueOT = this.docId();
  username = window.localStorage.getItem('UserName');
  documents = this.socket.fromEvent<string[]>('documents'+this.username);
  currDocument = this.socket.fromEvent<Document>("doc-Arr");
  currDocMsg = this.socket.fromEvent<Document>("doc-Msg");
  userConfirm = this.socket.fromEvent<string>('userAuth'+this.uniqueOT);

  constructor(private socket: Socket , public globals:Globals) { }

  getContacts() {
    var storage = window.localStorage;
    var username =storage.getItem('UserName');
    this.socket.emit('arrDocuments', username);
  }

  loadDoc(id: string) {
    this.socket.emit('getDocArr', id);
  }

  newDocument(name:string, creator: string) {
    this.socket.emit('addDoc', { id: this.docId(), users: [creator, name], doc: [{sender:'', content:'', time: '', date: ''}]});
  }

  addUser(name:string, pass:string){
    
    this.socket.emit('userAuth', [name, pass, this.uniqueOT]);
  }


  sendMsg(msg) {
    this.socket.emit('sendMsg', msg);
  }

  private docId() {
    let text = '';

    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 10; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
}