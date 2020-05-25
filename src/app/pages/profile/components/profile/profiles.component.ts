import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss'],
})
export class ProfilesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  moveToTeacherList() {
    this.router.navigateByUrl('/teacher-list');
  }

  moveToPatientList() {
    this.router.navigateByUrl('/patient-list');
  }

  moveToSignupPatient() {
    this.router.navigateByUrl('/signup-patient');
  }

  moveToSignupTeacher() {
    this.router.navigateByUrl('/signup-teacher');
  }

}
