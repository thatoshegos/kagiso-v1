import { Component, OnInit, Input } from "@angular/core";
import { WPAPIService } from "../../../../../services/wpapi.service";
import { from } from "rxjs";
@Component({
  selector: "app-fund-tab",
  templateUrl: "./fund-tab.component.html",
  styleUrls: ["./fund-tab.component.css"]
})
export class FundTabComponent implements OnInit {
  constructor(private wpservice: WPAPIService) {}
  @Input() getApiData;
  getTabDateSet;
  getSelected;
  ngOnInit() {
    this.getSelected = "overview";
    this.getTabDateSet = this.getApiData.acf.overview;
  }
  getTabData(clicked, data) {
    console.log(this.getApiData);
    var keys = Object.keys(this.getApiData.acf);
    keys.map(key => {
      if (key == clicked) {
        if (clicked == "prices") {
          // this.wpservice
          //   .getCSVData("assets/images/Equity-Alpha-Fund-Performance.xlsx")
          //   .subscribe(data => {
          //     console.log(data);
          //   });
        }
        this.getTabDateSet = this.getApiData.acf[key];
        //console.log(key + "-" + clicked);
        //console.log(this.getTabDateSet);
      }
    });
    //this.getTabDateSet = data;
    this.getSelected = clicked;
  }
}
