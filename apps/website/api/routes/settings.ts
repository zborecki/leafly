import { api } from '@/api/clients';
import { SettingsAPI, SettingsResponseAPI } from '@/types/api/settings';

export const getSettings = async (): Promise<SettingsAPI> => {
  try {
    const response = await api.get<SettingsResponseAPI>('api/v1/settings');

    return response.data;
  } catch (error) {
    console.error(error);

    return ({
      company: {
        location: null
      }
    });
  }
};
