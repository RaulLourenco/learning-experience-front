import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public toFirstSteps(){
    this.router.navigateByUrl('/onboarding/first-steps');
  }

}
