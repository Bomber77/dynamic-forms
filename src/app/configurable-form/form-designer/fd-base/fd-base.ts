import { Type } from "@angular/core";

export enum InputType {
  Text,
  DropDown
}

export interface FDBaseComponent {
  title: string;
  inputType: InputType;
  order: number;
  required: boolean;
}

export class FDItem {
  constructor(public component: Type<FDBaseComponent>, public data: any) {}
}
