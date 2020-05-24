import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { urls } from '../../../util/urlConfig';
import { AuthService } from '../../../auth/auth.service';
import { Advisor } from 'src/app/interface/advisor';
@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.page.html',
  styleUrls: ['./teacher-list.page.scss'],
})
export class TeacherListPage implements OnInit {

  public token: string;
  public advisorList = [];
  public advisor: Advisor = {
    name: '',
    profession: '',
    education: '',
    specialization: ''
  };
  public addHtml;

  constructor(private router: Router, private http: HttpClient, private authService: AuthService, private elementRef: ElementRef) { }

  ngOnInit() {
    this.getAllAdvisor();
  }

  closeTeacherList() {
    this.router.navigateByUrl('home/tabs/tab3');
  }

  updateTeacher() {
    return console.log('ATUALIZANDO O ORIENTADOR');
  }

  // async getTokenResolved() {
  //   await this.authService.getToken().then(res => {
  //     this.token = res;
  //   }).catch(e => {
  //     console.log(e);
  //   });
  //   return this.token;
  // }

  public async getAllAdvisor() {
    let token;
    await this.authService.getToken().then(res => {
      token = res;
    });
    await this.http.get(urls.URL_GETALLADVISOR, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).subscribe(res => {
      console.log(res);
      this.advisorList.push(res);
      this.advisorList = this.advisorList[0];
      // this.arrayVerify(this.advisorList);
      this.advisorList.forEach(element => {
        this.advisor.name = element.name;
        this.advisor.profession = element.profession;
        this.advisor.education = element.education;
        this.advisor.specialization = element.specialization;
      });
    });
  }

  // arrayVerify(array) {
  //   if (array.length === 0) {
  //     console.log('ESTE CARA ESTA RETORNANDO NULL');
  //   }
  // }

  // changeTemplate(type) {

  // }
}
