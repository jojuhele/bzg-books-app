import { Routes } from "@angular/router";
import { BooksMainComponent } from "./books-main/books-main.component";
import { CollectionsComponent } from "./collections/collections.component";
import { FavoritesComponent } from "./favorites/favorites.component";
import { BookDetailComponent } from "./book-detail/book-detail.component";

export const routes: Routes = [    
    {
        path: '',
        component: BooksMainComponent
    },
    {
        path: 'collections',
        component: CollectionsComponent
    },
    {
        path: 'favorites',
        component: FavoritesComponent
    },
    {
        path: 'detail/:id',
        component: BookDetailComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
    
];