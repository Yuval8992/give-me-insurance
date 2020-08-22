<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Price;
use App\Company;
use App\Plan;

class PricesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Price::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $prices = Price::find($id);
        return $this->initCompanies($prices);
    }

    private function initCompanies($prices) {
        return [
          new Company(
            "./../../assets/img/shomra.jpeg",
            new Plan('שומרה בונוס'),
            $prices->shomraComprehensive,
            $prices->shomraCompulsory,
            $prices->shomraComprehensive + $prices->shomraCompulsory
          ),
          new Company(
            './../../assets/img/migdal.png',
            new Plan('מגדל תעשייה אווירית'),
            $prices->migdalComprehensive,
            $prices->migdalCompulsory,
            $prices->migdalComprehensive + $prices->migdalCompulsory
          ),
          new Company(
            './../../assets/img/menora.png',
            new Plan('מקיף'),
            $prices->menoraComprehensive,
            $prices->menoraCompulsory,
            $prices->menoraComprehensive + $prices->menoraCompulsory
          ),
          new Company(
            './../../assets/img/klal.jpeg',
            new Plan('כלל ראשון לנסיעה בטוחה'),
            $prices->klalComprehensive,
            $prices->klalCompulsory,
            $prices->klalComprehensive + $prices->klalCompulsory
          ),
        ];
      }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
