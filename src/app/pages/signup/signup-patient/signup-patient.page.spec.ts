import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignupPatientPage } from './signup-patient.page';

describe('SignupPatientPage', () => {
  let component: SignupPatientPage;
  let fixture: ComponentFixture<SignupPatientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupPatientPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignupPatientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
