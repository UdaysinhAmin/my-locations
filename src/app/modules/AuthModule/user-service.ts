import { DataService } from './../@shared/sercices/data.service';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers,Http, Response } from '@angular/http';
import * as _ from 'lodash';

import 'rxjs/add/operator/catch';
import "rxjs/add/operator/toPromise"

/**
 * @Service UserService
 * @description 
 */
 /**
   * @Service UserService
   * @description function to call the api
   * @param options
   * @returns {Observable<T>}
   */

@Injectable()
export class UserService {
  constructor(private http: Http,private dataService:DataService) { }

  notFoundMessage="Can not find category for this id";
  duplicateMessage="This category already exists";
  

/**
   * @method UserRegister
   * @description function to call the api for Log In user
   * @param options
   * @returns {Observable<T>}
   */
  Register(User) {
        return this.dataService.callAPI({url:"/registration",method:"post",body:User})
  }

  
/**
   * @method LogIn
   * @description function to call the api for register user
   * @param options
   * @returns {Observable<T>}
   */
  LogIn(User){
        return this.dataService.callAPI({url:"/login",method:"post",body:User})
  }

  /**
   * @method Check for Logged in user
   * @description check for log in
   * @param options
   * @returns {Observable<T>}
   */
IsLoggedIn(){
    
    let token=localStorage.getItem('token')
    if(token=="AccessToken"){
        return true;
    }else{
        return false;
    }

}

/**
   * @method Update password
   * @description check for log in
   * @param options
   * @returns {Observable<T>}
   */
UpdatePassword(regis){
    return this.dataService.callAPI({url:"/Regisrations",method:"put",body:regis})
}

/**
   * @metohd Email verify
   * @description service to change the password 
   * @param changepass 
   */
Emailverify(regis){
  
        return this.dataService.callAPI({url:"/Regisrations/VarifyEmail",method:"post",body:regis})
            
  }

  GetUserDetails(regis){
    return this.dataService.callAPI({url:"/Regisrations?Email="+regis,method:"get"})  
}

  /**
   * @metohd changepassword
   * @description service to change the password 
   * @param changepass 
   */
  changepassword(changepass){
        return this.dataService.callAPI({url:"/changepassword",method:"put",body:changepass})
   }
 
}
