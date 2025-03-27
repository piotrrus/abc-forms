import { MatSnackBar } from '@angular/material/snack-bar';
import { MessageType } from './enums/message-type.enum';

export interface Notification {
     message: string;
     snackBar: MatSnackBar;
     showCloseButton: boolean;
     type: MessageType;
}
