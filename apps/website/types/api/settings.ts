import { LocationAPI } from '@/types/api/common';
import { ResponseAPI } from '@/types/api/responses';
import { Nullable } from '@/types/common';

export type SettingsAPI = {
  location: Nullable<LocationAPI>;
}

export type SettingsResponseAPI = ResponseAPI<SettingsAPI>;
