/**
 * Created by dinesh on 19/9/17.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./component/dashboard/dashboard.component";
import {LocationsModule} from "./modules/locations/location.module";
import {LocationsHome} from "./modules/locations/locations-home/locations-home.component";
import {CategoryHome} from "./modules/categories/category-home/category-home.component";
import {CategoryModule} from "./modules/categories/category.module";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent  },
  {
    path: 'locations',
    component: LocationsHome,
    children: [...LocationsModule.ROUTES],
  },
  {
    path: 'categories',
    component: CategoryHome,
    children: [...CategoryModule.ROUTES],
  },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
