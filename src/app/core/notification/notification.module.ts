import { NotificationService } from './notification.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NotificationComponent],
  exports: [NotificationComponent],
  providers: [NotificationService]
})
export class NotificationModule { }
