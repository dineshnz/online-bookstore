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
 
  currentCategoryId:number;
  searchMode:boolean;
  searchParam:string;

  constructor(private bookService: BookService,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(()=>{
      this.getBooks();
    })
  }

  getBooks(){
    this.searchMode= this.route.snapshot.paramMap.has('keyword');

    if(this.searchMode){
      //call handle search book method
      this.searchParam= this.route.snapshot.paramMap.get('keyword');
      this.handleSearchBookLists(this.searchParam);
    }else{
      this.handleBookLists();
    }
  }

  handleBookLists(){
    const hasCategoryId:boolean= this.route.snapshot.paramMap.has('id');

    if(hasCategoryId){
      this.currentCategoryId= +this.route.snapshot.paramMap.get('id');
    }else{
      this.currentCategoryId=1;
    }

    this.bookService.getBooks(this.currentCategoryId).subscribe(
      data=>{
        this.books= data;
      },
      error=>{
        console.log(error);
      }
    );
  }

  handleSearchBookLists(input:string){
    this.bookService.searchBooks(input).subscribe(
      data=>{
        this.books= data;
      },
      error=>{
        console.log(error);
      }
    );

  }
  

}
