import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-faq-detail",
  templateUrl: "./faq-detail.component.html",
  styleUrls: ["./faq-detail.component.css"]
})
export class FaqDetailComponent implements OnInit {
  @Input() faqs;
  constructor() {}

  ngOnInit() {}
}
