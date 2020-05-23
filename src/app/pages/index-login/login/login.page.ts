import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular'
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';
import { User } from '../../../auth/user';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public user: User;
  public userForm: FormGroup;

  constructor(
    private alertController: AlertController,
    private loadingController: LoadingController,
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private http: HttpClient) { }

  ngOnInit() {
    this.initializeForm();
  }

  private async onSign(email, password) {
    const user: User = {
      email,
      password
    };

    this.authService.login(user).subscribe((res) => {
      console.log('token: ', res.token);
      console.log('expire in: ', res.tokenExpiresIn);

      const getAll = this.http.get('https://learningexperieceapi.azurewebsites.net/api/v1/Advisor/GetAll', {
        headers: {
          Authorization: 'Bearer ' + res.token
        }
      }).subscribe(res => {
        console.log('ESTE EH O GETALL: ', res);
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
