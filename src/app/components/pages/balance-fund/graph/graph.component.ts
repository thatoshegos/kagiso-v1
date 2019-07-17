import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  AfterViewInit
} from "@angular/core";
import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";
// import { ChartDataSets, ChartOptions } from "chart.js";
// import { Color, BaseChartDirective, Label } from "ng2-charts";
// import * as pluginAnnotations from "chartjs-plugin-annotation";
declare var $: JQueryStatic;

@Component({
  selector: "app-graph",
  templateUrl: "./graph.component.html",
  styleUrls: ["./graph.component.css"]
})
export class GraphComponent implements OnInit, OnDestroy {
  @Input() dataSet;
  graphData = [];
  innerdata = [];
  // data = [];
  dataObj = {
    month: null as string,
    value: null as number,
    value1: null as number
  };

  public options: any;
  private chart2: AmChart;
  private timer: any;

  constructor(private AmCharts: AmChartsService) {}
  makeDataSet() {
    const data = [];
    for (var i = 0; i < this.dataSet.dates.length; i++) {
      data.push({
        month: this.dataSet.dates[i],
        value: +this.dataSet.benchMark[i],
        value1: +this.dataSet.fundReturn[i]
      });
    }
    return data;
    // console.log(this.data);
  }
  makeRandomDataProvider() {
    const dataProvider = [];
    // for (var i = 0; i < this.dataSet.dates.length; i++) {
    //   dataProvider.push({
    //     month: this.dataSet.dates[i],
    //     value: +this.dataSet.benchMark[i],
    //     value1: +this.dataSet.fundReturn[i]
    //   });
    // }
    dataProvider.push(
      {
        month: "1986-02",
        value: 33,
        value1: 50.4
      },
      {
        month: "1986-03",
        value: 20.5,
        value1: 10
      },
      {
        month: "1986-04",
        value: 24,
        value1: 100
      },
      {
        month: "1986-05",
        value: 42,
        value1: 60
      },
      {
        month: "1986-06",
        value: 27,
        value1: 20
      },
      {
        month: "1986-07",
        value: 20,
        value1: 30
      },
      {
        month: "1986-08",
        value: 7,
        value1: 50.5
      },
      {
        month: "1986-09",
        value: 95,
        value1: 40
      },
      {
        month: "1986-10",
        value: 28,
        value1: 80
      },
      {
        month: "1986-11",
        value: 82,
        value1: 100
      },
      {
        month: "1986-12",
        value: 83,
        value1: 25
      },
      {
        month: "1987-01",
        value: 61,
        value1: 200
      },
      {
        month: "1987-02",
        value: 75,
        value1: 90
      },
      {
        month: "1987-03",
        value: 73,
        value1: 40
      },
      {
        month: "1987-04",
        value: 63,
        value1: 50
      },
      {
        month: "1987-05",
        value: 75,
        value1: 100
      },
      {
        month: "1987-06",
        value: 7,
        value1: 35
      },
      {
        month: "1987-07",
        value: 19,
        value1: 25
      },
      {
        month: "1987-08",
        value: 69,
        value1: 10
      },
      {
        month: "1987-09",
        value: 90,
        value1: 20
      },
      {
        month: "1987-10",
        value: 91,
        value1: 10
      },
      {
        month: "1987-11",
        value: 4,
        value1: 10
      },
      {
        month: "1987-12",
        value: 76,
        value1: 104
      },
      {
        month: "1988-01",
        value: 6,
        value1: 109
      },
      {
        month: "1988-02",
        value: 75,
        value1: 200
      },
      {
        month: "1988-03",
        value: 56,
        value1: 79
      },
      {
        month: "1988-04",
        value: 86,
        value1: 90
      },
      {
        month: "1988-05",
        value: 18,
        value1: 35
      },
      {
        month: "1988-06",
        value: 93,
        value1: 30
      },
      {
        month: "1988-07",
        value: 72,
        value1: 120
      },
      {
        month: "1988-08",
        value: 32,
        value1: 130
      },
      {
        month: "1988-09",
        value: 1,
        value1: 212
      },
      {
        month: "1988-10",
        value: 45,
        value1: 30
      },
      {
        month: "1988-11",
        value: 40,
        value1: 65
      },
      {
        month: "1988-12",
        value: 14,
        value1: 30
      },
      {
        month: "1989-01",
        value: 6,
        value1: 109
      },
      {
        month: "1989-02",
        value: 75,
        value1: 204
      },
      {
        month: "1989-03",
        value: 56,
        value1: 179
      },
      {
        month: "1989-04",
        value: 86,
        value1: 190
      },
      {
        month: "1989-05",
        value: 18,
        value1: 250
      },
      {
        month: "1989-06",
        value: 93,
        value1: 130
      },
      {
        month: "1989-07",
        value: 72,
        value1: 200
      },
      {
        month: "1989-08",
        value: 32,
        value1: 130
      },
      {
        month: "1989-09",
        value: 1,
        value1: 31
      },
      {
        month: "1989-10",
        value: 45,
        value1: 70
      },
      {
        month: "1989-11",
        value: 40,
        value1: 105
      },
      {
        month: "1989-12",
        value: 14,
        value1: 40
      },

      {
        month: "1990-01",
        value: 6,
        value1: 109
      },
      {
        month: "1990-02",
        value: 75,
        value1: 204
      },
      {
        month: "1990-03",
        value: 56,
        value1: 179
      },
      {
        month: "1990-04",
        value: 86,
        value1: 190
      },
      {
        month: "1990-05",
        value: 18,
        value1: 150
      },
      {
        month: "1990-06",
        value: 93,
        value1: 130
      },
      {
        month: "1990-07",
        value: 72,
        value1: 200
      },
      {
        month: "1990-08",
        value: 32,
        value1: 130
      },
      {
        month: "1990-09",
        value: 1,
        value1: 31
      },
      {
        month: "1990-10",
        value: 45,
        value1: 70
      },
      {
        month: "1990-11",
        value: 40,
        value1: 105
      },
      {
        month: "1990-12",
        value: 14,
        value1: 40
      }
    );

    return dataProvider;
  }

