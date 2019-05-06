import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PagesComponent } from "./components/pages/pages.component";
import { HomeComponent } from "./components/home/home.component";
import { ContactUsComponent } from "./components/pages/contact-us/contact-us.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: HomeComponent
  },
  {
    path: "contact-us",
    pathMatch: "full",
    component: ContactUsComponent
  },
  {
    path: "pages/:slug",
    pathMatch: "full",
    component: PagesComponent
  },
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
