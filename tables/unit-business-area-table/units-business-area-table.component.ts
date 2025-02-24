import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { BusinessAreaBrands } from '@shared/services/data/business-areas/business-area.interface';
import { unitsBusinessAreaTableColumns } from './units-business-area-table-columns';
import { UnitsBusinessAreaTable } from './units-business-area-table.interface';

@Component({
     selector: 'bld-units-business-area-table',
     templateUrl: './units-business-area-table.component.html',
     styleUrls: ['./units-business-area-table.component.scss'],
     changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnitsBusinessAreaTableComponent {
     @Input() public businessAreaTableData: UnitsBusinessAreaTable[] | null = [];

     @Output() public dataChanged = new EventEmitter();
     public tableColumns = unitsBusinessAreaTableColumns;

     public addBusinessAreaBrand(businessAreaBrands: BusinessAreaBrands): void {
          this.dataChanged.emit(businessAreaBrands);
     }
}
