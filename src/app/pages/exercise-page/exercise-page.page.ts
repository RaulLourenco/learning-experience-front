import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-exercise-page',
  templateUrl: './exercise-page.page.html',
  styleUrls: ['./exercise-page.page.scss'],
})
export class ExercisePagePage implements OnInit {



  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  public closeExercise(){
    this.router.navigateByUrl('/home/tab1');
  }

}
