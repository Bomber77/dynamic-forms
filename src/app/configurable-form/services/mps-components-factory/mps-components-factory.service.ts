import { Injectable, Component } from "@angular/core";
import {
  FDBaseComponent,
  FDItem,
  InputType
} from "../../form-designer/fd-base/fd-base";
import { MpsTextInputComponent } from "../../components/mps-text-input/mps-text-input.component";

@Injectable()
export class MpsComponentsFactoryService {
  FDComponents: FDItem[];

  getComponentByName: (name: string) => FDItem = (name: string) => {
    return this.FDComponents.find(item => item.inputType.toString() === name);
  }
  constructor() {
    this.FDComponents = [
      new FDItem(MpsTextInputComponent, InputType.TextControl, {})
    ];
  }
}
