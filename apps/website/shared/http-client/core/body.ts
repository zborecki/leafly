import type { IBaseRequestConfig } from '@/shared/http-client/core/types';

function isPlainObject(value: unknown): value is Record<string, unknown> {
  if (typeof value !== 'object' || value === null) return false;

  const prototype = Object.getPrototypeOf(value);

  return (prototype === Object.prototype || prototype === null);
}

export function createBody(body: IBaseRequestConfig['body'], headers: Headers, json: boolean): BodyInit | undefined {
  if (body === undefined || body === null) return undefined;

  /**
   * These body types are already supported by fetch()
   * and should not be serialized.
   */
  if (
    typeof body === 'string' ||
    body instanceof FormData ||
    body instanceof Blob ||
    body instanceof ArrayBuffer ||
    body instanceof URLSearchParams ||
    body instanceof ReadableStream
  ) {
    return body as BodyInit;
  }

  /**
   * Serialize plain objects as JSON.
   */
  if (json && isPlainObject(body)) {
    if (!headers.has('Content-Type')) {
      headers.set('Content-Type', 'application/json');
    }

    return JSON.stringify(body);
  }

  return body as BodyInit;
}
