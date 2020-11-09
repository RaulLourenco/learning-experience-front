import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { ApiService } from './api.service';
import { environment } from 'src/environments/environment';
import { ExerciseModule } from '../models/exerciseModule';

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

  async GetProgressByModule(module: number): Promise<number> {

    const userId = await this.setUserId();
    const token = await this.setToken();

    return this.http.get<number>(`${environment.urlApi}/User/GetProgressByModule`, {
      headers: {
        Authorization: 'Bearer ' + token
      },
      params: new HttpParams().set('userId', userId).set('module', module.toString())
    }).toPromise();

  }

  async gerenateLevel(levelModule): Promise<ExerciseModule> {

    const token = await this.setToken();
    return this.http.post<ExerciseModule>(`${environment.urlApi}/GameLevel/GerenateLevel`, {
      gameLevelType: levelModule
    },
      {
        headers: {
          Authorization: 'Bearer ' + token
        }
      }).toPromise();
  }

  async updateUserProgress(progress: number, module: number): Promise<object> {
    const token = await this.setToken();
    const id = await this.setUserId();

    return this.http.post(`${environment.urlApi}/User/UpdateUserProgress`, {
      id,
      progress,
      module
    },
      {
        headers: {
          Authorization: 'Bearer ' + token
        }
      }).toPromise();
  }

  async createASyncXRay(action, gameLevelType) {

    const token = await this.setToken();
    const userId = await this.setUserId();

    return this.http.post(`${environment.urlApi}/GameLevel/CreateAsyncXRay`, {
      userId,
      action,
      gameLevelType
    },
    {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).toPromise();
  }
}
