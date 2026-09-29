import type {
  NextHttpClientOptions,
  NextOptions
} from './types';

import {
  HttpClient,
  type InternalRequestConfig
} from '../core/client';

type NextFetchOptions =
  RequestInit & {
    next?: NextOptions;
  };

export class NextHttpClient<
  TEndpoint extends string,
> extends HttpClient<TEndpoint> {
  private readonly nextOptions?: NextOptions;

  constructor(
    options: NextHttpClientOptions
  ) {
    super(options);

    this.nextOptions =
      options.next;
  }

  protected override createFetchOptions(
    config: InternalRequestConfig,
    headers: Headers,
    body?: BodyInit
  ): NextFetchOptions {
    const next =
      this.nextOptions
        ? {
          ...this.nextOptions
        }
        : undefined;

    return {
      ...super.createFetchOptions(
        config,
        headers,
        body
      ),

      ...(next
        ? { next }
        : {})
    };
  }
}
