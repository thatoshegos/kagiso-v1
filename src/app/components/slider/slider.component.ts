import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.css"]
})
export class SliderComponent implements OnInit {
  @Input() sliders;
  constructor() {}

  ngOnInit() {
    console.log(this.sliders);
  }
}
