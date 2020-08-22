import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Car } from '../car-detail/Car.model';
// import { Price } from '../company-list/Price.model';
import { Company } from '../company-list/Company.model';

@Injectable()
export class DataStorageService {
  private baseUrl = 'http://127.0.0.1:8000/';
  constructor(private http: HttpClient) {}

  fetchCar(id: number) {
    console.log('got here');
    return this.http.get<Car>(`${this.baseUrl}cars/${id}`);
  }

  fetchCompanies(year: number) {
    return this.http.get<Company[]>(`${this.baseUrl}prices/${year}`);
  }

  login(values) {
    return this.http.post(`${this.baseUrl}api/login`, values);
  }

  signUp(values) {
    return this.http.post(`${this.baseUrl}api/signup`, values);
  }
}
