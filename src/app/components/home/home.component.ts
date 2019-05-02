import { Component, OnInit } from "@angular/core";
import { WPAPIService } from "../../../services/wpapi.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  homePage = null;
  faqs;
  constructor(private wpservice: WPAPIService) {}

  ngOnInit() {
    this.wpservice.getPages("100").subscribe(data => {
      this.homePage = data;
      this.faqs = this.homePage.acf["qa-ans"];
      console.log(this.homePage);
    });
  }
}
