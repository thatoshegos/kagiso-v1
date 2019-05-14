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
  // {
  //   path: "sharia-investor",
  //   pathMatch: "full",
  //   redirectTo: "/sharia-investor/invest-with-us"
  // },

  {
    path: "individual-investor/invest-with-us",
    pathMatch: "full",
    component: HomeComponent
  },
  // {
  //   path: "sharia-investor/invest-with-us",
  //   pathMatch: "full",
  //   component: HomeComponent
  // },

  {
    path: "pages/:slug",
    pathMatch: "full",
    component: PagesComponent
  },
  { path: ":parent/:slug", pathMatch: "full", component: HomeComponent },
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
