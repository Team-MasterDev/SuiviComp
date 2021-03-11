import { TestBed } from '@angular/core/testing';

import { LinkPalyerService } from './link-palyer.service';

describe('LinkPalyerService', () => {
  let service: LinkPalyerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinkPalyerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
