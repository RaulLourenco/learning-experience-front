import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LevelOnePage } from './level-one.page';

describe('ModuleOnePage', () => {
  let component: LevelOnePage;
  let fixture: ComponentFixture<LevelOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelOnePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LevelOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
