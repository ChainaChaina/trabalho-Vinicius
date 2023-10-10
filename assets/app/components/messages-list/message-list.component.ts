import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { Message } from '../../models/message.model';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
})
export class MessageListComponent implements OnInit {
  messageS: Message[] = [
    new Message('teste', 'teste'),
    new Message('teste1', 'teste1'),
    new Message('teste2', 'test2'),
  ];

  constructor(private readonly messageService: MessageService) {}

  ngOnInit(): void {
    this.messageS = this.messageService.getMessages();
  }
}
