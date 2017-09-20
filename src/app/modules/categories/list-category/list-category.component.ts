/**
 * Created by dinesh on 19/9/17.
 */
import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../shared/category.service";

@Component({
  selector: 'list-category',
  templateUrl: './list-category.component.html',
})
export class ListCategoryComponent implements OnInit{
  categories;
  constructor(private categoryService:CategoryService){

  }
  ngOnInit() {
    this.getCategories();
  }

  private getCategories(){
    this.categoryService.getCategories()
      .subscribe((locations)=>{
        this.categories = locations;
      },()=>{
        alert('Error in getting the locations');
      })
  }

  deleteCategory(id){
    this.categoryService.deleteCategory(id)
      .subscribe(()=>{
        alert('Location deleted successfully.');
        this.getCategories();
      },(message)=>{
        alert(message);
      })
  }

}
