import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent, ModalBodyComponent, ModalHeaderComponent, ModalFooterComponent } from './modal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ModalComponent,
    ModalBodyComponent,
    ModalHeaderComponent,
    ModalFooterComponent
  ],
  exports: [
    ModalComponent,
    ModalBodyComponent,
    ModalHeaderComponent,
    ModalFooterComponent
  ]
})
export class ModalModule { }
