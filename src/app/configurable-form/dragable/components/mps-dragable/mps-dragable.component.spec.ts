import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MpsDragableComponent } from './mps-dragable.component';

describe('MpsDragableComponent', () => {
  let component: MpsDragableComponent;
  let fixture: ComponentFixture<MpsDragableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpsDragableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MpsDragableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
