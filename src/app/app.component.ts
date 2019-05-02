import { Component } from "@angular/core";
import { Router } from "@angular/router";
import * as AOS from "aos";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public location = "/";
  title = "kagiso";
  constructor(private router: Router) {
    this.location = router.url;
    //console.log(router.url);
  }
  ngOnInit() {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100
    });
  }
}
