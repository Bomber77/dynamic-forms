import {
  FDBaseComponent,
  FDItem,
  InputType
} from "../../form-designer/fd-base/fd-base";

export enum DragItemType {
  Clone,
  CreateBy,
  Move
}
export interface DragConfig {
  dragType: DragItemType;
  componentType: InputType;
}
