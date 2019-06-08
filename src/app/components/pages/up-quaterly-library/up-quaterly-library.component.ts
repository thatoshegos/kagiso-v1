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
  imagePosts;
  currentSubCate;
  isfirst = false;
  constructor(private wpservice: WPAPIService) {}

  ngOnInit() {
    this.wpservice.getCategory("?parent=121").subscribe(categories => {
      this.categories = categories;
      this.categories.sort((a, b) => b.name - a.name);
      this.selectedItem = categories[0];
    });
  }
  getYearPost(category, event, toggle) {
    if (this.currentSubCate) {
      if (category == this.currentSubCate) {
        this.isfirst = !toggle;
      } else {
        this.isfirst = true;
      }
      this.currentSubCate = category;
    } else {
      this.isfirst = !toggle;
      this.currentSubCate = category;
    }
    this.selectedItem = category;
    this.wpservice
      .getQuaterlyImagePostFromCategory(`?categories=${category.id}`)
      .subscribe(imagePost => {
        this.imagePosts = imagePost;
        console.log(this.imagePosts);
      });
  }
}
