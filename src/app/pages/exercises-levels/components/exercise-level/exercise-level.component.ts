import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Exercises } from 'src/app/model/exercises';
import { Level } from 'src/app/model/levels';
@Component({
  selector: 'app-exercise-level',
  templateUrl: './exercise-level.component.html',
  styleUrls: ['./exercise-level.component.scss'],
})
export class ExerciseLevelComponent implements OnInit {

  constructor(
    private router: Router,
    private zone: NgZone
    ) { }

  ngOnInit() {}

  public Level: Level[] = [
    {name: 'Módulo 1', text: 'Estímulos idênticos 3D.', src: '/exercise-one'},
    {name: 'Módulo 2', text: 'Estímulos idênticos 2D.', src: ''},
    {name: 'Módulo 3', text: 'Estímulos semelhantes.', src: ''},
    {name: 'Módulo 4', text: 'Estímulos associados.', src: ''},
    {name: 'Módulo 5', text: '4 Estímulos idênticos 2D-3D.', src: ''},
    {name: 'Módulo 6', text: '5 Estímulos idênticos 2D-3D.', src: ''},
  ];

  public toExercisePage(page: string){
    this.zone.run(() => this.router.navigate([page]));
  }

}
