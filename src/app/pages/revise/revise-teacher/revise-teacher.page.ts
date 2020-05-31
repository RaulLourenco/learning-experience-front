import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../../../auth/auth.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { Advisor } from '../../../interface/advisor';
import { urls } from '../../../util/urlConfig';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ReviseResponse } from 'src/app/interface/revise-response';
import { VirtualTimeScheduler } from 'rxjs';
@Component({
  selector: 'app-revise-teacher',
  templateUrl: './revise-teacher.page.html',
  styleUrls: ['./revise-teacher.page.scss'],
})
export class ReviseTeacherPage implements OnInit {

  public advisorForm: FormGroup;
  public advisorId: string;
  public advisor: Advisor = {
    name: '',
    profession: '',
    education: '',
    specialization: '',
    comment: ''
  };

  constructor(private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private alertController: AlertController,
              private loadingController: LoadingController,
              private authService: AuthService,
              private http: HttpClient) { }

  ngOnInit() {
    this.initializeForm();
    this.getAdvisorById();
  }

  private async onChange(name, profession, education, specialization, comment) {
    this.presentLoading();
    const advisor: Advisor = {
      name,
      profession,
      education,
      specialization,
      comment
    };
    this.advisorForm.reset();
    let token;
    await this.authService.getToken().then(res => {
      token = res;
    });
    await this.http.post(urls.URL_SIGNUPADVISOR, advisor, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).subscribe((res: ReviseResponse) => {
      console.log('res: ', res);
      if (res.statusCode == 200) {
        this.dismissLoading();
        this.presentAlert('Cadastrado com sucesso!');
        this.router.navigate(['/teacher-list']);
      } else {
        this.dismissLoading();
        this.presentAlert('Erro ao cadastrar. Tente novamente!');
      }
    });
  }

  private async getAdvisorById() {
    let token;
    await this.route.params.subscribe(params => {
      this.advisorId = params.id;
    });
    await this.authService.getToken().then(res => {
      token = res;
    });
    await this.http.get(urls.URL_GETADVISORBYID, {
      headers: {
        Authorization: 'Bearer ' + token
      },
      params: new HttpParams().set('advisorId', this.advisorId)
    }).subscribe((res: Advisor) => {
      console.log('reviseResponse: ', res);
      this.advisor.name = res.name;
      this.advisor.profession = res.profession;
      this.advisor.education = res.education;
      this.advisor.specialization = res.specialization;
      this.advisor.comment = res.comment;
    });
    console.log('this.advisor', this.advisor);
    console.log('this.advisorId embaixo do get:', this.advisorId);
    return this.advisor;
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

  closeTeacherSignup() {
    this.router.navigate(['/teacher-list']);
  }

  initializeForm() {
    this.advisorForm = this.formBuilder.group({
      name: ['', Validators.required],
      profession: ['', Validators.required],
      education: ['', Validators.required],
      specialization: ['', Validators.required],
      comment: ['', Validators.required]
    });
  }
}
