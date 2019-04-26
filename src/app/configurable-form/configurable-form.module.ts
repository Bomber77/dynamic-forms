import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { ConfigurableFormComponent } from "./configurable-form.component";

@NgModule({
  declarations: [ConfigurableFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ConfigurableFormComponent]
})
export class ConfigurableFormModule {}
