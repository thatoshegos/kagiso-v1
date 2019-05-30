import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-fund-tab",
  templateUrl: "./fund-tab.component.html",
  styleUrls: ["./fund-tab.component.css"]
})
export class FundTabComponent implements OnInit {
  constructor() {}
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
        this.getTabDateSet = this.getApiData.acf[key];
        //console.log(key + "-" + clicked);
        //console.log(this.getTabDateSet);
      }
    });
    //this.getTabDateSet = data;
    this.getSelected = clicked;
  }
}
