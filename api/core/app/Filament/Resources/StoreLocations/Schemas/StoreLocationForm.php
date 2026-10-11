<?php

namespace App\Filament\Resources\StoreLocations\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class StoreLocationForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')->required(),
                TextInput::make('street')->required(),
                TextInput::make('building_number')->required(),
                TextInput::make('apartment_number'),
                TextInput::make('postal_code')->required(),
                TextInput::make('city')->required(),
                TextInput::make('administrative_area'),
                TextInput::make('country')->required()
            ]);
    }
}
