import {Http, Headers, RequestOptionsArgs, URLSearchParams} from "@angular/http";
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/take';
import {Observable} from "rxjs/Rx";
import * as _ from "lodash";
import {DataService} from './../../@shared/sercices/data.service';

@Injectable()
export class CategoryService {
 
  CategoryData:any=[];
 
   constructor(private dataService:DataService){
   }

  InsertCategory(category){
   
         return  this.dataService.callAPI({url:'/Category',method:'post',body:category})
  }
    GetCategoryById(Id){
     
           return  this.dataService.callAPI({ url:'/Category',id:Id})
  }

    UpdateCategory(category){
        
            return  this.dataService.callAPI({ url:'/Category',method:'put',body:category})
  }

  GetAllCategory(){
         return  this.dataService.callAPI({url:"/categories"}) 
  }

   DeleteCategory(categoryId){ 
            return  this.dataService.callAPI({ url:'/category',method:'delete',id:categoryId})       
   }
}
