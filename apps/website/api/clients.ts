import { Endpoint } from '@/api/endpoints';
import { NextHttpClient } from '@/shared/http-client';

export const apiClient = new NextHttpClient<Endpoint>({
  baseUrl: '/'
});
