import type {
  BaseRequestConfig,
  HttpClientOptions
} from '../core/types';

export interface NextOptions {
  revalidate?: number | false;
  tags?: string[];
}

export interface NextHttpClientOptions
  extends HttpClientOptions {
  next?: NextOptions;
}

export interface NextRequestConfig
  extends BaseRequestConfig {
  next?: NextOptions;
}
