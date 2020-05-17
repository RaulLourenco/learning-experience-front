import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular'
import { Router } from '@angular/router';

@Component({
  selector: 'app-index-login',
  templateUrl: './index-login.page.html',
  styleUrls: ['./index-login.page.scss'],
})
export class IndexLoginPage implements OnInit {

  constructor(private alertController: AlertController,
    private loadingController: LoadingController,
    private router: Router) { }

  ngOnInit() {
  }

  public moveToLogin(){
    this.router.navigateByUrl('/login');
  }

  public moveToSignup(){
    this.router.navigateByUrl('/index-login/signup');
  }

}
