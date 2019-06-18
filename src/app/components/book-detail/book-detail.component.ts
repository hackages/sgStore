import { BookService } from '../../services/books.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Book } from '../../models/book';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'bs-book-detail',
  styleUrls: ['book-detail.component.css'],
  templateUrl: 'book-detail.component.html'
})
export class BookDetailComponent implements OnInit {
  book: Book;
  subscription: Subscription;
  myGroup: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private booksService: BookService,
    private location: Location
  ) {
    this.myGroup = new FormGroup({
      title: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email])
    });
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.book = data.book;
      this.myGroup.get('title').setValue(this.book.title);
    });
  }

  save(): void {
    const title = this.myGroup.get('title').value; // the title is a user input

    this.booksService
      .update({ id: this.book.id, title } as Book)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
