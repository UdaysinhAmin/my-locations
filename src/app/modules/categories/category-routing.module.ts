import { Routes,Resolve } from '@angular/router';
import {ListCategoryComponent} from "./list-category/list-category.component";
import {AddCategoryComponent} from "./add-category/add-category.component";
import {EditCategoryComponent} from "./edit-location/edit-category.component";
import {CategoryResolver} from './Resolve/CategoryResolver';

export const categoryRoutes: Routes = [
  { path: '',  component: ListCategoryComponent,
  resolve:{
    category:CategoryResolver
  } 
},
  { path: 'add', component: AddCategoryComponent },
  { path: ':id', component: EditCategoryComponent },
  
];
