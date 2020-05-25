import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup-teacher',
  templateUrl: './signup-teacher.page.html',
  styleUrls: ['./signup-teacher.page.scss'],
})
export class SignupTeacherPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  closeTeacherSignup() {
    this.router.navigateByUrl('home/profile');
  }
}
