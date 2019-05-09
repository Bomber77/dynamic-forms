import { DropDragBase } from "./drop-drag.base";
import { EventEmitter } from "@angular/core";

export interface Dropable extends DropDragBase {
  onDragDone: EventEmitter<any>;
}
