import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class NotificationState {
    public static readonly INACTIVE = 'inactive';
    public static readonly ACTIVE = 'active';
}
export class NotificationType {
    public static readonly DEFAULT = 'Information';
    public static readonly ERROR = 'error';
    public static readonly WARNING = 'warning';
    public static readonly SUCCESS = 'success';
}
export interface NotifyConfig {
    timeout: number;
}
export interface Notification {
    msg: string;
    type?: NotificationType;
    state: NotificationState;
}
@Injectable()
export class NotificationService {
    notification = new BehaviorSubject<Notification>({
        msg: '',
        type: NotificationType.DEFAULT,
        state: NotificationState.INACTIVE
    });
    constructor() {

    }
    public showError(msg: string, notifyConfig?: NotifyConfig) {
        const notify: Notification = {
            msg: msg,
            type: NotificationType.ERROR,
            state: NotificationState.ACTIVE
        };
        this.notification.next(notify);
        this.setupNotifyConfig(notifyConfig);

    }
    public showMessage(msg: string, notifyConfig?: NotifyConfig) {
        const notify: Notification = {
            msg: msg,
            type: NotificationType.DEFAULT,
            state: NotificationState.ACTIVE
        };
        this.notification.next(notify);
        this.setupNotifyConfig(notifyConfig);
    }

    public showWarning(msg: string, notifyConfig?: NotifyConfig) {
        const notify: Notification = {
            msg: msg,
            type: NotificationType.WARNING,
            state: NotificationState.ACTIVE
        };
        this.notification.next(notify);
        this.setupNotifyConfig(notifyConfig);
    }

    public showSuccess(msg: string, notifyConfig?: NotifyConfig) {
        const notify: Notification = {
            msg: msg,
            type: NotificationType.SUCCESS,
            state: NotificationState.ACTIVE
        };
        this.notification.next(notify);
        this.setupNotifyConfig(notifyConfig);
    }
    public clear() {
        const notify: Notification = {
            msg: '',
            type: this.notification.getValue().type, //track previous message type
            state: NotificationState.INACTIVE
        };
        this.notification.next(notify);
    }
    public setupNotifyConfig(notifyConfig?: NotifyConfig) {
        if (notifyConfig) {
            setTimeout(() => this.clear(), notifyConfig.timeout);
        }
    }
}