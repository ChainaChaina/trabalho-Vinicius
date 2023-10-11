import { Component } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { Message } from '../../models/message.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./style.css'],
})
export class MessageInputComponent {
  constructor(private readonly messageService: MessageService) {}

  onSubmit(form: NgForm) {
    const messageAux = new Message(form.value.myContextngForm, 'Murilo');
    this.messageService.addMessage(messageAux);
    console.log(form);
    form.resetForm();
  }

  onSave(textoConsole: string) {
    console.log('Entrei' + textoConsole);
    const messageAux = new Message(textoConsole, 'Vini');
    this.messageService.addMessage(messageAux);
  }
}
