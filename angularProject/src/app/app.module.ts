import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  HttpClientModule } from '@angular/common/http';
import {  RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes:Routes=[
  {path: 'books', component: BookListComponent},
  {path:'category/{id}', component: BookListComponent},
  {path:'', redirectTo:'/books', pathMatch:'full'},
  {path:'**', component:PageNotFoundComponent}
] 

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    FooterComponent,
    PageNotFoundComponent
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