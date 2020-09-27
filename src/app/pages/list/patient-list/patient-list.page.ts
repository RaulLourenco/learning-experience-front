import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { Patient } from 'src/app/core/models/patient';

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
    this.getPatients();
  }

  closePatientList() {
    this.router.navigateByUrl('home/profile');
  }

  updatePatient(patient) {
    this.router.navigate(['/revise-patient', patient.id]);
  }

  async getPatients() {
    const patients = await this.apiService.getAllPatient();

    this.patientList.push(patients);
    this.patientList = this.patientList[0];

    this.patientList.forEach( item => {
      this.patient.name = item.name,
      this.patient.age = item.age,
      this.patient.diseaseLevel = item.diseaseLevel,
      this.patient.colorsIssue = item.colorIssue;
    });
  }

  signupPatient() {
    this.router.navigateByUrl('/signup-patient');
  }

  public async checkToken() {
    await this.apiService.getToken();
  }
}
