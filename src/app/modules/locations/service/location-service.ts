import { DataService } from './../../@shared/sercices/data.service';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers,Http, Response } from '@angular/http';
import * as _ from 'lodash';

import 'rxjs/add/operator/catch';
import "rxjs/add/operator/toPromise"

@Injectable()
export class LocationService {
  constructor(private dataService:DataService) { }

  Location=[];
  notFoundMessage="Can not find category for this id";
  duplicateMessage="This category already exists";
  
   InsertLocation(options){
   return this.dataService.callAPI({url:'/location',method:'post',body:options})
   }

   deleteLocation(Id){
    return this.dataService.callAPI({url:"/location",method:"delete",id:Id})       
  }
   updateLocation(location){

      return this.dataService.callAPI({method:'put',url:'/location',body:location})    
 }

  getLocationById(Id){
      
     return this.dataService.callAPI({ url:'/location',method:'get',id:Id})
    }

     getLocations(){
        return this.dataService.callAPI({url:"/locations"})
    }
    public getCategoties(){
        return this.dataService.callAPI({url:"/categories",method:"get"})
          
    }
}
