import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MessageInputComponent } from './components/messages-input/message-input.component';
import { FormularioComponent } from './components/zformcomponente/formulario.component';
import { MessageListComponent } from './components/messages-list/message-list.component';
import { EmpregadoComponent } from './components/empregado/empregado.component';
import { MessagesComponent } from './components/messages/messages.component';
import { AuthenticationComponent } from './components/auth/authentication.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRouting } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MessageInputComponent,
    FormularioComponent,
    MessageListComponent,
    EmpregadoComponent,
    MessagesComponent,
    AuthenticationComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRouting],
  exports: [MessagesComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
