import { PageBodyComponent } from './page-body.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PageBodyComponent],
  exports:[PageBodyComponent]
})
export class PageBodyModule { }
