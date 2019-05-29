import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-balance-fund",
  templateUrl: "./balance-fund.component.html",
  styleUrls: ["./balance-fund.component.css"]
})
export class BalanceFundComponent implements OnInit {
  @Input() getStatus;
  constructor() {}

  ngOnInit() {}
}
