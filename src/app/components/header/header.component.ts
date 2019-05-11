import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, RoutesRecognized } from "@angular/router";
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
  parentMenu = [
    {
      name: "Individual Investor",
      slug: "individual-investor"
    },
    {
      name: "Sharia Investor",
      slug: "sharia-nvestor"
    },

    {
      name: "Institutional Investor",
      slug: "institutional-investor"
    },
    {
      name: "Investor Login",
      slug: "investor-login"
    }
  ];
  childrenMenu = [
    {
      name: "INVEST WITH US",
      slug: "invest-with-us",
      parent: "individual-investor"
    },
    {
      name: "OUR FUNDS",
      slug: "our-funds",
      parent: "individual-investor"
    },
    {
      name: "ABOUT US",
      slug: "about-us",
      parent: "individual-investor"
    },
    {
      name: "INSIGHTS",
      slug: "insights",
      parent: "individual-investor"
    },
    {
      name: "CONTACT US",
      slug: "contact-us",
      parent: "individual-investor"
    }
  ];
  parentSlug;
  constructor(private WPService: WPAPIService, private route: Router) {
    /************************************************************
     * this code is related to make relatetion between parent   *
     * component and child component if some on click any parent*
     * then parent slug us replace in child link                *
     * **********************************************************/
    this.route.events.subscribe(val => {
      if (val instanceof RoutesRecognized) {
        var strId = val.state.root.firstChild.params;
        if (Object.keys(strId).length === 0) {
          this.childrenMenu.forEach(child => {
            child.parent = "individual-investor";
          });
        } else {
          this.childrenMenu.forEach(child => {
            console.log(strId.parent);
            if (typeof strId.ID != "undefined") {
              console.log("iff" + strId.ID);
              child.parent = strId.ID;
            } else {
              console.log("iff" + strId.ID);
              console.log("else");
              child.parent = strId.parent;
            }
          });
        }
      }
    });
  }

  ngOnInit() {
    this.WPService.getFirstMenu().subscribe(menus => {
      this.menuItems.primary = menus;
      this.menuItems.primary.items.forEach(item => {
        var urlArr = item.url.split("/");
        item.slug = urlArr[5];
        console.log(item);
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
