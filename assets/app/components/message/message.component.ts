import { Component, Input } from '@angular/core';
import { Message } from '../../models/message.model';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
})
export class MessageComponent {
  @Input() messageVarClasse: Message = new Message('', '');
  @Input('inputMessage') messageVarClasseAlias: Message = new Message('', '');

  constructor(private readonly messageServiceObj: MessageService) {}
  onDelete(): void {
    this.messageServiceObj.deleteMessage(this.messageVarClasse);
  }

  onEdit(): void {
    console.log('editar');
  }
}
