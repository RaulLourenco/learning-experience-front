import { Component } from '@angular/core';
import { User } from 'src/app/core/models/user';
@Component({
  selector: 'app-close-button',
  templateUrl: './close-button.component.html',
  styleUrls: ['./close-button.component.scss'],
})
export class CloseButtonComponent {

  public user: User;

  constructor() {}
}