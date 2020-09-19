import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { AuthResponse } from '../../model/auth-response';
import { Storage } from '@ionic/storage';
import { UserSignup } from '../../model/user-signup';
import { User } from '../../model/user';
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

}