import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-fund-tab",
  templateUrl: "./fund-tab.component.html",
  styleUrls: ["./fund-tab.component.css"]
})
export class FundTabComponent implements OnInit {
  constructor() {}
  getTabDateSet;
  getSelected;
  ngOnInit() {
    this.getSelected = "Overview";
  }
  getTabData(clicked, data) {
    this.getTabDateSet = data;
    this.getSelected = clicked;
  }
}
