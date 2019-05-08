import { Injectable, ChangeDetectorRef, ViewRef, Output } from "@angular/core";
import { ElementRef } from "@angular/core";

@Injectable()
export abstract class DropDragBase {
  element: HTMLElement;
  target: EventTarget;

  // tslint:disable-next-line:no-inferrable-types
  private _dragEnabled: boolean = false;
  private _onDragEnter: (event: Event) => void;

  set dragEnabled(enable: boolean) {
    this._dragEnabled = enable;
    this.element.draggable = this._dragEnabled;
  }
  get dragEnabled(): boolean {
    return this._dragEnabled;
  }

  initEvents = () => {
    this.element.ondragenter = (e: Event) => {
      this._onDragEnter(e);
    };
  };
  constructor(private elRef: ElementRef) {
    this.element = elRef.nativeElement;
    this.initEvents();
  }
}
