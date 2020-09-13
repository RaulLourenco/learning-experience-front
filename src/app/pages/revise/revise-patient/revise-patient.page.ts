import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../../../auth/auth.service';
import { AlertController, LoadingController, IonRadioGroup } from '@ionic/angular';
import { urls } from '../../../util/urlConfig';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Patient } from 'src/app/model/patient';
import { ReviseResponse } from 'src/app/model/revise-response';
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

  constructor(private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private alertController: AlertController,
              private loadingController: LoadingController,
              private authService: AuthService,
              private http: HttpClient) { }

  ngOnInit() {
    this.initializeForm();
    this.getPatientById();
  }

  private async onChange(name, age, diseaseLevel, colorsIssue, observation) {
    this.presentLoading();
    await this.route.params.subscribe(params => {
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
    await this.http.post(urls.URL_UPDATEPATIENT, this.patient, {
      headers: {
        Authorization: 'Bearer ' + await this.getToken()
      }
    }).subscribe((res: ReviseResponse) => {
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
    await this.route.params.subscribe(params => {
      this.patientId = params.id;
    });
    console.log('this.patient', this.patient);
    await this.http.get(urls.URL_GETPATIENTBYID, {
      headers: {
        Authorization: 'Bearer ' + await this.getToken()
      },
      params: new HttpParams().set('patientId', this.patientId)
    }).subscribe((res: Patient) => {
      console.log('reviseResponse: ', res);
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
    console.log('this.papatientId embaixo do get:', this.patient);
    return this.patient;
  }

  closeRevisePatient() {
    this.router.navigate(['/patient-list']);
  }

  public async getToken() {
    await this.authService.getToken().then(res => {
      this.token = res;
    });
    return this.token;
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
