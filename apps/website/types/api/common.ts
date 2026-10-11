import { Nullable } from '@/types/common';

export type BaseLinkAPI = {
  href: string;
  isExternal?: boolean;
}

export type LinkAPI = BaseLinkAPI & {
  label: string;
}

export type LocationAPI = {
  street: string;
  buildingNumber: string;
  apartmentNumber?: Nullable<string>;
  city: string;
  postalCode: string;
  administrativeArea?: Nullable<string>;
  country: string;
}
