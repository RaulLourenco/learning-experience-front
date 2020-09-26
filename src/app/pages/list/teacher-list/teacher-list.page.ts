import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Advisor } from 'src/app/model/advisor';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from 'src/app/core/services/api.service';

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
    specialization: '',
    comment: ''
  };

  constructor(
    private router: Router,
    private apiService: ApiService,
    private alertController: AlertController,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.apiService.getAllAdvisor();
  }

  closeTeacherList() {
    this.router.navigateByUrl('home/profile');
  }

  updateTeacher(advisor) {
    this.router.navigate(['/revise-teacher', advisor.id]);

  }

  public async getAdvisors() {

    await this.apiService.getAllAdvisor().toPromise();
    //   .subscribe(res => {
    //   console.log('este eh o res: ', res);
    //   this.advisorList.push(res);
    //   this.advisorList = this.advisorList[0];
    //   this.advisorList.forEach(element => {
    //     this.advisor.name = element.name;
    //     this.advisor.profession = element.profession;
    //     this.advisor.education = element.education;
    //     this.advisor.specialization = element.specialization;
    //   });
    // });
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Aguarde....'
    });
    return await loading.present();
  }

  async dismissLoading() {
    return await this.loadingController.dismiss();
  }

  async presentAlert(message: string) {
    const alertPresent = await this.alertController.create({
      message
    });
    return await alertPresent.present();
  }

  public async checkToken() {
    await this.apiService.getToken();
  }

  signupTeacher() {
    this.router.navigateByUrl('/signup-teacher');
  }
}
