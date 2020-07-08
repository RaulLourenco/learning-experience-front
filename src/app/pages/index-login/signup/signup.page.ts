import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';
import { SignupResponse } from 'src/app/model/signup-response';
import { UserSignup } from 'src/app/model/user-signup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  public userForm: FormGroup;
  public user: UserSignup = {
    name: '',
    email: '',
    password: '',
    repeatPassword: ''
  };

  constructor(private alertController: AlertController,
              private loadingController: LoadingController,
              private formBuilder: FormBuilder,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
    this.initializeForm();
  }

  private async onSignup(name, email, password, repeatPassword) {
    this.presentLoading();
    this.user = {
      name,
      email,
      password,
      repeatPassword
    };
    this.authService.register(this.user).subscribe( (res: SignupResponse) => {
      if (res.statusCode === 200) {
        this.dismissLoading();
        this.router.navigate(['/onboarding']);
        console.log('esta eh a resposta do registro: ', res);
      } else {
        this.dismissLoading();
        console.log('Erro!');
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

  async presentAlert(message) {
    const alertPresent = await this.alertController.create({
      message
    });
    return await alertPresent.present();
  }

  public backToIndex() {
    this.router.navigateByUrl('/index-login');
  }

  initializeForm() {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required]
    });
  }

}
