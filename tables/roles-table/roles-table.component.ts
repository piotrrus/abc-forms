import { Component, Input } from '@angular/core';
import { Role } from '@shared/services/data/roles/roles.interface';

@Component({
     selector: 'bld-roles-table',
     templateUrl: './roles-table.component.html',
     styleUrls: ['./roles-table.component.scss'],
})
export class RolesTableComponent {
     @Input() public rolesList: Role[] | null = null;
}
