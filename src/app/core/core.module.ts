import { LoadingModule } from './loading/loading.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoadingComponent } from './loading/loading.component';
import { NotificationComponent } from './notification/notification.component';
import { NotificationService } from './notification/notification.service';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    LoadingModule,
    BrowserAnimationsModule
  ],
  declarations: [NotificationComponent, MenuComponent],
  exports: [LoadingModule, NotificationComponent],
  providers: [NotificationService]
})
export class CoreModule { }
