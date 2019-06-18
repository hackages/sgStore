import { BookService } from './books.service';
import { Book } from './../models/book';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class BookResolve implements Resolve<Book> {
  constructor(private booksService: BookService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Book | Observable<Book> | Promise<Book> {
    return this.booksService.getBook(route.params['bookId']);
  }
}
