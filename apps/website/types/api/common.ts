export type BaseLinkAPI = {
  href: string;
  isExternal?: boolean;
}

export type LinkAPI = BaseLinkAPI & {
  label: string;
}
