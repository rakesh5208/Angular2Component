import { PageBodyModule } from './page-body/page-body.module';
import { NavModule } from './nav/nav.module';
import { FooterModule } from './footer/footer.module';
import { LoadingModule } from './loading/loading.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoadingComponent } from './loading/loading.component';
import { NotificationComponent } from './notification/notification.component';
import { NotificationService } from './notification/notification.service';
import { MenuComponent } from './menu/menu.component';
import { NotificationModule } from './notification/notification.module';
import { PageBodyComponent } from './page-body/page-body.component';
import {ModalModule} from './modal/modal.module'
@NgModule({
  imports: [
    CommonModule,
    LoadingModule,
    NotificationModule,
    FooterModule,
    NavModule,
    PageBodyModule,
    ModalModule,
    BrowserAnimationsModule
  ],
  declarations: [MenuComponent],
  exports: [
    LoadingModule,
    NotificationModule,
    FooterModule,
    NavModule,
    PageBodyModule,
    ModalModule
  ],
  providers: []
})
export class CoreModule { }
