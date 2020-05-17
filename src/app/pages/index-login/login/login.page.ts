import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular'
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  public userForm: FormGroup;
  public buttonText: string;

  constructor(private alertController: AlertController,
    private loadingController: LoadingController,
    private formBuilder: FormBuilder,
    private router: Router) { 
      this.buttonText = 'Voltar'
    }

  ngOnInit() {
    this.initializeForm();
  }

  public async onSign(cpf, password) {
    if (password == '123') {
      this.router.navigateByUrl('home/tabs/tab1');
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
      user: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
}
