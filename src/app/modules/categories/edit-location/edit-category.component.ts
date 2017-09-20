/**
 * Created by dinesh on 19/9/17.
 */
import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators,FormControl} from "@angular/forms";
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {CategoryService} from "../shared/category.service";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'edit-category',
  templateUrl: './edit-category.component.html',
})
export class EditCategoryComponent implements OnInit{
  categoryForm: FormGroup;
  categories =[];
  categoryId;
  category;
  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService) {
  }

  ngOnInit(){
      this.route.paramMap
        .switchMap((params: ParamMap) => {
          this.categoryId = params.get('id');
          return this.categoryService.getCategory(+params.get('id'))
        })
        .subscribe(category => {this.category = category;this.createForm();},
          message=>alert(message));
  }

  createForm() {
    this.categoryForm = new FormGroup({
      name:new FormControl(this.category, Validators.required)
    });
  }

  onSubmit() {
    if(!this.categoryForm.invalid){
      this.categoryService.updateCategory(this.categoryForm.value.name,this.categoryId)
        .subscribe(()=>{
          alert('Category updated successfully.');
          this.router.navigate(['/categories']);
        },(message)=>alert(message))
    }
  }
}
