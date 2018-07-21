import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { routes } from "./routes.core";
import { CoreComponent } from './containers/core';
import { AsideLeftComponent } from "./containers/aside-left/aside-left.component";
import { MainContentComponent } from "./containers/main-content/main-content.component";
import { TopNavAppComponent } from "./containers/top-nav-app/top-nav-app.component";
import { MenuAsideLeftComponent } from "./components/menu-aside-left/menu-aside-left.component";
import { TopAsideLeftComponent } from "./components/top-aside-left/top-aside-left.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CoreComponent, AsideLeftComponent, MainContentComponent, TopAsideLeftComponent, TopNavAppComponent, MenuAsideLeftComponent],
  exports: [CoreComponent]
})
export class CoreModule { }
