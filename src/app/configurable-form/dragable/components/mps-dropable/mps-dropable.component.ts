import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ComponentFactoryResolver,
  ViewContainerRef
} from "@angular/core";
import { MpsDragFakeDirective } from "../../directives/mps-drag-fake.directive";
import { MpsComponentsFactoryService } from "../../../services/mps-components-factory/mps-components-factory.service";
import { DragConfig, DragItemType } from "../../directives/drag.config";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "mps-dropable",
  templateUrl: "./mps-dropable.component.html",
  styleUrls: ["./mps-dropable.component.scss"]
})
export class MpsDropableComponent implements AfterViewInit {
  inputControls: DragConfig[];

  curDragConfig: DragConfig;

  dragItemEnter = false;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private mpsComponentsFactoryService: MpsComponentsFactoryService
  ) {}

  onDragEnterHandle = (e: DragConfig) => {
    console.log("drag enter:", e);
    this.curDragConfig = e;
    this.dragItemEnter = true;
    switch (e.dragType) {
      case DragItemType.CreateBy:
        this.generateComponent(e, true);
        break;
      case DragItemType.Clone:
        break;
      case DragItemType.Move:
        break;
    }
  }

  onDragMovingHandle = e => {};

  onDragDoneHandle = e => {
    this.dragItemEnter = false;
    console.log("onDragDoneHandle:", e);
    this.clearFake();
    this.generateComponent(this.curDragConfig, false);
    this.curDragConfig = undefined;
  }

  onDragLeaveHandle = e => {
    this.dragItemEnter = false;
    console.log("drag leave:", e);
    this.clearFake();
    this.curDragConfig = undefined;
  }

  clearFake = () => {
    const fakedIndex = this.inputControls.findIndex(control => control.isFake);
    if (fakedIndex > -1) {
      this.inputControls.splice(fakedIndex, 1);
    }
  }

  generateComponent = (config: DragConfig, isFake: boolean) => {
    if (!Array.isArray(this.inputControls)) {
      this.inputControls = [];
    }
    this.inputControls.push({ isFake, ...config });
    console.log("this.inputControls:", this.inputControls);
  }

  ngAfterViewInit(): void {}
}
