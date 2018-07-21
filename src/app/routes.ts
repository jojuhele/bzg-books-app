import { Routes } from "@angular/router";


export const routes: Routes = [    
    {
        path: 'main',
        loadChildren: './core/core.module#CoreModule'
    },
    {
        path: '',
        redirectTo: 'main/books',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: './auth/auth.module#AuthModule'        
    },    
    {
        path: '**',
        redirectTo: ''
    }
    
];