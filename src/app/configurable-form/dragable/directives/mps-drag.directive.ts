import {
  Directive,
  ElementRef,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { DropDragBase } from "./drop-drag.base";
import { Dragable } from "./drag.interface";
import { DragConfig } from "./drag.config";
import { Observable, fromEvent, Subscription } from "rxjs";
import { MpsDrogDragService } from "../services/mps-drog-drag.service";

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: "[mpsDrag]"
})
export class MpsDragDirective extends DropDragBase implements Dragable {
  @Input()
  set enable(val: boolean) {
    this._enable = val;
    if (this.element && val) {
      this.element.draggable = this._enable;
    }
  }
  get enable() {
    return this._enable;
  }

  private _dragConfig: DragConfig;
  @Input()
  public get dragConfig(): DragConfig {
    return this._dragConfig;
  }
  public set dragConfig(v: DragConfig) {
    this._dragConfig = v;
  }

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onDragStart: EventEmitter<any> = new EventEmitter<any>();

  private onDragStart$: Observable<any>;
  private onMouseOver$: Observable<any>;
  private subscriptions: Subscription[] = new Array<Subscription>();

  constructor(elRef: ElementRef, shareData: MpsDrogDragService) {
    super(elRef, shareData);
    this.enable = true;
    this.addListenser = this._addListenser;
    this.removeListenser = this._removeListenser;
  }

  private _addListenser = () => {
    this.onDragStart$ = fromEvent(this.element, "dragstart");

    this.onMouseOver$ = fromEvent(this.element, "mouseover");

    this.subscriptions.push(
      this.onDragStart$.subscribe(e => {
        // preparing data.
        this.shareData.curElementType = this._dragConfig;
      })
    );
    this.subscriptions.push(this.onMouseOver$.subscribe(e => {}));
  }

  private _removeListenser = () => {
    this.subscriptions.forEach(item => item.unsubscribe());
  }
}
