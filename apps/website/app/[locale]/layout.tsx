import { cn } from '@heroui/styles';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getTranslations } from 'next-intl/server';
import { PropsWithChildren } from 'react';

import '@/theme/css/globals.css';

export async function generateMetadata(): Promise<Metadata | undefined> {
  const t = await getTranslations();

  return {
    description: t('metadata.default_description'),
    title: {
      default: 'Leafly',
      template: '%s | Leafly'
    }
  };
}

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--poppins-font',
  weight: ['400']
});

const RootLayout = async ({ children }: PropsWithChildren) => {
  const locale = await getLocale();

  return (
    <html
      data-env={process.env.NODE_ENV}
      data-theme="light"
      data-version={process.env.APP_VERSION}
      lang={locale}
    >
      <body className={cn(poppins.variable)}>
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
