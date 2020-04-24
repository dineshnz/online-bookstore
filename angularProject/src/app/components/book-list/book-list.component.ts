import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/common/book';
import { BookService } from '../../services/book.service';
import { BookCategory } from '../../common/book-category';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];
  categories: BookCategory[];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getBooks();
    this.getBookCategory();
  }

  getBooks(){
    this.bookService.getBooks().subscribe(
      data=>{
        this.books= data;
      },
      error=>{
        console.log(error);
      }
    );
  }

  getBookCategory(){
    this.bookService.getBookCategory().subscribe(
      data=>{
        this.categories=data;
        console.log("data are:"+ data);
      },
      error=>{
        console.log(error);
      }
    );
  }

}
