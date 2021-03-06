import { Routes } from "@angular/router";
import { BooksMainComponent } from "./containers/books-main/books-main.component";
import { BookDetailComponent } from "./containers/book-detail/book-detail.component";

export const routes: Routes = [
    {
        path: 'list',
        component: BooksMainComponent
    },
    {
        path: '', redirectTo: 'list', pathMatch: 'full'
    },
    {
        path: 'detail/:id',
        component: BookDetailComponent
    },
    {
        path: '**', redirectTo: 'list', pathMatch: 'full'
    }
];