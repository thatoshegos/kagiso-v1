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
  contactUs = false;
  constructor(private wpservice: WPAPIService, private route: ActivatedRoute) {
    route.params.subscribe(val => {
      console.log(val);
      if (val.ID) {
        this.wpservice.pages(`?slug=${val.ID}`).subscribe(page => {
          this.page = page[0];
          //console.log(this.page);
          // if (this.page.id == 20) {
          //   this.page.formStatus = true;
          //   // this.wpservice.getPages(`${this.page.id}`).subscribe(page => {
          //   //   this.page = page;
          //   //   this.page.formStatus = true;
          //   //   this.contactUs = true;
          //   //   console.log(this.page);
          //   // });
          // }
          // if (this.page.id == 10) {
          //   //this.page.formStatus = true;
          //   this.wpservice.getPages(`${this.page.id}`).subscribe(page => {
          //     this.page = page;
          //     this.page.aboutStatus = true;
          //     this.contactUs = true;
          //     //console.log(this.page);
          //   });
          // } else if (this.page.slug == "sharia-investor") {
          //   this.wpservice.getPages(`${this.page.id}`).subscribe(page => {
          //     this.page = page;
          //     this.page.saria = true;
          //     //console.log(this.page);
          //   });
          // } else if (this.page.slug == "our-funds") {
          //   this.wpservice.getPages(`${this.page.id}`).subscribe(page => {
          //     this.page = page;
          //     this.page.ourfunds = true;
          //     console.log(this.page);
          //   });
          // }

          // console.log(typeof this.page.formStatus);
        });
      }
    });
  }

  ngOnInit() {
    console.log("SDf");
  }
}
