import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular'
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';
import { User } from '../../../auth/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public user: User;
  public userForm: FormGroup;
  public buttonText: string;

  constructor(private alertController: AlertController,
              private loadingController: LoadingController, 
              private formBuilder: FormBuilder, 
              private router: Router,
              private authService: AuthService) {
    this.buttonText = 'Voltar';
  }

  ngOnInit() {
    this.initializeForm();
  }

  private async onSign(email, password) {
    const user: User = {
      email: email,
      password: password
    };
    const userObject = {user};
    
    this.authService.login(userObject.user).subscribe( (res) => {
      console.log(res);
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
      message: message
    });
    return await alertPresent.present();
  }

  public backToIndex() {
    this.router.navigateByUrl('/index-login');
  }

  initializeForm() {
    this.userForm = this.formBuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
}
