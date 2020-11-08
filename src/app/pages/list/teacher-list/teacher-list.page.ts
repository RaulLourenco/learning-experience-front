import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Advisor } from 'src/app/core/models/advisor';
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

  public messageError: boolean = false;

  constructor(
    private router: Router,
    private apiService: ApiService,
    private alertController: AlertController,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.getAdvisors();
  }

  closeTeacherList() {
    this.router.navigateByUrl('home/profile');
  }

  updateTeacher(advisor) {
    this.router.navigate(['/revise-teacher', advisor.id]);
  }

  public async getAdvisors() {

    const advisors = await this.apiService.getAllAdvisor();

    this.advisorList.push(advisors);

    this.messageError = (this.advisorList.length > 0) ? false : true;

    this.advisorList = this.advisorList[0];

    this.advisorList.forEach( (item, index) => {
      this.advisor.name = item.name,
      this.advisor.profession = item.profession,
      this.advisor.education = item.education,
      this.advisor.specialization = item.specialization;
    });
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
