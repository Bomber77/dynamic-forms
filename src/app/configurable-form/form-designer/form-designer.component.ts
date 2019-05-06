import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { RowWrapperModel } from '../components/row-wrapper/row-wrapper.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: "form-designer",
  templateUrl: "./form-designer.component.html",
  styleUrls: ["./form-designer.component.scss"]
})
export class FormDesignerComponent implements OnInit {
  form: FormGroup;
  rowWrappers: RowWrapperModel[]; 
  constructor() {}

  ngOnInit() {
    this.rowWrappers = [{id: 1, name: "1"}];
    // this.form = new FormGroup()
  }
}
