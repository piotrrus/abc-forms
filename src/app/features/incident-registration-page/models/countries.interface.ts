import { SimpleList } from './list.interface';

export interface Country {
     id: string;
     name: string;
     value: boolean;
}

export interface Section11 {
     theBreachIsCrossBorderInNature: boolean;
     countries: SimpleList[];
}
