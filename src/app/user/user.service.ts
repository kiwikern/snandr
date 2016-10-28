import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {User} from './user';

@Injectable()
export class UserService {

  //private headers = new Headers({'Content-Type': 'application/json'});
  private url = 'http://localhost:3000/api/users';


  constructor(private http: Http) {
  }

  getUsers(): Promise<User[]> {
    return this.http.get(this.url)
      .toPromise()
      .then(response => response.json().data as User[])
      .catch(this.handleError);
  }

  getUser(id: string): Promise<User> {
    const idUrl = `${this.url}/${id}`;
    return this.http.get(idUrl)
      .toPromise()
      .then(respone => respone.json() as User)
      .catch(this.handleError);
  }

  saveUser(user: User): Promise<User> {
    const idUrl = `${this.url}/${user._id}`;
    return this.http.put(idUrl, user)
      .toPromise()
      .then(respone => respone.json() as User)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
