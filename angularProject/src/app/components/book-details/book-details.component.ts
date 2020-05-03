import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Book } from 'src/app/common/book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  currentBookId:number;
  book:Book;
  constructor(private route: ActivatedRoute,
              private bookService:BookService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      ()=>{
      this.getBookById();
    });
   
  }

  //we get the id from the url path and pass it to the service method to call the back end for the single book with given id

  getBookById(){
    this.currentBookId= +this.route.snapshot.paramMap.get('id');


    this.bookService.getBookById(this.currentBookId).subscribe(
      (data)=>{
        this.book=data;
      },(error)=>{
        console.log(error);
      }
    );
  }

}
