import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user';
import { ApiService } from '../../../../core/services/api.service';
@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss'],
})
export class ProfilesComponent implements OnInit {

  public user: User;

  constructor(
    private router: Router,
    private apiService: ApiService
    ) { 
  }

  userName: string;

  async ngOnInit() {
    this.user = await this.apiService.getUserById();
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

  moveToHardwareConfig(){
    this.router.navigateByUrl('bluetooth-config');
  }

  moveToEditUser = () => {
    this.router.navigateByUrl('/edit-user');
  }
}
