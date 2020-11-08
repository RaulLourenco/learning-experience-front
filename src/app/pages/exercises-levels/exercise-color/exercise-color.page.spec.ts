import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExerciseColorPage } from './exercise-color.page';

describe('ExerciseColorPage', () => {
  let component: ExerciseColorPage;
  let fixture: ComponentFixture<ExerciseColorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseColorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExerciseColorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
