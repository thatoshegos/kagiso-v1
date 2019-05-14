import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { WPAPIService } from "../../../services/wpapi.service";
import { url } from "inspector";

@Component({
  selector: "app-pages",
  templateUrl: "./pages.component.html",
  styleUrls: ["./pages.component.css"]
})
export class PagesComponent implements OnInit {
  page = null;
  contactUs = false;
  constructor(
    private wpservice: WPAPIService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    route.params.subscribe(val => {
      console.log(val);
      console.log(this.router.url);
      var urlArr = this.router.url.split("/");
      var currentUrl = {
        parent: urlArr.length > 2 ? urlArr[1] : "",
        child: urlArr.length > 2 ? urlArr[2] : urlArr[1]
      };
      if (val.ID || currentUrl.child) {
        var slug = val.ID ? val.ID : currentUrl.child;
        this.wpservice.pages(`?slug=${slug}`).subscribe(page => {
          this.page = page[0];
          // console.log(this.page);
          // if (this.page.id == 20) {
          //   this.page.formStatus = true;
          //   // this.wpservice.getPages(`${this.page.id}`).subscribe(page => {
          //   //   this.page = page;
          //   //   this.page.formStatus = true;
          //   //   this.contactUs = true;
          //   //   console.log(this.page);
          //   // });
          // }
          if (this.page.id == 10) {
            //this.page.formStatus = true;
            this.wpservice.getPages(`${this.page.id}`).subscribe(page => {
              this.page = page;
              this.page.aboutStatus = true;
              this.contactUs = true;
              //console.log(this.page);
            });
          } else if (this.page.slug == "our-funds") {
            this.page.id = 8;
            console.log("our page");
            this.wpservice.getPages(`${this.page.id}`).subscribe(page => {
              this.page = page;
              this.page.ourfunds = true;
              console.log(this.page);
            });
          }
          //else if (this.page.slug == "sharia-investor") {
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
