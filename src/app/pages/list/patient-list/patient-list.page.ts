import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/auth/auth.service';
import { urls } from '../../../util/urlConfig';
import { Patient } from '../../../interface/patient';
import { DiseaseLevel } from '../../../enum/diseaseLevel';
@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.page.html',
  styleUrls: ['./patient-list.page.scss'],
})
export class PatientListPage implements OnInit {

  constructor(private router: Router, private http: HttpClient, private authService: AuthService) { }

  public token: string;
  public patientList = [];
  public patient: Patient = {
    name: '',
    age: 0,
    diseaseLevel: 0,
    colorIssue: false,
    observation: ''
  };

  ngOnInit() {
    this.getAllPatient();
  }

  closePatientList() {
    this.router.navigateByUrl('home/profile');
  }

  updatePatient(patient) {
    this.router.navigate(['/revise-patient', patient.id]);
  }

  public async getAllPatient() {
    let token;
    await this.authService.getToken().then(res => {
      token = res;
    });
    await this.http.get(urls.URL_GETALLPATIENT, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).subscribe(res => {
      console.log(res);
      this.patientList.push(res);
      this.patientList = this.patientList[0];
      this.patientList.forEach(element => {
        this.patient.name = element.name;
        this.patient.age = element.age;
        this.patient.diseaseLevel = element.diseaseLevel;
        this.patient.colorIssue = element.colorIssue;
      });
    });
  }

  signupPatient() {
    this.router.navigateByUrl('/signup-patient');
  }
}
