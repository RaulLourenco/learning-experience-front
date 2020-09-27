import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../../core/services/api.service';
@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss'],
})
export class ProfilesComponent implements OnInit {

  constructor(
    private router: Router,
    private apiService: ApiService
    ) { 
  }

  userName: string;

  ngOnInit() {
    this.getUserName();
    
  }

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

  async getUserName() {
    this.userName = await this.apiService.GetUserName();
    console.log(this.userName);
  }

}
