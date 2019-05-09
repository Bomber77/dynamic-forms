import {
  Injectable,
  ChangeDetectorRef,
  ViewRef,
  Output,
  OnInit,
  OnDestroy,
  Input
} from "@angular/core";
import { ElementRef } from "@angular/core";
import { Subject } from "rxjs";
import { DropDragBase as IDropDragBase } from "./drop-drag.base.interface";

@Injectable()
export abstract class DropDragBase implements IDropDragBase, OnInit, OnDestroy {
  addListenser: () => void;
  removeListenser: () => void;
  element: HTMLElement;

  _enable: boolean;

  constructor(elRef: ElementRef) {
    this.element = elRef.nativeElement;
    this._enable = false;
  }

  ngOnInit(): void {
    if (this.addListenser) {
      this.addListenser();
    }
  }
  ngOnDestroy(): void {
    if (this.removeListenser) {
      this.removeListenser();
    }
  }
}

// @Injectable()
// export abstract class DropDragBase implements IDropDragBase, OnInit, OnDestroy {
//   element: HTMLElement;
//   target: EventTarget;

//   // tslint:disable-next-line:no-inferrable-types
//   private _dragEnabled: boolean = false;
//   set dragEnabled(enable: boolean) {
//     this._dragEnabled = enable;
//     this.element.draggable = this._dragEnabled;
//   }
//   get dragEnabled(): boolean {
//     return this._dragEnabled;
//   }

//   private _dropEnabled = false;
//   set dropEnabled(enable: boolean) {
//     this._dropEnabled = enable;
//   }
//   get dropEnabled() {
//     return this._dropEnabled;
//   }

//   private _onDragEnter: (event: DragEvent) => void;
//   private _onDrop: (event: DragEvent) => void;
//   private _onDragOver: (event: DragEvent) => void;
//   private _onDragStart: (event: DragEvent) => void;
//   private _onDragLeave: (event: DragEvent) => void;

//   private dragOver$: Subject<any>;
//   /**
//    * regiter all of events of drop and drag.
//    */
//   initEvents = () => {
//     if (this._dropEnabled) {
//       this.element.ondragenter = (e: DragEvent) => {
//         console.log("on drag enter");
//         if (this._onDragEnter) {
//           this._onDragEnter(e);
//         }
//       };
//       this.element.ondrop = (e: DragEvent) => {
//         e.preventDefault();
//         // call preventDefault to break process of drop event by default.
//         e.preventDefault();
//         // do action after drop in it.
//         //
//         // 1. clone the source element.
//         // 2. create a new element based on type of srouce element presented.
//         // 3. move the source element into dropped element.

//         // and trigger onDrop event.

//         console.log("on drop:", e);
//         if (this._onDrop) {
//           this._onDrop(e);
//         }
//       };
//       this.element.ondragover = (e: DragEvent) => {
//         e.preventDefault();
//         console.log("on dragover:", e);
//       };
//       this.element.ondragleave = (e: DragEvent) => {
//         console.log("on dropleave");
//         if (this._onDragLeave) {
//           this._onDragLeave(e);
//         }
//       };
//     }

//     if (this._dragEnabled) {
//       this.element.ondragstart = (e: DragEvent) => {
//         // get the data from dragging element.
//         // e.dataTransfer.setData();
//         console.log("on drag start");
//         if (this._onDragStart) {
//           this._onDragStart(e);
//         }
//       };
//     }
//   };
//   constructor(private elRef: ElementRef) {
//     this.element = elRef.nativeElement;
//   }

//   ngOnInit() {
//     this.initEvents();
//   }
//   ngOnDestroy() {
//     this.element.ondrag = undefined;
//     this.element.ondragend = undefined;
//     this.element.ondragenter = undefined;
//     this.element.ondragleave = undefined;
//     this.element.ondragover = undefined;
//     this.element.ondragstart = undefined;
//     this.element.ondrop = undefined;
//   }
// }
