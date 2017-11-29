import { Category } from './../../categories/category';
import { Location } from './../../@shared/DTOs/Location';
import { LocationService } from './../service/location-service';
import { Response } from '@angular/http';
import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators,FormControl} from "@angular/forms";
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';



@Component({
  selector: 'edit-location',
  templateUrl: './edit-location.component.html',
})

export class EditLocationComponent implements OnInit{
  locationForm: FormGroup;
  options;
  locations:Location
  location;
  locationId;
  categories:Array<Category> = []
  
    //categories =[];
  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private locationService:LocationService) {
  }
  pageHeaderOptions :any= { title: 'Location', button: { text: 'Back To List ', link: '/locations', icon: 'icon-arrow-left'}};
/**
   * @method GetAllcategories And GetCategoryByID
   * @description function to call the api for Get Category Detail
   * @param options
   * @returns {observable<T>}
   */
  ngOnInit(){ 
    
    this.locationService.getCategoties()
      .subscribe((categories)=>{
        
        this.categories = categories;
        this.route.paramMap
          .switchMap((params: ParamMap) => {
            this.locationId = params.get('id');
            return this.locationService.getLocationById(this.locationId);
          })
          .subscribe((Response:any) => { 
            
            this.locations=Response;
          },
            message=>{
              this.router.navigate(['/locations']);
              alert(message);
            });
            
      },()=>alert('Error in getting the categories'));
  }

/**
   * @method UpdateLocation
   * @description function to call the api and Update Location Detail
   * @param options
   * @returns {observable<T>}
   */

  onSubmit() {
      this.options={
        method:'put',
        url:'/location',
        body:this.locations
      }
        this.locationService.updateLocation(this.locations)
        .subscribe(()=>{
          alert('location edited successfully.');
          this.router.navigate(['/locations']);
        },(message)=>{
          alert(message);
        })
    }
}
