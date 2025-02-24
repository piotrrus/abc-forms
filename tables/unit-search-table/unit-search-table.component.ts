import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchTableColumn } from '@shared/modules/search-table/search-table.model';
import { MatTableDataSource } from '@angular/material/table';
import { SearchTablesNames } from '@shared/modules/search-table/search-tables-names.enum';
import { UnitSearchTableModel } from '@features/units/models/units-search-table.model';
import { UnitTableConfig } from './unit-table-config.interface';
import { unitIdTableColumns } from './unit-id-search-table-columns';
import { unitsTableColumns } from './units-table-columns';

@Component({
     selector: 'bld-unit-search-table',
     templateUrl: './unit-search-table.component.html',
     styleUrls: ['./unit-search-table.component.scss'],
})
export class UnitSearchTableComponent {
     @Input() public set unitTableConfig(unitTableConfig: UnitTableConfig | null) {
          this.tableColumns = unitTableConfig?.isUnitIdSearch ? unitIdTableColumns : unitsTableColumns;
     }

     @Input() public set units(units: UnitSearchTableModel[] | null) {
          units ? (this.tableDataSource.data = units) : null;
     }

     @Output() public getDetailUnit = new EventEmitter<string>();
     @Output() public selectedItem = new EventEmitter<string>();

     public tableName: SearchTablesNames = SearchTablesNames.UNITS;
     public tableColumns: SearchTableColumn[] = [];
     public tableDataSource = new MatTableDataSource<UnitSearchTableModel>([]);

     public navigateToDetailedUnit(id: string): void {
          this.getDetailUnit.emit(id);
     }

     public addUnitId(unit: UnitSearchTableModel): void {
          this.selectedItem.emit(unit.id);
     }
}
