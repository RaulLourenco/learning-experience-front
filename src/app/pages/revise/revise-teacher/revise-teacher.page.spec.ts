import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReviseTeacherPage } from './revise-teacher.page';

describe('ReviseTeacherPage', () => {
  let component: ReviseTeacherPage;
  let fixture: ComponentFixture<ReviseTeacherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviseTeacherPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReviseTeacherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
