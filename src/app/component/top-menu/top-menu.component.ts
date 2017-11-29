import {Component, Input,OnInit} from '@angular/core';

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
})
export class TopMenuComponent implements OnInit{
  @Input() gridOptions;
  @Input() title;
  @Input() addLink;
  @Input() listLink;
 
  ngOnInit(){
    
    
  }
}
