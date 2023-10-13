import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MessageInputComponent } from './components/messages-input/message-input.component';
import { FormularioComponent } from './components/zformcomponente/formulario.component';
import { MessageListComponent } from './components/messages-list/message-list.component';
import { EmpregadoComponent } from './components/empregado/empregado.component';
import { MessagesComponent } from './components/messages/messages.component';
import { AuthenticationComponent } from './components/auth/authentication.component';
import { HeaderComponent } from './components/header/header.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { LogoutComponent } from './components/auth/logout/logout.component';
import { AppRouting } from './app-routing.module';
import { MessageComponent } from './components/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    MessageComponent,
    MessageInputComponent,
    MessageListComponent,
    FormularioComponent,
    EmpregadoComponent,
    AuthenticationComponent,
    HeaderComponent,
    SignupComponent,
    SigninComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouting,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [MessagesComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
