import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopNavAppComponent } from './top-nav-app/top-nav-app.component';
import { AsideLeftComponent } from './aside-left/aside-left.component';
import { TopAsideLeftComponent } from './top-aside-left/top-aside-left.component';
import { MenuAsideLeftComponent } from './menu-aside-left/menu-aside-left.component';
import { MainContentComponent } from './main-content/main-content.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavAppComponent,
    AsideLeftComponent,
    TopAsideLeftComponent,
    MenuAsideLeftComponent,
    MainContentComponent
  ],
  imports: [
    BrowserModule
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
