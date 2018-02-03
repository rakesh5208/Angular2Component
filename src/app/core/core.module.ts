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
    BrowserAnimationsModule
  ],
  declarations: [LoadingComponent, NotificationComponent, MenuComponent],
  exports:[LoadingComponent,NotificationComponent],
  providers:[NotificationService]
})
export class CoreModule { }
