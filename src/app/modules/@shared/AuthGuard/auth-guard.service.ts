import { UserService } from './../../../modules/AuthModule/user-service'
import { Injectable }     from '@angular/core';
import { CanActivate }    from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private userService:UserService){}

  canActivate():boolean {
   return this.userService.IsLoggedIn()
  }
}