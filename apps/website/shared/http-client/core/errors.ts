export class HttpError<T = unknown> extends Error {
  constructor(public readonly response: Response, public readonly data: T) {
    super(`HTTP ${response.status}: ${response.statusText}`);
    this.name = 'HTTP_ERROR';
  }
}
