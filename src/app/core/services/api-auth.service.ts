import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { AuthResponse } from '../models/auth-response';
import { Storage } from '@ionic/storage';
import { UserSignup } from '../models/user-signup';
import { User } from '../models/user';
import { ApiService } from './api.service';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { HTTP } from '@ionic-native/http/ngx';
@Injectable({
  providedIn: 'root'
})
export class ApiAuthService {

  authSubject = new BehaviorSubject(false);

  constructor(private http: HttpClient,
    private storage: Storage,
    private httpIonic: HTTP
  ) {
  }

  register(user: UserSignup) {
    return this.http.post(`${environment.urlApi}/Auth/RegisterLogin`, user)
      .pipe(
        tap(async (res) => {
          if (res) {
            this.authSubject.next(true);
          }
        })
      );
  }


  login(user: User) {
    // this.httpIonic.setDataSerializer('json');
    // const observable = from(this.httpIonic.post(`${environment.urlApi}/Auth`, user, {
    //   'Content-Type': 'application/json'
    // })).pipe(
    //   tap(async (res) => {
    //     if (res) {
    //       const response = JSON.parse(res.data);
    //       await this.storage.set('ACCESS_TOKEN', response.token);
    //       await this.storage.set('EXPIRES_IN', response.tokenExpiresIn);
    //       await this.storage.set('USER_ID', response.id);
    //       await this.storage.set('USER_NAME', response.userName);
    //       this.authSubject.next(true);
    //     }
    //   }));
    // return observable;
    return this.http.post(`${environment.urlApi}/Auth`, user)
      .pipe(
        tap(async (res: AuthResponse) => {
          if (res) {
            await this.storage.set('ACCESS_TOKEN', res.token);
            await this.storage.set('EXPIRES_IN', res.tokenExpiresIn);
            await this.storage.set('USER_ID', res.id);
            await this.storage.set('USER_NAME', res.userName);
            this.authSubject.next(true);
          }
        }));
  }

  async logout() {
    await this.storage.remove('ACCESS_TOKEN');
    await this.storage.remove('EXPIRES_IN');
    this.authSubject.next(false);
  }

  isLoggedIn() {
    return this.authSubject.asObservable();
  }

}
