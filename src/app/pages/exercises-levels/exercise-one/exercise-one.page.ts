import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Exercises } from 'src/app/model/exercises';
import { AlertController } from '@ionic/angular';
import { HttpClient, HttpParams } from '@angular/common/http';
import { urls } from '../../../util/urlConfig';
import { AuthService } from 'src/app/auth/auth.service';
import { ExerciseModule } from '../../../model/exerciseModule';


@Component({
  selector: 'app-exercise-one',
  templateUrl: './exercise-one.page.html',
  styleUrls: ['./exercise-one.page.scss'],
})


export class ExerciseOnePage implements OnInit {

  constructor(
    private router: Router,
    private zone: NgZone,
    private alertController: AlertController,
    private http: HttpClient,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.getLevelContent();
    this.getProgress();
  }

  public levelOne: Exercises[] = [
    { object: '', image: '', match: false },
    { object: '', image: '', match: false },
    { object: '', image: '', match: false },
    { object: '', image: '', match: false },
  ];

  public levelOneMainImage = {
    name: '',
    imagePath: ''
  };

  public progress = 0.0;
  public token: string;
  public userId: string;

  public verifyAnswer = (i: number) => {
    if (this.levelOne[i].match === true) {
      this.progress += 0.1;
      this.progress = Math.round(this.progress * 100) / 100;
      if (this.progress === 0.5 || this.progress === 1) {
        this.updateProgress();
      }
      if(this.progress === 1) {
        this.presentAlert("Você terminou esse módulo!");
        this.closeExercise();
      }

      this.getLevelContent();
    } else {
      this.presentAlert("Ops! Tente novamente!");
    }
  }

  public closeExercise() {
    this.router.navigateByUrl('/home/exercises-levels');
  }

  async presentAlert(message: string) {
    const alertPresent = await this.alertController.create({
      message
    });
    return await alertPresent.present();
  }

  public async getLevelContent() {

    await this.http.post(urls.URL_GENERATELEVEL, {
      gameLevelType: 1
    },
      {
        headers: {
          Authorization: 'Bearer ' + await this.getToken()
        }
      }).subscribe((res: ExerciseModule) => {
        this.levelOneMainImage = {
          imagePath: res.mainImage.path,
          name: res.mainImage.name
        };

        this.levelOne.forEach((item, index) => {
          item.object = res.comparable[index].name;
          item.image = res.comparable[index].path;
          item.match = res.comparable[index].match;
        });
      });
  }

  public async getProgress() {

    await this.http.get(urls.URL_GETUSERPROGRESS,
      {
        headers: {
          Authorization: 'Bearer ' + await this.getToken()
        },
        params: new HttpParams().set('userId', await this.getUserId()).set('module', '1')
      }).subscribe((res) => {
        if(this.progress = 1) {
          this.progress = 0;
        }
        else {
        this.progress = Number(res);
      }
      });

      if(this.progress = 1) {
        this.progress = 0;
        console.log("vou te zerei", this.progress);
      }
  }

  public async updateProgress() {

    await this.http.post(urls.URL_UPDATEUSERPROGRESS, {
      id: await this.getUserId(),
      module: 1,
      progress: this.progress
    },
    {
      headers: {
        Authorization: 'Bearer ' + await this.getToken()
      },
    }).subscribe((res) => {
        console.log('ATUALIZADO COM SUCESSO', res);
    });
  }


  public async getToken() {
    await this.authService.getToken().then(res => {
      this.token = res;
    });
    return this.token;
  }

  public async getUserId() {
    await this.authService.getUserId().then(res => {
      this.userId = res;
    });
    return this.userId;
  }
}
