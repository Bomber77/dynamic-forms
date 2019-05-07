import { Component, OnInit } from "@angular/core";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "mps-dragable",
  templateUrl: "./mps-dragable.component.html",
  styleUrls: ["./mps-dragable.component.scss"]
})
export class MpsDragableComponent implements OnInit {
  constructor() {}

  dragStart(e) {
    e.preventDefault();
  }

  ngOnInit() {}
}
