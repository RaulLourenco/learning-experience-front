import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from 'src/app/core/services/api.service';
import { User } from 'src/app/core/models/user';
import { ReviseResponse } from 'src/app/core/models/revise-response';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.page.html',
  styleUrls: ['./edit-user.page.scss'],
})
export class EditUserPage implements OnInit {

  public userEditForm: FormGroup;
  public token: string;
  public user: User;
  public name: string;
  public email: string;
  public id: string;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private apiService: ApiService
    ) { }

  async ngOnInit() {
    this.initializeForm();
    this.user = await this.apiService.getUserById();
    this.id = await this.apiService.setUserId();
  }

  
  private async onChange(name, email, password) {
    this.presentLoading();
    const id = this.id
    this.user = {
      id,
      name,
      email,
      password,
    };
    this.apiService.updateUser(this.user)
      .then((res: ReviseResponse) => {
        console.log('res do atualizar: ', res);
        if (res.statusCode === 200) {
          this.dismissLoading();
          this.presentAlert('Atualizado com sucesso!');
          this.router.navigate(['/home/profile']);
        } else {
          this.dismissLoading();
          this.presentAlert('Erro ao atualizar. Tente novamente!');
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
    await this.apiService.setToken().then(res => {
      this.token = res;
    });
    return this.token;
  }

  initializeForm() {
    this.userEditForm = this.formBuilder.group({
      name: [
        null, [
        Validators.required,
        Validators.minLength(5), 
        Validators.maxLength(50)
      ]],
      email: [
        null,[
        Validators.required,
        Validators.minLength(15), 
        Validators.maxLength(50)
      ]],
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
