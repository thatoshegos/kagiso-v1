import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";

import { ChartsModule } from 'ng2-charts';

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

import { UnconventionalThinkingComponent } from "./components/pages/unconventional-thinking/unconventional-thinking.component";
import { CommonComponent } from "./components/pages/common/common.component";
import { InvestmentApprochAboutComponent } from "./components/pages/investment-approch-about/investment-approch-about.component";
import { SwiperModule } from "angular2-useful-swiper";
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { SariaCommonComponent } from './components/pages/saria-common/saria-common.component';
import { ShariaCertificateComponent } from './components/pages/sharia-certificate/sharia-certificate.component';
import { ThoughtFinancialAdviserComponent } from './components/pages/thought-financial-adviser/thought-financial-adviser.component';
import { FinancialImageTwoComponent } from './components/pages/financial-image-two/financial-image-two.component';
import { MeetOurTeamComponent } from './components/pages/meet-our-team/meet-our-team.component';
import { FaqDetailComponent } from './components/pages/faq-detail/faq-detail.component';
import { PodcastSliderComponent } from './components/pages/podcast-slider/podcast-slider.component';
import { InsightYearwiseDataComponent } from './components/pages/insight-yearwise-data/insight-yearwise-data.component';
import { QuaterlyCardComponent } from './components/pages/quaterly-card/quaterly-card.component';
import { ShariaBoardComponent } from './components/pages/sharia-board/sharia-board.component';
import { UpQuaterlyLibraryComponent } from './components/pages/up-quaterly-library/up-quaterly-library.component';
import { UpQuaterlyImageGridComponent } from './components/pages/up-quaterly-image-grid/up-quaterly-image-grid.component';
import { PodcastArchiveListComponent } from './components/pages/podcast-archive-list/podcast-archive-list.component';
import { FundRangeGraphComponent } from './components/pages/fund-range-graph/fund-range-graph.component';

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
    HomeComponent,
    UnconventionalThinkingComponent,
    CommonComponent,
    InvestmentApprochAboutComponent,
    ContactUsComponent,
    SariaCommonComponent,
    ShariaCertificateComponent,
    ThoughtFinancialAdviserComponent,
    FinancialImageTwoComponent,
    MeetOurTeamComponent,
    FaqDetailComponent,
    PodcastSliderComponent,
    InsightYearwiseDataComponent,
    QuaterlyCardComponent,
    ShariaBoardComponent,
    UpQuaterlyLibraryComponent,
    UpQuaterlyImageGridComponent,
    PodcastArchiveListComponent,
    FundRangeGraphComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, SwiperModule, ChartsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
//{ provide: LocationStrategy, useClass: HashLocationStrategy }],
