export type HttpMethod =
  | 'GET'
  | 'POST'
  | 'PUT'
  | 'PATCH'
  | 'DELETE'
  ;

export type ResponseType =
  | 'json'
  | 'text'
  | 'blob'
  | 'arrayBuffer'
  | 'formData';

export type Primitive =
  | string
  | number
  | boolean
  | bigint
  | null
  | undefined;

export type ParamValue = Primitive | Date;

export type SearchParamValue = Primitive | Date | Primitive[] | Date[];

export type SearchParams = Record<string, SearchParamValue>;

export type FilterParams = Record<string, SearchParamValue>;

export interface IHttpClientOptions {
  baseUrl?: string;
  headers?: HeadersInit;
  responseType?: ResponseType;
  json?: boolean;
}

export interface IBaseRequestConfig {
  searchParams?: SearchParams;
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
}

export type ExtractParamNames<T extends string> = T extends `${string}:${infer Param}/${infer Rest}`
  ? Param | ExtractParamNames<`/${Rest}`> : T extends `${string}:${infer Param}` ? Param : never;

export type ParamsFor<T extends string> = [ExtractParamNames<T>] extends [never]
  ? never
  : {
    [K in ExtractParamNames<T>]:
    ParamValue;
  };

export type RequestConfig<
  TPath extends string,
  TExtra extends object = Record<string, never>,
> = [ExtractParamNames<TPath>] extends [never]
  ? IBaseRequestConfig & TExtra
  : IBaseRequestConfig & TExtra & {
    params: ParamsFor<TPath>;
  };
