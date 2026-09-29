import { createBody } from '@/shared/http-client/core/body';
import { HttpError } from '@/shared/http-client/core/errors';
import { parseResponse } from '@/shared/http-client/core/response';
import type { IBaseRequestConfig, IHttpClientOptions, HttpMethod, RequestConfig, ResponseType } from '@/shared/http-client/core/types';
import { buildUrl } from '@/shared/http-client/core/url';

export type InternalRequestConfig = IBaseRequestConfig & { method: HttpMethod; };

export class HttpClient<TEndpoint extends string, TExtra extends object = Record<string, never>> {
  protected readonly baseUrl: string;
  protected readonly defaultHeaders: Headers;
  protected readonly responseType: ResponseType;
  protected readonly json: boolean;

  constructor(options: IHttpClientOptions) {
    this.baseUrl = options.baseUrl;
    this.defaultHeaders = new Headers(options.headers);
    this.responseType = options.responseType ?? 'json';
    this.json = options.json ?? true;
  }

  protected createFetchOptions(config: InternalRequestConfig, headers: Headers, body?: BodyInit): RequestInit {
    return {
      method: config.method,
      headers,
      body,
      signal: config.signal,
      credentials: config.credentials,
      mode: config.mode,
      cache: config.cache,
      redirect: config.redirect,
      referrer: config.referrer,
      referrerPolicy: config.referrerPolicy,
      integrity: config.integrity,
      keepalive: config.keepalive
    };
  }

  protected async execute<TResponse>(endpoint: string, config: InternalRequestConfig): Promise<TResponse> {
    const url = buildUrl(this.baseUrl, endpoint, config);
    const headers = new Headers(this.defaultHeaders);

    if (config.headers) {
      const requestHeaders = new Headers(config.headers);
      requestHeaders.forEach((value, key) => { headers.set(key, value); });
    }

    const body = createBody(config.body, headers, this.json);
    const fetchOptions = this.createFetchOptions(config, headers, body);

    const response = await fetch(url, fetchOptions);
    const data = await parseResponse<TResponse>(response, config.responseType ?? this.responseType);

    if (!response.ok) throw new HttpError(response, data);

    return data;
  }

  async request<TPath extends TEndpoint, TResponse = unknown>(endpoint: TPath, config?: RequestConfig<TPath, TExtra>): Promise<TResponse> {
    return this.execute<TResponse>(endpoint, { ...(config ?? {}), method: 'GET' });
  }

  get<TPath extends TEndpoint, TResponse = unknown>(endpoint: TPath, config?: RequestConfig<TPath, TExtra>): Promise<TResponse> {
    return this.execute<TResponse>(endpoint, { ...(config ?? {}), method: 'GET' });
  }

  post<TPath extends TEndpoint, TResponse = unknown>(
    endpoint: TPath,
    body?: BodyInit | object | null,
    config?: RequestConfig<TPath, TExtra>
  ): Promise<TResponse> {
    return this.execute<TResponse>(endpoint, {
      ...(config ?? {}),
      method: 'POST',
      body
    });
  }

  put<TPath extends TEndpoint, TResponse = unknown>(
    endpoint: TPath,
    body?: BodyInit | object | null,
    config?: RequestConfig<TPath, TExtra>
  ): Promise<TResponse> {
    return this.execute<TResponse>(endpoint, {
      ...(config ?? {}),
      method: 'PUT',
      body
    });
  }

  patch<TPath extends TEndpoint, TResponse = unknown>(
    endpoint: TPath,
    body?: BodyInit | object | null,
    config?: RequestConfig<TPath, TExtra>
  ): Promise<TResponse> {
    return this.execute<TResponse>(endpoint, {
      ...(config ?? {}),
      method: 'PATCH',
      body
    });
  }

  delete<TPath extends TEndpoint, TResponse = unknown>(endpoint: TPath, config?: RequestConfig<TPath, TExtra>): Promise<TResponse> {
    return this.execute<TResponse>(endpoint, { ...(config ?? {}), method: 'DELETE' });
  }
}
