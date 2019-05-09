import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { MpsDragFakeDirective } from "../directives/mps-drag-fake.directive";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "mps-drop-root",
  templateUrl: "./mps-drop-root.component.html",
  styleUrls: ["./mps-drop-root.component.scss"]
})
export class MpsDropRootComponent implements AfterViewInit {
  @ViewChild(MpsDragFakeDirective) mpsDragFake: MpsDragFakeDirective;

  ngAfterViewInit(): void {
    console.log(
      "dragFake.viewContainerRef:",
      this.mpsDragFake.viewContainerRef
    );
  }
  constructor() {}
}
