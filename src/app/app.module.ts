import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { routes } from "./routes";
import { AppComponent } from './app.component';
import { TopNavAppComponent } from './top-nav-app/top-nav-app.component';
import { AsideLeftComponent } from './aside-left/aside-left.component';
import { TopAsideLeftComponent } from './top-aside-left/top-aside-left.component';
import { MenuAsideLeftComponent } from './menu-aside-left/menu-aside-left.component';
import { MainContentComponent } from './main-content/main-content.component';
import { BooksListMainComponent } from './books-list-main/books-list-main.component';
import { BooksMainComponent } from './books-main/books-main.component';
import { CollectionsComponent } from './collections/collections.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavAppComponent,
    AsideLeftComponent,
    TopAsideLeftComponent,
    MenuAsideLeftComponent,
    MainContentComponent,
    BooksListMainComponent,
    BooksMainComponent,
    CollectionsComponent,
    FavoritesComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
