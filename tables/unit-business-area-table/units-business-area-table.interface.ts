export interface UnitsBusinessAreaList extends UnitsBusinessAreaTable {
     name?: string;
     checked?: boolean;
     businessAreasValue?: boolean;
}

export interface UnitsBusinessAreaTable {
     id?: string;
     baldoBusinessAreaId?: string;
     businessAreasValue?: boolean;
     baldoBusinessArea: string;
     businessArea: string;
     brand: string;
     district: string;
     customer: string;
     pay: boolean;
     parmaId?: string;
     salesOrganization?: string;
}
