import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IndexLoginPage } from './index-login.page';

describe('IndexLoginPage', () => {
  let component: IndexLoginPage;
  let fixture: ComponentFixture<IndexLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexLoginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IndexLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
