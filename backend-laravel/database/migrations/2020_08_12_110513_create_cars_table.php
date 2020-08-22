<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCarsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cars', function (Blueprint $table) {
            $table->integer('vehicleNumber')->primary()->nullable(false);
            $table->integer('modelCode')->nullable(false);
            $table->integer('year')->nullable(false);
            $table->string('description')->nullable(false);
            $table->string('dateOnRoad')->nullable(false);
            $table->integer('air_bags')->nullable(false);
            $table->boolean('esp')->nullable(false);
            $table->boolean('fcw')->nullable(false);
            $table->boolean('ldw')->nullable(false);
            $table->boolean('gear_type')->nullable(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cars');
    }
}
