import { Injectable } from "@angular/core";
import { DragConfig } from "../directives/drag.config";

@Injectable()
export class MpsDrogDragService {
  private _curElementType: DragConfig;
  get curElementType(): DragConfig {
    return this._curElementType;
  }
  set curElementType(v: DragConfig) {
    this._curElementType = v;
  }

  constructor() {}
}
