import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private zone: NgZone,
  ) { }

  ngOnInit() {}

  goToExerciseOne = () => {
    this.zone.run(() => this.router.navigate(["/exercise-one"]))
  }

}
