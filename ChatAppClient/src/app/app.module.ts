import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { Globals } from './globals';
import { AppComponent } from './app.component';
import { DocumentComponent } from './components/document/document.component';
import { DocumentListComponent } from './components/document-list/document-list.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
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
    SocketIoModule.forRoot(config),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: true })
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
