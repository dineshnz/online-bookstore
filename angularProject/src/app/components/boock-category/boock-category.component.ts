import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { BookCategory } from '../../common/book-category';

@Component({
  selector: 'app-boock-category',
  templateUrl: './boock-category.component.html',
  styleUrls: ['./boock-category.component.css']
})
export class BoockCategoryComponent implements OnInit {

  categories: BookCategory[];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getBookCategory();
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
