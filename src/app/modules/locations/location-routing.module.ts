/**
 * Created by dinesh on 19/9/17.
 */
import { Routes } from '@angular/router';

import {AddLocationComponent} from "./add-location/add-location.component";
import {ListLocationComponent} from "./list-location/list-location.component";
import {EditLocationComponent} from "./edit-location/edit-location.component";

export const locationsRoutes: Routes = [
  { path: '',  component: ListLocationComponent },
  { path: 'add', component: AddLocationComponent },
  { path: ':id', component: EditLocationComponent },
];
