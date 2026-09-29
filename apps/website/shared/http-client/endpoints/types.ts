import type { IBaseRequestConfig, ParamValue } from '@/shared/http-client/core/types';

/**
 * Extract parameter names from an endpoint.
 *
 * "/users/:id"
 * -> "id"
 *
 * "/users/:id/posts/:postId"
 * -> "id" | "postId"
 */
export type ExtractParamNames<T extends string> = T extends `${string}:${infer Param}/${infer Rest}`
  ? Param | ExtractParamNames<`/${Rest}`>
  : T extends `${string}:${infer Param}` ? Param : never;

/**
 * Build a params object from extracted parameter names.
 *
 * "id" | "postId"
 *
 * becomes:
 *
 * {
 *   id: ParamValue;
 *   postId: ParamValue;
 * }
 */
export type ParamsFor<T extends string> = [ExtractParamNames<T>] extends [never]
  ? never
  : {
    [K in ExtractParamNames<T>]:
    ParamValue;
  };

/**
 * Build a request configuration based on the endpoint.
 *
 * Endpoints without dynamic parameters do not expose
 * the `params` property.
 *
 * Endpoints with dynamic parameters require all
 * extracted parameters.
 */
export type RequestConfig<
  TPath extends string,
  TExtra extends object = Record<string, never>,
> = [ExtractParamNames<TPath>] extends [never]
  ? IBaseRequestConfig & TExtra
  : IBaseRequestConfig &
  TExtra & {
    params: ParamsFor<TPath>;
  };
