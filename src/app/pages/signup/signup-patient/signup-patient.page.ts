import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup-patient',
  templateUrl: './signup-patient.page.html',
  styleUrls: ['./signup-patient.page.scss'],
})
export class SignupPatientPage implements OnInit {

  public diseaseLevel = [
    { val: 'Leve', isChecked: true },
    { val: 'Moderado', isChecked: false },
    { val: 'Alto', isChecked: false }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  closePatientSignup() {
    this.router.navigateByUrl('home/tab3');
  }
}
