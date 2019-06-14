import { DropDragBase } from "./drop-drag.base";
import { EventEmitter } from "@angular/core";

export interface Dragable {
  onDragStart: EventEmitter<any>;
}
