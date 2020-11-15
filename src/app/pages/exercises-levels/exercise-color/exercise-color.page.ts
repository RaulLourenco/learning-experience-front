import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Exercises } from 'src/app/core/models/exercises';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/core/services/api.service';
import { ApiLevelService } from 'src/app/core/services/api-level.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-exercise-color',
  templateUrl: './exercise-color.page.html',
  styleUrls: ['./exercise-color.page.scss'],
})
export class ExerciseColorPage implements OnInit {

  public levelColor: Exercises[] = [
    { object: '', image: '', match: false },
    { object: '', image: '', match: false },
    { object: '', image: '', match: false },
    { object: '', image: '', match: false },
    { object: '', image: '', match: false },
    { object: '', image: '', match: false },
  ];

  public progress = 0.0;
  public token: string;
  public userId: string;

  constructor(private router: Router,
              private zone: NgZone,
              private alertController: AlertController,
              private http: HttpClient,
              private apiService: ApiService,
              private apiLevelService: ApiLevelService,
              private storage: Storage) { }

  ngOnInit() {
    this.getLevelContent();
    this.GetProgressByModule();
  }

  ionViewWillLeave() {
    this.zone.run(() => this.router.navigate(['/home/exercises-levels']));
  }

  ionViewWillEnter() {
    if (this.progress === 1) {
      return this.progress = 0;
    }
  }

  public verifyAnswer = (i: number) => {
    if (this.levelColor[i].match === true) {
      this.progress += 0.1;
      this.progress = Math.round(this.progress * 100) / 100;
      if (this.progress === 0.5 || this.progress === 1) {
        this.updateProgress();
      }
      if (this.progress === 1) {
        this.zone.run(() => this.router.navigate(['/home/exercises-levels']));
        this.presentAlert('Você terminou esse módulo!');
      }

      this.getLevelContent();
    } else {
      this.presentAlert('Ops! Tente novamente!');
    }
  }

  public closeExercise() {
    this.zone.run(() => this.router.navigate(['/home/exercises-levels']));
  }

  async presentAlert(message: string) {
    const alertPresent = await this.alertController.create({
      message
    });
    return await alertPresent.present();
  }

  public async getLevelContent() {

    const levelModule = await this.getLevelModule();

    const exercises = await this.apiLevelService.gerenateLevel(levelModule);

    this.levelColor.forEach((item, index) => {
      item.object = exercises.comparable[index].name;
      item.image = exercises.comparable[index].path;
      item.match = exercises.comparable[index].match;
    });
  }

  public async GetProgressByModule() {

    const levelModule = await this.getLevelModule();
    const result = await this.apiLevelService.GetProgressByModule(levelModule);
    return this.progress = result;
  }

  public async updateProgress() {
    const levelModule = await this.getLevelModule();
    await this.apiLevelService.updateUserProgress(this.progress, levelModule);
    console.log('ATUALIZADO COM SUCESSO');
  }

  async getLevelModule() {
    return await this.storage.get('LEVEL_MODULE');
  }

  public async getUserId() {
    await this.apiService.setUserId().then(res => {
      this.userId = res;
    });
    return this.userId;
  }

}