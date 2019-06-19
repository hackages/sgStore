import { Book } from '../../models/book';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bs-books',
  template: `
    <h3>All Books {{ books?.length }}</h3>
    <br />
    <hr />
    <div class="grid grid-pad">
      <a
        [routerLink]="['/books', book.id]"
        class="col-1-4"
        *ngFor="let book of books"
      >
        <div class="module hero">
          <h4>{{ book.title }}</h4>
        </div>
      </a>
    </div>
  `
})
export class BooksComponent {
  @Input()
  books: Book[];
}
