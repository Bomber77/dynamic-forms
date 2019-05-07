import { Component, OnInit } from "@angular/core";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "row-wrapper",
  templateUrl: "./row-wrapper.component.html",
  styleUrls: ["./row-wrapper.component.scss"]
})
export class RowWrapperComponent implements OnInit {
  selected = false;
  constructor() {}

  ngOnInit() {}

  troggle() {
    this.selected = !this.selected;
  }
}
