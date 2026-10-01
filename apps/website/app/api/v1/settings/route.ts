import { NextResponse } from 'next/server';

import { SettingsResponseAPI } from '@/types/api/settings';

export async function GET(): Promise<NextResponse<SettingsResponseAPI>> {
  const response: SettingsResponseAPI = {
    data: {
      company: {
        location: {
          city: 'New York',
          country: 'United States',
          postalCode: '10007',
          street: '260 Broadway'
        }
      }
    }
  };

  return NextResponse.json(response, { status: 200 });
}
