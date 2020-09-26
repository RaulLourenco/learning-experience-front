import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { AuthResponse } from '../models/auth-response';
import { Storage } from '@ionic/storage';
import { UserSignup } from '../models/user-signup';
import { User } from '../models/user';
import { ApiService } from './api.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiLevelService extends ApiService {

  constructor(
    http: HttpClient,
    storage: Storage
  ) {
    super(
      http,
      storage
    );
  }

  public async getProgress() {
    return this.http.get(`${environment.urlApi}/Patient/GetProgress`,
      {
        headers: {
          Authorization: 'Bearer ' + await this.getToken()
        },
        params: new HttpParams().set('userId', await this.getUserId())
      });
  }


}