import { Endpoint } from './endpoints';

import { NextHttpClient } from '@/shared/http-client/nextjs/client';

export const apiClient = new NextHttpClient<Endpoint>({
  baseUrl: '/'
});

const x = apiClient.get('api/v1/settings', {

});
