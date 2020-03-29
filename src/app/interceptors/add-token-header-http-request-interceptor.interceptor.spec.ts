import { TestBed } from '@angular/core/testing';

import { AddTokenHeaderHttpRequestInterceptorInterceptor } from './add-token-header-http-request-interceptor.interceptor';

describe('AddTokenHeaderHttpRequestInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AddTokenHeaderHttpRequestInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AddTokenHeaderHttpRequestInterceptorInterceptor = TestBed.inject(AddTokenHeaderHttpRequestInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
