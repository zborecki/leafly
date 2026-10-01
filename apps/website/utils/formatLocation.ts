import { LocationAPI } from '@/types/api/common';
import { Nullable } from '@/types/common';
import { mergeValues } from '@/utils/mergeValues';

export const formatLocation = (location: Nullable<LocationAPI>): string => (
  mergeValues([
    location?.street,
    location?.postalCode,
    location?.city,
    location?.country
  ])
);
