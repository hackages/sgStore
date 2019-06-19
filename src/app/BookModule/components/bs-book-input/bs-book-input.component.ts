import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-bs-search',
  template: `
    <div id="search-component">
      <h4>Search in your library</h4>
      <input
        id="search-box"
        #searchInput
        (input)="searchTerm$.next(searchInput.value)"
      />
    </div>
  `
})
export class BookInputComponent {
  @Input()
  searchTerm$: Subject<string>;
}
