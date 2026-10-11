<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StoreLocation extends Model
{
    protected $fillable = [
        "name",
        "street",
        "building_number",
        "apartment_number",
        "postal_code",
        "city",
        "administrative_area",
        "country"
    ];
}
