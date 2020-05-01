import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/common/book';
import { BookService } from '../../services/book.service';
import { BookCategory } from '../../common/book-category';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];
  categories: BookCategory[];
  currentCategoryId:number;

  constructor(private bookService: BookService,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(()=>{
      this.getBooks();
    })
  }

  getBooks(){
    const hasCategoryId:boolean= this.route.snapshot.paramMap.has('id');

    if(hasCategoryId){
      this.currentCategoryId= +this.route.snapshot.paramMap.get('id');
    }else{
      this.currentCategoryId=1;
    }

    this.bookService.getBooks(this.currentCategoryId).subscribe(
      data=>{
        this.books= data;
        console.log(this.books);
        console.log('Category Id is'+this.currentCategoryId);
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
