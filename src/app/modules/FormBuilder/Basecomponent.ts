import { Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'FormBulder',
  templateUrl: './Basecomponent.html'
})
export class Basecomponent {

    Types:any={
     Tp:"",
     ph:"",
     Ids:"",
     Nm:"",
     value:"",
     Names:"",
     ngModel:""
    }

     AddCon:any = [];

  List = [
       {id: 1, name: "text"},
       {id: 2, name: "button"},
       {id: 3, name: "checkbox"},
       {id: 4, name: "color"},
       {id: 5, name: "password"},
       {id:6,name:"radio"},
       {id:7,name:"date"},
       {id:8,name:"number"}
     ];
     
     AddControls(a){
        this.AddCon.push({ Type:a, placeholder: "Enter" + " " + this.Types.Nm, Id: this.Types.Nm + "Id", Name: this.Types.Nm,value:a ,values:this.Types.Names,ngModel:"myModel" });
        
    }
}
