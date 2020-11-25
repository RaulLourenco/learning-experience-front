import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Exercises } from 'src/app/core/models/exercises';
import { AlertController, ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/core/services/api.service';
import { ApiLevelService } from 'src/app/core/services/api-level.service';
import { Storage } from '@ionic/storage';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { AudioService } from 'src/app/core/services/audio.service';
import { MediaService } from 'src/app/core/services/media.service';

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
  public dataSend: string;

  constructor(private router: Router,
              private zone: NgZone,
              private alertController: AlertController,
              private http: HttpClient,
              private apiService: ApiService,
              private apiLevelService: ApiLevelService,
              private storage: Storage,
              private bluetoothSerial: BluetoothSerial,
              private toastCtrl: ToastController,
              private audioService: AudioService,
              private mediaService: MediaService) { }

  ngOnInit() {
    this.getLevelContent();
    this.GetProgressByModule();
  }

  ionViewWillLeave() {
    this.zone.run(() => this.router.navigate(['/home/exercises-levels']));
  }

  ionViewWillEnter() {
    this.audioService.start('olhe_cor_brinquedo', true);
    if (this.progress === 1) {
      return this.progress = 0;
    }
  }

  public verifyAnswer = async (i: number) => {
    const levelModule = await this.getLevelModule();
    if (this.levelColor[i].match === true) {
      this.progress += 0.1;
      await this.apiLevelService.createASyncXRay(1, levelModule);
      this.progress = Math.round(this.progress * 100) / 100;
      if( (this.progress * 10) % 2 === 0) {
        this.audioService.start('voce_acertou_parabens', false);
      } else {
        this.audioService.start('clique_no_igual', false)
      }
      if (this.progress === 0.5 || this.progress === 1) {
        if(this.progress === 0.5) {
          this.audioService.start('eba_completou_50', false);
          this.mediaService.playVideo();
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

    const colors = await this.apiLevelService.gerenateLevel(levelModule);

    this.dataSend = colors.mainImage.externalId;
    this.sendData();

    this.levelColor.forEach((item, index) => {
      item.object = colors.comparable[index].name;
      item.image = colors.comparable[index].path;
      item.match = colors.comparable[index].match;
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

  sendData() {
    this.dataSend += '\n';
    this.showToast(this.dataSend);

    this.bluetoothSerial.write(this.dataSend).then(success => {
      this.showToast(success);
    }, error => {
      this.showError();
    })
  }

  async showToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 1000
    });
    return await toast.present();
  }

  async showError() {
    const alert = await this.alertController.create({
      header: 'Erro',
      subHeader: 'Erro ao enviar a cor para o protótipo',
      buttons: ['Ok']
    });
    return await alert.present();
  }

}
