import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
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
  currentRoute;
  selectedRoute;
  constructor(private wpservice: WPAPIService, private router: Router) {}

  ngOnInit() {
    /*this.wpservice.readCSVDataFromServer().subscribe(data => {
      console.log("readCSVDataFromServer========", data);
    });*/
    this.wpservice
      .getCSVData("assets/images/balance_fund.csv")
      .subscribe(data => {
        this.getGraphData = this.makeDataSets(data);
        console.log(this.getGraphData);
      });
    this.currentRoute = this.router.url.slice(1);
    this.selectedRoute = "";
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
  getFundOnChange(e) {
    // console.log(this.router.url);
    this.currentRoute = this.router.url;
    this.selectedRoute = e.target.value;
    console.log(this.selectedRoute);
    console.log(this.currentRoute);
    this.router.navigate(["/" + e.target.value]);
  }
}
