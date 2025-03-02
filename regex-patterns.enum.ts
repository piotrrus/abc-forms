export enum RegexPatterns {
     PARTNER_ID = '^[a-zA-Z0-9]*',
     PARTY_ID = '[0-9]{0,10}',
     UNIT_ID = '^[a-zA-Z0-9]{1,12}$',
     USER_ID = '^[A-Za-z]{1}[A-Za-z0-9]{6}$|^.{0}$',
     USER_ID_SEARCH = '[A-Za-z0-9]{7}|.{0}',
     DIGIPASS_ID = '^[0-9\\%\\*]*$',
     PHONE_NR = '^[+]?[0-9s()]+$',
}
