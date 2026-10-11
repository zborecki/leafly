<?php

namespace App\Settings;

use Spatie\LaravelSettings\Settings;

class GeneralSettings extends Settings
{
    public ?int $default_store_location_id;

    public static function group(): string
    {
        return 'general';
    }
}