  makeOptions(dataProvider) {
    // console.log(this.makeDataSet());
    return {
      type: "serial",
      theme: "light",
      dataDateFormat: "YYYY-MM",
      marginTop: 0,
      marginRight: 80,
      dataProvider: dataProvider,
      valueAxes: [
        {
          id: "v1",
          position: "left"
        }
      ],
      graphs: [
        {
          id: "g1",
          balloonText:
            "<div style='font-size:14px; color:#333;'><strong><span style='color:#e2161a'>Fund Range</span> [[value]]</strong></div>",
          bullet: "round",
          bulletBorderAlpha: 1,
          bulletColor: "#FFFFFF",
          bulletSize: 5,
          hideBulletsCount: 50,
          lineThickness: 2,
          useLineColorForBulletBorder: true,
          valueField: "value"
        },
        {
          id: "g2",
          bullet: "round",
          balloonText:
            "<div style='font-size:14px; color:#333;'><strong><span style='color:#e2161a'>Bench Mark</span> [[value]]</strong></div>",
          bulletBorderAlpha: 1,
          bulletColor: "#a11c0d",
          bulletSize: 5,
          lineColor: "#e84835",
          hideBulletsCount: 50,
          lineThickness: 2,
          useLineColorForBulletBorder: true,
          valueField: "value1"
        }
      ],

      chartCursor: {
        // valueLineEnabled: true,
        //valueLineBalloonEnabled: true,
        cursorAlpha: 1,
        cursorColor: "#258cbb",

        valueLineAlpha: 0.1,

        categoryBalloonDateFormat: "YYYY-MM"
      },
      categoryField: "month",
      // dataDateFormat: "YYYY",
      // categoryField: "year",
      categoryAxis: {
        minPeriod: "MM",
        parseDates: true
        // minorGridAlpha: 0.1,
        //minorGridEnabled: true
      },
      export: {
        enabled: true
      }
    };
  }

  ngOnInit() {
    // Create chartdiv1

    console.log(this.makeDataSet());
    console.log(this.makeRandomDataProvider());

    if (this.makeDataSet()) {
      this.options = this.makeOptions(this.makeDataSet());

      // Create chartdiv2
      this.chart2 = this.AmCharts.makeChart(
        "chartdiv2",
        this.makeOptions(this.makeDataSet())
      );
    }
  }
  // ngAfterViewInit() {
  //   this.options = this.makeOptions(this.makeDataSet());

  //   // Create chartdiv2
  //   this.chart2 = this.AmCharts.makeChart(
  //     "chartdiv2",
  //     this.makeOptions(this.makeDataSet())
  //   );
  // }

