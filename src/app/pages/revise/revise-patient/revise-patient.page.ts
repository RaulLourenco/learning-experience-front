import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AlertController, LoadingController, IonRadioGroup } from '@ionic/angular';
import { ApiService } from 'src/app/core/services/api.service';
import { Patient } from 'src/app/core/models/patient';
import { ReviseResponse } from 'src/app/core/models/revise-response';

@Component({
  selector: 'app-revise-patient',
  templateUrl: './revise-patient.page.html',
  styleUrls: ['./revise-patient.page.scss'],
})
export class RevisePatientPage implements OnInit {

  @ViewChild('diseaseLevelRadioGroup', { static: false }) diseaseLevelRadioGroup: IonRadioGroup;
  @ViewChild('colorsIssueRadioGroup', { static: false }) colorsIssueRadioGroup: IonRadioGroup;

  public patientForm: FormGroup;
  public diseaseLevel = [
    { title: 'Leve', value: 0, isChecked: false },
    { title: 'Moderado', value: 1, isChecked: false },
    { title: 'Alto', value: 2, isChecked: false }
  ];

  public colorsIssue = [
    { title: 'Não', value: false, isItemCheck: false },
    { title: 'Sim', value: true, isItemCheck: false }
  ];

  public patientId: string;
  public diseaseLevelValue: any;
  public colorsIssueValue: any;

  public diseaseLevelValueChanged: number;
  public colorsIssueValueChanged: boolean;

  public patient: Patient = {
    id: '',
    name: '',
    age: 0,
    diseaseLevel: 0,
    colorsIssue: false,
    observation: '',
  };
  public token: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.initializeForm();
    this.getPatientById();
  }

  private async onChange(name, age, diseaseLevel, colorsIssue, observation) {
    this.presentLoading();
    this.route.params.subscribe(params => {
      this.patientId = params.id;
    });
    const id = this.patientId;
    diseaseLevel = this.diseaseLevelValueChanged;
    colorsIssue = this.colorsIssueValueChanged;
    this.patient = {
      id,
      name,
      age,
      diseaseLevel,
      colorsIssue,
      observation
    };
    this.apiService.updatePatient(this.patient)
      .then((res: ReviseResponse) => {
        console.log('res do atualizar: ', res);
        if (res.statusCode === 200) {
          this.dismissLoading();
          this.presentAlert('Atualizado com sucesso!');
          this.router.navigate(['/home/profile']);
        } else {
          this.dismissLoading();
          this.presentAlert('Erro ao atualizar. Tente novamente!');
        }
      });
  }

  radioColorsCheck(event) {
    this.colorsIssueValueChanged = event.value;
  }

  radioDiseaseCheck(event) {
    this.diseaseLevelValueChanged = event.value;
  }

  diseaseLevelRadioGroupChange(event) {
    this.diseaseLevelValue = event.detail;
  }

  colorsIssueRadioGroupChange(event) {
    this.colorsIssueValue = event.detail;
  }

  private async getPatientById() {
    this.route.params.subscribe(params => {
      this.patientId = params.id;
    });
    this.apiService.getPatientById(this.patientId).then((res: Patient) => {
      this.patient.name = res.name;
      this.patient.age = res.age;
      this.patient.diseaseLevel = res.diseaseLevel;
      this.patient.colorsIssue = res.colorsIssue;
      this.patient.observation = res.observation;
      this.diseaseLevel.forEach(diseaseLevelCheck => {
        if (diseaseLevelCheck.value === this.patient.diseaseLevel) {
          const diseaseLevelString = this.patient.diseaseLevel === 2 ? 'Alto' : this.patient.diseaseLevel === 1 ? 'Moderado' : 'Leve';
          this.diseaseLevelRadioGroup.value = diseaseLevelString;
        }
      });
      this.colorsIssue.forEach(colorsIssueValueCheck => {
        if (colorsIssueValueCheck.value === this.patient.colorsIssue) {
          const colorsIssueString = this.patient.colorsIssue ? 'Sim' : 'Não';
          this.colorsIssueRadioGroup.value = colorsIssueString;
        }
      });
    });
    return this.patient;
  }

  closeRevisePatient() {
    this.router.navigate(['/patient-list']);
  }

  public async checkToken() {
    await this.apiService.getToken();
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
