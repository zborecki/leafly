/* eslint-disable max-lines */
import {
  createBody
} from './body';
import {
  HttpError
} from './errors';
import {
  parseResponse
} from './response';
import type {
  BaseRequestConfig,
  HttpClientOptions,
  HttpMethod,
  ResponseType
} from './types';
import {
  buildUrl
} from './url';

import type {
  RequestConfig
} from '../endpoints/types';

export type InternalRequestConfig =
  BaseRequestConfig & {
    method: HttpMethod;
  };

export class HttpClient<
  TEndpoint extends string,
> {
  protected readonly baseUrl: string;

  protected readonly defaultHeaders: Headers;

  protected readonly defaultResponseType: ResponseType;

  protected readonly json: boolean;

  constructor(
    options: HttpClientOptions
  ) {
    this.baseUrl = options.baseUrl;

    this.defaultHeaders = new Headers(
      options.headers
    );

    this.defaultResponseType =
      options.responseType ?? 'json';

    this.json =
      options.json ?? true;
  }

  protected createHeaders(
    config: BaseRequestConfig
  ): Headers {
    const headers = new Headers(
      this.defaultHeaders
    );

    if (config.headers) {
      const requestHeaders =
        new Headers(config.headers);

      requestHeaders.forEach(
        (value, key) => {
          headers.set(key, value);
        }
      );
    }

    return headers;
  }

  protected async execute<
    TResponse,
  >(
    endpoint: string,
    config: InternalRequestConfig
  ): Promise<TResponse> {
    const url = buildUrl(
      this.baseUrl,
      endpoint,
      config as never
    );

    const headers =
      this.createHeaders(config);

    const body = createBody(
      config.body,
      headers,
      this.json
    );

    const response = await fetch(
      url,
      {
        ...config.fetchOptions,

        method: config.method,

        headers,

        body,

        signal: config.signal,

        credentials:
          config.credentials,

        mode: config.mode,

        cache: config.cache,

        redirect: config.redirect,

        referrer: config.referrer,

        referrerPolicy:
          config.referrerPolicy,

        integrity:
          config.integrity,

        keepalive:
          config.keepalive
      }
    );

    const responseType =
      config.responseType ??
      this.defaultResponseType;

    if (!response.ok) {
      let data: TResponse;

      try {
        data =
          await parseResponse<TResponse>(
            response,
            responseType
          );
      } catch {
        data =
          undefined as TResponse;
      }

      throw new HttpError(
        response,
        data
      );
    }

    return parseResponse<TResponse>(
      response,
      responseType
    );
  }

  async request<
    TResponse = unknown,
    TPath extends TEndpoint = TEndpoint,
  >(
    endpoint: TPath,
    config?: RequestConfig<TPath>
  ): Promise<TResponse> {
    return this.execute<TResponse>(
      endpoint,
      {
        ...(config ?? {}),
        method: 'GET'
      }
    );
  }

  protected createFetchOptions(
    config: InternalRequestConfig,
    headers: Headers,
    body?: BodyInit
  ): RequestInit {
    return {
      ...config.fetchOptions,

      method: config.method,

      headers,

      body,

      signal: config.signal,

      credentials: config.credentials,

      mode: config.mode,

      cache: config.cache,

      redirect: config.redirect,

      referrer: config.referrer,

      referrerPolicy:
        config.referrerPolicy,

      integrity: config.integrity,

      keepalive: config.keepalive
    };
  }

  get<
    TPath extends TEndpoint,
    TResponse = unknown,
  >(
    endpoint: TPath,
    config?: RequestConfig<TPath>
  ): Promise<TResponse> {
    return this.execute<TResponse>(
      endpoint,
      {
        ...(config ?? {}),
        method: 'GET'
      }
    );
  }

  post<
    TPath extends TEndpoint,
    TResponse = unknown,
  >(
    endpoint: TPath,
    body?: BodyInit | object | null,
    config?: RequestConfig<TPath>
  ): Promise<TResponse> {
    return this.execute<TResponse>(
      endpoint,
      {
        ...(config ?? {}),
        method: 'POST',
        body
      }
    );
  }

  put<
    TPath extends TEndpoint,
    TResponse = unknown,
  >(
    endpoint: TPath,
    body?: BodyInit | object | null,
    config?: RequestConfig<TPath>
  ): Promise<TResponse> {
    return this.execute<TResponse>(
      endpoint,
      {
        ...(config ?? {}),
        method: 'PUT',
        body
      }
    );
  }

  patch<
    TPath extends TEndpoint,
    TResponse = unknown,
  >(
    endpoint: TPath,
    body?: BodyInit | object | null,
    config?: RequestConfig<TPath>
  ): Promise<TResponse> {
    return this.execute<TResponse>(
      endpoint,
      {
        ...(config ?? {}),
        method: 'PATCH',
        body
      }
    );
  }

  delete<
    TPath extends TEndpoint,
    TResponse = unknown,
  >(
    endpoint: TPath,
    config?: RequestConfig<TPath>
  ): Promise<TResponse> {
    return this.execute<TResponse>(
      endpoint,
      {
        ...(config ?? {}),
        method: 'DELETE'
      }
    );
  }
}
