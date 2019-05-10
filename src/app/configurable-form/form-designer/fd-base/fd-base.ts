import { Type } from "@angular/core";

export enum InputType {
  TextControl = "TextControl",
  DropDownControl = "DropDownControl"
}

export interface FDBaseComponent {
  title: string;
  order: number;
  required: boolean;
}

export class FDItem {
  constructor(
    public component: Type<any>,
    public inputType: InputType,
    public data: any
  ) {}
}
