import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../../../auth/auth.service';
import { AlertController, LoadingController, IonRadioGroup } from '@ionic/angular';
import { urls } from '../../../util/urlConfig';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Patient } from 'src/app/interface/patient';
@Component({
  selector: 'app-revise-patient',
  templateUrl: './revise-patient.page.html',
  styleUrls: ['./revise-patient.page.scss'],
})
export class RevisePatientPage implements OnInit {

  @ViewChild('radioGroup', {static: false}) radioGroup: IonRadioGroup
  @ViewChild('radioGroup2', {static: false}) radioGroup2: IonRadioGroup

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

  public patientId: string;
  public diseaseLevelValue: any;
  public colorsIssueValue: any;
  public patient: Patient = {
    name: '',
    age: 0,
    diseaseLevel: 0,
    colorsIssue: false,
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

  checkboxColorsIssue(event) {
    this.colorsIssueValue = event.value;
  }

  checkboxDiseaseLevel(event) {
    this.diseaseLevelValue = event.value;
  }

  radioGroupChange(event) {
    console.log("radioGroupChange",event.detail);
    this.diseaseLevelValue = event.detail;
    }

    radioGroupChange2(event) {
      console.log("radioGroupChange2",event.detail);
      this.colorsIssueValue = event.detail;
      }

    selectTwo(){
      this.radioGroup.value = 'Moderado';
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
      // debugger;
      console.log('reviseResponse: ', res);
      this.patient.name = res.name;
      this.patient.age = res.age;
      this.patient.diseaseLevel = res.diseaseLevel;
      this.patient.colorsIssue = res.colorsIssue;
      this.patient.observation = res.observation;
  
      this.diseaseLevel.forEach((diseaseLevelCheck, index) => {
        if(diseaseLevelCheck.value == this.patient.diseaseLevel) {
          var diseaseLevelString = this.patient.diseaseLevel === 3 ? 'Alto' : this.patient.diseaseLevel === 2 ? 'Moderado' : 'Leve';
          this.radioGroup.value = diseaseLevelString;
          this.diseaseLevelValue = this.patient.diseaseLevel;
          this.diseaseLevel[index].isChecked = true;
          console.log("Esse é o diseaseLevel do array true: " + JSON.stringify(diseaseLevelCheck));
      } else {
        console.log("Esse é o diseaseLevel do array false: " + JSON.stringify(diseaseLevelCheck));
        diseaseLevelCheck.isChecked = false;
      }});
  
      this.colorsIssue.forEach((colorsIssueValueCheck, index) => {
        if(colorsIssueValueCheck.value == this.patient.colorsIssue) {
          this.radioGroup2.value =  this.patient.colorsIssue ? 'Sim' : 'Não';
          //this.patient.colorsIssue === true ? 'Sim' : 'Não';
          //this.colorsIssueValue = this.patient.colorsIssue;
          this.colorsIssue[index].isItemCheck = true;
          console.log("Esse é o colorsIssue do array true: " + JSON.stringify(colorsIssueValueCheck));
      } else {
        console.log("Esse é o colorsIssue do array false: " + JSON.stringify(colorsIssueValueCheck));
      }});
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
      colorsIssue: ['', Validators.required],
      observation: ['', Validators.required]
    });
  }

}
