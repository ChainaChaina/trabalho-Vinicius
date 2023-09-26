export class Message {
  messageId: string;
  content: string;
  userId: string;
  userName: string;

  constructor(
    messegeId: string,
    content: string,
    userId: string,
    userName: string
  ) {
    this.messageId = messegeId;
    this.content = content;
    this.userId = userId;
    this.userName = userName;
  }
}
