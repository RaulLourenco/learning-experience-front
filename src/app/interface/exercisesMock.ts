import { Exercises } from './exercises';
import { Injectable } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';

@Injectable()
export class ExercisesMock {

  private levelOne: Exercises[] = [
    { object: 'Flores', answer: false },
    { object: 'Maçã', answer: false },
    { object: 'Carro', answer: true },
    { object: 'Cavalo', answer: false },
  ];
  private levelTwo: Exercises[] = [
    { object: 'Flores', answer: true },
    { object: 'Maçã', answer: false },
    { object: 'Carro', answer: false },
    { object: 'Cavalo', answer: false },
  ];
  private levelThree: Exercises[] = [
    { object: 'Flores', answer: false },
    { object: 'Maçã', answer: false },
    { object: 'Carro', answer: false },
    { object: 'Cavalo', answer: true },
  ];
  private levelFour: Exercises[] = [
    { object: 'Flores', answer: false },
    { object: 'Maçã', answer: true },
    { object: 'Carro', answer: false },
    { object: 'Cavalo', answer: false },
  ];

  getLevelOne(): Observable<Exercises[]> {
    return observableOf(this.levelOne);
  }
  getLevelTwo(): Observable<Exercises[]> {
    return observableOf(this.levelTwo);
  }
  getLevelThree(): Observable<Exercises[]> {
    return observableOf(this.levelThree);
  }
  getLevelFour(): Observable<Exercises[]> {
    return observableOf(this.levelFour);
  }
}