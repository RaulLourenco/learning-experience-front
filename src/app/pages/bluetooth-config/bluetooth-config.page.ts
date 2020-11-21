import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-bluetooth-config',
  templateUrl: './bluetooth-config.page.html',
  styleUrls: ['./bluetooth-config.page.scss'],
})
export class BluetoothConfigPage implements OnInit {

  unpairedDevices: any;
  pairedDevices: any;
  gettingDevices: boolean;

  constructor(private bluetoothSerial: BluetoothSerial,
              private alertController: AlertController,
              private toastCtrl: ToastController,
              private router: Router) {
    bluetoothSerial.enable();
  }

  ngOnInit() {
  }

  startScanning() {
    this.pairedDevices = null;
    this.unpairedDevices = null;
    this.gettingDevices = true;
    const unPair = [];
    this.bluetoothSerial.discoverUnpaired().then((success) => {
      success.forEach((value, key) => {
        let exists = false;
        unPair.forEach((val2, i) => {
          if (value.id === val2.id) {
            exists = true;
          }
        });
        if (exists === false && value.id !== '') {
          unPair.push(value);
        }
      });
      this.unpairedDevices = unPair;
      this.gettingDevices = false;
    },
      (err) => {
        console.log(err);
      });

    this.bluetoothSerial.list().then((success) => {
      this.pairedDevices = success;
    },
      (err) => {
        console.error(err);
      });
  }

  success = (data) => {
    this.deviceConnected();
  }
  fail = (error) => {
    alert(error);
  }

  async selectDevice(id: any) {

    const alert = await this.alertController.create({
      header: 'Connect',
      message: 'Do you want to connect with?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Connect',
          handler: () => {
            this.bluetoothSerial.connect(id).subscribe(this.success, this.fail);
          }
        }
      ]
    });
    await alert.present();
  }

  deviceConnected() {
    this.bluetoothSerial.isConnected().then(success => {
      alert('Connected Successfullly');
    }, error => {
      alert('error' + JSON.stringify(error));
    });
  }

  async disconnect() {
    const alert = await this.alertController.create({
      header: 'Disconnect?',
      message: 'Do you want to Disconnect?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Disconnect',
          handler: () => {
            this.bluetoothSerial.disconnect();
          }
        }
      ]
    });
    await alert.present();
  }

  async showToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 1000
    });
    return await toast.present();
  }

  async showError(error) {
    const alert = await this.alertController.create({
      header: 'Erro',
      subHeader: error,
      buttons: ['Dismiss']
    });
    return await alert.present();
  }

  closeHardwareConfig() {
    this.router.navigateByUrl('/home/profile');
  }
}