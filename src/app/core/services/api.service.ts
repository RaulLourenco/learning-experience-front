import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { Advisor } from 'src/app/core/models/advisor';
import { User } from 'src/app/core/models/user';
import { Storage } from '@ionic/storage';
import { Patient } from '../models/patient';


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

  getAllAdvisor(): Observable<Advisor> {
    return this.http.get<Advisor>(`${environment.urlApi}/Advisor/GetAll`);
  }

  registerAdvisor(advisor: Advisor) {
    const params = {
      advisor
    }
    return this.http.post(`${environment.urlApi}/Advisor/RegisterAdvisor`, params, this.httpOptions);
  }

  removeAdvisor(): Observable<Advisor> {
    return this.http.get<Advisor>(`${environment.urlApi}/Advisor/RemoveAdvisor`)
  }

  updateAdvisor(advisor: Advisor) {
    const params = {
      advisor
    }
    return this.http.post(`${environment.urlApi}/Advisor/UpdateAdvisor`, params, this.httpOptions);
  }

  getAdvisorById(): Observable<Advisor> {
    return this.http.get<Advisor>(`${environment.urlApi}/Advisor/GetAdvisorById`)
  }

  getAllPatient(): Observable<Patient> {
    return this.http.get<Patient>(`${environment.urlApi}/Patient/GetAll`)
  }

  removePatient(): Observable<Patient> {
    return this.http.get<Patient>(`${environment.urlApi}/Patient/RemovePatient`)
  }

  updatePatient(patient: Patient) {
    const params = {
      patient
    }
    return this.http.post(`${environment.urlApi}/Patient/UpdatePatient`, params, this.httpOptions)
  }

    getPatientById(): Observable<Patient> {
      var userId;
        this.getUserId().then(res => {
        userId = res;
      })
    return this.http.get<Patient>(`${environment.urlApi}/Patient/GetPatientById`, {
      headers: {
        Authorization: 'Bearer ' + this.getToken()
      },
      params: new HttpParams().set('patientId',  userId)
    });
  }

  registerUser(user: User) {
    const params = {
      user
    }
    return this.http.post(`${environment.urlApi}/Patient/RegisterUser`, params, this.httpOptions)
  }

  getAllUsers(): Observable<User> {
    return this.http.get<User>(`${environment.urlApi}/Patient/GetAll`)
  }

  removeUser(): Observable<User> {
    return this.http.get<User>(`${environment.urlApi}/Patient/RemoveUser`)
  }

  updateUser(user: User) {
    const params = {
      user
    }
    return this.http.post(`${environment.urlApi}/Patient/UpdateUser`, params, this.httpOptions)
  }

  getProgressByUser(): Observable<User> {
    return this.http.get<User>(`${environment.urlApi}/Patient/GetProgressByUser`)
  }

  registerPatient(patient: Patient) {
    const params = {
      patient
    }
    return this.http.post(`${environment.urlApi}/Patient/RegisterPatient`, params, this.httpOptions)
  }

  async getToken() {
    let token = await this.storage.get('ACCESS_TOKEN').catch(e => {
      return e;
    });
    return token;
  }

   async getUserId() {
    let userId = await this.storage.get('USER_ID').catch(e => {
      return e;
    });
    return userId;
  }

}