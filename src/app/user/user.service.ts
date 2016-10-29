import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import {User} from './user';
import {Observable} from 'rxjs';

@Injectable()
export class UserService {

  //private headers = new Headers({'Content-Type': 'application/json'});
  private url = 'http://localhost:3000/api/users';


  constructor(private http: Http) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get(this.url)
      .map(response => response.json() as User[])
      .catch(this.handleError);
  }

  getUser(id: string): Observable<User> {
    const idUrl = `${this.url}/${id}`;
    return this.http.get(idUrl)
      .map(respone => respone.json() as User)
      .catch(this.handleError);
  }

  saveUser(user: User): Observable<User> {
    const idUrl = `${this.url}/${user._id}`;
    return this.http.put(idUrl, user)
      .map(respone => respone.json() as User)
      .catch(this.handleError);
  }

  private handleError(error: Response | any): Observable<any> {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
