import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Exercises } from 'src/app/interface/exercises';
@Component({
  selector: 'app-exercise-two',
  templateUrl: './exercise-two.page.html',
  styleUrls: ['./exercise-two.page.scss'],
})
export class ExerciseTwoPage implements OnInit {



  constructor(
    private router: Router,
    private zone: NgZone
  ) {
  }

  ngOnInit() {
  }

  public levelTwo: Exercises[] = [
    { object: 'Flor', image: '../../../../../assets/images/flower.jpg', answer: true },
    { object: 'Maçãs', image: '../../../../../assets/images/apples.jpg', answer: false },
    { object: 'Carro', image: '../../../../../assets/images/car.jpg', answer: false },
    { object: 'Cavalo', image: '../../../../../assets/images/horse.jpg', answer: false },
  ];

  public verifyAnswer = (i: number) => {
    if (this.levelTwo[i].answer === true) {
      this.zone.run(() => this.router.navigate(['/exercise-three']))
    } else {
      alert("Ops! Tente novamente!");
  }
}

  public closeExercise(){
    this.zone.run(() => this.router.navigate(['/home/exercises-levels']));
  }

}
