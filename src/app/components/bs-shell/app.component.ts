import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-book-store',
  styleUrls: ['app.component.css'],
  template: `
    <app-bs-header [titleFromParent]="title"></app-bs-header>
    <router-outlet></router-outlet>
  `,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'Bookstore by Hackages';
}
