import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'; import { urls } from '../../../util/urlConfig';
import { Patient } from '../../../model/patient';
import { ApiService } from 'src/app/core/services/api.service';
@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.page.html',
  styleUrls: ['./patient-list.page.scss'],
})
export class PatientListPage implements OnInit {

  constructor(
    private router: Router,
    private apiService: ApiService
  ) { }

  public token: string;
  public patientList = [];
  public patient: Patient = {
    name: '',
    age: 0,
    diseaseLevel: 0,
    colorsIssue: false,
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

  getPatients = async () => {
    await this.apiService.getAllPatient().toPromise();
  }

  signupPatient() {
    this.router.navigateByUrl('/signup-patient');
  }

  public async checkToken() {
    await this.apiService.getToken();
  }
}
