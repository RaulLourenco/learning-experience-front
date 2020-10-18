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

  async registerAdvisor(advisor: Advisor) {
    const token = await this.getToken();
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
    const token = await this.getToken();
    return this.http.post(`${environment.urlApi}/Advisor/UpdateAdvisor`, advisor, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).toPromise();
  }

  async getAdvisorById(advisorId): Promise<Advisor> {
    const token = await this.getToken();
    return this.http.get<Advisor>(`${environment.urlApi}/Advisor/GetAdvisorById`, {
      headers: {
        Authorization: 'Bearer ' + token
      },
      params: new HttpParams().set('advisorId', advisorId)
    }).toPromise();
  }

  async getAllPatient(): Promise<Patient> {
    const token = await this.getToken();
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
    const token = await this.getToken();
    return this.http.post(`${environment.urlApi}/Patient/UpdatePatient`, patient, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).toPromise();
  }

  async getPatientById(patientId): Promise<Patient> {
    const token = await this.getToken();
    return this.http.get<Patient>(`${environment.urlApi}/Patient/GetPatientById`, {
      headers: {
        Authorization: 'Bearer ' + token
      },
      params: new HttpParams().set('patientId', patientId)
    }).toPromise();
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

  async getReportByModule() {
    const token = await this.getToken();
    const userId = await this.getUserId();
    return this.http.get(`${environment.urlApi}/Report/GetReportProgressByModule`, {
      params: new HttpParams().set('userId', userId),
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).toPromise();
  }

  async getReportByMonth() {
    const token = await this.getToken();
    const userId = await this.getUserId();
    return this.http.get(`${environment.urlApi}/Report/GetReportProgressByModule`, {
      params: new HttpParams().set('userId', userId),
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).toPromise();
  }

  async getReportByMatches() {
    const token = await this.getToken();
    const userId = await this.getUserId();
    return this.http.get(`${environment.urlApi}/Report/GetReportProgressByModule`, {
      params: new HttpParams().set('userId', userId),
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

  async GetUserName() {
    const userName = await this.storage.get('USER_NAME').catch(e => {
      return e;
    });
    return userName;
  }

}
