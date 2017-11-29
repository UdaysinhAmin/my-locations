import { ChangeForgetPass } from './modules/AuthModule/ForgotPassword/ChangeForget';
import { EmailVarification } from './modules/AuthModule/Verify Email/Varification';
import { ListCategoryComponent } from './modules/categories/list-category/list-category.component';
import { ListLocationComponent } from './modules/locations/list-location/list-location.component';
import { AgGridComponent } from './modules/@shared/ag-grid/ag-grid';
import { UserService } from './modules/AuthModule/user-service';
import { ChangePassword } from './modules/AuthModule/changepassword/change-password.component';
import { AuthGuard } from './modules/@shared/AuthGuard/auth-guard.service';
import {RegistrationComponent} from './modules/AuthModule/Registration/registration.component'
import {LogInComponent} from './modules/AuthModule/LogIn/LogIn.component'
import { AppComponents } from './app.component';
import { FormBuilder } from '@angular/forms';
import { DataService } from './modules/@shared/sercices/data.service'
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
import {Http, HttpModule,XHRBackend,RequestOptions }    from '@angular/http';
import {httpFactory} from './http.interceptor';
import { Basecomponent } from "./modules/FormBuilder/Basecomponent";
import { FormsModule } from '@angular/forms';
import { AgGridModule }  from "ag-grid-angular";




@NgModule({
  declarations: [
    ChangeForgetPass,
    AppComponent,
    NavComponent,
    DashboardComponent,
    LocationsHome,
    CategoryHome,
    TopMenuComponent,
    Basecomponent,
    AppComponents,
    LogInComponent,
    ChangePassword,
    RegistrationComponent,
    EmailVarification
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LocationsModule,
    CategoryModule,
    ReactiveFormsModule,
    HttpModule,
    FormsModule,
    // AgGridModule.withComponents([ListLocationComponent]),
   
  ],
  providers: [DataService,UserService,AuthGuard,
    {
      provide:Http,
      useFactory:httpFactory,
      deps:[XHRBackend,RequestOptions]
    },
  ],
  //  exports:[AgGridComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
