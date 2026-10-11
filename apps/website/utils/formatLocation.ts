import { LocationAPI } from '@/types/api/common';
import { Nullable } from '@/types/common';
import { mergeValues } from '@/utils/mergeValues';

export const formatLocation = (location: Nullable<LocationAPI>): string | null => {
  if (!location) return null;

  const street = location?.apartmentNumber
    ? `${location.street} ${location.buildingNumber}/${location.apartmentNumber}`
    : `${location.street} ${location.buildingNumber}`;

  return mergeValues([
    street,
    location.postalCode,
    location.city,
    location.country
  ]);
};
