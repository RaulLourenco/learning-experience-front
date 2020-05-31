import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../../../auth/auth.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { urls } from '../../../util/urlConfig';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SignupResponse } from 'src/app/interface/signup-response';
import { Patient } from 'src/app/interface/patient';
@Component({
  selector: 'app-revise-patient',
  templateUrl: './revise-patient.page.html',
  styleUrls: ['./revise-patient.page.scss'],
})
export class RevisePatientPage implements OnInit {

  public patientForm: FormGroup;

  public diseaseLevel = [
    { title: 'Leve',  value: 0, isChecked: true},
    { title: 'Moderado', value: 1, isChecked: false },
    { title: 'Alto', value: 2, isChecked: false }
  ];

  public colorIssue = [
    { title: 'Não', value: false , isItemCheck: true},
    { title: 'Sim', value: true, isItemCheck: false}
  ];

  public patientId: string;
  public diseaseLevelValue: number;
  public colorIssueValue: boolean;
  public patient: Patient = {
    name: '',
    age: 0,
    diseaseLevel: 0,
    colorIssue: false,
    observation: '',
  };


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

  private async getPatientById() {
    let token;
    await this.route.params.subscribe(params => {
      this.patientId = params.id;
    });
    await this.authService.getToken().then(res => {
      token = res;
    });
    await this.http.get(urls.URL_GETPATIENTBYID, {
      headers: {
        Authorization: 'Bearer ' + token
      },
      params: new HttpParams().set('patientId', this.patientId)
    }).subscribe((res: Patient) => {
      console.log('reviseResponse: ', res);
      this.patient.name = res.name;
      this.patient.age = res.age;
      this.patient.diseaseLevel = res.diseaseLevel;
      this.patient.colorIssue = res.colorIssue;
      this.patient.observation = res.observation;
    });
    console.log('this.patient', this.patient);
    console.log('this.papatientId embaixo do get:', this.patient);
    return this.patient;
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

  closeRevisePatient() {
    this.router.navigate(['/patient-list']);
  }

  initializeForm() {
    this.patientForm = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      diseaseLevel: ['', Validators.required],
      colorIssue: ['', Validators.required],
      observation: ['', Validators.required]
    });
  }

}
