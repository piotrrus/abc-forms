import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiService } from '@core/api/api.service';

@Injectable()
export class CountriesService extends ApiService {

     public getCountriesList(): Observable<List[]> {
          return this.get('countries.json');
     }
}

export interface List[] = [
	id: string;
	name: string;
]