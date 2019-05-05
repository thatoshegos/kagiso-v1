import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-common",
  templateUrl: "./common.component.html",
  styleUrls: ["./common.component.css"]
})
export class CommonComponent implements OnInit {
  @Input() fundDesign;
  @Input() independent;
  @Input() owners;
  @Input() history;
  @Input() our_culture;
  @Input() responsible;
  @Input() social_corporate;

  constructor() {}

  ngOnInit() {}
}
