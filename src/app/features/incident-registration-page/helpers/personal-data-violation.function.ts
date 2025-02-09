import { DescriptionDTO } from 'src/description-dto';

export function getPersonalDataViolation(data: DescriptionDTO): string[] {
     const personalDataViolation: string[] = [];

     data.surnamesAndNames ? personalDataViolation.push('Nazwiska i imiona') : null;
     data.namesParents ? personalDataViolation.push('Imiona rodziców') : null;
     data.birthData ? personalDataViolation.push('Data urodzenia') : null;
     data.numberaAccountBank ? personalDataViolation.push('Numer rachunku bankowego') : null;
     data.adressliving ? personalDataViolation.push('Adres zamieszkania lub pobytu') : null;
     data.pesel ? personalDataViolation.push('Numer ewidencyjny PESEL') : null;
     data.addressMail ? personalDataViolation.push('Adres e-mail') : null;
     data.loginPassword ? personalDataViolation.push('Nazwa użytkownika i/lub hasło') : null;
     data.dataFromMoney
          ? personalDataViolation.push('Dane dotyczące zarobków i/lub posiadanego majątku')
          : null;
     data.serialNumberPersonallDocument
          ? personalDataViolation.push('Seria i numer dowodu osobistego')
          : null;
     data.phoneNumer ? personalDataViolation.push('Numer telefonu') : null;
     data.imagePerson ? personalDataViolation.push('Wizerunek') : null;
     // data.otherdesc ? personalDataViolation.push(data.otherdesc?.toString()) : null;
     console.log(personalDataViolation);
     return personalDataViolation;
}
