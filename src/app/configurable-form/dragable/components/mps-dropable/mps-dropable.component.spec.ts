import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MpsDropableComponent } from './mps-dropable.component';

describe('MpsDropableComponent', () => {
  let component: MpsDropableComponent;
  let fixture: ComponentFixture<MpsDropableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpsDropableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MpsDropableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
