/**
 * Created by dinesh on 19/9/17.
 */
import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators,FormControl} from "@angular/forms";
import {LocationService} from "../shared/location.service";
import { Router } from '@angular/router';

@Component({
  selector: 'add-location',
  templateUrl: './add-location.component.html',
})
export class AddLocationComponent implements OnInit{
  locationForm: FormGroup;
  categories =[];
  constructor(
    private router:Router,
    private locationService: LocationService) {
  }

  ngOnInit(){
    this.createForm();
    this.locationService.getCategories()
      .subscribe((categories)=>{
        this.categories = categories;
      },()=>alert('Error in getting the categories'));
  }

  createForm() {
    this.locationForm = new FormGroup({
      name:new FormControl('', Validators.required),
      address:new FormControl('', Validators.required),
      lat:new FormControl('', [Validators.required,Validators.pattern(/^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$/)]),
      lang:new FormControl('', [Validators.required,Validators.pattern(/^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,6})?))$/)]),
      category:new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    if(!this.locationForm.invalid){
      this.locationService.createLocation(this.locationForm.value)
        .subscribe(()=>{
          alert('location added successfully.');
          this.router.navigate(['/locations']);
        },()=>{
          alert('error in adding the location.');
        })
    }
  }
}
