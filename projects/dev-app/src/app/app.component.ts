import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="flex flex-col h-screen w-full items-stretch">
      <abp-loader-bar></abp-loader-bar>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent { }
