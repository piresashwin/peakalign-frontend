import { Component, Input, OnInit } from '@angular/core';
import { menuAnimation } from '../../snimations/animations';

@Component({
  selector: 'pa-user-profile-menu',
  templateUrl: './user-profile-menu.component.html',
  styleUrl: './user-profile-menu.component.css',
  animations: [
    menuAnimation
  ]
})
export class UserProfileMenuComponent implements OnInit {

  @Input()
  user: any;

  isOpen = false;

  /**
   *
   */
  constructor() {

  }
  ngOnInit(): void {
  }

  menuClosed() {
    this.isOpen = false;
  }

}
