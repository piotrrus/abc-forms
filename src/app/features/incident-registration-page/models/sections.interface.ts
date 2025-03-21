import { SimpleList } from './list.interface';

export interface Section11 {
     theBreachIsCrossBorderInNature: boolean; //isTransborderViolation
     countries: SimpleList[];
}
export interface Section10 {
     personNotification: string;
     isIndividual: boolean;
     // section10Notice?: boolean;
     // section10true?: boolean;
     // section10IndwidualTrue?: boolean;
     // section10IndwidualTrue2?: boolean;
     // section10IndwidualFalse?: boolean;
     // theyWillNotBeNotifiedBecause?: boolean;
     // ihaventRatedItYet?: boolean;
     appropriateTechnicalMeasuresHaveBeenImplementedBeforeTheViolation?: boolean;
     measuresWereTakenFollowingTheBreach?: boolean;
     noHighRiskWasFound?: boolean; //isHighRisk
     indicateTheDateNotification?: number; //notificationDate
     indicateTheDateOfThePlannedNotification1?: number; //plannedNotificationDate
     numberOfPeopleNotified?: string;
     iDoNotYetKnowDateWhenIntendToNotifyDataSubjects?: boolean; //notificationDateNotKnown
     meansOfCommunicationUsedToNotifyDataSubject?: string;
     includeTheAnonymized?: string;
}
export interface Section9 {
     section9a?: string;
     section9b?: string;
     section9c?: string;
}

export interface Section8 {
     section8aOthers?: boolean;
     section8aOthersDesc?: string;
     section8B?: boolean;
     justification?: string;
}
export interface Section7 {
     personCategories: SimpleList[];
}

export interface Section6 {
     sectionA: SimpleList[];
     sectionB: SimpleList[];
     sectionC: SimpleList[];
}

export interface Section5 {
     sectionA: SimpleList[];
     approximateNumberOfPeopleBreached?: string;
}

export interface Section4 {
     section4a?: string;
     section4b: SimpleList[];

     descriptionSection4Cb?: string;
     descriptionSection4Cc?: string;
     internalActionUnintentional?: boolean;
     internalActionIntentional?: boolean;
     externalActionUnintentional?: boolean;
     externalActionIntentional?: boolean;
     breachOfDataConfidentiality?: boolean;
     dataIntegrityBreach?: boolean; //isIntegrityBreach
     descDataIntegrityBreach?: boolean;
     section4FKids?: boolean; //isKids
     approximateNumberOfPeopleBreached?: string;
}
export interface Section3 {
     dateTime3b?: number;
     dateTimeEnd3b?: number;

     // sectionA: SimpleList[];
     // sectionB: SimpleList[];
     // sectionC: SimpleList[];
}

export interface Section2a {
     street?: string;
     numberHouse?: string; //houseNr
     numberflat?: string; //flatNr?
     city?: string;
     indicateTheDateOfThePlannedNotification?: number; //plannedNotificationDate
     postCode?: string; //postalCode
     provinceAdministrativeArea?: string; //province
     communeAdministrativeArea?: string; //commune
     countyAdministrativeArea?: string; //voivodship
     country?: string;
}
export interface Section2b {
     addNameDepart?: string; //departmant
     addSignatureRegistration?: string; //signature
     fullNameAdmin?: string; //adminName?
     regon?: string;
     nip?: string;
     krs?: string;
}
export interface Section2 {
     section2a: Section2a;
     section2aIsValid: boolean;
     section2b: Section2b;
     section2bIsValid: boolean;
}
export interface Section1 {
     optionalSign?: string;
     registrationType: string;
     // registrationComplet?: boolean;
     // registrationBegin?: boolean;
     // registrationCompletModify?: boolean;
     addDateReopen?: number;
     addDateOld?: number;
     addTaskSignUodo?: string;
     theViolationHasBeenReportedOtherCountry?: boolean;
     theViolationHasBeenReportedOtherCountryDesc?: string;
     theViolationHasBeenReported?: boolean;
}

export interface UodoSections {
     section1: {
          data: Section1;
          isValid: boolean;
     };
     section2: {
          data: Section2;
          isValid: boolean;
     };
     section3: {
          data: Section3;
          isValid: boolean;
     };
     section4: {
          data: Section4;
          isValid: boolean;
     };
     section5: {
          data: Section5;
          isValid: boolean;
     };
     section6: {
          data: Section6;
          isValid: boolean;
     };
     section7: {
          data: Section7;
          isValid: boolean;
     };
     section8: {
          data: Section8;
          isValid: boolean;
     };
     section9: {
          data: Section9;
          isValid: boolean;
     };
     section10: {
          data: Section10;
          isValid: boolean;
     };
     section11: {
          data: Section11;
          isValid: boolean;
     };
}
