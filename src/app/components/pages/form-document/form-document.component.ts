import { Component, OnInit, Input } from "@angular/core";
import { WPAPIService } from "../../../../services/wpapi.service";
import { NgOnChangesFeature } from "@angular/core/src/render3";

@Component({
  selector: "app-form-document",
  templateUrl: "./form-document.component.html",
  styleUrls: ["./form-document.component.css"]
})
export class FormDocumentComponent implements OnInit {
  @Input() formHeading;
  slug;
  getFormPageData;
  apiHitted = true;
  changedSlug;
  constructor(private wpservice: WPAPIService) {}

  ngOnInit() {}
  getFormData(heading, event) {
    this.slug = this.slugify(heading.headings);
    if (this.changedSlug) {
      if (this.changedSlug == heading.headings) {
        this.apiHitted = false;
      } else {
        this.apiHitted = true;
      }
    }
    if (this.apiHitted) {
      this.wpservice.pages(`?slug=${this.slug}`).subscribe(data => {
        this.getFormPageData = data;
        console.log(this.getFormPageData);
        this.changedSlug = heading.headings;
      });
    }
  }
  slugify(s) {
    return s
      .toLowerCase()
      .split(" ")
      .map(i => i[0] + i.substr(1))
      .join("-");
  }
}
