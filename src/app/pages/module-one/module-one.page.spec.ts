import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModuleOnePage } from './module-one.page';

describe('ModuleOnePage', () => {
  let component: ModuleOnePage;
  let fixture: ComponentFixture<ModuleOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleOnePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModuleOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
