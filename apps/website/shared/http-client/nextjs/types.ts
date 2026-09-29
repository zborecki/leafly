import type { IHttpClientOptions } from '@/shared/http-client/core/types';

export interface INextOptions {
  revalidate?: number | false;
  tags?: string[];
}

export interface INextIHttpClientOptions extends IHttpClientOptions {
  next?: INextOptions;
}

export interface INextRequestConfig {
  next?: INextOptions;
}
