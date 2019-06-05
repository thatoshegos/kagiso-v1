import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { ChartDataSets, ChartOptions } from "chart.js";
import { Color, BaseChartDirective, Label } from "ng2-charts";
import * as pluginAnnotations from "chartjs-plugin-annotation";

@Component({
  selector: "app-graph",
  templateUrl: "./graph.component.html",
  styleUrls: ["./graph.component.css"]
})
export class GraphComponent implements OnInit {
  @Input() dataSet;
  graphData = [];
  innerdata = [];
  constructor() {}

  ngOnInit() {
    console.log(this.dataSet);
    this.getGraphDatas();
  }

  public lineChartData: ChartDataSets[] = [
    {
      data: <any>Array(), //[65, 59, 80, 81, 56, 55, 40],
      label: "Category"
    }
    // {
    //    data: <any>Array(), //[28, 48, 40, 19, 86, 27, 90],
    //    label: "Series B"
    // }
    // {
    //   data: [180, 480, 770, 90, 1000, 270, 400],
    //   label: "Series C",
    //   yAxisID: "y-axis-1"
    // }
  ];
  public lineChartLabels: Label[] = <any>Array();

  // [
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July"
  // ];
  // public lineChartLabels: Label[] = [
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July"
  // ];
  public lineChartOptions: ChartOptions & { annotation: any } = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: "y-axis-0",
          position: "left"
        }
        // {
        //   id: "y-axis-1",
        //   position: "right",
        //   gridLines: {
        //     color: "rgba(255,0,0,0.3)"
        //   },
        //   ticks: {
        //     fontColor: "red"
        //   }
        // }
      ]
    },
    annotation: {
      annotations: [
        {
          type: "line",
          mode: "vertical",
          scaleID: "x-axis-0",
          value: "31-01-2019",
          borderColor: "orange",
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: "orange",
            content: "LineAnno"
          }
        }
      ]
    }
  };
  public lineChartColors: Color[] = [
    {
      // grey
      backgroundColor: "rgba(148,159,177,0.2)",
      borderColor: "rgba(148,159,177,1)",
      pointBackgroundColor: "rgba(148,159,177,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(148,159,177,0.8)"
    },
    {
      // dark grey
      backgroundColor: "rgba(77,83,96,0.2)",
      borderColor: "rgba(77,83,96,1)",
      pointBackgroundColor: "rgba(77,83,96,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(77,83,96,1)"
    },
    {
      // red
      backgroundColor: "rgba(255,0,0,0.3)",
      borderColor: "red",
      pointBackgroundColor: "rgba(148,159,177,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(148,159,177,0.8)"
    }
  ];
  public lineChartLegend = true;
  public lineChartType = "line";
  public lineChartPlugins = [pluginAnnotations];

  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  getGraphDatas() {
    this.innerdata.push({ data: this.dataSet.fundReturn, label: "Fund Range" });
    this.innerdata.push({ data: this.dataSet.benchMark, label: "Bench Mark" });
    //console.log(this.innerdata);
    this.lineChartData.push(
      {
        label: "Fund Return",
        data: this.innerdata[0].data
      },
      {
        label: "Bench Mark",
        data: this.innerdata[1].data
      }
    );
    this.dataSet.dates.forEach(date => {
      this.lineChartLabels.push(date);
    });

    console.log(this.lineChartLabels);
    this.refresh_chart();
  }
  refresh_chart() {
    setTimeout(() => {
      console.log(this.chart.chart.config);

      if (this.chart && this.chart.chart && this.chart.chart.config) {
        // this.chart.chart.config.data.labels = this.labels_line;
        this.chart.chart.config.data.datasets = this.lineChartData;
        this.chart.chart.update();
      }
    });
  }

  // public randomize(): void {
  //   for (let i = 0; i < this.lineChartData.length; i++) {
  //     for (let j = 0; j < this.lineChartData[i].data.length; j++) {
  //       this.lineChartData[i].data[j] = this.generateNumber(i);
  //     }
  //   }
  //   this.chart.update();
  // }

  // private generateNumber(i: number) {
  //   return Math.floor(Math.random() * (i < 2 ? 100 : 1000) + 1);
  // }

  // events
  public chartClicked({
    event,
    active
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  // public hideOne() {
  //   const isHidden = this.chart.isDatasetHidden(1);
  //   this.chart.hideDataset(1, !isHidden);
  // }

  // public pushOne() {
  //   this.lineChartData.forEach((x, i) => {
  //     const num = this.generateNumber(i);
  //     const data: number[] = x.data as number[];
  //     data.push(num);
  //   });
  //   this.lineChartLabels.push(`Label ${this.lineChartLabels.length}`);
  // }

  // public changeColor() {
  //   this.lineChartColors[2].borderColor = "green";
  //   this.lineChartColors[2].backgroundColor = `rgba(0, 255, 0, 0.3)`;
  // }

  // public changeLabel() {
  //   this.lineChartLabels[2] = ["1st Line", "2nd Line"];
  //   // this.chart.update();
  // }
}
