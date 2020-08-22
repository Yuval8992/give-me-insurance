import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatRadioModule } from '@angular/material/radio';

import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CarSearchComponent } from './car-search/car-search.component';
import { CarDetailService } from './car-detail/car-detail.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyListService } from './company-list/company-list.service';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { DataStorageService } from './shared/data-storage.service';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TokenService } from './shared/token.service';
import { AuthService } from './shared/auth.service';
import { BeforeLoginService } from './shared/before-login.service';
import { AfterLoginService } from './shared/after-login.service';

@NgModule({
  declarations: [
    AppComponent,
    CarDetailComponent,
    HeaderComponent,
    CarSearchComponent,
    PageNotFoundComponent,
    CompanyListComponent,
    SignInComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatChipsModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    CompanyListService,
    DataStorageService,
    CarDetailService,
    TokenService,
    AuthService,
    BeforeLoginService,
    AfterLoginService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
