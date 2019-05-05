import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowWrapperComponent } from './row-wrapper.component';

describe('RowWrapperComponent', () => {
  let component: RowWrapperComponent;
  let fixture: ComponentFixture<RowWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
