import { Component, OnInit, Input } from "@angular/core";
import { WPAPIService } from "../../../../services/wpapi.service";
import { DatePipe } from "@angular/common";

@Component({
  selector: "app-balance-fund",
  templateUrl: "./balance-fund.component.html",
  styleUrls: ["./balance-fund.component.css"]
})
export class BalanceFundComponent implements OnInit {
  @Input() getStatus;
  @Input() getBalancedData;
  getGraphData;
  constructor(private wpservice: WPAPIService) {}

  ngOnInit() {
	this.wpservice
      .readCSVDataFromServer()
      .subscribe(data => {
        console.log('readCSVDataFromServer========', data);
      });
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
  }
}
