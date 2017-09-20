/**
 * Created by dinesh on 19/9/17.
 */
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';

@Injectable()
export class CategoryService {
  categories=[];
  notFoundMessage="Can not find category for this id";
  duplicateMessage="This category already exists";
  private getCategoriesArray(){
    return localStorage.categories? JSON.parse(localStorage.categories):[];
  }

  private getLocationsArray(){
    return localStorage.locations? JSON.parse(localStorage.locations):[];
  }

  private setCategoriesArray(categoriesArray){
    localStorage.categories = JSON.stringify(categoriesArray);
  }

  private setLocationArray(locationsArray){
    localStorage.locations = JSON.stringify(locationsArray);
  }

  getCategories(){
    return Observable.of(this.getCategoriesArray());
  }

  getCategory(id) {
    return Observable.create(subscriber => {
      let categories = this.getCategoriesArray();
      if (!categories[id]) {
        subscriber.error(this.notFoundMessage);
      }
      return subscriber.next(categories[id]);
    });
  }

  createCategory(categoryData){
    return Observable.create(subscriber => {
      if(this.hasDuplicateCategory(categoryData,null)){
        return subscriber.error(this.duplicateMessage);
      }
      let categories = this.getCategoriesArray();
      categories.push(categoryData);
      this.setCategoriesArray(categories);
      return subscriber.next(categoryData);
    });
  }

  updateCategory(categoryData,locationId){
    return Observable.create(subscriber => {
      if(this.hasDuplicateCategory(categoryData,locationId)){
        return subscriber.error(this.duplicateMessage);
      }
      let categories = this.getCategoriesArray();
      if(!categories[locationId]){
        return subscriber.error(this.notFoundMessage);
      }
      let oldCategoryName = categories[locationId];
      categories[locationId] = categoryData;
      this.setCategoriesArray(categories);
      //update the existing locations with this category
      let locations = this.getLocationsArray();
      _.each(locations,(location:any,index)=>{
        if(location.category==oldCategoryName){
          locations[index].category = categoryData;
        }
      });
      this.setLocationArray(locations);
      return subscriber.next(categoryData);
    });
  }

  deleteCategory(locationId){
    return Observable.create(subscriber => {
      let categories = this.getCategoriesArray();
      if (!categories[locationId]) {
        subscriber.error(this.notFoundMessage);
      }
      let oldCategoryName = categories[locationId];
      categories.splice(locationId, 1);
      this.setCategoriesArray(categories);
      let locations = this.getLocationsArray();
      _.each(locations,(location:any,index)=>{
        if(location.category==oldCategoryName){
          locations[index].category = '';
        }
      });
      this.setLocationArray(locations);
      return subscriber.next(categories);
    });
  }

  private hasDuplicateCategory(newCategory,editId){
    let categories = this.getCategoriesArray();
    let foundId = _.indexOf(_.map(categories,(category:any)=>category.toLowerCase()),newCategory.toLowerCase());
    if(editId && foundId==editId && foundId>-1){
      return false;
    } else {
      return foundId>-1;
    }
  }
}
