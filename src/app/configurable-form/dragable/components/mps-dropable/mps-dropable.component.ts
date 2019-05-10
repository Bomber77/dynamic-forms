import { Component, OnInit, AfterViewInit, ViewChild } from "@angular/core";
import { MpsDragFakeDirective } from "../../directives/mps-drag-fake.directive";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "mps-dropable",
  templateUrl: "./mps-dropable.component.html",
  styleUrls: ["./mps-dropable.component.scss"]
})
export class MpsDropableComponent implements AfterViewInit {
  @ViewChild(MpsDragFakeDirective) mpsDragFake: MpsDragFakeDirective;

  dragItemEnter = false;

  ngAfterViewInit(): void {
    console.log(
      "dragFake.viewContainerRef:",
      this.mpsDragFake.viewContainerRef
    );
  }
  constructor() {}

  onDragEnterHandle = e => {
    this.dragItemEnter = true;
  }

  onDragMovingHandle = e => {};

  onDragDoneHandle = e => {
    this.dragItemEnter = false;
    console.log("onDragDoneHandle:", e);
  }

  onDragLeaveHandle = e => {
    this.dragItemEnter = false;
  }
}
