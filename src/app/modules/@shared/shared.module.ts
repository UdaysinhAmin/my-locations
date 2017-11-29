import { CommonModule } from '@angular/common';
import { CrudPageHeaderComponent } from './../@shared/components/crud-page-header.component';
import { ListCategoryComponent } from './../categories/list-category/list-category.component';
import { ListLocationComponent } from './../locations/list-location/list-location.component';
import { AgGridComponent } from './../@shared/ag-grid/ag-grid';
import { FormBuilder } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgGridModule }  from "ag-grid-angular";
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AgGridComponent,
    CrudPageHeaderComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,   
    FormsModule,
    AgGridModule.withComponents([]),
    RouterModule
  ],
  providers: [],
  exports:[CrudPageHeaderComponent,AgGridComponent],
  bootstrap: []
})
export class SharedModule { }
