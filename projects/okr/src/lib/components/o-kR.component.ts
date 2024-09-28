import { Component, OnInit } from '@angular/core';
import { OKRService } from '../services/o-kR.service';

@Component({
  selector: 'lib-o-kR',
  template: ` <p>o-kR works!</p> `,
  styles: [],
})
export class OKRComponent implements OnInit {
  constructor(private service: OKRService) {}

  ngOnInit(): void {
    this.service.sample().subscribe(console.log);
  }
}
