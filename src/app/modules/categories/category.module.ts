import { SharedModule } from './../@shared/shared.module';
import { ListCategoryComponent } from './list-category/list-category.component';
// import { AgGridModule } from 'ag-grid-angular';
import { CategoryService } from './service/category-service';
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import {FormsModule, ReactiveFormsModule}    from '@angular/forms';
import {categoryRoutes} from "./category-routing.module";
import {RouterModule} from '@angular/router';
import {AddCategoryComponent} from "./add-category/add-category.component";
import {EditCategoryComponent} from "./edit-location/edit-category.component";
import {Http} from '@angular/http';
import {AgGridComponent} from './../@shared/ag-grid/ag-grid';
import {CategoryResolver} from './Resolve/CategoryResolver';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule
    // AgGridModule.withComponents([ AgGridComponent]),
  ],
  declarations: [
    AddCategoryComponent,
    EditCategoryComponent,
    ListCategoryComponent,
    
    //AgGridComponent
  ], 
  providers: [Http,CategoryService,CategoryResolver]
})
export class CategoryModule {
  static ROUTES:any = categoryRoutes;
}
