export type BaseLinkAPI = {
  href: string;
  isExternal?: boolean;
}

export type LinkAPI = BaseLinkAPI & {
  label: string;
}

export type LocationAPI = {
  street: string;
  city: string;
  postalCode: string;
  country: string;
}
