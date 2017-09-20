/**
 * Created by dinesh on 19/9/17.
 */
import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder} from "@angular/forms";
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
    private fb: FormBuilder,
    private router:Router,
    private locationService: LocationService) {
    this.createForm();
  }

  ngOnInit(){
    this.locationService.getCategories()
      .subscribe((categories)=>{
        this.categories = categories;
      },()=>alert('Error in getting the categories'));
  }

  createForm() {
    this.locationForm = this.fb.group({
      name: '',
      address:'',
      lat:'',
      lang:'',
      category:'',
    });
  }

  onSubmit() {
    this.locationService.createLocation(this.locationForm.value)
      .subscribe(()=>{
        alert('location added successfully.');
        this.router.navigate(['/locations']);
      },()=>{
        alert('error in adding the location.');
      })
  }
}
