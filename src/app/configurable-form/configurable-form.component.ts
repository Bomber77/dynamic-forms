import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MpsInputBase } from "./components/mps-input-base/mps-input-base";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "configurable-form",
  templateUrl: "./configurable-form.component.html",
  styleUrls: ["./configurable-form.component.scss"]
})
export class ConfigurableFormComponent implements OnInit {
  form: FormGroup;
  @Input() mpsInputs: MpsInputBase<any>[] = [];
  constructor() {}

  ngOnInit() {
    // this.form = new FormGroup();
  }
}
