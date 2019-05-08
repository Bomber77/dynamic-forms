import { Directive, ElementRef } from "@angular/core";
import { DropDragBase } from "./drop-drag.base";

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: "[mpsDrop]"
})
export class MpsDropDirective extends DropDragBase {
  // tslint:disable-next-line:no-inferrable-types
  private _dropEnabled: boolean = false;

  constructor(elRef: ElementRef) {
    super(elRef);
  }
}
