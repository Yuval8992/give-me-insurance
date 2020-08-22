import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Company } from './Company.model';
import { DataStorageService } from '../shared/data-storage.service';

@Injectable()
export class CompanyListService {
  public pricesChanged = new Subject<Company[]>();
  private companies: Company[];

  constructor(private dataStorageService: DataStorageService) {}

  public getCompanies(manufactureYear) {
    this.dataStorageService
      .fetchCompanies(this.checkIdByYear(manufactureYear))
      .subscribe((companies) => {
        this.companies = companies;
        console.log(companies);
        this.pricesChanged.next(this.companies);
      });
  }

  private checkIdByYear(year: number) {
    switch (true) {
      case year >= 2009 && year < 2012:
        return 2009;
      case year >= 2012:
        return 2012;
    }
  }
}
