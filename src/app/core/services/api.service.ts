import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { Advisor } from 'src/app/core/models/advisor';
import { User } from 'src/app/core/models/user';
import { Storage } from '@ionic/storage';
import { Patient } from '../models/patient';
import { UserProgress } from '../models/user-progress';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  authSubject = new BehaviorSubject(false);

  constructor(
    protected http: HttpClient,
    protected storage: Storage
  ) {}

  async getAllAdvisor(): Promise<Advisor> {
    const token = await this.getToken();
    return this.http.get<Advisor>(`${environment.urlApi}/Advisor/GetAll`, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).toPromise();
  }

  registerAdvisor(advisor: Advisor) {
    const params = {
      advisor
    };
    // return this.http.post(`${environment.urlApi}/Advisor/RegisterAdvisor`, params, this.httpOptions);
  }

  removeAdvisor(): Observable<Advisor> {
    return this.http.get<Advisor>(`${environment.urlApi}/Advisor/RemoveAdvisor`);
  }

  updateAdvisor(advisor: Advisor) {
    const params = {
      advisor
    }
    // return this.http.post(`${environment.urlApi}/Advisor/UpdateAdvisor`, params, this.httpOptions);
  }

  getAdvisorById(): Observable<Advisor> {
    return this.http.get<Advisor>(`${environment.urlApi}/Advisor/GetAdvisorById`);
  }

  async getAllPatient(): Promise<Patient> {
    const token = await this.getToken();
    return this.http.get<Patient>(`${environment.urlApi}/Patient/GetAll`, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).toPromise();
  }

  removePatient(): Observable<Patient> {
    return this.http.get<Patient>(`${environment.urlApi}/Patient/RemovePatient`);
  }

  updatePatient(patient: Patient) {
    const params = {
      patient
    };
    // return this.http.post(`${environment.urlApi}/Patient/UpdatePatient`, params, this.httpOptions)
  }

  getPatientById(): Observable<Patient> {
    let userId;
    this.getUserId().then(res => {
      userId = res;
    });
    return this.http.get<Patient>(`${environment.urlApi}/Patient/GetPatientById`, {
      headers: {
        Authorization: 'Bearer ' + this.getToken()
      },
      params: new HttpParams().set('patientId', userId)
    });
  }

  registerUser(user: User) {
    const params = {
      user
    };
    // return this.http.post(`${environment.urlApi}/Patient/RegisterUser`, params, this.httpOptions);
  }

  removeUser(): Observable<User> {
    return this.http.get<User>(`${environment.urlApi}/Patient/RemoveUser`);
  }

  updateUser(user: User) {
    const params = {
      user
    };
    // return this.http.post(`${environment.urlApi}/Patient/UpdateUser`, params, this.httpOptions);
  }

   async getProgressByUser(): Promise<UserProgress> {
    const token = await this.getToken();
    const userId = await this.getUserId();
    return this.http.get<UserProgress>(`${environment.urlApi}/User/GetProgressByUser`, {
      params: new HttpParams().set('userId', userId),
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).toPromise();
  }

  async registerPatient(patient: Patient) {
    const token = await this.getToken();
    return this.http.post(`${environment.urlApi}/Patient/RegisterPatient`, patient, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).toPromise();
  }

  async getToken() {
    const token = await this.storage.get('ACCESS_TOKEN').catch(e => {
      return e;
    });
    return token;
  }

  async getUserId() {
    const userId = await this.storage.get('USER_ID').catch(e => {
      return e;
    });
    return userId;
  }

}
