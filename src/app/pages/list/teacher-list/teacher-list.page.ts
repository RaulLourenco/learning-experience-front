import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { urls } from '../../../util/urlConfig';
import { AuthService } from '../../../auth/auth.service';
import { Advisor } from 'src/app/model/advisor';
import { AlertController, LoadingController } from '@ionic/angular';

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

  constructor(private router: Router,
              private http: HttpClient,
              private authService: AuthService,
              private alertController: AlertController,
              private loadingController: LoadingController) { }

  ngOnInit() {
    this.getAllAdvisor();
  }

  closeTeacherList() {
    this.router.navigateByUrl('home/profile');
  }

  updateTeacher(advisor) {
    this.router.navigate(['/revise-teacher', advisor.id]);

  }

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
      console.log('este eh o res: ', res);
      this.advisorList.push(res);
      this.advisorList = this.advisorList[0];
      this.advisorList.forEach(element => {
        this.advisor.name = element.name;
        this.advisor.profession = element.profession;
        this.advisor.education = element.education;
        this.advisor.specialization = element.specialization;
      });
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

  signupTeacher() {
    this.router.navigateByUrl('/signup-teacher');
  }
}
