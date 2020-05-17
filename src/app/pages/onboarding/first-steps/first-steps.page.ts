import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-steps',
  templateUrl: './first-steps.page.html',
  styleUrls: ['./first-steps.page.scss'],
})
export class FirstStepsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public toObservation(){
    this.router.navigateByUrl('/onboarding/observation');
  }

  public backToOnboarding(){
    this.router.navigateByUrl('/onboarding');
  }
}
