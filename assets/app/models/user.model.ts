export class User {
  /**
   *
   */
  constructor(
    public email: string,
    public password: string,
    public fisrtName?: string,
    public lastName?: string
  ) {}
}
