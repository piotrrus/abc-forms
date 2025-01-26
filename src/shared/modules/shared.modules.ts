import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material-module';
import { BootstrapModule } from './bootstrap.module';
import { DirectivesModule } from './directives.module';

const MODULES = [
     CommonModule,
     BootstrapModule,
     MaterialModule,
     FormsModule,
     ReactiveFormsModule,
     DirectivesModule,
];

@NgModule({
     imports: [MODULES],
     exports: [MODULES],
})
export class SharedModule {}
