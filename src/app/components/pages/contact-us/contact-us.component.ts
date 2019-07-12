import { Component, OnInit } from "@angular/core";
import { WPAPIService } from "../../../../services/wpapi.service";

@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.css"]
})
export class ContactUsComponent implements OnInit {
  constructor(private wpservice: WPAPIService) {}
  page = null;
  ngOnInit() {
    this.wpservice.pages("?slug=contact-us").subscribe(page => {
      this.page = page[0];
      this.wpservice.getPages(`${this.page.id}`).subscribe(page => {
        this.page = page;
        console.log(this.page);
      });
    });
  }
}
