/**
 * Created by dinesh on 19/9/17.
 */
import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators,FormControl} from "@angular/forms";
import { Router } from '@angular/router';
import {CategoryService} from "../shared/category.service";

@Component({
  selector: 'add-category',
  templateUrl: './add-category.component.html',
})
export class AddCategoryComponent implements OnInit{
  categoryForm: FormGroup;
  categories =[];
  constructor(
    private router:Router,
    private categoryService: CategoryService) {
  }

  ngOnInit(){
    this.createForm();
  }

  createForm() {
    this.categoryForm = new FormGroup({
      name:new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    if(!this.categoryForm.invalid){
      this.categoryService.createCategory(this.categoryForm.value.name)
        .subscribe(()=>{
          alert('Category added successfully.');
          this.router.navigate(['/categories']);
        },(message)=>alert(message))
    }
  }
}
