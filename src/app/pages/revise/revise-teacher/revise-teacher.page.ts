import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { Advisor } from '../../../model/advisor';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ReviseResponse } from 'src/app/model/revise-response';
import { ApiService } from 'src/app/core/services/api.service';
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
  public token: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.initializeForm();
    this.getAdvisorById();
  }


  private async onChange(name, profession, education, specialization, comment) {
    this.presentLoading();
    await this.route.params.subscribe(params => {
      this.advisorId = params.id;
    });
    const id = this.advisorId;
    const advisor: Advisor = {
      id,
      name,
      profession,
      education,
      specialization,
      comment
    };

    this.advisorForm.reset();

    await this.apiService.updateAdvisor(advisor)
      .subscribe((res: ReviseResponse) => {
      console.log('res do atualizar: ', res);
      if (res.statusCode == 200) {
        this.dismissLoading();
        this.presentAlert('Atualizado com sucesso!');
        this.router.navigateByUrl('/home/profile');
      } else {
        this.dismissLoading();
        this.presentAlert('Erro ao atualizar. Tente novamente!');
      }
    });
  }

  private async getAdvisorById() {
    await this.route.params.subscribe(params => {
      this.advisorId = params.id;
    });
    await this.apiService.getAdvisorById()
    .subscribe((res: Advisor) => {
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

  closeReviseTeacher() {
    this.router.navigateByUrl('/teacher-list');
  }

  public async checkToken() {
    await this.apiService.getToken();
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
