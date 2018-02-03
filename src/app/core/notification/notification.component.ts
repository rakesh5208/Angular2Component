import { NotificationService, NotificationType, Notification } from './notification.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  animations: [trigger('notifyAnimation', [
    state('inactive', style({
      height: '0%',
      opacity: 0
    })),
    state('active', style({
      height: '7em',
      opacity: 1
    })),
    transition('inactive => active', animate('200ms ease-in')),
    transition('active => inactive', animate('200ms ease-out'))
  ])]
})
export class NotificationComponent implements OnInit, OnDestroy {

  notification: Notification = undefined;
  notify$ = undefined
  constructor(private notifyService: NotificationService) { }

  ngOnInit() {
    this.notify$ = this.notifyService.notification
      .subscribe((notification: Notification) => {
        this.notification = notification;
      });
  }
  getNotifyClass() {
    let notifyCssClassName = '';
    switch (this.notification.type) {
      case NotificationType.SUCCESS:
        notifyCssClassName = 'success-msg'
        break;
      case NotificationType.ERROR:
        notifyCssClassName = 'error-msg'
        break;
      case NotificationType.WARNING:
        notifyCssClassName = 'warning-msg'
        break;
      default:
        notifyCssClassName = 'info-msg'
    }
    return notifyCssClassName;
  }
  close() {
    this.notifyService.clear();
  }
  ngOnDestroy(): void {
    if (this.notify$) {
      this.notify$.unsubscribe();
    }
  }
}
