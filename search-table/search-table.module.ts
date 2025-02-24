import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { CdkTableModule } from '@angular/cdk/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TranslateModule } from '@ngx-translate/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SearchTableComponent } from './search-table.component';

@NgModule({
     imports: [
          CommonModule,
          MatIconModule,
          MatTableModule,
          CdkTableModule,
          MatPaginatorModule,
          TranslateModule,
          MatTooltipModule,
          MatRadioModule,
          MatCheckboxModule,
     ],
     declarations: [SearchTableComponent],
     exports: [SearchTableComponent],
     schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SearchTableModule {}
