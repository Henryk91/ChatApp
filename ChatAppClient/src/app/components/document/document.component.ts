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
  receiver: string;

  constructor(private documentService: DocumentService, public globals: Globals) {}

  ngOnInit() {
    this._docSub = this.documentService.currDocument
      .pipe(startWith({ id: '', users: [''], doc: [{ sender: '', receiver: '', content: '', time: '', date: '' }] }))
      .subscribe(docArr => {
        this.docArr = docArr;
      });

    this._docSub = this.documentService.currDocMsg.subscribe(docArr => {
      this.docArr.doc.push(docArr.doc[0]);
      window.scrollTo(0, 5000);
    });
  }

  ngOnDestroy() {
    this._docSub.unsubscribe();
  }

  sendMsg(text: string) {
    let d = new Date();
    let time = d.getHours() + ':' + d.getMinutes();
    let date = d.getUTCDate() + '';
    let receiver = this.contactName();
    let msgCont = { sender: this.globals.userName, receiver: receiver, content: text, time: time, date: date };
    let msg = { id: this.docArr.id, doc: [msgCont] };
    this.docArr.doc.push(msgCont);
    this.documentService.sendMsg(msg);
  }

  showNav() {
    let x = document.getElementById('nav');
    x.style.display = 'block';
  }

  isUser(name: string) {
    let confirm = false;
    if (this.globals.userName == name) {
      confirm = true;
    }
    return confirm;
  }

  contactName() {
    if (this.docArr.users[0] == this.globals.userName) {
      return this.docArr.users[1];
    } else {
      return this.docArr.users[0];
    }
  }

  notEmpty(text: string) {
    if (text.length > 0) {
      return true;
    } else {
      return false;
    }
  }
}
