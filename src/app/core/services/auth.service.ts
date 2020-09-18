import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject,  } from 'rxjs';

import { Storage } from '@ionic/storage';
import { AuthResponse } from '../../model/auth-response';
import { UserSignup } from '../../model/user-signup';
import { User } from '../../model/user';
import { ApiService } from './api.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiAuthService extends ApiService {

  // authSubject = new BehaviorSubject(false);

  constructor(
    http: HttpClient
  ) {
    super(http);
  }

  register(user: UserSignup) {
    const params = {
      user
    }
    return this.http.post(`${environment.urlApi}/Auth/RegisterLogin`, params, this.httpOptions)
}


  login(user: User) {
    // this._http.setDataSerializer('json');
    // const observable = from(this._http.post(`${urls.URL_LOGINUSER}`, user, {
    //   'Content-Type': 'application/json'
    // }))
    //   .pipe(
    //     tap(async (res) => {
    //       if (res) {
    //         const response = JSON.parse(res.data);
    //         console.log('response: ', response);
    //         await this.storage.set('ACCESS_TOKEN', response.token);
    //         await this.storage.set('EXPIRE_IN', response.tokenExpiresIn);
    //         await this.storage.set('USER_ID', response.id);
    //         this.authSubject.next(true);
    //       }
    //     }));
    // return observable;
    return this.http.post(`${urls.URL_LOGINUSER}`, user).pipe(
      tap(async (res: AuthResponse) => {
        if (res) {
          await this.storage.set('ACCESS_TOKEN', res.token);
          await this.storage.set('EXPIRES_IN', res.tokenExpiresIn);
          await this.storage.set('USER_ID', res.id);
          this.authSubject.next(true);
        }
      })
    );
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

  async getUserId() {
    let userId;
    await this.storage.get('USER_ID').then(res => {
      userId = res;
    }).catch(e => {
      return e;
    });
    return userId;
  }

}
