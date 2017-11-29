import { UserService } from './../user-service';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';


@Component({
  selector: 'change-pass',
  templateUrl: './Change-Password.component.html',
 // styleUrls: ['./ChangePassword.component.css']
})


export class ChangePassword implements OnInit {
 changepassword={
    UserName:'',
    oldpassword:'',
    newpassword:''
  }
  constructor(private router: Router,private userService:UserService){}
  ngOnInit() {
  }
  
  changepass(pass){

    this.userService.changepassword(this.changepassword).subscribe(Response=>{
      
      if(Response.Password==this.changepassword.newpassword){

        this.router.navigate(['/dashboard'])
          }else
          {
        alert("UserId or Password Is InCorrect")
      }
        
    })
    }
}

