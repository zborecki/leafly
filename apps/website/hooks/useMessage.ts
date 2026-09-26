'use client';

import { useTranslations } from 'next-intl';

import { Message } from '@/types/common';

export const useMessages = () => {
  const t = useTranslations();

  const translate = (message: Message) => t.has(message as never) ? t(message as never) : message;

  return {
    t: translate
  };
};
