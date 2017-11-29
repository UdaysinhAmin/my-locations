import { UserService } from './../user-service';

import { Component, OnInit } from '@angular/core';
import { Register } from './Register';
import {Location} from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
 user:Register
 // user:Register
  constructor(private _location:Location,private userService:UserService) {  }
  ngOnInit(){
    
  }
 
/*
@Register Method call For Register user
@For The User Registration call from the Registration html
@parametes user object to pass to the server side
@return as Object
*/
  Register(user){
      this.userService.Register(user).subscribe(response=>{
      this.goback()
     })
  }
goback(){
  this._location.back();
}

submitted = false;

  onSubmit() { this.submitted = true; }
  
}
