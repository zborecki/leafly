import { Endpoint } from '@/api/endpoints';
import { NextHttpClient } from '@/shared/http-client';

export const api = new NextHttpClient<Endpoint>({
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL_API
});
