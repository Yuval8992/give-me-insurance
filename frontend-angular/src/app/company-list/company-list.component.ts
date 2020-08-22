import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Company } from './Company.model';
import { CompanyListService } from './company-list.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css'],
})
export class CompanyListComponent implements OnInit {
  private subscription: Subscription;
  private companies: Company[];
  private manufactureYear: number;
  public dataReady: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private companyListService: CompanyListService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.manufactureYear = +params['year'];
    });
    this.companyListService.getCompanies(this.manufactureYear);

    this.subscription = this.companyListService.pricesChanged.subscribe(
      (companies) => {
        this.companies = companies;
        this.dataReady = true;
      }
    );
  }
}
