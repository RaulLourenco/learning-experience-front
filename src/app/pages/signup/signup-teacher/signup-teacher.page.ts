import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../../../auth/auth.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { Advisor } from '../../../interface/advisor';
import { urls } from '../../../util/urlConfig';
import { HttpClient } from '@angular/common/http';
import { SignupResponse } from 'src/app/interface/signup-response';
@Component({
  selector: 'app-signup-teacher',
  templateUrl: './signup-teacher.page.html',
  styleUrls: ['./signup-teacher.page.scss'],
})
export class SignupTeacherPage implements OnInit {

  public advisorForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private authService: AuthService,
    private http: HttpClient) { }

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
    let token;
    await this.authService.getToken().then(res => {
      token = res;
    });
    await this.http.post(urls.URL_SIGNUPADVISOR, advisor, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).subscribe( (res: SignupResponse) => {
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
