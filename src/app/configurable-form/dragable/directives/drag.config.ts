import { FDBaseComponent } from "../../form-designer/fd-base/fd-base";

export enum DragItemType {
  Clone,
  CreateBy,
  Move
}
export interface DragConfig {
  type: DragItemType;
  createComponent?: FDBaseComponent;
}
