/**
 * Created by dinesh on 19/9/17.
 */
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LocationService {
  locations=[];
  notFoundMessage="Can not find location for this id";
  private getLocationsArray(){
    return localStorage.locations? JSON.parse(localStorage.locations):[];
  }

  private getCategoryarray(){
    return localStorage.categories? JSON.parse(localStorage.categories):[];
  }

  private setLocationArray(locationsArray){
    localStorage.locations = JSON.stringify(locationsArray);
  }

  getLocations() {
    return Observable.of(this.getLocationsArray());
  }

  getCategories(){
    return Observable.of(this.getCategoryarray());
  }

  getLocation(id: number) {
    let locations = this.getLocationsArray();
    if(!locations[id]){
      throw this.notFoundMessage;
    }
    return Observable.of(locations[id]);
  }

  createLocation(locationData){
    let locations = this.getLocationsArray();
    locations.push(locationData);
    this.setLocationArray(locations);
    return Observable.of(locationData);
  }

  updateLocation(locationData,locationId){
    let locations = this.getLocationsArray();
    if(!locations[locationId]){
      throw this.notFoundMessage;
    }
    locations[locationId] = locationData;
    this.setLocationArray(locations);
    return Observable.of(locationData);
  }

  deleteLocation(locationId){
    let locations = this.getLocationsArray();
    if(!locations[locationId]){
      throw this.notFoundMessage;
    }
    locations.splice(locationId,1);
    this.setLocationArray(locations);
    return Observable.of(locations);
  }
}
