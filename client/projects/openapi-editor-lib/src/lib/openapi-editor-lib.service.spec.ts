import { TestBed } from '@angular/core/testing';

import { OpenapiEditorLibService } from './openapi-editor-lib.service';

describe('OpenapiEditorLibService', () => {
  let service: OpenapiEditorLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenapiEditorLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
