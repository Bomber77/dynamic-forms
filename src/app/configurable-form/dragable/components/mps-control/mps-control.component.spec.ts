import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MpsControlComponent } from './mps-control.component';

describe('MpsControlComponent', () => {
  let component: MpsControlComponent;
  let fixture: ComponentFixture<MpsControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpsControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MpsControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
