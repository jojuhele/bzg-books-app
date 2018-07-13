import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopNavAppComponent } from './top-nav-app/top-nav-app.component';
import { AsideLeftComponent } from './aside-left/aside-left.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavAppComponent,
    AsideLeftComponent
  ],
  imports: [
    BrowserModule
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
