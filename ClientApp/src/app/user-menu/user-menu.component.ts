import { Component } from '@angular/core';
import {faCaretDown, faPlus} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent {
  public caretDown = faCaretDown;
  public plus = faPlus;
}
