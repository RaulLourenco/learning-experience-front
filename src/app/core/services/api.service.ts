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
    const token = await this.setToken();
    return this.http.get<Advisor>(`${environment.urlApi}/Advisor/GetAll`, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).toPromise();
  }

  async registerAdvisor(advisor: Advisor) {
    const token = await this.setToken();
    return this.http.post(`${environment.urlApi}/Advisor/RegisterAdvisor`, advisor, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).toPromise();
  }

  // removeAdvisor(): Observable<Advisor> {
  //   return this.http.get<Advisor>(`${environment.urlApi}/Advisor/RemoveAdvisor`);
  // }

  async updateAdvisor(advisor: Advisor) {
    const token = await this.setToken();
    return this.http.post(`${environment.urlApi}/Advisor/UpdateAdvisor`, advisor, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).toPromise();
  }

  async getAdvisorById(advisorId): Promise<Advisor> {
    const token = await this.setToken();
    return this.http.get<Advisor>(`${environment.urlApi}/Advisor/GetAdvisorById`, {
      headers: {
        Authorization: 'Bearer ' + token
      },
      params: new HttpParams().set('advisorId', advisorId)
    }).toPromise();
  }

  async getAllPatient(): Promise<Patient> {
    const token = await this.setToken();
    return this.http.get<Patient>(`${environment.urlApi}/Patient/GetAll`, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).toPromise();
  }

  // removePatient(): Observable<Patient> {
  //   return this.http.get<Patient>(`${environment.urlApi}/Patient/RemovePatient`);
  // }

   async updatePatient(patient: Patient) {
    const token = await this.setToken();
    return this.http.post(`${environment.urlApi}/Patient/UpdatePatient`, patient, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).toPromise();
  }

  async getPatientById(patientId): Promise<Patient> {
    const token = await this.setToken();
    return this.http.get<Patient>(`${environment.urlApi}/Patient/GetPatientById`, {
      headers: {
        Authorization: 'Bearer ' + token
      },
      params: new HttpParams().set('patientId', patientId)
    }).toPromise();
  }

   async getProgressByUser(): Promise<UserProgress> {
    const token = await this.setToken();
    const userId = await this.setUserId();
    return this.http.get<UserProgress>(`${environment.urlApi}/User/GetProgressByUser`, {
      params: new HttpParams().set('userId', userId),
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).toPromise();
  }

  async registerPatient(patient: Patient) {
    const token = await this.setToken();
    return this.http.post(`${environment.urlApi}/Patient/RegisterPatient`, patient, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).toPromise();
  }

  async getReportByModule() : Promise<any> {
    const token = await this.setToken();
    const userId = await this.setUserId();
    return this.http.get(`${environment.urlApi}/Report/GetReportProgressByModule`, {
      params: new HttpParams().set('userId', userId),
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).toPromise();
  }

  async getReportByMonth() : Promise<any> {
    const token = await this.setToken();
    const userId = await this.setUserId();
    return this.http.get(`${environment.urlApi}/Report/GetReportProgressByMonth`, {
      params: new HttpParams().set('userId', userId),
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).toPromise();
  }
  
  async getReportByMatches() : Promise<any> {
    const token = await this.setToken();
    const userId = await this.setUserId();
    return this.http.get(`${environment.urlApi}/Report/GetReportProgressByMatches`, {
      params: new HttpParams().set('userId', userId),
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).toPromise();
  }

  async setToken() {
    const token = await this.storage.get('ACCESS_TOKEN').catch(e => {
      return e;
    });
    return token;
  }

  async setUserId() {
    const userId = await this.storage.get('USER_ID').catch(e => {
      return e;
    });
    return userId;
  }

  async setUserName() {
    const userName = await this.storage.get('USER_NAME').catch(e => {
      return e;
    });
    return userName;
  }

  async updateUser(user: User) {
    const token = await this.setToken();
    return this.http.post(`${environment.urlApi}/User/UpdateUser`, user, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).toPromise();
  }

  async getUserById(): Promise<User> {
    const token = await this.setToken();
    const id = await this.setUserId();
    return this.http.get<User>(`${environment.urlApi}/User/GetUserById?id=${id}`, {
      headers: {
        Authorization: 'Bearer ' + token
      },
    }).toPromise();
  }

}
