import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

import nodeConfig from './package.json' with {type: 'json'};

const nextConfig: NextConfig = {
  env: {
    APP_VERSION: nodeConfig.version
  },
  reactCompiler: true,
  experimental: {
    typedEnv: true
  }
};

const withNextIntl = createNextIntlPlugin('./i18n/request-config.ts');

export default withNextIntl(nextConfig);;
