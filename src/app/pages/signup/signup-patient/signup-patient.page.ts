import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AlertController, LoadingController, IonRadioGroup } from '@ionic/angular';
import { SignupResponse } from 'src/app/components/signup-response';
import { ApiService } from 'src/app/core/services/api.service';
import { Patient } from 'src/app/core/models/patient';

@Component({
  selector: 'app-signup-patient',
  templateUrl: './signup-patient.page.html',
  styleUrls: ['./signup-patient.page.scss'],
})
export class SignupPatientPage implements OnInit {

  @ViewChild('diseaseLevelRadioGroup', { static: false }) diseaseLevelRadioGroup: IonRadioGroup;
  @ViewChild('colorsIssueRadioGroup', { static: false }) colorsIssueRadioGroup: IonRadioGroup;

  public patientForm: FormGroup;

  public diseaseLevel = [
    { title: 'Leve',  value: 0, isChecked: true},
    { title: 'Moderado', value: 1, isChecked: false },
    { title: 'Alto', value: 2, isChecked: false }
  ];

  public colorsIssue = [
    { title: 'Não', value: false , isItemCheck: true},
    { title: 'Sim', value: true, isItemCheck: false}
  ];

  public diseaseLevelValue: number;
  public colorsIssueValue: boolean;

  public token: string;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private apiService: ApiService
    ) { }

  ngOnInit() {
    this.initializeForm();
  }

  radioDiseaseLevel(event) {
    this.diseaseLevelValue = event.value;
  }

  radioboxColorsIssue(event) {
    this.colorsIssueValue = event.value;
  }

  private async onSignup(name, age, diseaseLevel, colorsIssue, observation) {
    this.presentLoading();

    diseaseLevel = this.diseaseLevelValue;
    colorsIssue = this.colorsIssueValue;

    const patient: Patient = {
      name,
      age,
      diseaseLevel,
      colorsIssue,
      observation
    };

    this.patientForm.reset();

    await this.apiService.registerPatient(patient)
    .then( (res: SignupResponse) => {
      if (res.statusCode === 200) {
        this.dismissLoading();
        this.presentAlert('Cadastrado com sucesso!');
        this.router.navigate(['home/profile']);
      } else {
        this.dismissLoading();
        this.presentAlert('Erro ao cadastrar. Tente novamente!');
      }
    });
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Aguarde....'
    });
    return await loading.present();
  }

  async dismissLoading() {
    return await this.loadingController.dismiss();
  }

  async presentAlert(message: string) {
    const alertPresent = await this.alertController.create({
      message
    });
    return await alertPresent.present();
  }

  closePatientSignup() {
    this.router.navigateByUrl('home/profile');
  }

  public async checkToken() {
    await this.apiService.setToken();
  }

  initializeForm() {
    this.patientForm = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      diseaseLevel: ['', Validators.required],
      colorsIssue: ['', Validators.required],
      observation: ['', Validators.required]
    });
  }
}
