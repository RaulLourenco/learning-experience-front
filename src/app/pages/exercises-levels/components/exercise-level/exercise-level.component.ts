import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Level } from 'src/app/model/levels';
import { AlertController } from '@ionic/angular';
import { ApiService } from 'src/app/core/services/api.service';
@Component({
  selector: 'app-exercise-level',
  templateUrl: './exercise-level.component.html',
  styleUrls: ['./exercise-level.component.scss'],
})
export class ExerciseLevelComponent implements OnInit {

  constructor(
    private router: Router,
    private zone: NgZone,
    private http: HttpClient,
    private apiService: ApiService,
    private alertController: AlertController,
  ) { }

  ngOnInit() {
    this.getProgress();
  }

  public progress = 0.0;
  public token: string;
  public userId: string;
  public module = 0;
  public completed = false;

  public Level: Level[] = [
    { name: 'Módulo 1', text: 'Estímulos idênticos 3D.', src: '/exercise-one' },
    { name: 'Módulo 2', text: 'Estímulos idênticos 2D.', src: '' },
    { name: 'Módulo 3', text: 'Estímulos semelhantes.', src: '' },
    { name: 'Módulo 4', text: 'Estímulos associados.', src: '' },
    { name: 'Módulo 5', text: '4 Estímulos idênticos 2D-3D.', src: '' },
    { name: 'Módulo 6', text: '5 Estímulos idênticos 2D-3D.', src: '' },
  ];

  public toExercisePage(page: string) {
    if (this.completed === true) {
      this.presentAlert("Ops! Você já terminou este módulo. Gostaria de recomeçar?", page);
    } else {
      this.zone.run(() => this.router.navigate([page]));
    }
  }

  public async getProgress() {
<<<<<<< HEAD
    await this.apiService.getUserProgress().toPromise()
      // .subscribe((res) => {
      //   this.progress = Number(res);
      // });
=======

    await this.http.get(urls.URL_GETPROGRESSBYUSER,
      {
        headers: {
          Authorization: 'Bearer ' + await this.getToken()
        },
        params: new HttpParams().set('userId', await this.getUserId())
      }).subscribe((res) => {
        this.progress = Number(res);
      });
>>>>>>> 73935888bc9af11f1c36c890a8a66101adb117e3
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

  public updateCard(index) {
<<<<<<< HEAD
    if (index === 0) {
=======
    if(this.progress = 1 && this.module) {
>>>>>>> 73935888bc9af11f1c36c890a8a66101adb117e3
      return this.completed = true;
    }
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
