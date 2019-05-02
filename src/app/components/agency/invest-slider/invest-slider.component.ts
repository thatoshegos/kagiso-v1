import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-invest-slider",
  templateUrl: "./invest-slider.component.html",
  styleUrls: ["./invest-slider.component.css"]
})
export class InvestSliderComponent implements OnInit {
  @Input() dataset;
  constructor() {}

  ngOnInit() {
    // console.log(this.dataset);
  }
}
