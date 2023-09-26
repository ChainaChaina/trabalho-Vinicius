import { Component, Input } from '@angular/core';
import { Person } from '../../models/person.model';
import { MessageService } from '../../services/message.service';
import { Message } from '../../models/message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./style.css'],
  providers: [MessageService]
})
export class MessageComponent {
  constructor (private readonly messageService: MessageService){}

  onSave(textoConsole: string){
    const messageAux = new Message(textoConsole, 'Vini');
    this.messageService.addMessage(messageAux);
    console.log(textoConsole);
  }
}