  ngOnDestroy() {
    //clearInterval(this.timer);

    // Cleanup chartdiv2
    if (this.chart2) {
      this.AmCharts.destroyChart(this.chart2);
    }
  }

  // ngOnInit() {
  //   // console.log(this.dataSet);
  //   // this.getGraphDatas();
  // }

  // public lineChartData: ChartDataSets[] = [
  //   {
  //     data: <any>Array(), //[65, 59, 80, 81, 56, 55, 40],
  //     label: "Category",
  //     pointRadius: 0,
  //     pointHoverRadius: 5
  //     // pointHoverBackgroundColor: "white"
  //   }

  // ];
  // public lineChartLabels: Label[] = <any>Array();
  // public lineChartOptions: ChartOptions & { annotation: any } = {
  //   responsive: true,

  //   scales: {
  //     // We use this empty structure as a placeholder for dynamic theming.
  //     xAxes: [{}],
  //     yAxes: [
  //       {
  //         id: "y-axis-0",
  //         position: "left"
  //       }
  //     ]
  //   },
  //   hover: {
  //     mode: "nearest",
  //     intersect: true
  //   },

  //   tooltips: {
  //     mode: "index",
  //     intersect: true
  //   },
  //   annotation: {
  //     annotations: [
  //       {
  //         type: "line",
  //         mode: "vertical",
  //         scaleID: "x-axis-0",
  //         value: "2017",
  //         borderColor: "orange",
  //         borderWidth: 2,
  //         label: {
  //           enabled: true,
  //           fontColor: "orange",
  //           content: "LineAnno"
  //         }
  //       }
  //     ]
  //   }
  // };
  // public lineChartColors: Color[] = [
  //   {
  //     // grey
  //     backgroundColor: "rgba(148,159,177,0.2)",
  //     borderColor: "rgba(148,159,177,1)",
  //     pointBackgroundColor: "rgba(148,159,177,1)",
  //     pointBorderColor: "#fff",
  //     pointHoverBackgroundColor: "#fff",
  //     pointHoverBorderColor: "rgba(148,159,177,0.8)"
  //   },
  //   {
  //     // dark grey
  //     backgroundColor: "rgba(77,83,96,0.2)",
  //     borderColor: "rgba(77,83,96,1)",
  //     pointBackgroundColor: "rgba(77,83,96,1)",
  //     pointBorderColor: "#fff",
  //     pointHoverBackgroundColor: "#fff",
  //     pointHoverBorderColor: "rgba(77,83,96,1)"
  //   },
  //   {
  //     // red
  //     backgroundColor: "rgba(255,0,0,0.3)",
  //     borderColor: "red",
  //     pointBackgroundColor: "rgba(148,159,177,1)",
  //     pointBorderColor: "#fff",
  //     pointHoverBackgroundColor: "#fff",
  //     pointHoverBorderColor: "rgba(148,159,177,0.8)"
  //   }
  // ];
  // public lineChartLegend = true;
  // public lineChartType = "line";
  // public lineChartPlugins = [pluginAnnotations];

  // @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  // getGraphDatas() {
  //   this.innerdata.push({ data: this.dataSet.fundReturn, label: "Fund Range" });
  //   this.innerdata.push({ data: this.dataSet.benchMark, label: "Bench Mark" });
  //   //console.log(this.innerdata);
  //   this.lineChartData.push(
  //     {
  //       label: "Fund Return",
  //       data: this.innerdata[0].data
  //     },
  //     {
  //       label: "Bench Mark",
  //       data: this.innerdata[1].data
  //     }
  //   );
  //   this.dataSet.dates.forEach(date => {
  //     this.lineChartLabels.push(date);
  //   });

  //   console.log(this.lineChartLabels);
  //   this.refresh_chart();
  // }
  // refresh_chart() {
  //   setTimeout(() => {
  //     console.log(this.chart.chart.config);

  //     if (this.chart && this.chart.chart && this.chart.chart.config) {
  //       // this.chart.chart.config.data.labels = this.labels_line;
  //       this.chart.chart.config.data.datasets = this.lineChartData;
  //       this.chart.chart.update();
  //     }
  //   });
  // }

  // // events
  // public chartClicked({
  //   event,
  //   active
  // }: {
  //   event: MouseEvent;
  //   active: {}[];
  // }): void {
  //   console.log(event, active);
  // }

  // public chartHovered({
  //   event,
  //   active
  // }: {
  //   event: MouseEvent;
  //   active: {}[];
  // }): void {
  //   console.log(event, active);
  // }
}
