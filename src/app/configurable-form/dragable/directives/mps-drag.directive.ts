import { Directive, ElementRef, Input } from "@angular/core";
import { DropDragBase } from "./drop-drag.base";

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: "[mpsDrag]"
})
export class MpsDragDirective extends DropDragBase {
  @Input("dragEnabled")
  set setDragEnable(val: boolean) {
    this.dragEnabled = val || true;
  }
  constructor(elRef: ElementRef) {
    super(elRef);
    this.dragEnabled = true;
  }
}
