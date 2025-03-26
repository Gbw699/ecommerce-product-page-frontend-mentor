import { TestBed } from '@angular/core/testing';

import { OffScreenMenuService } from './off-screen-menu.service';

describe('OffScreenMenuService', () => {
  let service: OffScreenMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OffScreenMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
