import { Component, OnInit, Renderer } from "@angular/core";
import { WPAPIService } from "../../../../services/wpapi.service";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
@Component({
  selector: "app-insight-yearwise-data",
  templateUrl: "./insight-yearwise-data.component.html",
  styleUrls: ["./insight-yearwise-data.component.css"]
})
export class InsightYearwiseDataComponent implements OnInit {
  categories: any;
  subCategories: any;
  posts: any;
  selectedItem;
  isfirst = false;
  currentSubCate;
  getApiData;
  constructor(private wpservice: WPAPIService, private render: Renderer) {}
  getSubCategoryData(category, event) {
    this.selectedItem = category;
    this.wpservice
      .getSubcategory(`?parent=${category.id}`)
      .subscribe(subcategories => {
        this.subCategories = subcategories;
        console.log(this.subCategories);
      });
    // this.render.setElementClass(event.target, "active", true);
  }
  getMonthPost(subcategory, event, toggle) {
    // this code for accordian
    if (this.currentSubCate) {
      if (subcategory == this.currentSubCate) {
        this.isfirst = !toggle;
      } else {
        this.isfirst = true;
      }
      this.currentSubCate = subcategory;
    } else {
      this.isfirst = !toggle;
      this.currentSubCate = subcategory;
    }

    if (this.getApiData) {
      if (this.getApiData != this.posts) {
        this.wpservice
          .getPostFromCategory(`?categories=${subcategory.id}`)
          .subscribe(posts => {
            this.posts = posts;
            // console.log(this.posts);
          });
      }
    } else {
      this.wpservice
        .getPostFromCategory(`?categories=${subcategory.id}`)
        .subscribe(posts => {
          this.posts = posts;
          // console.log(this.posts);
        });
    }
  }
  ngOnInit() {
    this.wpservice.getCategory("?parent=14").subscribe(categories => {
      this.categories = categories;
      this.categories.sort((a, b) => b.name - a.name);
      this.selectedItem = categories[0];
    });

    this.wpservice.getSubcategory("?parent=8").subscribe(subcategories => {
      this.subCategories = subcategories;
      console.log(this.subCategories);
    });
  }
}
