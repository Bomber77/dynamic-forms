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
import { DragConfig } from "../../directives/drag.config";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "mps-dropable",
  templateUrl: "./mps-dropable.component.html",
  styleUrls: ["./mps-dropable.component.scss"]
})
export class MpsDropableComponent implements AfterViewInit {
  @ViewChild(MpsDragFakeDirective) mpsDragFake: MpsDragFakeDirective;

  viewContainerRef: ViewContainerRef;

  dragItemEnter = false;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private mpsComponentsFactoryService: MpsComponentsFactoryService
  ) {}

  onDragEnterHandle = e => {
    this.dragItemEnter = true;
    this.generateFakeComponent(e);
  }

  onDragMovingHandle = e => {};

  onDragDoneHandle = e => {
    this.dragItemEnter = false;
    console.log("onDragDoneHandle:", e);
  }

  onDragLeaveHandle = e => {
    this.dragItemEnter = false;
    this.clearViewContainerRef();
  }

  clearViewContainerRef = () => {
    this.viewContainerRef.clear();
  }

  generateFakeComponent = (config: DragConfig) => {
    if (config) {
      // tslint:disable-next-line:max-line-length
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
        this.mpsComponentsFactoryService.getComponentByName(
          config.componentType
        ).component
      );

      this.clearViewContainerRef();

      const componentRef = this.viewContainerRef.createComponent(
        componentFactory
      );
    }
  }

  ngAfterViewInit(): void {
    this.viewContainerRef = this.mpsDragFake.viewContainerRef;
  }
}
