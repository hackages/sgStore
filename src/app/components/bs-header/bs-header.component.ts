import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bs-header',
  template: `
    <h1>{{ title }}</h1>
    <hr />
  `
})
export class BsHeaderComponent {
  title: string;
}
