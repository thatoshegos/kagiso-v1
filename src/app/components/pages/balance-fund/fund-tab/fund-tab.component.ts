import { Component, OnInit, Input } from "@angular/core";
import { WPAPIService } from "../../../../../services/wpapi.service";
import { MalihuScrollbarService } from "ngx-malihu-scrollbar";
import { from } from "rxjs";
@Component({
  selector: "app-fund-tab",
  templateUrl: "./fund-tab.component.html",
  styleUrls: ["./fund-tab.component.css"]
})
export class FundTabComponent implements OnInit {
  constructor(
    private wpservice: WPAPIService,
    private scrollbarService: MalihuScrollbarService
  ) {}
  @Input() getApiData;
  getTabDateSet;
  getSelected;
  getPriceData;
  getHeader;

  ngOnInit() {
    this.getSelected = "overview";
    this.getTabDateSet = this.getApiData.acf.overview;
  }
  ngAfterViewInit() {
    this.scrollbarService.initScrollbar("#scrollable", {
      axis: "y",
      theme: "dark",
      scrollButtons: { enable: true }
    });
  }

  getTabData(clicked, data) {
    console.log(this.getApiData);
    var keys = Object.keys(this.getApiData.acf);
    keys.map(key => {
      if (key == clicked) {
        if (clicked == "prices") {
          this.getTabDateSet = null;
          this.wpservice
            .getCSVData("assets/images/sample_export_15593344736071.csv")
            .subscribe(data => {
              this.getPriceData = this.convertCSVToJson(data);
              this.getHeader = Object.keys(this.convertCSVToJson(data).data[0]);
              console.log(this.getPriceData);
            });
        } else {
          this.getPriceData = null;
          this.getTabDateSet = this.getApiData.acf[key];
        }
      }
    });
    this.getSelected = clicked;
  }
  convertCSVToJson(data) {
    var mainObj = { isPrice: false, data: null };
    var lines = data.split("\n");
    var result = [];
    var headers = lines[0].split(",");

    for (var i = 1; i < lines.length; i++) {
      var obj = {};
      var currentline = lines[i].split(",");
      for (var j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j];
      }
      result.push(obj);
    }
    mainObj.isPrice = true;
    mainObj.data = result;
    return mainObj;
  }
}
