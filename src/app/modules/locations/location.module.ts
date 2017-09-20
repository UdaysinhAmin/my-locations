/**
 * Created by dinesh on 19/9/17.
 */
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import {FormsModule, ReactiveFormsModule}    from '@angular/forms';
import {LocationService} from "./shared/location.service";
import {EditLocationComponent} from "./edit-location/edit-location.component";
import {AddLocationComponent} from "./add-location/add-location.component";
import {ListLocationComponent} from "./list-location/list-location.component";
import {locationsRoutes} from "./location-routing.module";
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    EditLocationComponent,
    AddLocationComponent,
    ListLocationComponent
  ],
  providers: [ LocationService ]
})
export class LocationsModule {
  static ROUTES:any = locationsRoutes;
}
