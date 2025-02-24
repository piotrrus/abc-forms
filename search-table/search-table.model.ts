export interface SearchTableColumn {
     columnName: string;
     hasSelect?: boolean;
     hasIcon?: boolean;
     icon?: boolean;
     hasCheckBox?: boolean;
     hasButton?: string;
     hasOpenDetails?: boolean;
     hasRowSelecting?: boolean;
     svgIcon?: string;
     cellFunc: (row: { [x: string]: string }) => string;
}

export interface CheckBoxData {
     name: string;
     value: boolean;
}
