import { Observable } from 'rxjs';

export interface Exercises {
  object: string,
  answer: boolean,
}

export abstract class ExercisesData {
  abstract getExercises(): Observable<Exercises[]>;
}