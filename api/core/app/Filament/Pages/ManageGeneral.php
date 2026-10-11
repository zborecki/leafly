<?php

namespace App\Filament\Pages;

use App\Settings\GeneralSettings;
use BackedEnum;
use Filament\Pages\SettingsPage;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Forms\Components\Select;
use App\Models\StoreLocation;


class ManageGeneral extends SettingsPage
{
    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedCog6Tooth;

    protected static string $settings = GeneralSettings::class;

    public function form(Schema $schema): Schema
    {
        return $schema->components([
            Select::make('default_store_location_id')
            ->label('Default store location')
            ->options(
                fn () => StoreLocation::query()
                    ->orderBy('name')
                    ->pluck('name', 'id')
                    ->all()
            )
            ->searchable()
            ->nullable()
        ]);
    }
}
