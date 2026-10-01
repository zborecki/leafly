export const mergeValues = (values: (string | number | null | undefined)[], separator = ', '): string =>
  values.filter((value) => value !== null && value !== undefined).join(separator);
