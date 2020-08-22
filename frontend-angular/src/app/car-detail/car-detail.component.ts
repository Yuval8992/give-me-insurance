import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Car } from './Car.model';
import { CarDetailService } from './car-detail.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit, OnDestroy {
  public carForm: FormGroup;
  private car: Car;
  private carID: number;
  public dataReady: boolean = false;
  private subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private carDetailService: CarDetailService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.carID = +params['id'];
    });
    this.carDetailService.getCar(this.carID);

    this.subscription = this.carDetailService.carChanged.subscribe(
      (car: Car) => {
        this.car = car;
        this.createForm();
        this.dataReady = true;
      }
    );
  }

  private createForm() {
    if (this.car) {
      this.carForm = this.fb.group({
        'מספר דגם': [this.car.modelCode, [Validators.required]],
        'שנת ייצור': [this.car.year, [Validators.required]],
        'תיאור הדגם': [this.car.description, [Validators.required]],
        'תאריך עלייה לכביש': [this.car.dateOnRoad, [Validators.required]],
        גיר: [this.car.gear_type.toString(), [Validators.required]],
        'כריות אוויר': [this.car.air_bags, [Validators.required]],
        '(ESP) מערכת בקרת יציבות': [
          this.car.esp.toString(),
          [Validators.required],
        ],
        'התראה על סטייה מנתיב ,LDW מערכת': [
          this.car.ldw.toString(),
          [Validators.required],
        ],
        'התראת אי שמירת מרחק ,FCW מערכת': [
          this.car.fcw.toString(),
          [Validators.required],
        ],
      });
    } else {
      this.router.navigate(['/not-found']);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
