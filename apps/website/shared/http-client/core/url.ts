import type { FilterParams, ParamValue, SearchParamValue } from '@/shared/http-client/core/types';

interface IBuildUrlConfig {
  params?: Record<string, ParamValue>;
  searchParams?: Record<string, SearchParamValue>;
  filterParams?: FilterParams;
}

function serializeValue(value: ParamValue): string | undefined {
  if (value === null || value === undefined) return undefined;

  if (value instanceof Date) return value.toISOString();

  return String(value);
}

function appendSearchParam(searchParams: URLSearchParams, key: string, value: SearchParamValue): void {
  if (value === null || value === undefined) return;

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

export function buildUrl(baseUrl: string, endpoint: string, config: IBuildUrlConfig): string {
  let url = `${baseUrl}${endpoint}`;

  if (config.params) {
    url = url.replace(/:([A-Za-z0-9_]+)/g, (_, key: string) => {
      const value = config.params?.[key];

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

  if (config.searchParams) {
    for (const [key, value] of Object.entries(config.searchParams)) {
      appendSearchParam(searchParams, key, value);
    }
  }

  if (config.filterParams) {
    appendFilterParams(searchParams, config.filterParams);
  }

  const query = searchParams.toString();

  if (!query) return url;

  return `${url}${url.includes('?') ? '&' : '?'}${query}`;
}
