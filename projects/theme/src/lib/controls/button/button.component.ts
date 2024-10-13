import { Component, Input } from '@angular/core';

@Component({
  selector: 'theme-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

  @Input("title")
  title;

  @Input("icon")
  icon;

  @Input()
  center = false;

  @Input()
  fullWidth = false;

}
