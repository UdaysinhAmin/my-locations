import { UserService } from './../user-service';
import { Response } from '@angular/http';
import {OnInit} from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';
import { Component, Input } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'change-pass',
  templateUrl:"ChangeForget.html"
})

export class ChangeForgetPass{
    options;

    constructor(private userService:UserService,private route:ActivatedRoute){
    
    }
 
    regis:any={
        Id:"",
        Name:"",
        Email:"",
        UserName:"",
        Password:"",
        ContactNo:"",
        Address:"",
        UID:this.route.snapshot.queryParams["UID"],
        IsActive:"",
        IsDelete:""
     }

       ngOnInit() {
       
         }    

    Change(){
               this.userService.UpdatePassword(this.regis).subscribe((response)=>{
                 alert('Password Changed successfully.');
                  //this.router.navigate(['/categories']);
          },(message)=>alert(message))
      
    }
}
