import { Component } from "@angular/core";
import { Observable, Subject, of, NEVER, throwError, empty } from "rxjs";
import { switchMap, tap, debounceTime, catchError, map } from "rxjs/operators";

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
  title = "dynamic-forms";
  jsonObj = "";
  jsonOption$: Observable<any>;
  editorValue$ = new Subject();

  onChange(value) {
    this.editorValue$.next(value);
  }

  allowDrop(e) {
    e.preventDefault();
  }

  drop(e) {
    e.preventDefault();
    const data = e.dataTransfer.getData("text");
    // e.target.appendChild(document.getElementById(data));
    console.log("drop: ", data);
  }

  drag(e) {
    e.dataTransfer.setData("text", e.target.id);
    // console.log("drag: ", e);
  }

  constructor() {
    this.jsonOption$ = this.editorValue$.pipe(
      debounceTime(500),
      switchMap(val => of(str2Json(val))),
      catchError(val => {
        if (val["error"]) {
          return empty;
        }
      }),
      tap(console.log)
    );
  }
}
