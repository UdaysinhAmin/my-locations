
import {Component,OnInit, Input} from '@angular/core';

@Component({
 selector: 'crud-page-header',
 template: `
      <nav class="navbar navbar-inverse top-nav">
       <div class="container-fluid">
         <div class="navbar-header">
           <a class="navbar-brand" [routerLink]="options.title">{{options.title}}</a>
         </div>
        </div>
     
         <div *ngIf="options.button===null">      
           <span class="pull-right m-t btn" >
             <a class="navbar-brand btn" [routerLink]="options.button.link">
                {{options.button.text}}
              </a>
           </span>
          </div>

       <div *ngIf="options.butto!==null">       
         <span class="pull-right m-t btn" >
           <a class="navbar-brand btn" [routerLink]="options.button.link">
             <span class="icons " [ngClass]="options.button.icon=='icon-plus'?'fa fa-plus-circle':'glyphicon glyphicon-arrow-left'"></span>
             {{options.button.text}}
           </a>
         </span>
        </div>
    </nav> 
 `


})
export class CrudPageHeaderComponent  implements OnInit{
 @Input() options:any;
 @Input() title:any;
 constructor() {}
 ngOnInit(){
    
 }
}

