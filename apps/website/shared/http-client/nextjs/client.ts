import { HttpClient, type InternalRequestConfig } from '@/shared/http-client/core/client';
import type { INextIHttpClientOptions, INextOptions, INextRequestConfig } from '@/shared/http-client/nextjs/types';

type NextFetchOptions = RequestInit & { next?: INextOptions; };

export class NextHttpClient<TEndpoint extends string> extends HttpClient<TEndpoint, INextRequestConfig> {
  private readonly nextOptions?: INextOptions;

  constructor(options: INextIHttpClientOptions) {
    super(options);
    this.nextOptions = options.next;
  }

  protected override createFetchOptions(config: InternalRequestConfig, headers: Headers, body?: BodyInit): NextFetchOptions {
    const nextConfig = config as InternalRequestConfig & INextRequestConfig;
    const next = nextConfig.next ?? this.nextOptions;

    return {
      ...super.createFetchOptions(
        config,
        headers,
        body
      ),
      ...(next ? { next } : {})
    };
  }
}
