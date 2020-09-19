import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Exercises } from 'src/app/model/exercises';
import { AlertController } from '@ionic/angular';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ExerciseModule } from '../../../model/exerciseModule';
import { ApiService } from 'src/app/core/services/api.service';


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
    private apiService: ApiService
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
          Authorization: 'Bearer ' + await this.checkToken()
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

    await this.apiService.getUserProgress().toPromise()
    // .subscribe((res) => {
    //     this.progress = Number(res);
    //   });
  }

  public async updateProgress() {

    await this.apiService.updateUserProgress(this.userId)
    .subscribe((res) => {
        console.log('ATUALIZADO COM SUCESSO', res);
    });
  }


  public async checkToken() {
    await this.apiService.getToken();
  }

  public async getUserId() {
    await this.apiService.getUserId().then(res => {
      this.userId = res;
    });
    return this.userId;
  }
}
