import { Injectable, ChangeDetectorRef, ViewRef } from "@angular/core";
import { ElementRef } from "@angular/core";

@Injectable()
export abstract class DropableBase {
  constructor(private elRef: ElementRef) {}
}
