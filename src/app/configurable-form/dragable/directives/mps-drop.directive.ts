import { Directive, ElementRef, Input } from "@angular/core";
import { DropDragBase } from "./drop-drag.base";

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: "[mpsDrop]"
})
export class MpsDropDirective extends DropDragBase {
  // tslint:disable-next-line:no-inferrable-types
  private _dropEnabled: boolean = false;

  @Input("dropEnabled")
  set setDropEnable(val:boolean){
    this.drogEnabled = val || false;
  }

  constructor(elRef: ElementRef) {
    super(elRef);
  }
}
