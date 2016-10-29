export class User {

  public firstName: string = '';
  public lastName: string = '';
  public profilePicture: string = '';
  public friends: string[] = [];
  public city: string = '';

  public static getNullUser(): User {
    return new User('', '', '');
  }

  constructor(public _id: string,
              public username: string,
              public email: string) {

  }

}
