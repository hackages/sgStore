import { BookService } from '../../services/books.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Book } from '../../models/book';
import { Subscription } from 'rxjs';

@Component({
  selector: 'bs-book-detail',
  styleUrls: ['book-detail.component.css'],
  templateUrl: 'book-detail.component.html'
})
export class BookDetailComponent implements OnInit {
  book: Book;
  subscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private booksService: BookService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.book = data.book;
    });
  }

  save(): void {
    const title = ''; // the title is a user input

    this.booksService
      .update({ id: this.book.id, title } as Book)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
