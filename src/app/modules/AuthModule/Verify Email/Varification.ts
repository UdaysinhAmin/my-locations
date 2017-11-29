import { UserService } from './../user-service';
import { Register } from './../Registration/Register';
import { Response } from '@angular/http';
import {OnInit} from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'verfy-email',
  templateUrl:"Varification.html"
})

export class EmailVarification{
    options;

  Regis:any= Register;

  constructor(private userService:UserService){

  }

  varify(){
    debugger
    this.userService.GetUserDetails(this.Regis.Email).subscribe((response)=>{
      debugger
       if(response !== null) {  
         debugger
           this.userService.Emailverify(response).subscribe(()=>{
            alert('Link Sent on your Email Id Please Varify..');
          },(message)=>alert(message))
       } else {
             alert('You are Not Register. Please Register')
      }
      })
  }
}
