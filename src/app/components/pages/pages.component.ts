import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DomSanitizer } from "@angular/platform-browser";
import { WPAPIService } from "../../../services/wpapi.service";

@Component({
  selector: "app-pages",
  templateUrl: "./pages.component.html",
  styleUrls: ["./pages.component.css"]
})
export class PagesComponent implements OnInit {
  page = null;
  contactUs = false;
  faq;
  annualReportUrl;
  selectedYear;
  fundRangeTestStatus;
  constructor(
    private wpservice: WPAPIService,
    private route: ActivatedRoute,
    private router: Router,
    private santiser: DomSanitizer
  ) {
    route.params.subscribe(val => {
      // console.log(val);
      //console.log(this.router.url);
      var urlArr = this.router.url.split("/");
      var currentUrl = {
        parent: urlArr.length > 2 ? urlArr[1] : "",
        child: urlArr.length > 2 ? urlArr[2] : urlArr[1]
      };
      if (val.ID || currentUrl.child) {
        var slug = val.ID ? val.ID : currentUrl.child;
        console.log(slug);
        this.wpservice.pages(`?slug=${slug}`).subscribe(page => {
          this.page = page[0];

          if (slug == "meet-our-leaders") {
            this.page.ourteamStatus = true;
            this.page.acf.meet_our_leaders.forEach(leader => {
              leader.video_url = this.santiser.bypassSecurityTrustHtml(
                leader.video_url
              );
            });
          }
          if (slug == "faq") {
            this.page.faqStatus = true;
          }
          if (slug == "insights") {
            this.page.insightStatus = true;
          }
          if (slug == "unit-trusts-annual-report") {
            this.page.annualReport = true;
            this.annualReportUrl = this.page.acf.annual_report[0].report_url;
          }
          if (slug == "april-2018-quarterly") {
            this.page.quaterlyStatus = true;
          }
          if (slug == "our-sharia-board") {
            this.page.shariaBoardStatus = true;
          }
          if (slug == "up-quarterly-library") {
            this.page.quaterlyLibraryStatus = true;
          }
          if (slug == "podcast-archive") {
            this.page.podcastArchiveStatus = true;
          }
          if (slug == "glossary") {
            this.page.glossaryStatus = true;
          }
          if (slug == "fund-range-test") {
            this.fundRangeTestStatus = true;
          }

          console.log(this.page);
          if (this.page) {
            if (this.page.id == 10) {
              //this.page.formStatus = true;
              this.wpservice.getPages(`${this.page.id}`).subscribe(page => {
                this.page = page;
                this.page.aboutStatus = true;
                this.contactUs = true;
                console.log(this.page);
              });
            } else if (
              currentUrl.parent == "sharia-investor" &&
              this.page.slug == "our-funds"
            ) {
              this.page.id = 8;

              this.wpservice.getPages(`${this.page.id}`).subscribe(page => {
                this.page = page;
                this.page.ourfunds = true;
                this.faq = this.page.acf["qa-ans"];
                // console.log(this.page);
                // console.log(this.faq);
              });
            } else if (
              currentUrl.parent == "individual-investor" &&
              this.page.slug == "our-funds"
            ) {
              this.page.id = 355;

              this.wpservice.getPages(`${this.page.id}`).subscribe(page => {
                this.page = page;
                this.page.ourfunds = true;
                this.faq = this.page.acf["qa-ans"];
                // console.log(this.page);
                // console.log(this.faq);
              });
            } else if (
              currentUrl.parent == "institutional-investor" &&
              this.page.slug == "our-funds"
            ) {
              this.page.id = 351;

              this.wpservice.getPages(`${this.page.id}`).subscribe(page => {
                this.page = page;
                this.page.ourfunds = true;
                this.faq = this.page.acf["qa-ans"];
                // console.log(this.page);
                // console.log(this.faq);
              });
            } else if (
              currentUrl.parent == "sharia-investor" &&
              slug == "invest-with-us"
            ) {
              this.wpservice.getPages("89").subscribe(page => {
                this.page = page;
                this.page.saria = true;
                console.log(this.page);
              });
            }
          }

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

  getAnnualReport(event, year) {
    this.annualReportUrl = year.report_url;
    this.selectedYear = year;
  }
  ngOnInit() {
    console.log("SDf");
  }
}
