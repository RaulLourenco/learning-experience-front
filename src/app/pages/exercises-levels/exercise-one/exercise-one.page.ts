import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Exercises } from 'src/app/interface/exercises';

@Component({
  selector: 'app-exercise-one',
  templateUrl: './exercise-one.page.html',
  styleUrls: ['./exercise-one.page.scss'],
})


export class ExerciseOnePage implements OnInit {

  constructor(
    private router: Router,
    private zone: NgZone
  ) { }

  ngOnInit() {
  }

  public levelOne: Exercises[] = [
    { object: 'Flor', image: '../../../../../assets/images/flower.jpg', answer: false },
    { object: 'Maçã', image: '../../../../../assets/images/apples.jpg', answer: false },
    { object: 'Carro', image: '../../../../../assets/images/car.jpg', answer: true },
    { object: 'Cavalo', image: '../../../../../assets/images/horse.jpg', answer: false },
  ];

  public verifyAnswer = (index: number) => {
      if (this.levelOne[index].answer === true) {
        this.zone.run(() => this.router.navigate(['/exercise-two']))
      } else {
        alert("Ops! Tente novamente!");
    }
  }

  public closeExercise() {
    this.router.navigateByUrl('/home/exercises-levels');
  }

}
