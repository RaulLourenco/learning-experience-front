import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from 'src/app/core/services/api.service';
import { User } from 'src/app/core/models/user';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.page.html',
  styleUrls: ['./edit-user.page.scss'],
})
export class EditUserPage implements OnInit {

  public advisorForm: FormGroup;
  public token: string;
  userEditForm: any;

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
    this.userEditForm = this.formBuilder.group({
      name: [
        '', 
        Validators.required, 
        Validators.minLength(10), 
        Validators.maxLength(50)
      ],
      password: [
        '', 
        Validators.minLength(6)
      ],
      passwordConfirm: [
        '', 
        Validators.minLength(6)],
    });
  }
}
