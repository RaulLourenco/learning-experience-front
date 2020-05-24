import { Component, OnInit, ViewChild  } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label, Color, MultiDataSet, BaseChartDirective } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import * as pluginAnnotations from 'chartjs-plugin-annotation';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
})
export class ReportsComponent implements OnInit {

  //Doughnut

  public doughnutChartLabels: Label[] = ['Erros', 'Acertos', 'Reforçadores'];

  public doughnutChartData: MultiDataSet = [
    [350, 450, 100],
    [50, 150, 120],
    [250, 130, 70],
  ];

  public doughnutChartType: ChartType = 'doughnut';

  // Bar
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 70, 71, 56, 55, 40], label: 'Erros' },
    { data: [28, 48, 40, 19, 70, 27, 75], label: 'Acertos' }
  ];

  // Line

  // public lineChartData: ChartDataSets[] = [
  //   { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  //   { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
  //   { data: [180, 480, 770, 90, 1000, 270, 400], label: 'Series C', yAxisID: 'y-axis-1' }
  // ];
  // public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  // public lineChartOptions: (ChartOptions & { annotation: any }) = {
  //   responsive: true,
  //   scales: {
  //     // We use this empty structure as a placeholder for dynamic theming.
  //     xAxes: [{}],
  //     yAxes: [
  //       {
  //         id: 'y-axis-0',
  //         position: 'left',
  //       },
  //       {
  //         id: 'y-axis-1',
  //         position: 'right',
  //         gridLines: {
  //           color: 'rgba(255,0,0,0.3)',
  //         },
  //         ticks: {
  //           fontColor: 'red',
  //         }
  //       }
  //     ]
  //   },
  //   annotation: {
  //     annotations: [
  //       {
  //         type: 'line',
  //         mode: 'vertical',
  //         scaleID: 'x-axis-0',
  //         value: 'March',
  //         borderColor: 'orange',
  //         borderWidth: 2,
  //         label: {
  //           enabled: true,
  //           fontColor: 'orange',
  //           content: 'LineAnno'
  //         }
  //       },
  //     ],
  //   },
  // };
  // public lineChartColors: Color[] = [
  //   { // grey
  //     backgroundColor: 'rgba(148,159,177,0.2)',
  //     borderColor: 'rgba(148,159,177,1)',
  //     pointBackgroundColor: 'rgba(148,159,177,1)',
  //     pointBorderColor: '#fff',
  //     pointHoverBackgroundColor: '#fff',
  //     pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  //   },
  //   { // dark grey
  //     backgroundColor: 'rgba(77,83,96,0.2)',
  //     borderColor: 'rgba(77,83,96,1)',
  //     pointBackgroundColor: 'rgba(77,83,96,1)',
  //     pointBorderColor: '#fff',
  //     pointHoverBackgroundColor: '#fff',
  //     pointHoverBorderColor: 'rgba(77,83,96,1)'
  //   },
  //   { // red
  //     backgroundColor: 'rgba(255,0,0,0.3)',
  //     borderColor: 'red',
  //     pointBackgroundColor: 'rgba(148,159,177,1)',
  //     pointBorderColor: '#fff',
  //     pointHoverBackgroundColor: '#fff',
  //     pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  //   }
  // ];
  // public lineChartLegend = true;
  // public lineChartType = 'line';
  // public lineChartPlugins = [pluginAnnotations];

  // @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  constructor() {
  }

  ngOnInit() { }

}
