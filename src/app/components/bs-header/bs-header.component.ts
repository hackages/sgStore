import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bs-header',
  template: `
    <h1>{{ title }}</h1>
    <h1>(Display user's email here using ngrx)</h1>
    <hr />
  `
})
export class BsHeaderComponent {
  @Input('titleFromParent')
  title: string;
}
