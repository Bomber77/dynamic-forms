import { Component, OnInit } from "@angular/core";
import {
  FDBaseComponent,
  InputType
} from "../../form-designer/fd-base/fd-base";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "mps-text-input",
  templateUrl: "./mps-text-input.component.html",
  styleUrls: ["./mps-text-input.component.scss"]
})
export class MpsTextInputComponent implements FDBaseComponent {
  title: string;
  inputType: InputType;
  order: number;
  required: boolean;

  constructor() {}
}
