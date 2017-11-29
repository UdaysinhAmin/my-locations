import { Router } from '@angular/router';
import { CategoryService } from './../service/category-service';
import { DataService } from './../../@shared/sercices/data.service';
import {Component, OnInit} from '@angular/core';


declare let $;
@Component({
  selector: 'list-category',
  templateUrl: './list-category.component.html',
})
export class ListCategoryComponent implements OnInit{
  categories;
  options;
  rowData:any;
  gridOptions:any;
  columnDefs:any;
  constructor(private CategoryService:CategoryService,private route:Router){
    this.gridOptions = {
      enableFilter: true
  };
  this.columnDefs = [
    {headerName: "Name", field: "Name", width: 300,sort: 'desc' ,filter: 'text'},
    {headerName:"Edit",field:"Action",suppressFilter: true,template:`<a>Edit</a>`,
     onCellClicked:(event:any)=>{ 
          if( $(event.event.target).is('a')){
          this.route.navigate(['/categories/'+ event.data.UID]);
           }
        }
      },
      {headerName:"Delete",field:"Action",suppressFilter: true,template:`<a>Delete</a>`,
      onCellClicked:(event:any)=>{ 
           if( $(event.event.target).is('a')){
            this.deleteCategory(event.data.UID)
            }
         }
       },
  ];
  }
  ngOnInit() {
    this.GetAllCategory();
  }
  //Page header options for passing to Common Header
  pageHeaderOptions :any= { title: 'Category', button: { text: 'Add ', link: 'add', icon: 'icon-plus'}};
  
  /**
   * @method GetAllCategory
   * @description function to call the api getAllCategories
   * @param options
   * @returns {observable<T>}
   */

  public GetAllCategory(){
    this.CategoryService.GetAllCategory().subscribe(Response=>{  
      this.rowData = Response;
    })
  }

    /**
     * @method DeleteCategory
    * @description function to call the api for Delete Category Detail
     * @param options
    * @returns {observable<T>}
    */
  
  public deleteCategory(categories){
    if(confirm("Are you sure to delete This Category")) {
      this.CategoryService.DeleteCategory(categories).subscribe(Response=>{
       this.GetAllCategory();
     })
    }
  }
}
