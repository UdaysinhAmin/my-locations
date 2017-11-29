import { locationsRoutes } from './../location-routing.module';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Location } from './../../@shared/DTOs/Location';
import { LocationService } from './../service/location-service';
//import { GridComponent } from './../../@shared/components/evonious-grid';
import { getTestBed } from '@angular/core/testing';
import { Response } from '@angular/http';
import {DataService } from './../../@shared/sercices/data.service'
import {Component, OnInit,Output, EventEmitter} from '@angular/core';


import * as _ from 'lodash';
import { debug } from 'util';
declare let $;
@Component({
  selector: 'list-location',
  templateUrl: './list-location.component.html',
})
export class ListLocationComponent implements OnInit{
  columnDefs;
  
  gridOptions;
  Options;
  UID;
  rowData;
  test;
  title:any="Location";
  token:any="";
  categoryGroups;
  
  locations:Array<Location> = []
  isGrouped;
  categories;
  sortObj=new Location();
  pageHeaderOptions :any= { title: 'Location', button: { text: 'Add ', link: 'add', icon: 'icon-plus'}};
  column;
  ngOnInit() {
    this.getCategories()
    this.getLocations();
  }
  constructor(private locationService:LocationService,private route:Router){

    this.test="pragnesh halpati"
  this.columnDefs = [
    {headerName: "Name", field: "Name", width: 300,sort: 'desc' ,filter: 'text'},
    {headerName: "Address", field: "Address", width: 300 ,sort:'desc',filter: 'text'},
    {headerName: "Category", field: "categoryName", width: 300},
    {headerName:"Edit",field:"Action",suppressFilter: true,template:`<a>Edit</a>`,
     onCellClicked:(event:any)=>{ 
          if( $(event.event.target).is('a')){
          this.route.navigate(['/locations/'+ event.data.UID]);
           }
        }
      },
      {headerName:"Delete",field:"Action",suppressFilter: true,template:`<a>Delete</a>`,
      onCellClicked:(event:any)=>{ 
           if( $(event.event.target).is('a')){
              this.deleteLocation(event.data.UID);
            }
         }
       }
  ]
  this.gridOptions ={
    enableFilter: true,
    column:this.columnDefs,
    rowData:this.rowData 
}
}

  /**
   * @method GetAllLocations
   * @description function to call the api and GetAll Locations Detail
   * @param options
   * @returns {observable<T>}
   */

  private getLocations(){
    this.locationService.getLocations()
    .subscribe((locations)=>
    {
     this.rowData = locations
     debugger
      this.categoryGroups =[{locations:_.cloneDeep(this.locations),category:''}];
      
      this.sortData('name');
    },()=>{
      alert('Error in getting the locations');
    })
  }

  /**
   * @method GetAllCategories
   * @description function to call the api for Get All Categories Detail
   * @param options
   * @returns {observable<T>}
   */
  private getCategories(){
    this.locationService.getCategoties()
        .subscribe((categories)=>{
         this.categories = categories;
          }
      );

  }

  /**
   * @method GetByID
   * @description function to call the api for GetLocationById  
   * @param options
   * @returns {observable<T>}
   */

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

  /**
   * @method DeleteLocation
   * @description function to call the api for Delete Location Detail
   * @param options
   * @returns {observable<T>}
   */

  deleteLocation(Id){
    if(confirm("Are you sure to delete This Location")) {
      this.locationService.deleteLocation(Id)
      .subscribe((Response)=>{
        alert('Location deleted successfully.');
        this.getLocations();
      },(message)=>{
        alert(message);
      })
    }
  
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

  /**
   * @method Filter Location By Category
   * @description function to call for filter Location Detail by Category
   * @param options
   * @returns {observable<T>}
   */
  
  filterByCategory(category){
    let locations = _.cloneDeep(this.locations);
    if(category){
      locations = _.filter(locations,{categoryName:category});
    }
    this.categoryGroups =[{locations:locations,categoryName:''}];
  }
}
