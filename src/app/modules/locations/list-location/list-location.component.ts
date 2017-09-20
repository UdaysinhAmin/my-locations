/**
 * Created by dinesh on 19/9/17.
 */
import {Component, OnInit} from '@angular/core';
import {LocationService} from "../shared/location.service";

@Component({
  selector: 'list-location',
  templateUrl: './list-location.component.html',
})
export class ListLocationComponent implements OnInit{
  locations;
  constructor(private locationService:LocationService){

  }
  ngOnInit() {
    this.getLocations();
  }

  private getLocations(){
    this.locationService.getLocations()
      .subscribe((locations)=>{
        this.locations = locations;
      },()=>{
        alert('Error in getting the locations');
      })
  }

  deleteLocation(id){
    this.locationService.deleteLocation(id)
      .subscribe(()=>{
        alert('Location deleted successfully.');
        this.getLocations();
      },(message)=>{
        alert(message);
      })
  }

  viewInMap(id){
    window.open(`https://www.google.com/maps/@${this.locations[id].lat},${this.locations[id].lang},8z`,'_blank')
  }

}
