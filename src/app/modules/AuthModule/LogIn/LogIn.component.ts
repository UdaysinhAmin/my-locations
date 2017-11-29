import { UserService } from './../user-service';
import { Register } from './../Registration/Register';
import { RegistrationComponent } from './../Registration/registration.component';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { LogIn } from './LogIn';

@Component({
  selector: 'app-LogIn',
  templateUrl: './LogIn.component.html',
  styleUrls: ['./LogIn.component.css']
})


export class LogInComponent implements OnInit {
  forgotpassword;
  constructor(private router: Router,private userService:UserService){
    this.forgotpassword="forgotpassword";
  }
  ngOnInit() {
  }
  LogInUser={UserName:'',Password:''}
  LogIn(LogInUser){

    this.userService.LogIn(this.LogInUser).subscribe(Response=>{
      if(Response!=null){
        localStorage.setItem('token',"AccessToken");
        this.router.navigate(['/dashboard'])
          }else
          {
        alert("UserId or Password Is InCorrect")
      }   
    })
    }
 
    Register(){
      this.router.navigate(['/Registration'])
    }
}

