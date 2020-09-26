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

  public async getProgress() {
    return this.http.get(`${environment.urlApi}/Patient/GetProgress`,
      {
        headers: {
          Authorization: 'Bearer ' + await this.getToken()
        },
        params: new HttpParams().set('userId', await this.getUserId())
      });
  }

  async getUserProgress(module: string): Promise<number> {

    let userId = await this.getUserId();
    let token = await this.getToken();

    console.log("esse e o token!!!! " + token);
     return this.http.get<number>(`${environment.urlApi}/User/GetUserProgress`, {
       headers: {
         Authorization: 'Bearer ' + token
       },
       params: new HttpParams().set('userId', userId).set('module', module)
     }).toPromise();
     
   }

  async gerenateLevel(): Promise<ExerciseModule> {

    let token = await this.getToken();
    return this.http.post<ExerciseModule>(`${environment.urlApi}/GameLevel/GerenateLevel`, {
      gameLevelType: 1
    },
      {
        headers: {
          Authorization: 'Bearer ' + token
        }
      }).toPromise();
  }

  async updateUserProgress(progress: number, module: number): Promise<Object> {
    let token = await this.getToken();
    let id = await this.getUserId();
    let user = {
      
    }
    console.log(user);
    return this.http.post(`${environment.urlApi}/User/UpdateUserProgress`, { 
      id,
      progress,
      module
    },
    {
    headers: {
      Authorization: 'Bearer ' + token
    }}).toPromise()
  }

}