import { Component, OnInit, Input } from "@angular/core";
import { WPAPIService } from "../../../../services/wpapi.service";
<<<<<<< HEAD
import { DatePipe } from "@angular/common";
=======
>>>>>>> 2ddb37cde4ea90eb159d65f96dd2db05552ee1be

@Component({
  selector: "app-balance-fund",
  templateUrl: "./balance-fund.component.html",
  styleUrls: ["./balance-fund.component.css"]
})
export class BalanceFundComponent implements OnInit {
  @Input() getStatus;
  @Input() getBalancedData;
<<<<<<< HEAD
  getGraphData;
  constructor(private wpservice: WPAPIService) {}

  ngOnInit() {
    this.wpservice
      .getCSVData("assets/images/balance_fund.csv")
      .subscribe(data => {
        this.getGraphData = this.makeDataSets(data);
        // console.log(this.getGraphData);
      });
  }
  makeDataSets(data) {
    var lines = data.split("\n");
    var result = [];
    var headers = lines[0].split(",");
    var dates = [];
    var fundReturn = [];
    var benchMark = [];
    var graphDataSet = {
      dates: null,
      fundReturn: null,
      benchMark: null
    };
    for (var i = 1; i < lines.length - 1; i++) {
      var currentline = lines[i].split(",");
      dates.push(currentline[0]);
      fundReturn.push(currentline[1]);
      benchMark.push(currentline[2]);
    }
    graphDataSet.dates = dates;
    graphDataSet.fundReturn = fundReturn;
    graphDataSet.benchMark = benchMark;
    return graphDataSet;
=======
  graphData;
  garphDataSet: any;
  constructor(private wpservice: WPAPIService) {}

  ngOnInit() {
    this.wpservice.getCSVData("assets/images/22.csv").subscribe(csv => {
      this.graphData = csv;
      this.garphDataSet = this.convertCSVToArray(this.graphData);
      //console.log(this.garphDataSet);
    });
  }

  convertCSVToArray(data) {
    var lines = data.split("\n");
    var result = { fundRetrurn: null, date: null, benchMark: null };
    var headers = lines[0].split(",");
    var Data1 = [];
    var Data2 = [];
    var Data3 = [];
    for (var i = 1; i < lines.length - 1; i++) {
      // console.log(lines[i]);
      var currentLine = lines[i].split(",");

      Data1.push(currentLine[0]);
      Data2.push(currentLine[1]);
      Data3.push(currentLine[2]);
    }
    result.date = Data1;
    result.fundRetrurn = Data2;
    result.benchMark = Data3;
    return result;
>>>>>>> 2ddb37cde4ea90eb159d65f96dd2db05552ee1be
  }
}
