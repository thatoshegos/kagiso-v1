import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  AfterViewInit
} from "@angular/core";
import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";
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
        month: new Date(this.dataSet.dates[i]),
        value: +this.dataSet.benchMark[i],
        value1: +this.dataSet.fundReturn[i]
      });
    }
    /*
    console.log("data 1=======================", data);
    data.sort(function(_a, _b) {
      const a: any = _a.month;
      const b: any = _b.month;
      console.log(`${b} - ${a}`, b - a);
      return b - a;
    });
    console.log("data 2=======================", data);
    */
    return data;
  }

  makeOptions(dataProvider) {
    return {
      type: "serial",
      theme: "light",
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
        cursorAlpha: 1,
        cursorColor: "#258cbb",
        valueLineAlpha: 0.1
      },
      categoryField: "month",
      categoryAxis: {
        parseDates: true
      },
      export: {
        enabled: true
      }
    };
  }

  ngOnInit() {
    // Create chartdiv1

    if (this.makeDataSet()) {
      this.options = this.makeOptions(this.makeDataSet());

      // Create chartdiv2
      this.chart2 = this.AmCharts.makeChart(
        "chartdiv2",
        this.makeOptions(this.makeDataSet())
      );
    }
  }

  ngOnDestroy() {
    if (this.chart2) {
      this.AmCharts.destroyChart(this.chart2);
    }
  }
}
