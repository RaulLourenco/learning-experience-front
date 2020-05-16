import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-exercise-level',
  templateUrl: './exercise-level.component.html',
  styleUrls: ['./exercise-level.component.scss'],
})
export class ExerciseLevelComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  public toExercisePage(){
    this.router.navigateByUrl('/exercise-page');
  }

}
