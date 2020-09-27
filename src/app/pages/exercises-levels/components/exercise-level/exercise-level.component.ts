import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Level } from 'src/app/core/models/levels';
import { AlertController } from '@ionic/angular';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-exercise-level',
  templateUrl: './exercise-level.component.html',
  styleUrls: ['./exercise-level.component.scss'],
})
export class ExerciseLevelComponent implements OnInit {

  public token: string;
  public userId: string;

  public modules: Level[] = [
    { name: 'Módulo 1', text: 'Estímulos idênticos 3D.', src: '/exercise-one', module: 1, progress: 0 },
    { name: 'Módulo 2', text: 'Estímulos idênticos 2D.', src: '', module: 2, progress: 0 },
    { name: 'Módulo 3', text: 'Estímulos semelhantes.', src: '', module: 3, progress: 0 },
    { name: 'Módulo 4', text: 'Estímulos associados.', src: '', module: 4, progress: 0 },
    { name: 'Módulo 5', text: '4 Estímulos idênticos 2D-3D.', src: '', module: 5, progress: 0 },
    { name: 'Módulo 6', text: '5 Estímulos idênticos 2D-3D.', src: '', module: 6, progress: 0 },
  ];

  constructor(
    private router: Router,
    private zone: NgZone,
    private http: HttpClient,
    private apiService: ApiService,
    private alertController: AlertController,
  ) { }

  ngOnInit() {
    this.updateCard();
  }

  public toExercisePage(page: string, progress: number) {
    if (progress === 1) {
      this.presentAlert('Ops! Você já terminou este módulo. Gostaria de recomeçar?', page);
    } else {
      this.zone.run(() => this.router.navigate([page]));
    }
  }

  async presentAlert(message: string, page: string) {
    const alertPresent = await this.alertController.create({
      message,
      header: 'Aviso',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel');
          }
        }, {
          text: 'Confirmar',
          handler: () => {
            console.log('Confirm Okay');
            this.zone.run(() => this.router.navigate([page]));
          }
        }
      ]
    });
    return await alertPresent.present();
  }

  public async updateCard() {
    const result = await this.apiService.getProgressByUser();
    this.modules.forEach((item, index) => {
      item.module = result[index].module;
      item.progress = result[index].progress;
    });
  }

  public async checkToken() {
    await this.apiService.getToken();
  }

  public async getUserId() {
    await this.apiService.getUserId().then(res => {
      console.log('userId', res);
      this.userId = res;
    });
    return this.userId;
  }

}
