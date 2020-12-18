import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  getAuthorizationToken() {
    return '';
  }

  logout() {

  }

  getNewAccessToken() {
    return new Observable();
  }
}
