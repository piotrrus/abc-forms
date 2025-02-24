/* eslint-disable @typescript-eslint/no-explicit-any */

import { AfterContentInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Data } from '@angular/router';
import { TableRowInterface } from '@shared/components/table/models/table-row.interface';
import { PaginationSize } from '@shared/models/pagination-size-constants';
import { DATE_FORMAT } from '../pick-date.adapter/date-time.formats.enum';
import { CheckBoxData, SearchTableColumn } from './search-table.model';

@Component({
     selector: 'bld-search-table',
     templateUrl: './search-table.component.html',
     styleUrls: ['./search-table.component.scss'],
})
export class SearchTableComponent implements AfterContentInit {
     @Input()
     public set datasource(dataTable: MatTableDataSource<Data>) {
          this.tableDataSource = dataTable;
     }

     @Input() isPaging: boolean = true;
     @Input() isRowSelecting: boolean = false;
     @Input() tableName!: string;
     @Input() displayedColumns!: SearchTableColumn[];
     @Input() isDateCell: boolean = false;
     @Input() showUiPagination: boolean = true;
     @Input() hasSelectAll: boolean = false;
     @Output() getIdOpenPage = new EventEmitter<string>();
     @Output() selectedItem = new EventEmitter<any>();

     @Output() checkedItem = new EventEmitter<any>();
     @Output() deleteItem = new EventEmitter<any>();
     @Output() rowData = new EventEmitter<any>();

     @ViewChild(MatPaginator)
     public set matPaginator(pagination: MatPaginator) {
          this.paginator = pagination;
          this.tableDataSource.paginator = this.paginator;
     }

     public paginator: MatPaginator;

     public tableDataSource = new MatTableDataSource<Data>();
     public columns: string[] = [];
     public dateFormat: string = DATE_FORMAT;
     public readonly pageSize: number[] = PaginationSize.mediumSize;

     public rowSelected: TableRowInterface | null = null;
     public isAllSelected: boolean = false;

     public ngAfterContentInit(): void {
          this.columns = this.displayedColumns.map((c) => c.columnName);
     }

     public onOpenDetailPage(id: string): void {
          this.getIdOpenPage.emit(id);
     }

     public onSelectItem(row: any): void {
          this.selectedItem.emit(row);
     }

     public onRowClicked(row: TableRowInterface): void {
          this.toggleRowSelection(row);
     }

     public onCheckboxChange($event: MatCheckboxChange, name: string): void {
          const item: CheckBoxData = { name: name, value: $event.checked };
          this.checkedItem.emit(item);
     }

     public onDeleteItem(row: any): void {
          this.deleteItem.emit(row);
     }

     public onSelectAllChange($event: MatCheckboxChange): void {
          this.isAllSelected = $event.checked;
     }

     private toggleRowSelection(row: TableRowInterface): void {
          if (this.rowSelected === row) {
               this.rowSelected = null;
               this.rowData.emit(null);
          } else {
               this.rowSelected = row;
               this.rowData.emit(row);
          }
     }
}
