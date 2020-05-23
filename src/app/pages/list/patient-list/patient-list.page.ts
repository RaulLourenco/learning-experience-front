import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.page.html',
  styleUrls: ['./patient-list.page.scss'],
})
export class PatientListPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  closePatientList() {
    this.router.navigateByUrl('home/tabs/tab3');
  }

  updatePatient() {
    return console.log('ATUALIZANDO O PACIENTE');
  }

}
