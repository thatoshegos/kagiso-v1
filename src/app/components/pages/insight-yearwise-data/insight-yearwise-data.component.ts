import { Component, OnInit, Renderer } from "@angular/core";
import { WPAPIService } from "../../../../services/wpapi.service";
@Component({
  selector: "app-insight-yearwise-data",
  templateUrl: "./insight-yearwise-data.component.html",
  styleUrls: ["./insight-yearwise-data.component.css"]
})
export class InsightYearwiseDataComponent implements OnInit {
  categories: any;
  subCategories: any;
  posts: any;
  constructor(private wpservice: WPAPIService, private render: Renderer) {}
  getSubCategoryData(id, event) {
    console.log(event);
    this.wpservice.getSubcategory(`?parent=${id}`).subscribe(subcategories => {
      this.subCategories = subcategories;
      console.log(this.subCategories);
    });
    this.render.setElementClass(event.target, "active", true);
  }
  getMonthPost(id, event) {
    console.log(id);
    this.wpservice.getPostFromCategory(`?categories=${id}`).subscribe(posts => {
      this.posts = posts;
      console.log(this.posts);
    });
  }
  ngOnInit() {
    this.wpservice.getCategory("?parent=14").subscribe(categories => {
      this.categories = categories;
      this.categories.sort((a, b) => b.name - a.name);
    });

    this.wpservice.getSubcategory("?parent=8").subscribe(subcategories => {
      this.subCategories = subcategories;
      console.log(this.subCategories);
    });
  }
}
