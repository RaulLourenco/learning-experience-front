import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-exercise-one',
  templateUrl: './exercise-one.page.html',
  styleUrls: ['./exercise-one.page.scss'],
})
export class ExerciseOnePage implements OnInit {



  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  public closeExercise(){
    this.router.navigateByUrl('/home/tab1');
  }

}
