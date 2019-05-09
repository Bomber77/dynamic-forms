import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  AfterViewInit
} from "@angular/core";
import { DropDragBase } from "./drop-drag.base";
import { MpsDragFakeDirective } from "./mps-drag-fake.directive";

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: "[mpsDrop]"
})
export class MpsDropDirective extends DropDragBase {
  @Input()
  set enable(val: boolean) {
    this._enable = val;
  }
  get enable() {
    return this._enable;
  }

  // tslint:disable-next-line:no-output-on-prefix
  @Output()
  onDragEnter: EventEmitter<any> = new EventEmitter<any>();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onDragOver: EventEmitter<any> = new EventEmitter<any>();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onDragDone: EventEmitter<any> = new EventEmitter<any>();

  constructor(elRef: ElementRef) {
    super(elRef);
    this.addListenser = this._addListenser;
    this.removeListenser = this._removeListenser;
  }

  private _addListenser = () => {
    if (this._enable) {
      this.element.ondrop = (e: DragEvent) => {
        e.preventDefault();
        console.log("on drop:", e);
      };
      this.element.ondragover = (e: DragEvent) => {
        e.preventDefault();
        console.log("ondragover:", e);
      };
    }
  };

  private _removeListenser = () => {
    this.element.ondrop = undefined;
    this.element.ondragover = undefined;
  };
}
