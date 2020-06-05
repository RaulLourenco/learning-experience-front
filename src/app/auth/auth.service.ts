import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject, from } from 'rxjs';

import { Storage } from '@ionic/storage';
import { AuthResponse } from './auth-response';
import { urls } from '..//util/urlConfig';
import { HTTP, HTTPResponse } from '@ionic-native/http/ngx';
import { UserSignup } from '../interface/user-signup';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authSubject = new BehaviorSubject(false);

  constructor(private httpClient: HttpClient, private storage: Storage, private _http: HTTP) { }

  register(user: UserSignup) {
    this._http.setDataSerializer('json');
    const observable = from(this._http.post(`${urls.URL_REGISTERUSER}`, user, {
      'Content-Type': 'application/json'
    }))
      .pipe(
        tap(async (res) => {
          if (res) {
            const response = JSON.parse(res.data);
            console.log('response: ', response);
            this.authSubject.next(true);
          }
        }));
    return observable;
    // return this.httpClient.post(`${urls.URL_REGISTERUSER}`, user, {
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // }).pipe(
    //   tap(async (res) => {
    //     if (res) {
    //       this.authSubject.next(true);
    //     }
    //   })
    // );
  }

  login(user: User) {
    this._http.setDataSerializer('json');
    const observable = from(this._http.post(`${urls.URL_LOGINUSER}`, user, {
      'Content-Type': 'application/json'
    }))
      .pipe(
        tap(async (res) => {
          if (res) {
            const response = JSON.parse(res.data);
            console.log('response: ', response);
            await this.storage.set('ACCESS_TOKEN', response.token);
            await this.storage.set('EXPIRE_IN', response.tokenExpiresIn);
            await this.storage.set('USER_ID', response.id);
            this.authSubject.next(true);
          }
        }));
    return observable;
    // return this.httpClient.post(`${urls.URL_LOGINUSER}`, user).pipe(
    //   tap(async (res: AuthResponse) => {
    //     if (res) {
    //       await this.storage.set('ACCESS_TOKEN', res.token);
    //       await this.storage.set('EXPIRES_IN', res.tokenExpiresIn);
    //       this.authSubject.next(true);
    //     }
    //   })
    // );
  }

  async logout() {
    await this.storage.remove('ACCESS_TOKEN');
    await this.storage.remove('EXPIRES_IN');
    this.authSubject.next(false);
  }

  isLoggedIn() {
    return this.authSubject.asObservable();
  }

  async getToken() {
    let token;
    await this.storage.get('ACCESS_TOKEN').then(res => {
      token = res;
    }).catch(e => {
      return e;
    });
    return token;
  }

}
