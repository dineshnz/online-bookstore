import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../common/book';
import { map } from 'rxjs/operators';
import { BookCategory } from '../common/book-category';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl= 'http://localhost:8080/api/books';
  private categoryUrl='http://localhost:8080/api/book-category';

  constructor(private http:HttpClient) { }

  getBooks():Observable<Book[]>{
    return this.http.get<getResponseBooks>(this.baseUrl)
    .pipe(map(response=>response._embedded.books));
  }

  getBookCategory():Observable<BookCategory[]>{
    return this.http.get<getCategoryResponse>(this.categoryUrl)
    .pipe(map(response=>response._embedded.bookCategory));
  }

}

interface getResponseBooks{
  _embedded:{
    books:Book[];
  }
}

interface getCategoryResponse{
  _embedded:{
    bookCategory:BookCategory[];
  }
}
