import { TestBed } from '@angular/core/testing';

import { AllPostsService } from './all-posts.service';

describe('AllPostsService', () => {
  let service: AllPostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllPostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
