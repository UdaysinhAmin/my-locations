/**
 * Created by dinesh on 19/9/17.
 */
import { Routes } from '@angular/router';
import {ListCategoryComponent} from "./list-category/list-category.component";
import {AddCategoryComponent} from "./add-category/add-category.component";
import {EditCategoryComponent} from "./edit-location/edit-category.component";

export const categoryRoutes: Routes = [
  { path: '',  component: ListCategoryComponent },
  { path: 'add', component: AddCategoryComponent },
  { path: ':id', component: EditCategoryComponent },
];
