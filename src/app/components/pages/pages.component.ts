import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { WPAPIService } from "../../../services/wpapi.service";

@Component({
  selector: "app-pages",
  templateUrl: "./pages.component.html",
  styleUrls: ["./pages.component.css"]
})
export class PagesComponent implements OnInit {
  page = null;
  constructor(private wpservice: WPAPIService, private route: ActivatedRoute) {
    route.params.subscribe(val => {
      if (val.ID) {
        this.wpservice.pages(`?slug=${val.ID}`).subscribe(page => {
          this.page = page[0];
          if (this.page.id == 20) {
            this.page.formStatus = true;
            this.wpservice.getPages(`${this.page.id}`).subscribe(page => {
              this.page = page;
              this.page.formStatus = true;
              console.log(this.page);
            });
          }
          // console.log(this.page);
        });
      }
    });
  }

  ngOnInit() {}
}
