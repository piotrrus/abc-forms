import { Injectable } from '@angular/core';
import { MessageType } from './message-type.enum';
import { ToastrService } from 'ngx-toastr';
@Injectable({
     providedIn: 'root',
})
export class NotificationMessageService {
     constructor(private toastr: ToastrService) {}

     public system(message: string): void {
          this.notification(message, MessageType.System);
     }

     public warning(message: string): void {
          this.notification(message, MessageType.Warning);
     }

     public error(message: string): void {
          this.notification(message, MessageType.Error);
     }

     public errorSave(message: string): void {
          this.notification(message, MessageType.SaveError);
     }

     public info(message: string): void {
          this.notification(message, MessageType.Information);
     }

     public success(message: string, description?: string): void {
          const notificationMsg: string = description ? message + ' ' + description : message;
          this.notification(notificationMsg, MessageType.Success);
     }

     private notification(message: string, msgType: MessageType): void {
          switch (msgType) {
               case MessageType.Success: {
                    this.toastr.success(message);
                    break;
               }
               case MessageType.Error: {
                    this.toastr.error('Wystąpił błąd podczas pobierania danych');
                    break;
               }
               case MessageType.SaveError: {
                    this.toastr.error('Wystąpił błąd podczas zapisu danych');
                    break;
               }
               case MessageType.Information: {
                    this.toastr.info(message);
                    break;
               }
               case MessageType.Warning: {
                    this.toastr.warning(message);
                    break;
               }
               case MessageType.System: {
                    this.toastr.warning(message);
                    break;
               }
          }
     }
}
