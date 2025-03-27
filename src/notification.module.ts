import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { NotificationComponent } from '@core/notification/notification.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
     imports: [CommonModule, MatSnackBarModule, MatIconModule, TranslateModule],
     declarations: [NotificationComponent],
     schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NotificationModule {}
