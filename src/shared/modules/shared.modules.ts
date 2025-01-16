import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material-module';
import { BootstrapModule } from './bootstrap.module';
import { DirectivesModule } from './directives.module';
// import { NgxSpinnerModule } from 'ngx-spinner';
// import { ToastrModule } from 'ngx-toastr';

const MODULES = [
     CommonModule,
     MaterialModule,
     BootstrapModule,
     FormsModule,
     ReactiveFormsModule,
     // NgxSpinnerModule,
     // ToastrModule,
     DirectivesModule,
];
// const COMPONENTS = [ConfirmDialogComponent, NoDataMsgComponent];

@NgModule({
     // declarations: [COMPONENTS],
     imports: [MODULES],
     exports: [MODULES],
})
export class SharedModule {}
