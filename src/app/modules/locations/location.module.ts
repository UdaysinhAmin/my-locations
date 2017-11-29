import { SharedModule } from './../@shared/shared.module';
import { ListCategoryComponent } from './../categories/list-category/list-category.component';

// import { AgGridComponent } from './../@shared/ag-grid/ag-grid';

// import { CrudPageHeaderComponent } from './../@shared/components/crud-page-header.component';
import { LocationResolver } from './Resolve/location-resolver';
import { CategoryResolver } from './Resolve/category-resolver';
import { LocationService } from './service/location-service';
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import {FormsModule, ReactiveFormsModule}    from '@angular/forms';
import {EditLocationComponent} from "./edit-location/edit-location.component";
import {AddLocationComponent} from "./add-location/add-location.component";
import {ListLocationComponent} from "./list-location/list-location.component";
import {locationsRoutes} from "./location-routing.module";
import {RouterModule} from '@angular/router';
 import { AgGridModule }  from "ag-grid-angular";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule
   // AgGridModule.withComponents([ ListLocationComponent]),
  ],
  declarations: [
    EditLocationComponent,
    AddLocationComponent,
    ListLocationComponent,

    // CrudPageHeaderComponent,
    //AgGridComponent,
    
   // AgGridComponent
  ],
  //  exports:[ListLocationComponent],
  providers: [ LocationService,LocationResolver,CategoryResolver],
 
})
export class LocationsModule {
  static ROUTES:any = locationsRoutes;
}
