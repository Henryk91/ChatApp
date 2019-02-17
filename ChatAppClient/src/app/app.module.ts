import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { Globals } from './globals';
import { AppComponent } from './app.component';
import { DocumentComponent } from './components/document/document.component';
import { DocumentListComponent } from './components/document-list/document-list.component';
const config: SocketIoConfig = { url: 'https://henryk91-chatapp-server.glitch.me', options: {} };


@NgModule({
  declarations: [
    AppComponent,
    DocumentComponent,
    DocumentListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
