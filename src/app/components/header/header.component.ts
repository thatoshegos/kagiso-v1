import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { WPAPIService } from "../../../services/wpapi.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  menuItems = {
    primary: null,
    secondry: null
  };
  secondMenus = null;
  constructor(private WPService: WPAPIService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.WPService.getFirstMenu().subscribe(menus => {
      this.menuItems.primary = menus;
      this.menuItems.primary.items.forEach(item => {
        var urlArr = item.url.split("/");
        item.slug = urlArr[5];
      });
    });

    this.WPService.getSecondMenu().subscribe(menus => {
      this.menuItems.secondry = menus;
      this.menuItems.secondry.items.forEach(item => {
        var urlArr = item.url.split("/");
        item.slug = urlArr[5];
      });
    });
  }
}
