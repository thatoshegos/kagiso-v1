import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-faq",
  templateUrl: "./faq.component.html",
  styleUrls: ["./faq.component.css"]
})
export class FaqComponent implements OnInit {
  @Input() faqs;
  constructor() {}

  ngOnInit() {
    console.log(this.faqs);
  }
}
