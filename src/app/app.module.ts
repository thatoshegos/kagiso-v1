import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { SliderComponent } from "./components/slider/slider.component";
import { AgencyComponent } from "./components/agency/agency.component";
import { FeatureBoxComponent } from "./components/agency/feature-box/feature-box.component";
import { FundRangeComponent } from "./components/agency/fund-range/fund-range.component";
import { InvestSliderComponent } from "./components/agency/invest-slider/invest-slider.component";
import { InvestmentApprochComponent } from "./components/investment-approch/investment-approch.component";
import { FinancialAdviserComponent } from "./components/financial-adviser/financial-adviser.component";
import { FaqComponent } from "./components/faq/faq.component";
import { FooterComponent } from "./components/footer/footer.component";
import { PagesComponent } from "./components/pages/pages.component";
import { PostComponent } from "./components/post/post.component";
import { HomeComponent } from "./components/home/home.component";

import { HashLocationStrategy, LocationStrategy } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    AgencyComponent,
    FeatureBoxComponent,
    FundRangeComponent,
    InvestSliderComponent,
    InvestmentApprochComponent,
    FinancialAdviserComponent,
    FaqComponent,
    FooterComponent,
    PagesComponent,
    PostComponent,
    HomeComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
//{ provide: LocationStrategy, useClass: HashLocationStrategy }],
