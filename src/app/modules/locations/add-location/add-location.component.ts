import { Location } from './../../@shared/DTOs/Location';
import { LocationService } from './../service/location-service';
import {Component, OnInit,Input} from '@angular/core';
import {FormGroup, Validators,FormControl} from "@angular/forms";
import { Router } from '@angular/router';



@Component({
  selector: 'add-location',
  templateUrl: './add-location.component.html',
})

export class AddLocationComponent implements OnInit{
  options;
  categories =[];
  latpattern;
  locations:any=new Location();
  constructor(
    private router:Router,
    private locationService:LocationService) {
      this.latpattern=/^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$/
  }
  pageHeaderOptions :any= { title: 'Location', button: { text: 'Back To List ', link: '/locations', icon: 'icon-arrow-left'}};
  /**
   * @method GetAllCategories
   * @description function to call the api and GetAll Categories Detail
   * @param options
   * @returns {observable<T>}
   */
  ngOnInit(){  
  this.locationService.getCategoties()
    .subscribe((Response)=>{  
      this.categories = Response;  
    },()=>alert('Error in getting the categories'));
  }

  /**
   * @method InsertLocation
   * @description function to call the api and Insert Location Detail
   * @param options
   * @returns {observable<T>}
   */
  onSubmit() {
    
      this.locationService.InsertLocation(this.locations)
        .subscribe(()=>{
          alert('location added successfully.');
          this.router.navigate(['/locations']);
        },()=>{
          alert('error in adding the location.');
        })
    }
}
