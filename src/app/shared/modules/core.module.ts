import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
     imports: [CommonModule, BrowserModule, BrowserAnimationsModule, HttpClientModule],
})
export class CoreModule {}
