import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-agency",
  templateUrl: "./agency.component.html",
  styleUrls: ["./agency.component.css"]
})
export class AgencyComponent implements OnInit {
  @Input() agencies;
  constructor() {}

  ngOnInit() {
    console.log(this.agencies);
  }
}
