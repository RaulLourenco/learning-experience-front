import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Exercises } from 'src/app/interface/exercises';
import { AlertController } from '@ionic/angular';

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
  ) { }

  ngOnInit() {
  }

  public levelOne: Exercises[] = [
    { object: 'Flor', image: '../../../../../assets/images/flower.jpg', answer: false },
    { object: 'Maçãs', image: '../../../../../assets/images/apples.jpg', answer: false },
    { object: 'Carro', image: '../../../../../assets/images/car.jpg', answer: true },
    { object: 'Cavalo', image: '../../../../../assets/images/horse.jpg', answer: false },
  ];

  public verifyAnswer = (i: number) => {
      if (this.levelOne[i].answer === true) {
        this.zone.run(() => this.router.navigate(['/exercise-two']))
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

}
