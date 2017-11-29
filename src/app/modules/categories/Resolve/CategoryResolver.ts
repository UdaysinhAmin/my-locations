import { CategoryService } from './../service/category-service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CategoryResolver implements Resolve<any> {
  constructor(
    private categoryService:CategoryService
  ) {}
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.categoryService.GetAllCategory().subscribe(Response=>{
          
    });
    
    }
}
