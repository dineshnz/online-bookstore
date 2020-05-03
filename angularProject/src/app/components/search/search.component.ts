import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from 'src/app/common/book';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  books: Book[];
  constructor(private bookService:BookService, 
              private router:Router) { }

  ngOnInit(): void {
  }

  searchBooks(keyword:string){
    this.router.navigateByUrl('/search/'+keyword);
  }

}
