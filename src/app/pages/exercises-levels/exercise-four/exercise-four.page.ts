import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Exercises } from 'src/app/interface/exercises';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-exercise-four',
  templateUrl: './exercise-four.page.html',
  styleUrls: ['./exercise-four.page.scss'],
})
export class ExerciseFourPage implements OnInit {



  constructor(
    private router: Router,
    private zone: NgZone,
    private alertController: AlertController,
  ) {
  }

  ngOnInit() {
  }

  public levelFour: Exercises[] = [
    { object: 'Flor', image: '../../../../../assets/images/flower.jpg', answer: false },
    { object: 'Maçãs', image: '../../../../../assets/images/apples.jpg', answer: false },
    { object: 'Carro', image: '../../../../../assets/images/car.jpg', answer: false },
    { object: 'Cavalo', image: '../../../../../assets/images/horse.jpg', answer: true },
  ];

  public verifyAnswer = (i: number) => {
    if (this.levelFour[i].answer === true) {
      this.presentAlert("Parabéns! Você acertou todas as respostas.")
      this.zone.run(() => this.router.navigate(['/home/exercises-levels']))
    } else {
      this.presentAlert("Ops! Tente novamente!");
  }
}

  public closeExercise(){
    this.zone.run(() => this.router.navigate(['/home/exercises-levels']));
  }

  async presentAlert(message: string) {
    const alertPresent = await this.alertController.create({
      message
    });
    return await alertPresent.present();
  }

}
