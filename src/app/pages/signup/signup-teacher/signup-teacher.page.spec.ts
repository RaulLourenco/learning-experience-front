import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignupTeacherPage } from './signup-teacher.page';

describe('SignupTeacherPage', () => {
  let component: SignupTeacherPage;
  let fixture: ComponentFixture<SignupTeacherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupTeacherPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignupTeacherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
