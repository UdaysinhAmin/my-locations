import { Category } from './../category';
import { CategoryService } from './../service/category-service';
import { DataService } from './../../@shared/sercices/data.service';
import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {FormGroup, Validators,FormControl} from "@angular/forms";
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import * as _ from 'lodash';
import { ReactiveFormsModule }            from '@angular/forms';

@Component({
  selector: 'edit-category',
  templateUrl: './edit-category.component.html',
})
export class EditCategoryComponent implements OnInit{
  categoryForm: FormGroup;
  options;
  //categories =[];
  //locations = [];
  categoryId;
    category:Category;

  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private categoryService:CategoryService) {
  }

    /**
   * @method GetAllCategory and GetCategoryById
   * @description function to call the api and get All Category Detail 
   *              and get All category Detail By Id
   * @param options
   * @returns {observable<T>}
   */
  ngOnInit(){
    
      this.route.paramMap
        .switchMap((params: ParamMap) => {
          this.categoryId = params.get('id');
          return this.categoryService.GetCategoryById(this.categoryId)
        })
        .subscribe((Category:any) => {
        
            this.category = Category;
           // this.createForm();
           },
           message=>{
               this.router.navigate(['/categories']);
               alert(message);
           });
   }

  /**
   * @method UpdateCategory
   * @description function to call the api and Update Category Detail
   * @param options
   * @returns {observable<T>}
   */
 onSubmit() {
    this.categoryService.UpdateCategory(this.category).subscribe(response=>{
      alert('Category updated successfully.');
      this.router.navigate(['/categories']);
      (message)=>alert(message)
    })
  }
  pageHeaderOptions :any= { title: 'Category', button: { text: 'Back To List ', link: '/categories', icon: 'icon-arrow-left'}};
}
