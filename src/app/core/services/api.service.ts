import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { Advisor } from 'src/app/model/advisor';
import { Patient } from 'src/app/model/patient';
import { User } from 'src/app/model/user';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

    authSubject = new BehaviorSubject(false);

  protected httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })
  };

  constructor(
    protected http: HttpClient,
    protected storage: Storage
    ) { }

  GetAllAdvisor(): Observable<Advisor>{
    return this.http.get<Advisor>(`${environment.urlApi}/Advisor/GetAll`)
  }
  
  RemoveAdvisor(): Observable<Advisor>{
    return this.http.get<Advisor>(`${environment.urlApi}/Advisor/RemoveAdvisor`)
  }

  UpdateAdvisor(): Observable<Advisor>{
    return this.http.get<Advisor>(`${environment.urlApi}/Advisor/UpdateAdvisor`)
  }

  GetAdvisorById(): Observable<Advisor>{
    return this.http.get<Advisor>(`${environment.urlApi}/Advisor/GetAdvisorById`)
  }

  RegisterPatient(): Observable<Patient>{
    return this.http.get<Patient>(`${environment.urlApi}/Patient/GetAll`)
  }

  RemovePatient(): Observable<Patient>{
    return this.http.get<Patient>(`${environment.urlApi}/Patient/RemovePatient`)
  }

  UpdatePatient(): Observable<Patient>{
    return this.http.get<Patient>(`${environment.urlApi}/Patient/UpdatePatient`)
  }

  GetPatientById(): Observable<User>{
    return this.http.get<User>(`${environment.urlApi}/Patient/GetPatientById`)
  }

  RegisterUser(): Observable<User>{
    return this.http.get<User>(`${environment.urlApi}/Patient/RegisterUser`)
  }

  GetAllUsers(): Observable<User>{
    return this.http.get<User>(`${environment.urlApi}/Patient/GetAll`)
  }

  RemoveUser(): Observable<User>{
    return this.http.get<User>(`${environment.urlApi}/Patient/RemoveUser`)
  }

  UpdateUser(): Observable<User>{
    return this.http.get<User>(`${environment.urlApi}/Patient/UpdateUser`)
  }

  GetUserProgress(): Observable<User>{
    return this.http.get<User>(`${environment.urlApi}/Patient/GetUserProgress`)
  }

  UpdateUserProgress(): Observable<User>{
    return this.http.get<User>(`${environment.urlApi}/Patient/UpdateUserProgress`)
  }

  GetProgressByUser(): Observable<User>{
    return this.http.get<User>(`${environment.urlApi}/Patient/GetProgressByUser`)
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