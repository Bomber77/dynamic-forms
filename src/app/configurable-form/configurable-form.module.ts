import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { ConfigurableFormComponent } from "./configurable-form.component";
import { FormDesignerComponent } from "./form-designer/form-designer.component";
import { NgZorroAntdModule } from "ng-zorro-antd";

import { MpsDropDirective } from "./dragable/directives/mps-drop.directive";
import { MpsDragDirective } from "./dragable/directives/mps-drag.directive";
import { MpsDropRootComponent } from "./dragable/components/mps-drop-root.component";
import { MpsDropableComponent } from "./dragable/components/mps-dropable/mps-dropable.component";
import { MpsTextInputComponent } from "./components/mps-text-input/mps-text-input.component";
import { MpsComponentsFactoryService } from "./services/mps-components-factory/mps-components-factory.service";
import { MpsDrogDragService } from "./dragable/services/mps-drog-drag.service";
import { MpsControlComponent } from "./dragable/components/mps-control/mps-control.component";
import { ControlContentDirective } from "./dragable/directives/control-content";

@NgModule({
  declarations: [
    ConfigurableFormComponent,
    FormDesignerComponent,
    MpsDropDirective,
    MpsDragDirective,
    ControlContentDirective,
    MpsDropRootComponent,
    MpsDropableComponent,
    MpsTextInputComponent,
    MpsControlComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule
  ],
  providers: [MpsComponentsFactoryService, MpsDrogDragService],
  entryComponents: [MpsTextInputComponent, MpsControlComponent],
  exports: [
    ConfigurableFormComponent,
    FormDesignerComponent,
    MpsDropDirective,
    MpsDragDirective
  ]
})
export class ConfigurableFormModule {}
