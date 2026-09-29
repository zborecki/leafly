/* eslint-disable max-lines */
import type { FilterParams, ParamValue, SearchParamValue } from '@/shared/http-client/core/types';
import type { RequestConfig } from '@/shared/http-client/endpoints/types';

function serializeValue(value: ParamValue): string | undefined {
  if (value === null || value === undefined) return undefined;

  if (value instanceof Date) return value.toISOString();

  return String(value);
}

function appendSearchParam(searchParams: URLSearchParams, key: string, value: SearchParamValue): void {
  if (value === null || value === undefined) return;

  /**
   * Arrays are serialized as repeated query parameters.
   *
   * tags: ["foo", "bar"]
   *
   * becomes:
   * tags=foo&tags=bar
   */
  if (Array.isArray(value)) {
    for (const item of value) {
      const serialized = serializeValue(item);

      if (serialized !== undefined) {
        searchParams.append(key, serialized);
      }
    }

    return;
  }

  const serialized = serializeValue(value);

  if (serialized !== undefined) {
    searchParams.append(key, serialized);
  }
}

function appendFilterParams(searchParams: URLSearchParams, filterParams: FilterParams): void {
  for (const [key, value] of Object.entries(filterParams)) {
    /**
     * Arrays are serialized as repeated filter parameters.
     *
     * status: ["active", "pending"]
     *
     * becomes:
     * filter[status]=active&filter[status]=pending
     */
    if (Array.isArray(value)) {
      for (const item of value) {
        const serialized = serializeValue(item);

        if (serialized !== undefined) {
          searchParams.append(`filter[${key}]`, serialized);
        }
      }

      continue;
    }

    const serialized = serializeValue(value);

    if (serialized !== undefined) {
      searchParams.append(`filter[${key}]`, serialized);
    }
  }
}

export function buildUrl<TEndpoint extends string>(baseUrl: string, endpoint: TEndpoint, config: RequestConfig<TEndpoint>): string {
  /**
   * Combine the base URL and endpoint.
   */
  let url = `${baseUrl}${endpoint}`;

  /**
   * Replace dynamic path parameters.
   *
   * /users/:id/posts/:postId
   *
   * becomes:
   *
   * /users/123/posts/456
   */
  if ('params' in config && config.params) {
    url = url.replace(/:([A-Za-z0-9_]+)/g, (_, key: string) => {
      const value = config.params[key as keyof typeof config.params];

      if (value === undefined || value === null) {
        throw new Error(`Missing URL parameter "${key}"`);
      }

      const serialized = serializeValue(value);

      if (serialized === undefined) {
        throw new Error(`Invalid URL parameter "${key}"`);
      }

      return encodeURIComponent(serialized);
    });
  }

  const searchParams = new URLSearchParams();

  /**
   * Append regular query parameters.
   */
  if (config.searchParams) {
    for (const [key, value] of Object.entries(config.searchParams)) {
      appendSearchParam(searchParams, key, value);
    }
  }

  /**
   * Append filter query parameters.
   */
  if (config.filterParams) {
    appendFilterParams(searchParams, config.filterParams);
  }

  const query = searchParams.toString();

  if (!query) return url;

  return `${url}${url.includes('?') ? '&' : '?'}${query}`;
}
