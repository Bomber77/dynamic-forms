import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { MpsDragFakeDirective } from "../directives/mps-drag-fake.directive";
import { RowContainer } from "../models/drop-container.model";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "mps-drop-root",
  templateUrl: "./mps-drop-root.component.html",
  styleUrls: ["./mps-drop-root.component.scss"]
})
export class MpsDropRootComponent implements OnInit {
  rowContainerGroup: RowContainer[];

  ngOnInit(): void {
    this.rowContainerGroup = [
      {
        id: 1,
        option: { gap: 8 },
        cols: [{ id: 1, span: 12 }, { id: 2, span: 12 }]
      }
    ];
  }
  constructor() {}
}
