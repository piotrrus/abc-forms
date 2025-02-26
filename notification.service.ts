import { Injectable } from '@angular/core';
import {
     MatSnackBar,
     MatSnackBarHorizontalPosition,
     MatSnackBarRef,
     MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { NotificationComponent } from '@core/notification/notification.component';
import { Notification } from '@core/notification/notification.model';
import { TranslateService } from '@ngx-translate/core';
import { MessageType } from '../enums/message-type.enum';

@Injectable({
     providedIn: 'root',
})
export class NotificationMessageService {
     private readonly duration: number = 5000;
     private readonly verticalPosition: MatSnackBarVerticalPosition = 'top';
     private readonly horizontalPosition: MatSnackBarHorizontalPosition = 'end';

     constructor(
          private snackBar: MatSnackBar,
          private translate: TranslateService
     ) {}

     public notification(
          message: string,
          type: MessageType = MessageType.Error,
          showCloseButton: boolean = false
     ): MatSnackBarRef<NotificationComponent> {
          const data: Notification = { message, showCloseButton, type, snackBar: this.snackBar };
          const panelClass: string = {
               [MessageType.Error]: 'snack-bar-background-error',
               [MessageType.Success]: 'snack-bar-background-success',
               [MessageType.Warning]: 'snack-bar-background-warning',
               [MessageType.Information]: 'snack-bar-background-info',
               [MessageType.System]: 'snack-bar-background-system',
          }[type];

          return this.snackBar.openFromComponent(NotificationComponent, {
               panelClass,
               data,
               duration: this.duration,
               verticalPosition: this.verticalPosition,
               horizontalPosition: this.horizontalPosition,
          });
     }

     public system(message: string): void {
          const translatedMsg: string = this.translateMsg(message);
          this.notification(translatedMsg, MessageType.System, true);
     }

     public warning(message: string): void {
          const translatedMsg: string = this.translateMsg(message);
          this.notification(translatedMsg, MessageType.Warning, true);
     }

     public error(message: string): void {
          const translatedMsg: string = this.translateMsg(message);
          this.notification(translatedMsg, MessageType.Error, true);
     }

     public info(message: string): void {
          const translatedMsg: string = this.translateMsg(message);
          this.notification(translatedMsg, MessageType.Information, true);
     }

     public success(message: string, param?: string): void {
          const translatedMsg: string = this.translateMsg(message);
          const notificationMsg: string = param ? translatedMsg + param : translatedMsg;
          this.notification(notificationMsg, MessageType.Success, true);
     }

     private translateMsg(message: string): string {
          return this.translate.instant(`notifications.${message}`) as string;
     }
}
