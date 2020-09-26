import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { Advisor } from '../../../model/advisor';
import { HttpClient } from '@angular/common/http';
import { SignupResponse } from 'src/app/model/signup-response';
import { ApiService } from 'src/app/core/services/api.service';
import { ApiAuthService } from 'src/app/core/services/api-auth.service';
@Component({
  selector: 'app-signup-teacher',
  templateUrl: './signup-teacher.page.html',
  styleUrls: ['./signup-teacher.page.scss'],
})
export class SignupTeacherPage implements OnInit {

  public advisorForm: FormGroup;
  public token: string;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private apiService: ApiService
    ) { }

  ngOnInit() {
    this.initializeForm();
  }

  private async onSignup(name, profession, education, specialization, comment) {
    this.presentLoading();
    const advisor: Advisor = {
      name,
      profession,
      education,
      specialization,
      comment
    };
    this.advisorForm.reset();

    this.apiService.registerAdvisor(advisor)
    .subscribe( (res: SignupResponse) => {
      console.log('res: ', res);
      if (res.statusCode == 200) {
        this.dismissLoading();
        this.presentAlert('Cadastrado com sucesso!');
        this.router.navigate(['home/profile']);
      } else {
        this.dismissLoading();
        this.presentAlert('Erro ao cadastrar. Tente novamente!');
      }
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

  closeTeacherSignup() {
    this.router.navigateByUrl('home/profile');
  }

  public async getToken() {
    await this.apiService.getToken().then(res => {
      this.token = res;
    });
    return this.token;
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
