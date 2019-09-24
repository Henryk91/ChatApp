import { Component, OnInit, OnDestroy, ChangeDetectorRef, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DocumentService } from 'src/app/services/document.service';
import { Globals } from '../../globals';
// import { ChangeDetectionStrategy } from '@angular/compiler/src/core';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentListComponent implements OnInit, OnDestroy, AfterViewInit {
  documents: Observable<string[]>;
  logResponse: Observable<string>;
  loggedIn: boolean = false;
  register: boolean = false;

  unreadMsg: string[] = [''];

  emailSave: string = window.localStorage.getItem('UserName');
  private _docSub: Subscription;

  constructor(private documentService: DocumentService, public globals: Globals, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.loggedInCheck();
    this.getContacts();
    this.logResponse = this.documentService.userConfirm;

    this._docSub = this.documentService.userConfirm.subscribe(docArr => {
      this.logginReply(docArr);
    });
  }

  ngAfterViewInit() {
    this.documentService.newMsg.subscribe(msg => {
      console.log(msg);
      this.unreadMsg.push(msg);
      this.cd.markForCheck();
    });
  }
  ngOnDestroy() {
    this._docSub.unsubscribe();
  }

  loadDoc(id: string[], creator: string) {
    this.unreadMsg = this.unreadMsg.filter(usr => usr !== id[1]);
    this.documentService.loadDoc(id[0]);
  }

  newDoc(name: string) {
    this.documentService.newDocument(name, this.globals.userName);
    this.getContacts();
  }

  hideNav() {
    let x = document.getElementById('nav');
    x.style.display = 'none';
  }

  getContacts() {
    this.documentService.getContacts();
    this.documents = this.documentService.documents;
  }

  saveName() {
    let storage = window.localStorage;
    storage.setItem('UserName', this.globals.userName);
  }

  registerToggle() {
    this.register = !this.register;
  }

  registerUser(firstName, lastName, email, userPass, userPass2) {
    if (userPass === userPass2) {
      const user = {
        email: email,
        firstName: firstName,
        lastName: lastName,
        password: userPass,
        tempPass: '',
        permId: ''
      };
      this.globals.userName = email;
      console.log(user);
      this.documentService.registerUser(user);
    } else {
      alert('Passwords dont match');
    }
  }

  login(email, pass) {
    this.globals.userName = email;
    this.getContacts();
    this.documentService.addUser(email, pass);
    // setTimeout(() => {window.location.reload()}, 500)
    // this.cd.markForCheck();
  }

  loggedInCheck() {
    let ls = window.localStorage.getItem('UserName');
    if (ls !== null && ls.indexOf('test') == -1) {
      this.loggedIn = true;
      this.globals.userName = ls;
    } else {
      this.emailSave = '';
    }
  }

  reload() {
    window.location.reload();
  }

  logginReply(ret: string) {
    if (ret.indexOf('confirm') > -1) {
      this.loggedIn = true;
      this.register = false;
      this.saveName();
    } else if (ret[0].indexOf('You Can now log in') > -1) {
      // alert(ret);
      this.loggedIn = true;
      this.register = false;
      this.saveName();
    } else {
      alert(ret);
    }
  }

  loggOut() {
    localStorage.removeItem('UserName');
    window.location.reload();
  }

  getUnread(id) {
    const unread = [...this.unreadMsg].filter(usr => usr === id[1]).length;
    return unread > 0 ? '   ' + unread : '';
  }
}
