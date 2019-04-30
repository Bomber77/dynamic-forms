import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "form-designer",
  templateUrl: "./form-designer.component.html",
  styleUrls: ["./form-designer.component.scss"]
})
export class FormDesignerComponent implements OnInit {
  form: FormGroup;
  constructor() {}

  ngOnInit() {
    // this.form = new FormGroup()
  }
}
