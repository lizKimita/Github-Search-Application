import { TestBed } from '@angular/core/testing';

import { RepoDetailsService } from './repo-details.service';

describe('RepoDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RepoDetailsService = TestBed.get(RepoDetailsService);
    expect(service).toBeTruthy();
  });
});
