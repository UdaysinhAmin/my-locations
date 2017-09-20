/**
 * Created by dinesh on 19/9/17.
 */
import {Component, Input} from '@angular/core';

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
})
export class TopMenuComponent {
  @Input() title;
  @Input() addLink;
  @Input() listLink;
}
