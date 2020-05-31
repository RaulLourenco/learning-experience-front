import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RevisePatientPage } from './revise-patient.page';

describe('RevisePatientPage', () => {
  let component: RevisePatientPage;
  let fixture: ComponentFixture<RevisePatientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevisePatientPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RevisePatientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
