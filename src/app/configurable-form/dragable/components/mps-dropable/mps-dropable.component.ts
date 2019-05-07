import { Component, OnInit } from "@angular/core";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "mps-dropable",
  templateUrl: "./mps-dropable.component.html",
  styleUrls: ["./mps-dropable.component.scss"]
})
export class MpsDropableComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  drop(e) {
    e.preventDefault();
  }

  dragStart(e) {}

  dragOver(e) {}

  allowDrop(e) {}
}
