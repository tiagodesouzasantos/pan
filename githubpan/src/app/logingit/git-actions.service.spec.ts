import { TestBed } from '@angular/core/testing';

import { GitActionsService } from './git-actions.service';

describe('GitActionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitActionsService = TestBed.get(GitActionsService);
    expect(service).toBeTruthy();
  });
});
