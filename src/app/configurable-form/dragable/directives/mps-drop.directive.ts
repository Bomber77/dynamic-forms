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
import {
  Observable,
  fromEvent,
  Subject,
  fromEventPattern,
  Subscription
} from "rxjs";
import {
  map,
  switchMap,
  debounce,
  filter,
  bufferCount,
  tap
} from "rxjs/operators";

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

  constructor(elRef: ElementRef) {
    super(elRef);
    this.addListenser = this._addListenser;
    this.removeListenser = this._removeListenser;
  }

  private buildStream = () => {
    // construct stream.

    // generate subscription.
    this.subscriptions.push(
      this.onDragEnter$.subscribe(e => {
        this.onDragEnter.emit(e);
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
      tap(e => {
        console.log("element rect:", this.element.getClientRects());
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
      map(eventPreventDefault)
    );
    this.onDragLeave$ = fromEvent<DragEvent>(this.element, "dragleave");

    this.buildStream();
  }

  private _removeListenser = () => {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
