import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PagesComponent } from "./components/pages/pages.component";
import { HomeComponent } from "./components/home/home.component";
import { ContactUsComponent } from "./components/pages/contact-us/contact-us.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/individual-investor/invest-with-us",
    pathMatch: "full"
  },
  {
    path: "contact-us",
    pathMatch: "full",
    component: ContactUsComponent
  },

  {
    path: "individual-investor/invest-with-us",
    pathMatch: "full",
    component: HomeComponent
  },
  {
    path: "individual-investor/our-funds",
    pathMatch: "full",
    component: PagesComponent
  },
  {
    path: "sharia-investor/invest-with-us",
    pathMatch: "full",
    component: HomeComponent
  },
  {
    path: "sharia-investor/our-funds",
    pathMatch: "full",
    component: PagesComponent
  },
  {
    path: "institutional-investor/our-funds",
    component: PagesComponent
  },

  {
    path: "pages/:slug",
    pathMatch: "full",
    component: PagesComponent
  },

  // { path: ":parent/:slug", pathMatch: "full", component: PagesComponent },
  {
    path: ":ID",
    pathMatch: "full",
    component: PagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
