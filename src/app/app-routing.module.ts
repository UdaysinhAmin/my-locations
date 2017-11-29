import { EmailVarification } from './modules/AuthModule/Verify Email/Varification';
import {RegistrationComponent} from './modules/AuthModule/Registration/registration.component'
import { ChangePassword } from './modules/AuthModule/changepassword/change-password.component';
import { AuthGuard } from './modules/@shared/AuthGuard/auth-guard.service';
import{LogInComponent} from './modules/AuthModule/LogIn/LogIn.component'
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./component/dashboard/dashboard.component";
import {LocationsModule} from "./modules/locations/location.module";
import {LocationsHome} from "./modules/locations/locations-home/locations-home.component";
import {CategoryHome} from "./modules/categories/category-home/category-home.component";
import {CategoryModule} from "./modules/categories/category.module";
import {Basecomponent} from "./modules/FormBuilder/Basecomponent";


const routes: Routes = [

  {path:'',component:LogInComponent,pathMatch: 'full'},
  {path:'login',component:LogInComponent},
  {path:'forgotpassword',component:EmailVarification},
  {path:'Registration',component:RegistrationComponent},
  {path:'changepass',component:ChangePassword},
  { path: 'dashboard',  component: DashboardComponent  },
  {
    path: 'locations', 
    component: LocationsHome,
    canActivate:[AuthGuard],
    children: [...LocationsModule.ROUTES],
  },
  {
    path: 'categories',
    component: CategoryHome,
    children: [...CategoryModule.ROUTES],
  },
  {
    path: 'formbuilder',
    component: Basecomponent,
    },

];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
