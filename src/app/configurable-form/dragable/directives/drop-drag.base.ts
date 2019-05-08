import { Injectable, ChangeDetectorRef, ViewRef, Output } from "@angular/core";
import { ElementRef } from "@angular/core";

@Injectable()
export abstract class DropDragBase {
  element: HTMLElement;
  target: EventTarget;

  // tslint:disable-next-line:no-inferrable-types
  private _dragEnabled: boolean = false;
  
  
  set dragEnabled(enable: boolean) {
    this._dragEnabled = enable;
    this.element.draggable = this._dragEnabled;
  }
  get dragEnabled(): boolean {
    return this._dragEnabled;
  }
  
  private _drogEnabled: boolean = false;
  set drogEnabled(enable: boolean) {
    this._drogEnabled = enable;
  }
  get drogEnabled(){
    return this._drogEnabled;
  }
  
  private _onDragEnter: (event: DragEvent) => void;
  private _onDrop: (event: DragEvent) => void;
  private _onDragOver: (event: DragEvent) => void;
  private _onDragStart: (event: DragEvent) => void;
  private _onDragLeave: (event: DragEvent) => void;
  
  /**
   * regiter all of events of drop and drag.
   */
  initEvents = () => {
    this.element.ondragenter = (e: DragEvent) => {
       this._onDragEnter && this._onDragEnter(e);
    };

    this.element.ondrop = (e: DragEvent) => {
      if(this._drogEnabled){

        // call preventDefault to break process of drop event by default.
        e.preventDefault();
        // do action after drop in it.
        // 
        // 1. clone the source element.
        // 2. create a new element based on type of srouce element presented.
        // 3. move the source element into dropped element. 
        
        // and trigger onDrop event.
        
        console.log("on drog:", e);
        this._onDrop && this._onDrop(e);
      }
    };

    this.element.ondragover = (e: DragEvent) => {
      this._onDragOver && this._onDragOver(e);
    };

    this.element.ondragstart = (e: DragEvent) => {
      // get the data from dragging element.
      // e.dataTransfer.setData();

      this._onDragStart && this._onDragStart(e);
    };

    this.element.ondragleave = (e: DragEvent) => {
      this._onDragLeave && this._onDragLeave(e);
    }
  };
  constructor(private elRef: ElementRef) {
    this.element = elRef.nativeElement;
    this.initEvents();
  }
}
