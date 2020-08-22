<?php

namespace App;

use App\Plan;

class Company 
{
    public $imageUrl;
    public $planName;
    public $comprehensiveInsurance;
    public $compulsoryInsurance;
    public $total;

    function __construct($imageUrl, $plan, $comprehensiveInsurance, $compulsoryInsurance, $total) {
        $this->imageUrl = $imageUrl;
        $this->planName = $plan->planName;
        $this->comprehensiveInsurance = $comprehensiveInsurance;
        $this->compulsoryInsurance = $compulsoryInsurance;
        $this->total = $total;
      }
}
