import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Exercises } from 'src/app/core/models/exercises';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/core/services/api.service';
import { ApiLevelService } from 'src/app/core/services/api-level.service';
import { AudioService } from 'src/app/core/services/audio.service';
import { Storage } from '@ionic/storage';
import { MediaService } from 'src/app/core/services/media.service';
@Component({
  selector: 'app-exercise-one',
  templateUrl: './exercise-one.page.html',
  styleUrls: ['./exercise-one.page.scss'],
})


export class ExerciseOnePage implements OnInit {

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

  public audio = {
    name: '',
    path: ''
  };

  constructor(
    private router: Router,
    private zone: NgZone,
    private alertController: AlertController,
    private http: HttpClient,
    private apiService: ApiService,
    private apiLevelService: ApiLevelService,
    private audioService: AudioService,
    private mediaService: MediaService,
    private storage: Storage
  ) { }

  ngOnInit() {
    this.getLevelContent();
    this.GetProgressByModule();
  }

  ionViewWillLeave() {
    this.zone.run(() => this.router.navigate(['/home/exercises-levels']));
  }

  ionViewWillEnter() {
    this.audioService.start('entre_4_clique_igual', true);
    if (this.progress === 1) {
      return this.progress = 0;
    }
  }

  public verifyAnswer = async (i: number) => {
    const levelModule = await this.getLevelModule();
    if (this.levelOne[i].match === true) {
      this.progress += 0.1;
      await this.apiLevelService.createASyncXRay(1, levelModule);
      this.progress = Math.round(this.progress * 100) / 100;
      if( (this.progress * 10) % 2 === 0) {
        this.audioService.start('voce_acertou_parabens', false);
      } else {
        (levelModule === 1 || levelModule === 2)
              ? this.audioService.start('clique_no_igual', false)
              : this.audioService.start('clique_no_parecido', false);
      }
      if (this.progress === 0.5 || this.progress === 1) {
        if(this.progress === 0.5) {
          this.audioService.start('eba_completou_50', false);
          this.mediaService.playVideo('https://www.youtube.com/watch?v=IdlGgwKdwHY');
        }
        if(this.progress === 1) {
          this.audioService.start('ae_completou_modulo', false);
        }
        await this.apiLevelService.createASyncXRay(2, levelModule);
        this.updateProgress();
      }
      if (this.progress === 1) {
        this.zone.run(() => this.router.navigate(['/home/exercises-levels']));
        this.presentAlert('Você terminou esse módulo!');
      }

      this.getLevelContent();
    } else {
      await this.apiLevelService.createASyncXRay(0, levelModule);
      this.presentAlert('Ops! Tente novamente!');
      this.audioService.start('ops_tente_novamente', false);
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

    this.levelOneMainImage = {
      imagePath: exercises.mainImage.path,
      name: exercises.mainImage.name
    };

    this.levelOne.forEach((item, index) => {
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
    await this.apiService.getUserId().then(res => {
      this.userId = res;
    });
    return this.userId;
  }
}
