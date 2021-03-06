import { NotificationService } from './core/notification/notification.service';
import { Component } from '@angular/core';
import { NavItem } from './core/nav/nav-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  isLoading = true;
  initial = 1000;
  navItems: NavItem[] = [{
    label: 'Event List',
    path: '/event-list'
  },
  {
    label: 'Add Event',
    path: '/add-event'
  }];
  modalState = false;
  constructor(private notify: NotificationService) {
    this.init();
    setTimeout(() => {
      this.isLoading = false;
    }, this.initial);
  }

  init() {
    // setTimeout(() => this.notify.showError('loaded just to show error', { timeout: 5000 }), this.initial * 2);
    // setTimeout(()=> this.notify.showWarning('loaded just to show error'),this.initial * 3);
    // setTimeout(()=> this.notify.showSuccess('loaded just to show error'),this.initial * 4);
    // setTimeout(()=> this.notify.showDefault('loaded just to show error'),this.initial * 5);
  }
  showNotification(current) {
    switch (current) {
      case 3:
        this.notify.showMessage('This a default message, the quick brown fox jumps over the lazy dog. the quick brown fox jumps over the lazy dog. the quick brown fox jumps over the lazy dog.');
        break;
      case 1:
        this.notify.showSuccess('This a success message');
        break;
      case 0:
        this.notify.showError('This a error message', { timeout: 5000 });
        break;
      case 2:
        this.notify.showWarning('This a warning message');
        break;

    }
  }
  toogleModal(modalState){
    this.modalState = modalState;
  }
}
