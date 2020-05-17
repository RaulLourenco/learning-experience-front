import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular'
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  public userForm: FormGroup;
  public buttonText: string;

  public name: string;
  public email: string;
  public password: string;
  public repeatPassword: string;

  constructor(private alertController: AlertController,
    private loadingController: LoadingController,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.initializeForm();
  }

  public async onSignup(name, email, password, repeatPassword) {
    this.name = name;
    this.email = email;
    this.password = password; 
    this.repeatPassword = repeatPassword;

    if (name == '123' && password == '123') {
      this.router.navigateByUrl('/onboarding');
    } else {
      return 'loucura bicho';
    }
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
      message: message
    });
    return await alertPresent.present();
  }

  public backToIndex(){
    this.router.navigateByUrl('/index-login');
  }

  initializeForm() {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      user: ['', Validators.required],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required]
    });
  }

}
