import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ConfigurableFormComponent } from "./configurable-form.component";

describe("ConfigurableFormComponent", () => {
  let component: ConfigurableFormComponent;
  let fixture: ComponentFixture<ConfigurableFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConfigurableFormComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurableFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
