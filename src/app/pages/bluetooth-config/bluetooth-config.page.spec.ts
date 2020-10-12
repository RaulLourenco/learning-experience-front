import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BluetoothConfigPage } from './bluetooth-config.page';

describe('BluetoothConfigPage', () => {
  let component: BluetoothConfigPage;
  let fixture: ComponentFixture<BluetoothConfigPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BluetoothConfigPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BluetoothConfigPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
