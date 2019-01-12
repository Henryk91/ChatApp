import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { DocumentService } from 'src/app/services/document.service';
import { Globals } from '../../globals';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent implements OnInit, OnDestroy {
  documents: Observable<string[]>;
  logResponse: Observable<string>;
  loggedIn: boolean = false;
  userame:string = window.localStorage.getItem('UserName');
  private _docSub: Subscription;

  constructor(private documentService: DocumentService, public globals: Globals) { }

  ngOnInit() {
   
    this.loggedInCheck();
    this.getContacts();
    this.logResponse = this.documentService.userConfirm;
    
    this._docSub = this.documentService.userConfirm.subscribe(docArr =>{this.logginReply(docArr)});
  }

  ngOnDestroy() {
    this._docSub.unsubscribe();
  }

  loadDoc(id: string[], creator:string) {    
    this.documentService.loadDoc(id[0]);
  }

  newDoc(name:string, creator:string) {
    this.documentService.newDocument(name, creator);
  }

  hideNav(){
    var x = document.getElementById('nav');
    x.style.display = "none";
  }
  
  getContacts(){
    this.documentService.getContacts();
    this.documents = this.documentService.documents;
  }

  saveName(){
    var storage = window.localStorage;
    storage.setItem('UserName', this.globals.userName);
  }

  login(name, pass){
    this.globals.userName = name;
    this.getContacts();  
    this.documentService.addUser(name, pass);
  }

  loggedInCheck(){
    var ls = window.localStorage.getItem('UserName');
    if(ls.length > 0 && ls.indexOf('test') == -1){
      this.loggedIn = true;
    }else{
      this.userame = '';
    }
  }

  logginReply(ret:string){
    if(ret.indexOf('confirm') > -1){
      this.loggedIn = true;
      this.saveName();
    }else{
      alert(ret);
    }
  }
}
