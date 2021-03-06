import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  HttpClientModule } from '@angular/common/http';
import {  RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { BoockCategoryComponent } from './components/boock-category/boock-category.component';
import { SearchComponent } from './components/search/search.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';

const routes:Routes=[
  {path: 'books', component: BookListComponent},
  {path: 'books/:id', component: BookDetailsComponent},
  {path:'category/:id', component: BookListComponent},
  {path:'search/:keyword', component: BookListComponent},
  {path:'', redirectTo:'/books', pathMatch:'full'},
  {path:'**', component:PageNotFoundComponent}
] 

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    FooterComponent,
    PageNotFoundComponent,
    HeaderComponent,
    BoockCategoryComponent,
    SearchComponent,
    BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
