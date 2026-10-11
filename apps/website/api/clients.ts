import { Endpoint } from '@/api/endpoints';
import { NextHttpClient } from '@/shared/http-client';

export const api = new NextHttpClient<Endpoint>({
  baseUrl: process.env.NEXT_PUBLIC_INTERNAL_API_BASE_URL
});

export const laravel = new NextHttpClient<Endpoint>({
  baseUrl: process.env.NEXT_PUBLIC_LARAVEL_BASE_URL
});
