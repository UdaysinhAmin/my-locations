import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './component/app/app.component';
import {NavComponent} from "./component/nav/nav.component";
import {AppRoutingModule} from "./app-routing.module";
import {DashboardComponent} from "./component/dashboard/dashboard.component";
import {LocationsModule} from "./modules/locations/location.module";
import {ReactiveFormsModule} from '@angular/forms';
import {LocationsHome} from "./modules/locations/locations-home/locations-home.component";
import {TopMenuComponent} from "./component/top-menu/top-menu.component";
import {CategoryHome} from "./modules/categories/category-home/category-home.component";
import {CategoryModule} from "./modules/categories/category.module";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    LocationsHome,
    CategoryHome,
    TopMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LocationsModule,
    CategoryModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
