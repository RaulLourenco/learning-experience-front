import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Exercises } from 'src/app/model/exercises';
import { AlertController } from '@ionic/angular';
import { HttpClient, HttpParams } from '@angular/common/http';
import { urls } from '../../../util/urlConfig';
import { AuthService } from 'src/app/auth/auth.service';

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

  public verifyAnswer = (i: number) => {
      if (this.levelOne[i].match === true) {
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
    console.log(' entrou ');
    const obj = {
        mainImage: {
          id: 1,
          name: 'Flor',
          imagePath: '../../../../../assets/images/flower.jpg',
        },
        comparable: [
          {id: 1, name: 'Flor', imagePath: '../../../../../assets/images/flower.jpg', match: true},
          {id: 2, name: 'Maçãs', imagePath: '../../../../../assets/images/apples.jpg', match: false},
          {id: 3, name: 'Carro', imagePath: '../../../../../assets/images/car.jpg', match: false},
          {id: 4, name: 'Cavalo', imagePath: '../../../../../assets/images/horse.jpg', match: false}
        ]
    };
    console.log(obj);

    this.levelOneMainImage = {
      imagePath: obj.mainImage.imagePath,
      name: obj.mainImage.name
    };

    this.levelOne.forEach( (item, index) => {
      item.object = obj.comparable[index].name;
      item.image = obj.comparable[index].imagePath;
      item.match = obj.comparable[index].match;
    });
    // await this.authService.getToken().then(res => {
    //   token = res;
    // });
    // await this.http.post(urls.URL_GENERATELEVEL, {
    //   gameLevelType: 1
    // }, 
    // {
    //   headers: { 
    //     Authorization: 'Bearer ' + token
    //   }
    // }).subscribe((res) => {
    //   console.log(' resposta', res );
    // });
  }

  public async updateProgress(){
    
  }
}
