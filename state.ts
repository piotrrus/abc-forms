import { BehaviorSubject, Observable } from 'rxjs';

export abstract class State<T> {
     protected readonly state: BehaviorSubject<T>;

     protected constructor(defaultValue: T) {
          this.state = new BehaviorSubject<T>(defaultValue);
     }

     public get state$(): Observable<T> {
          return this.state.asObservable();
     }

     protected patchState(newStateValue: Partial<T>): void {
          this.state.next({ ...this.state.getValue(), ...newStateValue });
     }

     protected getState(): T {
          return this.state.getValue();
     }
}
/*
     public patchBrokerMonitorFilters(selectedFilters: BrokerMonitorFilterFormInterface): void {
          this.patchState(selectedFilters);
     }

     public getBrokerMonitorFilters(): Observable<BrokerMonitorFilterFormInterface> {
          return this.state$.pipe(map((state: BrokerMonitorFilterFormInterface) => state));
     }

     public resetState(): void {
          this.patchState(DEFAULT_BROKER_MONITOR_FILTERS_STATE());
     }
*/
/*
   constructor() {
          super(DEFAULT_REPORT_ACTION_NAME_STATE());
     }

     public patchReportNameAndAccessibility(
          reportName: string,
          isPublic: boolean,
          reportDescription?: string,
          changed?: boolean
     ): void {
          this.patchState({ reportName, isPublic, reportDescription, changed });
     }

     public patchReportAccessibility(isPublic: boolean): void {
          this.patchState({ isPublic });
     }

     public patchReportDescription(reportDescription: string): void {
          this.patchState({ reportDescription });
     }

     public getReportDetails(): Observable<ReportActionNameAndAccessibility> {
          return this.state$.pipe(
               map((state) => state),
               take(1)
          );
     }

     public patchReportCriterias(criterias: ReportCriteria[]): void {
          this.patchState({ criterias });
     }

     public patchReportLayout(layouts: ReportLayout[]): void {
          this.patchState({ layouts });
     }

     public resetState(): void {
          this.patchState(DEFAULT_REPORT_ACTION_NAME_STATE());
     }

     public saveNewChanges(changed: boolean): void {
          this.patchState({ changed });
     }
*/
