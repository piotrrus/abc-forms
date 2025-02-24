import { SearchTableColumn } from '@shared/modules/search-table/search-table.model';

export const unitIdTableColumns: SearchTableColumn[] = [
     { columnName: 'idUnit', hasSelect: true, cellFunc: (r: { [x: string]: string }) => r['id'] },
     { columnName: 'unitName', cellFunc: (r: { [x: string]: string }) => r['name'] },
     { columnName: 'unitCountry', cellFunc: (r: { [x: string]: string }) => r['country'] },
];
