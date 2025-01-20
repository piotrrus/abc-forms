import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MatCardModule } from '@angular/material/card';
import { MaterialModule } from './material-module';
import { BootstrapModule } from './bootstrap.module';

const MODULES = [CommonModule, BootstrapModule, MaterialModule, FormsModule, ReactiveFormsModule];

@NgModule({
     imports: [MODULES],
     exports: [MODULES],
})
export class SharedModule {}
