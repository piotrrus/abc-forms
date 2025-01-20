import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiService } from '@core/api/api.service';

@Injectable()
export class FormFieldsDescriptionService extends ApiService {

     public getPersonCategoriesDescriptions(): Observable<List[]> {
          return this.get('person-categories.json');
     }
	 
	 public getPersonCategoriesDescriptions(): Observable<List[]> {
          return this.get('person-categories.json');
     }
	 
	 public getIncidentResultDescriptions(): Observable<List[]> {
          return this.get('incident-result.json');
     }
	 
	 public getIncidentImpactDescriptions(): Observable<List[]> {
          return this.get('incident-impact.json');
     }
}

export interface List[] = [
	id: string;
	name: string;
	description: string;
]