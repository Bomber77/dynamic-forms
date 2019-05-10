import { TestBed } from "@angular/core/testing";

import { MpsComponentsFactoryService } from "./mps-components-factory.service";

describe("MpsComponentsFactoryService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: MpsComponentsFactoryService = TestBed.get(
      MpsComponentsFactoryService
    );
    expect(service).toBeTruthy();
  });
});
