import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailPipe } from './pipes/email.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EmailPipe],
  exports: [EmailPipe]
})
export class AppPipesModule { }
