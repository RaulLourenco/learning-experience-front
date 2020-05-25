import { Exercises } from './exercises';
import { Injectable } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';

@Injectable()
export class ExercisesMock {

  private levelOne: Exercises[] = [
    { object: 'Flor', image: '../../../../../assets/images/flower.jpg', answer: false },
    { object: 'Maçã', image: '../../../../../assets/images/apples.jpg', answer: false },
    { object: 'Carro', image: '../../../../../assets/images/car.jpg', answer: true },
    { object: 'Cavalo', image: '../../../../../assets/images/horse.jpg', answer: false },
  ];

  getLevelOne(): Observable<Exercises[]> {
    return observableOf(this.levelOne);
  }
}