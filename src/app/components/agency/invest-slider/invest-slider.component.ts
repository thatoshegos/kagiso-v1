import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-invest-slider",
  templateUrl: "./invest-slider.component.html",
  styleUrls: ["./invest-slider.component.css"]
})
export class InvestSliderComponent implements OnInit {
  @Input() dataset;
  @Input() fromNewInvesting;
  slideDatas;
  backgroundUrl;
  constructor() {}
  config: SwiperOptions = {
    autoplay: 3000,
    pagination: ".swiper-pagination",
    paginationClickable: true,
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",
    spaceBetween: 30
  };
  ngOnInit() {
    if (this.dataset.acf) {
      this.slideDatas = this.dataset.acf.how_do_i_invest;
    } else {
      this.slideDatas = this.dataset;
      console.log(this.slideDatas);
    }
  }
  ngOnChanges() {
    this.slideDatas = this.dataset;
  }
}
