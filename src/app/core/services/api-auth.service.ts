import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { AuthResponse } from '../models/auth-response';
import { Storage } from '@ionic/storage';
import { UserSignup } from '../models/user-signup';
import { User } from '../models/user';
import { ApiService } from './api.service';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiAuthService extends ApiService {

  authSubject = new BehaviorSubject(false);

  constructor(
    http: HttpClient,
    storage: Storage
  ) {
    super(
      http,
      storage
    );
  }

  register(user: UserSignup) {
    const params = {
      user
    }
    return this.http.post(`${environment.urlApi}/Auth/RegisterLogin`, params, this.httpOptions)
      .pipe(
        tap(async (res) => {
          if (res) {
            this.authSubject.next(true);
          }
        })
      );
  }


  login(user: User) {
    const params = {
      user
    }
    return this.http.post(`${environment.urlApi}/Auth`, params, this.httpOptions)
      .pipe(
        tap(async (res: AuthResponse) => {
          if (res) {
            await this.storage.set('ACCESS_TOKEN', res.token);
            await this.storage.set('EXPIRES_IN', res.tokenExpiresIn);
            await this.storage.set('USER_ID', res.id);
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