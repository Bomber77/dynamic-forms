import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { ConfigurableFormComponent } from "./configurable-form.component";
import { FormDesignerComponent } from "./form-designer/form-designer.component";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { RowWrapperComponent } from "./components/row-wrapper/row-wrapper.component";
import { MpsDropDirective } from "./dragable/directives/mps-drop.directive";
import { MpsDragDirective } from "./dragable/directives/mps-drag.directive";
import { MpsDropRootComponent } from "./dragable/components/mps-drop-root.component";
import { MpsDragFakeDirective } from "./dragable/directives/mps-drag-fake.directive";

@NgModule({
  declarations: [
    ConfigurableFormComponent,
    FormDesignerComponent,
    RowWrapperComponent,
    MpsDropDirective,
    MpsDragDirective,
    MpsDragFakeDirective,
    MpsDropRootComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule
  ],
  exports: [
    ConfigurableFormComponent,
    FormDesignerComponent,
    MpsDropDirective,
    MpsDragDirective
  ]
})
export class ConfigurableFormModule {}
