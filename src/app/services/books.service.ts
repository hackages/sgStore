import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Book } from '../models/book';
import { switchMap, switchMapTo, tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  booksUrl = '/api/books';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) {}

  // Gets all the books from our mock server
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl);
  }

  // Gets a book by its id from our mock server
  getBook(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.booksUrl}/${id}`);
  }

  // Update a book and re-fetch the list of books.
  update({ id, title }: Book): Observable<any> {
    const url = `${this.booksUrl}/${id}`;
    return this.http.put(url, { title, id } as Book, this.httpOptions);
  }
}
