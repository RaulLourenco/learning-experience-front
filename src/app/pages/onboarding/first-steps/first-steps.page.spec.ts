import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FirstStepsPage } from './first-steps.page';

describe('FirstStepsPage', () => {
  let component: FirstStepsPage;
  let fixture: ComponentFixture<FirstStepsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstStepsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FirstStepsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
