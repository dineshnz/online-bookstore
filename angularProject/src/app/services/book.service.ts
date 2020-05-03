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

  getBooks(categoryId:number):Observable<Book[]>{
    const searchUrl= `${this.baseUrl}/search/categoryid?id=${categoryId}`;

    console.log(searchUrl);
    return this.getResponse(searchUrl);
  }
  //get books by id
  getBookById(id:number):Observable<Book>{
    const searchUrl= `${this.baseUrl}/${id}`;
    return this.http.get<Book>(searchUrl);
  }

  getBookCategory():Observable<BookCategory[]>{
   
    return this.http.get<getCategoryResponse>(this.categoryUrl)
    .pipe(map(response=>response._embedded.bookCategory));
  }

  searchBooks(name:string):Observable<Book[]>{
    const searchUrl= `${this.baseUrl}/search/searchByKeyword?name=${name}`;
    return this.getResponse(searchUrl);
  }


  private getResponse(searchUrl: string): Observable<Book[]> {
    return this.http.get<getResponseBooks>(searchUrl)
      .pipe(map(response => response._embedded.books));
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
