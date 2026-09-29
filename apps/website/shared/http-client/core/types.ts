export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export type ResponseType = 'json' | 'text' | 'blob' | 'arrayBuffer' | 'formData';

export type Primitive = string | number | boolean | null | undefined;

export type ParamValue = Primitive | Date;

export type SearchParamValue = Primitive | Date | Primitive[] | Date[];

export type SearchParams = Record<string, SearchParamValue>;

export type FilterParams = Record<string, SearchParamValue>;

export interface HttpClientOptions {
  baseUrl: string;
  headers?: HeadersInit;
  responseType?: ResponseType;

  /**
   * Automatically serialize plain objects to JSON.
   */
  json?: boolean;
}

export interface BaseRequestConfig {
  /**
   * Query string parameters.
   *
   * Example:
   * ?page=1&search=test
   */
  searchParams?: SearchParams;

  /**
   * Filter query parameters.
   *
   * Example:
   * ?filter[status]=active
   */
  filterParams?: FilterParams;
  headers?: HeadersInit;
  body?: BodyInit | object | null;
  responseType?: ResponseType;
  signal?: AbortSignal;
  credentials?: RequestCredentials;
  mode?: RequestMode;
  cache?: RequestCache;
  redirect?: RequestRedirect;
  referrer?: string;
  referrerPolicy?: ReferrerPolicy;
  integrity?: string;
  keepalive?: boolean;

  /**
   * Additional options passed directly to fetch().
   */
  fetchOptions?: Omit<RequestInit, 'method' | 'headers' | 'body' | 'signal'>;
}
