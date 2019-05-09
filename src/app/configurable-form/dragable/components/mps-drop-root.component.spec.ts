import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MpsDropRootComponent } from './mps-drop-root.component';

describe('MpsDropRootComponent', () => {
  let component: MpsDropRootComponent;
  let fixture: ComponentFixture<MpsDropRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpsDropRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MpsDropRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
