import { Component } from "@angular/core";
import { Router } from "@angular/router";
import * as AOS from "aos";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  closeResult: string;
  getMessageStatus = true;
  public location = "/";
  title = "kagiso";
  constructor(private router: Router, private modalService: NgbModal) {
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

  open(content) {
    this.getMessageStatus = false;
    console.log(this.getMessageStatus);
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        result => {
          this.closeResult = `Closed with: ${result}`;
          this.getMessageStatus = true;
          console.log(this.getMessageStatus);
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      this.getMessageStatus = true;
      console.log(this.getMessageStatus);
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      this.getMessageStatus = true;
      console.log(this.getMessageStatus);
      return "by clicking on a backdrop";
    } else {
      this.getMessageStatus = true;
      console.log(this.getMessageStatus);
      return `with: ${reason}`;
    }
  }
}
