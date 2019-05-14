import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { WPAPIService } from "../../../services/wpapi.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  homePage = null;
  faqs;
  constructor(private wpservice: WPAPIService, private route: ActivatedRoute) {
    route.params.subscribe(params => {
      console.log(params.parent);

      if (params.parent == "sharia-investor") {
       
        this.wpservice.getPages("89").subscribe(data => {
          this.homePage = data;
          this.faqs = this.homePage.acf["qa-ans"];
          console.log(this.homePage);
        });
      } else {
        this.wpservice.getPages("100").subscribe(data => {
          this.homePage = data;
          this.faqs = this.homePage.acf["qa-ans"];
          console.log(this.homePage);
        });
      }
    });
  }

  ngOnInit() {}
}
