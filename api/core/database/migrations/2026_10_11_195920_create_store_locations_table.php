<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('store_locations', function (Blueprint $table) {
            // General information
            $table->id();
            $table->string("name");

            // Location
            $table->string("street");
            $table->string("building_number");
            $table->string("apartment_number")->nullable();
            $table->string("postal_code", 20);
            $table->string("city");
            $table->string('administrative_area')->nullable();
            $table->string("country");

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('store_locations');
    }
};
