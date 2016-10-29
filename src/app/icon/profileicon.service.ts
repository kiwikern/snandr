import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProfileIconService {

  private url: string = 'http://localhost:3000/api/icons/';

  constructor(private http: Http) {
  }

  public getAnimalIcons(): Promise<string[]> {
    return this.getIcons('animals');
  }

  public getPersonIcons(): Promise<string[]> {
    return this.getIcons('persons');
  }

  private getIcons(category: string): Promise<string[]> {
    let animalUrl = this.url + category;
    return this.http.get(animalUrl)
      .toPromise()
      .then(respone => respone.json() as [string])
      .catch(error => console.log(error));
  }
}
