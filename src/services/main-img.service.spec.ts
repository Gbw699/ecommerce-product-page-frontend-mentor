import { TestBed } from '@angular/core/testing';

import { MainImgService } from './main-img.service';

describe('MainImgService', () => {
  let service: MainImgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainImgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
