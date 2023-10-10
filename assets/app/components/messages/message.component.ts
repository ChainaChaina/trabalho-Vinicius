import { Component, Input } from '@angular/core';
import { Person } from '../../models/person.model';
import { MessageService } from '../../services/message.service';
import { Message } from '../../models/message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./style.css'],
})
export class MessageComponent {
  constructor(private readonly messageService: MessageService) {}

  onSave(textoConsole: string) {
    console.log('Entrei' + textoConsole);
    const messageAux = new Message(textoConsole, 'Vini');
    this.messageService.addMessage(messageAux);
  }
}
