import { Message } from '../models/message.model';

export class MessageService {
  private messageSSservice: Message[] = [];

  addMessage(message: Message): void {
    this.messageSSservice.push(message);
    console.log(this.messageSSservice);
  }

  getMessages(): Message[] {
    return this.messageSSservice;
  }

  deleteMessage(message: Message): void {
    this.messageSSservice.splice(this.messageSSservice.indexOf(message), 1);
  }
}
