import { LocationService } from './../../locations/service/location-service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CategoryResolver implements Resolve<any> {
  constructor(
    private locationService:LocationService
  ) {}
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.locationService.getCategoties().subscribe(Response=>{
          
                });
    
    }
}