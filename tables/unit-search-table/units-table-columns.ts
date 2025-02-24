import { SearchTableColumn } from '@shared/modules/search-table/search-table.model';

export const unitsTableColumns: SearchTableColumn[] = [
     {
          columnName: 'id',
          cellFunc: (r) => r['id'],
     },
     { columnName: 'name', cellFunc: (r) => r['name'] },
     { columnName: 'country', cellFunc: (r) => r['country'] },
];
