export interface Incident {
     id: number;
     title: string;
     registrationType: string;
     addDateReopen: number;
     addDateOld: number;
     timeBetweenNoticeAndRegistration: string;
     fullNameAdmin: string;
     personalDataCategories: string;
     rodo9Categories: string[];
     regon: string;
     dataAboutGuiltyverdicts: string;
     noHighRiskWasFound: string;
     theBreachIsCrossBorderInNature: string;
}
