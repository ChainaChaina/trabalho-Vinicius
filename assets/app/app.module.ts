import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MessageComponent } from './components/messages/message.component';
import { FormularioComponent } from './components/zformcomponente/formulario.component';

@NgModule({
  declarations: [AppComponent, MessageComponent, FormularioComponent],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
