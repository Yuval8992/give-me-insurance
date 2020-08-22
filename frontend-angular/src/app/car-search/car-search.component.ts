import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Car } from '../car-detail/Car.model';

@Component({
  selector: 'app-car-search',
  templateUrl: './car-search.component.html',
  styleUrls: ['./car-search.component.css'],
})
export class CarSearchComponent implements OnInit {
  public carSearchForm: FormGroup;
  private car: Car;
  private carID: number;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.carSearchForm = this.fb.group({
      'מספר רכב': ['', [Validators.required]],
      'מס רכב': ['כן', [Validators.required]],
    });
  }

  public onSubmitCarNumber() {
    this.carID = this.carSearchForm.value['מספר רכב'];
    this.router.navigate(['cars', this.carID]);
  }
}
