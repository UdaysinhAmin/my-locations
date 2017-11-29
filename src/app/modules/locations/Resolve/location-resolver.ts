import { LocationService } from './../../locations/service/location-service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class LocationResolver implements Resolve<any> {
  constructor(
    private locationService:LocationService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.locationService.getLocationById(route.params.id).subscribe(Response=>{
          
                });
    
    }
}


























































// import {Component, Input} from '@angular/core';

// @Component({
//  selector: 'crud-page-header',
//  template: `<div class="bg-light lter b-b wrapper-md clearfix page-title">
//  <div class="page-header"><div class="pull-left"><h1 class="m-n h4 text-black ng-binding">{{options.title}}</h1></div>
//  <div class="pull-right m-t" *ngIf="options.button">
//    <a [routerLink]="options.button.link"
//       class="btn"
//       [ngClass]="{'btn-success plupload_add':options.button.icon=='icon-plus'}">
//       <span class="icons" [ngClass]="options.button.icon=='icon-plus'?'fa fa-plus-circle':options.button.icon"></span>
//      {{options.button.text}}
//    </a>
//  </div></div>
// </div>`
// })
// export class CrudPageHeaderComponent {
//  @Input() options:any;
//  constructor() {}
// }

// pageHeaderOptions: any = { title: 'Add Category', button: { text: 'Back to list', link: '/category', icon: 'icon-arrow-left' } };
// pageHeaderOptions: any = { title: 'Category', button: { text: 'Add Category', link: '/category/add', icon: 'icon-plus' } };