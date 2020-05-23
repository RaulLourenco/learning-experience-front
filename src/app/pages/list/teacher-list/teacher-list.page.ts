import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.page.html',
  styleUrls: ['./teacher-list.page.scss'],
})
export class TeacherListPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  closeTeacherList() {
    this.router.navigateByUrl('home/tabs/tab3');
  }

  updateTeacher() {
    return console.log('ATUALIZANDO O ORIENTADOR');
  }
}
