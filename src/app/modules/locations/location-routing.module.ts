import { AuthGuard } from './../@shared/AuthGuard/auth-guard.service';
import { LocationResolver } from './Resolve/location-resolver'
import { CategoryResolver } from './Resolve/category-resolver'
import { Routes, Resolve } from '@angular/router';
import {AddLocationComponent} from "./add-location/add-location.component";
import {ListLocationComponent} from "./list-location/list-location.component";
import {EditLocationComponent} from "./edit-location/edit-location.component";


export const locationsRoutes: Routes = [
  { path: '',  component: ListLocationComponent },
  { path: 'add', component: AddLocationComponent,canActivate: [AuthGuard]},
  { path: ':id', component: EditLocationComponent, 
  resolve: {
    locations: LocationResolver,categories:CategoryResolver
  } },
];
