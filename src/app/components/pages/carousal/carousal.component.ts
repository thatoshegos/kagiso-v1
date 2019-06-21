import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-carousal",
  templateUrl: "./carousal.component.html",
  styleUrls: ["./carousal.component.css"]
})
export class CarousalComponent implements OnInit {
  items = [];

  constructor() {
    console.log("SDfsdfsfsdfsdf");
    this.items = [
      {
        
        content:
          "<div class='hsi-title-1'>Our history</div><div class='hsi-details-1'>As an owner-managed firm, we are independent of any large institution and are not driven by corporate imperatives that may run counter to our clients long-term interests.</div>"
      },
      {
        icon:"<img src='http://dev.omangom.com/kagiso/wordpress/wp-content/uploads/2019/06/2001.png'>",
        heading: "New beginnings",
        year:"2001",
        content:
          "Established Kagiso Asset Management as a joint venture between the Kagiso Trust Investments and Coronation Fund Managers."
      },
      {
        icon:"<img src='http://dev.omangom.com/kagiso/wordpress/wp-content/uploads/2019/06/2002.png'>",
        heading: "First absolute return fund",
        year:"2002",
        content:
          "Launched the Kagiso Protector Fund."
      },
      {
        icon:"<img src='http://dev.omangom.com/kagiso/wordpress/wp-content/uploads/2019/06/2004.png'>",
        heading: "Top performing unit trust fund",
        year:"2004",
        content:
          "First equity unit trust fund, the Kagiso Equity Alpha Fund."
      },
      {
        icon:"<img src='http://dev.omangom.com/kagiso/wordpress/wp-content/uploads/2019/06/2005.png'>",
        heading: "Fully independent",
        year:"2005",
        content:
          "Coronation Fund Managers exits the business and Kagiso Asset Management and staff buy 30%."
      },
      {
        icon:"<img src='http://dev.omangom.com/kagiso/wordpress/wp-content/uploads/2019/06/2006.png'>",
        heading: "Building our infrastructure",
        year:"2006",
        content:
          "Independent administration and infrastructure is installed and full operational independence from Coronation is established."
      },
      {
        icon:"<img src='http://dev.omangom.com/kagiso/wordpress/wp-content/uploads/2019/06/2007.png'>",
        heading: "Assets under management reach R10 billion",
        year:"2007",
        content:
          " "
      },
      {
        icon:"<img src='http://dev.omangom.com/kagiso/wordpress/wp-content/uploads/2019/06/2008.png'>",
        heading: "Consistent outperformance and excellence",
        year:"2008",
        content:
          "Proudly awarded the prestigious Micropal (now known as Morningstar) Fund Award for the Best Smaller Group in South Africa over three years. Our Equity Alpha Fund wins two Micropal awards for being the best in its sector over one and three-year periods."
      },
      {
        icon:"<img src='http://dev.omangom.com/kagiso/wordpress/wp-content/uploads/2019/06/2009.png'>",
        heading: "Fostering greater transparency in the Sharia market",
        year:"2009",
        content:
          "Launching the Kagiso Islamic Equity Fund, our first Sharia-compliant fund. This fund goes on to become a strong performer against its competitors."
      },
      {
        icon:"<img src='http://dev.omangom.com/kagiso/wordpress/wp-content/uploads/2019/06/2010.png'>",
        heading: "Own unit trust management company",
        year:"2010",
        content:
          "We register and launch our management company, Kagiso Collective Investments (RF) Limited. "
      },
      {
        icon:"<img src='http://dev.omangom.com/kagiso/wordpress/wp-content/uploads/2019/06/2011.png'>",
        heading: "Extending our footprint",
        year:"2011",
        content:
          "Three new asset allocation funds launch, namely the Kagiso Balanced Fund, Kagiso Islamic Balanced Fund and Kagiso Stable Fund. All of these funds comply with retirement fund investment regulations. Senior staff and the Kagiso Asset Management Staff Trust increase their shareholding in Kagiso Asset Management to 49.9%."
      },
      {
        icon:"<img src='http://dev.omangom.com/kagiso/wordpress/wp-content/uploads/2019/06/2012.png'>",
        heading: "10 years old",
        year:"2012",
        content:
          "Proudly celebrating 10 years, we open offices in Johannesburg."
      },
      {
        icon:"<img src='http://dev.omangom.com/kagiso/wordpress/wp-content/uploads/2019/06/2014.png'>",
        heading: "Proud of our alpha performance ",
        year:"2014",
        content:
          "The Kagiso Equity Alpha Fund celebrates its 10-year anniversary. "
      },
      {
        icon:"<img src='http://dev.omangom.com/kagiso/wordpress/wp-content/uploads/2019/06/2018.png'>",
        heading: "Global reach",
        year:"2018",
        content:
          "Launched two dollar denominated global funds domiciled in Ireland – the Global Equity Fund."
      },
      {
        icon:"<img src='http://dev.omangom.com/kagiso/wordpress/wp-content/uploads/2019/06/2019.png'>",
        heading: "Raging Bull Awards",
        year:"2019",
        content:
          "In recognition of the top-performing unit trust funds and their managers, we are honoured to have received two prestigious awards for top fund performance and nominations in two further categories."
      }
    ];
  }

  ngOnInit() {}
}
