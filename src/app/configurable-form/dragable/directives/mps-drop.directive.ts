import {
  Directive,
  ElementRef,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { DropDragBase } from "./drop-drag.base";
import { MpsDragFakeDirective } from "./mps-drag-fake.directive";
import { Observable, fromEvent, Subject, Subscription } from "rxjs";
import { map, filter, bufferCount, tap } from "rxjs/operators";
import { DragConfig } from "./drag.config";
import { MpsDrogDragService } from "../services/mps-drog-drag.service";

interface Pointer {
  x: number;
  y: number;
}

const eventPreventDefault = (e: DragEvent) => {
  e.preventDefault();
  return e;
};

const positionInRange = (rect: DOMRect, cur: Pointer) => {
  return (
    cur.x >= rect.left &&
    cur.x <= rect.right &&
    cur.y >= rect.top &&
    cur.y <= rect.bottom
  );
};

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: "[mpsDrop]"
})
export class MpsDropDirective extends DropDragBase {
  @Input()
  set enable(val: boolean) {
    this._enable = val;
    this.enable$.next(val);
  }
  get enable() {
    return this._enable;
  }

  private isFirstEnter = true;
  private isEntered = false;

  // tslint:disable-next-line:no-output-on-prefix
  @Output()
  onDragEnter: EventEmitter<any> = new EventEmitter<any>();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onDragMoving: EventEmitter<any> = new EventEmitter<any>();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onDragDone: EventEmitter<any> = new EventEmitter<any>();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onDragLeave: EventEmitter<any> = new EventEmitter<any>();

  private onDrop$: Observable<DragEvent>;
  private onDragOver$: Observable<any>;
  private onDragEnter$: Observable<DragEvent>;
  private onDragLeave$: Observable<DragEvent>;
  private enable$ = new Subject<boolean>();
  private subscriptions: Subscription[] = new Array<Subscription>();

  private srcElement: Element;

  constructor(elRef: ElementRef, shareData: MpsDrogDragService) {
    super(elRef, shareData);
    this.addListenser = this._addListenser;
    this.removeListenser = this._removeListenser;
  }

  private buildStream = () => {
    // construct stream.

    // generate subscription.
    this.subscriptions.push(
      this.onDragEnter$.subscribe(e => {
        const dragConfig = this.shareData.curElementType;
        this.onDragEnter.emit(dragConfig);
      })
    );
    this.subscriptions.push(
      this.onDragOver$.subscribe(e => this.onDragMoving.emit(e))
    );
    this.subscriptions.push(
      this.onDrop$.subscribe(e => this.onDragDone.emit(e))
    );
    this.subscriptions.push(
      this.onDragLeave$.subscribe(e => {
        this.onDragLeave.emit(e);
      })
    );
  }

  private _addListenser = () => {
    this.onDragEnter$ = fromEvent<DragEvent>(this.element, "dragenter").pipe(
      map(eventPreventDefault),
      filter(e => {
        return (
          positionInRange((this.element as any).getBoundingClientRect(), {
            x: e.pageX,
            y: e.pageY
          }) && this.isFirstEnter
        );
      }),
      tap(() => {
        this.isFirstEnter = false;
        this.isEntered = true;
      })
    );
    this.onDragOver$ = fromEvent<DragEvent>(this.element, "dragover").pipe(
      map(eventPreventDefault),
      bufferCount(2),
      filter(val => {
        return !(
          val[0].clientX === val[1].clientX && val[0].clientY === val[1].clientY
        );
      })
    );
    this.onDrop$ = fromEvent<DragEvent>(this.element, "drop").pipe(
      map(eventPreventDefault),
      filter(e => {
        return (
          positionInRange((this.element as any).getBoundingClientRect(), {
            x: e.pageX,
            y: e.pageY
          }) && this.isEntered
        );
      }),
      tap(() => {
        this.isFirstEnter = true;
        this.isEntered = false;
      })
    );
    this.onDragLeave$ = fromEvent<DragEvent>(this.element, "dragleave").pipe(
      filter(e => {
        return !positionInRange((this.element as any).getBoundingClientRect(), {
          x: e.pageX,
          y: e.pageY
        });
      }),
      tap(() => {
        this.isFirstEnter = true;
        this.isEntered = false;
      })
    );

    this.buildStream();
  }

  private _removeListenser = () => {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
