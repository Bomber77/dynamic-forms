import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { ConfigurableFormComponent } from "./configurable-form.component";
import { FormDesignerComponent } from "./form-designer/form-designer.component";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { RowWrapperComponent } from './components/row-wrapper/row-wrapper.component';

@NgModule({
  declarations: [ConfigurableFormComponent, FormDesignerComponent, RowWrapperComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule
  ],
  exports: [ConfigurableFormComponent, FormDesignerComponent]
})
export class ConfigurableFormModule {}
