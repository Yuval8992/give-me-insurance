<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePricesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prices', function (Blueprint $table) {
            $table->integer('year')->primary()->nullable(false);
            $table->integer('shomraComprehensive')->nullable(false);
            $table->integer('shomraCompulsory')->nullable(false);
            $table->integer('migdalComprehensive')->nullable(false);
            $table->integer('migdalCompulsory')->nullable(false);
            $table->integer('menoraComprehensive')->nullable(false);
            $table->integer('menoraCompulsory')->nullable(false);
            $table->integer('klalComprehensive')->nullable(false);
            $table->integer('klalCompulsory')->nullable(false);

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
        Schema::dropIfExists('prices');
    }
}
