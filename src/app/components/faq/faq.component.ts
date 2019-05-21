import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-faq",
  templateUrl: "./faq.component.html",
  styleUrls: ["./faq.component.css"]
})
export class FaqComponent implements OnInit {
  @Input() faqs;
  @Input() fromStatusFaq;
  @Input() insightStatus;
  constructor() {}

  ngOnInit() {
    //console.log(this.faqs);
  }
}
