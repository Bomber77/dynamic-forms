import { DropDragBase } from "./drop-drag.base";
import { EventEmitter } from "@angular/core";

export interface Dragable extends DropDragBase {
  onDragStart: EventEmitter<any>;
}
