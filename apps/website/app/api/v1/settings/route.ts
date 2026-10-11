import { NextResponse } from 'next/server';

import { SettingsResponseAPI } from '@/types/api/settings';

export async function GET(): Promise<NextResponse<SettingsResponseAPI>> {
  const response: SettingsResponseAPI = {
    data: {
      location: {
        street: 'Test',
        buildingNumber: '344',
        apartmentNumber: null,
        postalCode: '60025',
        city: 'Lincoln',
        administrativeArea: null,
        country: 'USA'
      }
    }
  };

  return NextResponse.json(response, { status: 200 });
}
