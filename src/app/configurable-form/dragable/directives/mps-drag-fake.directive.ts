import { ViewContainerRef, Directive } from "@angular/core";

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: "[mpsDragFake]"
})
export class MpsDragFakeDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
