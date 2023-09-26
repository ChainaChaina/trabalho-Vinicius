export class Message {
  messageId: string;
  content: string;
  userId: string;
  userName: string;

  constructor(
    content: string,
    userName: string
  ) {
    this.content = content;
    this.userName = userName;
  }
}
