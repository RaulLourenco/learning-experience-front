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
  public barChartLabels: Label[] = ['1', '2', '3', '4', '5', '6', '7'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 70, 71, 56, 55, 40], label: 'Erros' },
    { data: [28, 48, 40, 19, 70, 27, 75], label: 'Acertos' }
  ];

  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels: Label[] = ['Erros', 'Acertos', 'Reforçadores'];
  public pieChartData: number[] = [300, 500, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [pluginDataLabels];

  public messageError: boolean = false;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() { 
    this.getReportByMatches();
    this.getReportByModule();
  }

  public async getReportByModule() {
    const byModule = await this.apiService.getReportByModule();
    console.log(byModule);
  }

  public async getReportByMatches() {
    const byMatches = await this.apiService.getReportByMatches();
    const aux: MultiDataSet = [];

    byMatches.forEach( match => {
      this.doughnutChartLabels.push(match.label);
      aux.push(match.count);
    });  

    this.doughnutChartData = aux;
    this.messageError = (this.doughnutChartData.length === 1) ? false : true;
  }

  public async getReportByMonth() {
    const byMonth = await this.apiService.getReportByModule();
    console.log(byMonth);
  }
}
