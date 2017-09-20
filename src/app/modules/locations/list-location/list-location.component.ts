/**
 * Created by dinesh on 19/9/17.
 */
import {Component, OnInit} from '@angular/core';
import {LocationService} from "../shared/location.service";
import * as _ from 'lodash';

@Component({
  selector: 'list-location',
  templateUrl: './list-location.component.html',
})
export class ListLocationComponent implements OnInit{
  categoryGroups;
  locations;
  isGrouped;
  categories;
  sortObj={
    name:'',
    category:'',
    address:''
  };
  constructor(private locationService:LocationService){

  }
  ngOnInit() {
    this.getLocations();
  }

  private getLocations(){
    this.locationService.getCategories()
      .subscribe((categories)=>{
        this.categories = categories;
      });

    this.locationService.getLocations()
      .subscribe((locations)=>{
        _.forEach(locations,(location:any,key)=>{
          location.id = key;
        });
        this.locations = locations;
        this.categoryGroups =[{locations:_.cloneDeep(locations),category:''}];
        this.sortData('name');
      },()=>{
        alert('Error in getting the locations');
      })
  }

  groupByCategory(){
    if(!this.isGrouped){
      this.categoryGroups = _.map(_.groupBy(this.locations,'category'),(value,key)=>{
        return {locations:value,category:key};
      });
    } else {
      this.categoryGroups =[{locations:_.cloneDeep(this.locations),category:''}];
    }
    this.isGrouped = !this.isGrouped;
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

  sortData(sortBy){
    let sortOrder='';
    if(this.sortObj[sortBy]){
      //change the current sort order by checking the older sort order
      switch(this.sortObj[sortBy]){
        case 'asc':
          sortOrder = 'desc';
          break;
        case 'desc':
          sortOrder = '';
          break;
      }
    } else {
      //remove the sorting of other object
      _.forEach(this.sortObj,(value,key)=>{
        if(key!=sortBy && value){
          this.sortObj[key] = '';
        }
      });
      //set the current sort order to asc if previous is none.
      sortOrder = 'asc';
    }
    this.sortObj[sortBy] = sortOrder;
    if(sortOrder){
      _.forEach(this.categoryGroups,(category:any,index)=>{
        category.locations = _.sortBy(category.locations,sortBy);
        if(sortOrder=='desc'){
          category.locations = _.reverse(category.locations);
        }
        this.categoryGroups[index].locations = category.locations;
      })
    } else {
      _.forEach(this.categoryGroups,(category:any,index)=>{
        this.categoryGroups[index].locations = _.sortBy(category.locations,'id');
      })
    }

  }

  viewInMap(location){
    window.open(`https://www.google.com/maps/@${location.lat},${location.lang},8z`,'_blank')
  }

  filterByCategory(category){
    let locations = _.cloneDeep(this.locations);
    if(category){
      locations = _.filter(locations,{category:category});
    }
    this.categoryGroups =[{locations:locations,category:''}];
  }
}
