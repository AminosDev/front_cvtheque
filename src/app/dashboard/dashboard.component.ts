import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { SingleDataSet, Label } from 'ng2-charts';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../app.component.scss','./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  // Bar
  public barChartOptions: ChartOptions = {
    responsive: true,

    scales: { xAxes: [{}], yAxes: [{}] },
  };
  public barChartLabels: Label[] = ['2015', '2016', '2017', '2018', '2019'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [80, 81, 56, 55, 40], label: 'Candidats refuser' },
    { data: [40, 19, 86, 27, 90], label: 'Candidats admis' }
  ];


   // Pie
   public pieChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels: Label[] = ['Candidat pas planifier', 'Condidat admis', 'Candidat refuser'];
  public pieChartData: SingleDataSet = [500, 100, 250];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;

  constructor() { }

  ngOnInit() {
  }

}
