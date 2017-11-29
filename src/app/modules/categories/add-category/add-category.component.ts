import { Category } from './../category';
import { CategoryService } from './../service/category-service';
import { DataService } from './../../@shared/sercices/data.service';
import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators,FormControl} from "@angular/forms";
import { Router } from '@angular/router';


@Component({
  selector: 'add-category',
  templateUrl: './add-category.component.html',
})
export class AddCategoryComponent implements OnInit{
  categoryForm: any;
  options;
  category:any=new Category();

  constructor(  
    private router:Router,
    private categoryService:CategoryService) {
     }
  
  ngOnInit(){
   
  }

  pageHeaderOptions :any= { title: 'Category', button: { text: 'Back To List', link: '/categories', icon: 'icon-arrow-left'}};
  /**
   * @method InsertCategory
   * @description function to call the api and inser Category Detail
   * @param options
   * @returns {observable<T>}
   */
  onSubmit() {
      this.options={
              
               body:this.category
        }
        
    this.categoryService.InsertCategory(this.category).subscribe(()=>{
            alert('Category added successfully.');
            this.router.navigate(['/categories']);
          },(message)=>alert(message))
      }

  }
