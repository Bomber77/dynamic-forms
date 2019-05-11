import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: "[controlContent]"
})
export class ControlContentDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
