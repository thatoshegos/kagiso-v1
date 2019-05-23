import { Component, OnInit, Input } from "@angular/core";
import { WPAPIService } from "./../../../../services/wpapi.service";
@Component({
  selector: "app-up-quaterly-library",
  templateUrl: "./up-quaterly-library.component.html",
  styleUrls: ["./up-quaterly-library.component.css"]
})
export class UpQuaterlyLibraryComponent implements OnInit {
  @Input() getQuaterlyImage;
  categories;
  selectedItem;
  constructor(private wpservice: WPAPIService) {}

  ngOnInit() {
    this.wpservice.getCategory("?parent=121").subscribe(categories => {
      this.categories = categories;
      this.categories.sort((a, b) => b.name - a.name);
      this.selectedItem = categories[0];
    });
  }
  getYearPost(category, event) {
    this.selectedItem = category;
    console.log(category);
  }
}
