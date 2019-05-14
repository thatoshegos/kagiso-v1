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
  activeStatus = false;
  parentMenu = [
    {
      name: "Individual Investor",
      slug: "individual-investor",
      defulturl: "individual-investor/invest-with-us"
    },
    {
      name: "Sharia Investor",
      slug: "sharia-investor",
      defulturl: "sharia-investor/invest-with-us"
    },

    {
      name: "Institutional Investor",
      slug: "institutional-investor",
      defulturl: "institutional-investor/our-funds"
    },
    {
      name: "Investor Login",
      slug: "investor-login",
      defulturl: "investor-login"
    }
  ];
  childrenMenu = [
    {
      name: "INVEST WITH US",
      slug: "invest-with-us",
      parent: "individual-investor",
      id: 1,
      display: true
    },
    {
      name: "OUR FUNDS",
      slug: "our-funds",
      parent: "individual-investor",
      id: 2,
      display: true
    },
    {
      name: "ABOUT US",
      slug: "about-us",
      parent: "individual-investor",
      id: 3,
      display: true
    },
    {
      name: "INSIGHTS",
      slug: "insights",
      parent: "individual-investor",
      id: 4,
      display: true
    },
    {
      name: "CONTACT US",
      slug: "contact-us",
      parent: "individual-investor",
      id: 5,
      display: true
    }
  ];
  parentSlug;

  /**
   **
   **/
  headerMenuItems = [
    {
      name: "Individual Investor",
      slug: "individual-investor",
      childrens: [
        {
          name: "INVEST WITH US",
          slug: "invest-with-us",
          parent: "individual-investor",
          id: 1,
          display: true
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
          slug: "contact-us"
        }
      ]
    },
    {
      name: "Sharia Investor",
      slug: "sharia-investor",
      childrens: [
        {
          name: "INVEST WITH US",
          slug: "invest-with-us",
          parent: "individual-investor",
          id: 1,
          display: true
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
          slug: "contact-us"
        }
      ]
    },

    {
      name: "Institutional Investor",
      slug: "institutional-investor",
      childrens: [
        {
          name: "INVEST WITH US",
          slug: "invest-with-us",
          parent: "individual-investor",
          id: 1,
          display: true
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
          slug: "contact-us"
        }
      ]
    },
    {
      name: "Investor Login",
      slug: "investor-login",
      childrens: [
        {
          name: "INVEST WITH US",
          slug: "invest-with-us"
        },
        {
          name: "OUR FUNDS",
          slug: "our-funds"
        },
        {
          name: "ABOUT US",
          slug: "about-us"
        },
        {
          name: "INSIGHTS",
          slug: "insights"
        },
        {
          name: "CONTACT US",
          slug: "contact-us"
        }
      ]
    }
  ];
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
            // console.log(strId.parent);
            // if (typeof strId.ID != "undefined") {
            //   console.log("iff" + strId);
            //   // removing parent for about us and contact us pages
            //   if (
            //     strId.ID != "about-us" &&
            //     strId.ID != "contact-us" &&
            //     strId.ID != "insights"
            //   ) {
            //     child.parent = strId.ID;
            //   }
            //   // for hiding menu
            //   if (strId.ID == "institutional-investor") {
            //     if (child.slug == "invest-with-us") {
            //       child.display = false;
            //       // console.log(child);
            //     }
            //   } else {
            //     child.display = true;
            //   }
            //   // end hiding memu
            // }
            //else {
            // console.log("iff" + strId.ID);
            // console.log("else");
            if (
              strId.parent != "about-us" &&
              strId.parent != "contact-us" &&
              strId.parent != "insights"
            ) {
              child.parent = strId.parent;
            }
            if (strId.parent) {
              this.activeStatus = true;
            }

            // }
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
