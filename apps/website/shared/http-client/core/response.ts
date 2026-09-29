import type { ResponseType } from '@/shared/http-client/core/types';

export async function parseResponse<T>(response: Response, responseType: ResponseType): Promise<T> {
  if (response.status === 204 || response.status === 205) return undefined as T;

  switch (responseType) {
    case 'text':
      return (await response.text()) as T;
    case 'blob':
      return (await response.blob()) as T;
    case 'arrayBuffer':
      return (await response.arrayBuffer()) as T;
    case 'formData':
      return (await response.formData()) as T;
    case 'json':
    default: {
      const contentType = response.headers.get('content-type') ?? '';

      /**
       * Parse JSON responses normally.
       */
      if (contentType.includes('application/json')) {
        return (await response.json()) as T;
      }

      /**
       * Some APIs do not return a proper Content-Type.
       * Try to parse the response as JSON manually.
       */
      const text = await response.text();

      if (!text) return undefined as T;

      try {
        return JSON.parse(text) as T;
      } catch {
        return text as T;
      }
    }
  }
}
