import {
  Component,
  OnInit,
  Input,
  ViewContainerRef,
  ViewChild,
  AfterViewInit,
  ComponentFactoryResolver
} from "@angular/core";
import { DragConfig } from "../../directives/drag.config";
import { ControlContentDirective } from "../../directives/control-content";
import { MpsComponentsFactoryService } from "../../../services/mps-components-factory/mps-components-factory.service";

@Component({
  selector: "mps-control",
  templateUrl: "./mps-control.component.html",
  styleUrls: ["./mps-control.component.scss"]
})
export class MpsControlComponent implements OnInit, AfterViewInit {
  private _dragConfig: DragConfig;
  @Input()
  public get dragConfig(): DragConfig {
    return this._dragConfig;
  }
  public set dragConfig(v: DragConfig) {
    this._dragConfig = v;
    this.isFake = v.isFake;
  }

  private isFake = false;

  @ViewChild(ControlContentDirective) controlContent: ControlContentDirective;

  viewContainerRef: ViewContainerRef;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private mpsComponentsFactoryService: MpsComponentsFactoryService
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.viewContainerRef = this.controlContent.viewContainerRef;
    this.generateComponent();
  }

  generateComponent() {
    if (this._dragConfig) {
      // tslint:disable-next-line:max-line-length
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
        this.mpsComponentsFactoryService.getComponentByName(
          this._dragConfig.componentType
        ).component
      );
      this.clearViewContainerRef();
      const componentRef = this.viewContainerRef.createComponent(
        componentFactory
      );
    }
  }
  clearViewContainerRef = () => {
    this.viewContainerRef.clear();
  };
}
