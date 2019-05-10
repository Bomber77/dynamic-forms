import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MpsTextInputComponent } from './mps-text-input.component';

describe('MpsTextInputComponent', () => {
  let component: MpsTextInputComponent;
  let fixture: ComponentFixture<MpsTextInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpsTextInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MpsTextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
