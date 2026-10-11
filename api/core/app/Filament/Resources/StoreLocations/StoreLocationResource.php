<?php

namespace App\Filament\Resources\StoreLocations;

use App\Filament\Resources\StoreLocations\Pages\CreateStoreLocation;
use App\Filament\Resources\StoreLocations\Pages\EditStoreLocation;
use App\Filament\Resources\StoreLocations\Pages\ListStoreLocations;
use App\Filament\Resources\StoreLocations\Schemas\StoreLocationForm;
use App\Filament\Resources\StoreLocations\Tables\StoreLocationsTable;
use App\Models\StoreLocation;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class StoreLocationResource extends Resource
{
    protected static ?string $model = StoreLocation::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    protected static ?string $recordTitleAttribute = 'name';

    public static function form(Schema $schema): Schema
    {
        return StoreLocationForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return StoreLocationsTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListStoreLocations::route('/'),
            'create' => CreateStoreLocation::route('/create'),
            'edit' => EditStoreLocation::route('/{record}/edit'),
        ];
    }
}
