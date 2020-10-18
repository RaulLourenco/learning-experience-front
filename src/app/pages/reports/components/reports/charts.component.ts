import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent implements OnInit {

  //Doughnut
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: MultiDataSet = [[0, 0, 0]];
  
  // Bar
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [{ data: [], label: '' }, { data: [], label: '' }];

  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    }
  };
  
  public pieChartLabels: Label[] = [];
  public pieChartData: number[] = [0, 0, 0];
  public pieChartType: ChartType = 'pie';

  public byMatchesError: boolean = false;
  public byModuleError: boolean = false;
  public byMonthError: boolean = false;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() { 
    this.getReportByMatches();
    this.getReportByModule();
    this.getReportByMonth();
  }

  public async getReportByModule() {
    const byModule = await this.apiService.getReportByModule();
  
    this.barChartLabels.length = byModule[0].data.length;
    for(let i=0;i<this.barChartLabels.length;i++){
      this.barChartLabels[i] = (i + 1).toString();
    }

    byModule.forEach( (module, i) => {
      this.barChartData[i].data = module.data;
      this.barChartData[i].label = module.label;
    });

    this.byModuleError = (this.barChartData[0].data.length >= 1) ? true : false;
  }

  public async getReportByMatches() {
    const byMatches = await this.apiService.getReportByMatches();
    
    byMatches.forEach( (match, i) => {
      this.doughnutChartLabels[i] = match.label;
      this.doughnutChartData[0][i]= match.count;
    });  

    this.byMatchesError = (this.doughnutChartData.length >= 1) ? true : false;
  }

  public async getReportByMonth() {
    const byMonth = await this.apiService.getReportByMonth();

    byMonth.forEach( (month, i) => {
      this.pieChartData[i] = month.count;
      this.pieChartLabels[i] = month.label;
    });

    this.byMonthError = (this.pieChartData.length >= 1) ? true : false;
  }

  doRefresh(event) {
    this.getReportByMatches();
    this.getReportByModule();
    this.getReportByMonth();
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }
}
