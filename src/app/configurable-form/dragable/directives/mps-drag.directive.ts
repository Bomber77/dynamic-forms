import { Directive, ElementRef } from "@angular/core";
import { DropableBase } from "./dropable.base";

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: "[mpsDrag]"
})
export class MpsDragDirective extends DropableBase {
  constructor(elRef: ElementRef) {
    super(elRef);
  }
}
