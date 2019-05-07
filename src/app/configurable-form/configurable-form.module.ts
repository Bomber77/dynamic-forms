import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { ConfigurableFormComponent } from "./configurable-form.component";
import { FormDesignerComponent } from "./form-designer/form-designer.component";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { RowWrapperComponent } from "./components/row-wrapper/row-wrapper.component";
import { MpsDropableComponent } from "./dragable/components/mps-dropable/mps-dropable.component";
import { MpsDragableComponent } from "./dragable/components/mps-dragable/mps-dragable.component";
import { MpsDropDirective } from './dragable/directives/mps-drop.directive';
import { MpsDragDirective } from './dragable/directives/mps-drag.directive';

@NgModule({
  declarations: [
    ConfigurableFormComponent,
    FormDesignerComponent,
    RowWrapperComponent,
    MpsDropableComponent,
    MpsDragableComponent,
    MpsDropDirective,
    MpsDragDirective
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
    MpsDropableComponent,
    MpsDragableComponent
  ]
})
export class ConfigurableFormModule {}
