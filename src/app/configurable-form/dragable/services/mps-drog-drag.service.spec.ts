import { TestBed } from '@angular/core/testing';

import { MpsDrogDragService } from './mps-drog-drag.service';

describe('MpsDrogDragService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MpsDrogDragService = TestBed.get(MpsDrogDragService);
    expect(service).toBeTruthy();
  });
});
