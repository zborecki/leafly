<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

use App\Settings\GeneralSettings;
use App\Models\StoreLocation;

class SettingsController extends Controller
{
    public function index(): JsonResponse
    {
        $settings = app(GeneralSettings::class);

        $location = StoreLocation::query()->whereKey($settings->default_store_location_id)->first();

        return response()->json([
            'data' => [
                'location' => $location ? [
                    'street' => $location->street,
                    'buildingNumber' => $location->building_number,
                    'apartmentNumber' => $location->apartment_number,
                    'postalCode' => $location->postal_code,
                    'city' => $location->city,
                    'administrativeArea' => $location->administrative_area,
                    'country' => $location->country
                ] : null,
            ],
        ]);
    }
}
