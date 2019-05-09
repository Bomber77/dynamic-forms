import { Component } from "@angular/core";
import { Observable, Subject, of, NEVER, throwError, empty } from "rxjs";
import { switchMap, tap, debounceTime, catchError, map } from "rxjs/operators";
import { DragConfig } from "./configurable-form/dragable/directives/drag.config";

const str2Json = str => {
  try {
    return JSON.parse(str.replace(/\r?\n|\r/g, ""));
  } catch (error) {
    return { error: "your input is not a JSON." };
  }
};
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  dragConfig: DragConfig;
  constructor() {}
}
