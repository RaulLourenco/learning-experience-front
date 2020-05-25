import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-observation',
  templateUrl: './observation.page.html',
  styleUrls: ['./observation.page.scss'],
})
export class ObservationPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public toHome(){
    this.router.navigateByUrl('/home/exercises-levels');
  }

  public backToFirstSteps(){
    this.router.navigateByUrl('/onboarding/first-steps');
  }

}
