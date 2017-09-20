/**
 * Created by dinesh on 19/9/17.
 */
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import {FormsModule, ReactiveFormsModule}    from '@angular/forms';
import {CategoryService} from "./shared/category.service";
import {categoryRoutes} from "./category-routing.module";
import {RouterModule} from '@angular/router';
import {AddCategoryComponent} from "./add-category/add-category.component";
import {EditCategoryComponent} from "./edit-location/edit-category.component";
import {ListCategoryComponent} from "./list-category/list-category.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    AddCategoryComponent,
    EditCategoryComponent,
    ListCategoryComponent
  ],
  providers: [ CategoryService ]
})
export class CategoryModule {
  static ROUTES:any = categoryRoutes;
}
