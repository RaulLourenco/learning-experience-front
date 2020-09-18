import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Advisor } from 'src/app/model/advisor';
import { Patient } from 'src/app/model/patient';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  protected httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })
  };

  constructor(protected http: HttpClient) { }

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

  public async getToken() {
    await this.authService.getToken().then(res => {
      this.token = res;
    });
    return this.token;
  }

}