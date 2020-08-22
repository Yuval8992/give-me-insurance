import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Car } from './Car.model';
import { DataStorageService } from '../shared/data-storage.service';

@Injectable()
export class CarDetailService {
  private car: Car;
  public carChanged = new Subject<Car>();

  constructor(private dataStorageService: DataStorageService) {}

  public setCar(car: Car) {
    this.car = car;
    this.carChanged.next(this.car);
  }

  public getCar(carID) {
    this.dataStorageService.fetchCar(carID).subscribe((car) => {
      console.log('fsdegfse');
      this.setCar(car);
    });
  }
}
