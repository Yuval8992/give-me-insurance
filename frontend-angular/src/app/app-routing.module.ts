import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarSearchComponent } from './car-search/car-search.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BeforeLoginService } from './shared/before-login.service';
import { AfterLoginService } from './shared/after-login.service';
import { TokenService } from './shared/token.service';

function pathDependOnLogin() {
  return new TokenService().loggedIn() === true ? '/car-search' : '/sign-in';
}
const appRoutes: Routes = [
  { path: '', redirectTo: pathDependOnLogin(), pathMatch: 'full' },
  {
    path: 'sign-in',
    component: SignInComponent,
    canActivate: [BeforeLoginService],
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    canActivate: [BeforeLoginService],
  },
  {
    path: 'car-search',
    component: CarSearchComponent,
    canActivate: [AfterLoginService],
  },
  {
    path: 'cars/:id',
    component: CarDetailComponent,
    canActivate: [AfterLoginService],
  },
  {
    path: 'cars/:id/companies',
    component: CompanyListComponent,
    canActivate: [AfterLoginService],
  },
  {
    path: 'not-found',
    component: PageNotFoundComponent,
    data: { message: 'Page not found!' },
  },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
