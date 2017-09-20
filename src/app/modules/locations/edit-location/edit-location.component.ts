/**
 * Created by dinesh on 19/9/17.
 */
import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators,FormControl} from "@angular/forms";
import {LocationService} from "../shared/location.service";
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'edit-location',
  templateUrl: './edit-location.component.html',
})
export class EditLocationComponent implements OnInit{
  locationForm: FormGroup;
  location;
  locationId;
  categories =[];
  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private locationService: LocationService) {
  }

  ngOnInit(){
    window.navigator.vibrate([500, 250, 500, 250, 500, 250, 500, 250, 500, 250, 500]);
    this.locationService.getCategories()
      .subscribe((categories)=>{
        this.categories = categories;
        this.route.paramMap
          .switchMap((params: ParamMap) => {
            this.locationId = params.get('id');
            return this.locationService.getLocation(+params.get('id'))
          })
          .subscribe(location => {this.location = location;this.createForm();},
            message=>alert(message));
      },()=>alert('Error in getting the categories'));
  }

  createForm() {
    this.locationForm = new FormGroup({
      name:new FormControl(this.location.name, Validators.required),
      address:new FormControl(this.location.address, Validators.required),
      lat:new FormControl(this.location.lat, [Validators.required,Validators.pattern(/^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$/)]),
      lang:new FormControl(this.location.lang, [Validators.required,Validators.pattern(/^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,6})?))$/)]),
      category:new FormControl(this.location.category, Validators.required)
    });
  }

  onSubmit() {
    if(!this.locationForm.invalid){
      this.locationService.updateLocation(this.locationForm.value,this.locationId)
        .subscribe(()=>{
          alert('location added successfully.');
          this.router.navigate(['/locations']);
        },()=>{
          alert('error in adding the location.');
        })
    }
  }
}
