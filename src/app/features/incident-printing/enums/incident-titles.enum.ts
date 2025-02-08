export enum INCIDENT_LABELS {
     MAIN_TITLE = 'Zgłoszenie naruszenia ochrony danych osobowych',
}

export enum SECTION5 {
     APPROX_PERSON_NR = 'Przybliżona liczba osób, których dotyczy naruszenie',
     APPROX_PERSON_DATA_NR = 'Przybliżona liczba wpisów danych osobowych, których dotyczy naruszenie',
}
export enum SECTION11 {
     TITLE = '11. Przetwarzanie transgraniczne',
     COUNTRIES_LIST = 'Lista krajów Europejskiego Obszaru Gospodarczego, których dotyczy naruszenie:',
     TRANSBORDER_TYPE = 'Naruszenie ma charakter transgraniczny',
     NO_TRANSBORDER_TYPE = 'Naruszenie nie ma charakteru transgranicznego',
}
export enum SECTION10 {
     TITLE = '10. Czy osoby, których dane dotyczą, zostały zawiadomione o naruszeniu?',
     IS_INDIVIDUAL = 'Czy indywidualnie?',
     NOTIFICATION_DATE = 'Wskaż datę zawiadomienia',
     PLANNED_DATE = 'Wskaż datę planowanego zawiadomieni',
     NOTOFICATED_PEOPLE_NR = 'Liczba zawiadomionych osób',
     DONT_KNOW_NOTIFICATION_DATE = 'Nie znam jeszcze daty kiedy zamierzam zawiadomić osoby, których dane dotyczą',
     COMMUNICATION_METHODS = 'Środki komunikacji wykorzystane do zawiadomienia osoby, której dane dotyczą',
}

export enum SECTION9 {
     TITLE = '9. Środki bezpieczeństwa i środki zaradcze',
     DESC_9A = '9A. Ogólny opis technicznych i organizacyjnych środków bezpieczeństwa dotychczas stosowanych',
     DESC_9B = '9B. Środki bezpieczeństwa zastosowane lub proponowane w celu zminimalizowana ryzyka ponownego wystąpienia naruszenia',
     DESC_9C = '9C. Środki zastosowane lub proponowane w celu zaradzenia naruszeniu i zminimalizowania negatywnych skutków dla osób, których dane dotyczą',
}
export enum SECTION8 {
     TITLE = '8. Możliwe konsekwencje',
     DESC_8A = '8A. Uszczerbek fizyczny, majątkowy, niemajątkowy lub inne znaczące konsekwencje dla osoby, której dane dotyczą',
     OPTION_8A = 'Utrata kontroli nad własnymi danymi osobowymi',

     OPTION_8B = 'Strata finansowa',
     OPTION_8C = 'Ograniczenie możliwości realizowania praw z art. 15-22 RODO',
     OPTION_8D = 'Ograniczenie możliwości realizowania praw',
     OPTION_8E = 'Dyskryminacja',
     OPTION_8F = 'Kradzież lub sfałszowanie tożsamości',
     OPTION_8G = 'Naruszenie dobrego imienia',
     OPTION_8H = 'Utrata poufności danych osobowych chronionych tajemnicą zawodową',
     OPTION_8I = 'Nieuprawnione odwrócenie pseudonimizacji',
     OPTION_8J = 'Inne skutki naruszenia prawa do ochrony danych osoby, której dane dotyczą:',
     DESC_8B = '8B. Czy wystąpiło wysokie ryzyko naruszenia praw lub wolności osób fizycznych?',
}
export enum SECTION7 {
     TITLE = '7. Kategorie osób',
     OPTION_8A = 'Pracownicy',
     OPTION_8B = 'Użytkownicy',
     OPTION_8C = 'Subskrybenci',
     OPTION_8D = 'Studenci',
     OPTION_8E = 'Uczniowie',
     OPTION_8F = 'Służby mundurowe (np. wojsko, policja)',
     OPTION_8G = 'Klienci podmiotów publicznych',
     OPTION_8H = 'Pacjenci',
     OPTION_8I = 'Dzieci',
     OPTION_8J = 'Osoby o szczególnych potrzebach (np. osoby starsze, niepełnosprawne itp.)',
     OPTION_8K = 'Szczegółowy opis kategorii osób, których dotyczy naruszenie:',
}

export enum SECTION6 {
     TITLE = '6. Kategorie danych osobowych',
     TITLE_6A = '6A. Dane podstawowe',
     TITLE_6B = '6B. Dane szczególnej kategorii',
}
export enum SECTION5 {
     TITLE = '5. Liczba osób i wpisów',
}

export enum SECTION4 {
     TITLE = '4. Charakter naruszenia',
     DESC_4A = '4A. Opisz szczegółowo na czym polegało naruszenie',
     DESC_4B = '4B. Na czym polegało naruszenie?',
     OPTION_4B_A = 'a) Zgubienie lub kradzież nośnika/urządzenia',
     OPTION_4B_B = 'b) Dokumentacja papierowa (zawierająca dane osobowe) zgubiona, skradziona lub pozostawiona w niezabezpieczonej lokalizacji',
     OPTION_4B_C = 'c) Korespondencja papierowa utracona przez operatora pocztowego lub otwarta przed zwróceniem jej do nadawcy',
     OPTION_4B_D = 'd) Nieuprawnione uzyskanie dostępu do informacji',
     OPTION_4B_E = 'e) Nieuprawnione uzyskanie dostępu do informacji poprzez złamanie zabezpieczeń',
     OPTION_4B_F = 'f) Złośliwe oprogramowanie ingerujące w poufność, integralność lub dostępność danych',
     OPTION_4B_G = 'g) Uzyskanie poufnych informacji przez pozornie zaufaną osobę w oficjalnej komunikacji elektronicznej, takiej jak e-mail czy komunikator internetowy (phishing)',
     OPTION_4B_H = 'h) Nieprawidłowa anonimizacja danych osobowych w dokumencie',
     OPTION_4B_I = 'i) Nieprawidłowe usunięcie/zniszczenie danych osobowych z nośnika/urządzenia elektronicznego przed jego zbyciem przez administratora',
     OPTION_4B_J = 'j) Niezamierzona publikacja',
     OPTION_4B_K = 'k) Dane osobowe wysłane do niewłaściwego odbiorcy',
     OPTION_4B_L = 'l) Ujawnienie danych niewłaściwej osoby',
     OPTION_4B_M = 'm) Ustne ujawnienie danych osobowych',
     DESC_4C = '4C. Działanie złoliwego oprogramowania',

     OPTION_4C_A = 'a) Jeśli w ocenie administratora doszło wyłącznie do naruszenia dostępności danych, w jaki sposób stwierdzono, że nie doszło do naruszenia ich poufności?',
     OPTION_4C_B = 'b) Czy, a jeżeli tak, to w jakiej formie, złośliwe oprogramowanie poinformowało o konieczności uiszczenia opłaty w celu odzyskania dostępu do danych',
     OPTION_4C_C = 'c) Jeżeli doszło do utraty dostępności danych, to czy administrator był w posiadaniu kopii zapasowej, jeśli tak to w jakim czasie ją przywrócił?',

     DESC_4D = '4D. Przyczyna naruszenia',
     OPTION_4D_A = 'Wewnętrzne działanie niezamierzone',
     OPTION_4D_B = 'Zewnętrzne działanie niezamierzone',
     OPTION_4D_C = 'Wewnętrzne działanie zamierzone',
     OPTION_4D_D = 'Zewnętrzne działanie zamierzone',
     DESC_4E = '4E. Charakter',

     OPTION_4E_A = 'Naruszenie poufności danych',
     OPTION_4E_B = 'Nieuprawnione lub przypadkowe ujawnienie bądź udostępnienie danych',
     OPTION_4E_C = 'Naruszenie integralności danych',
     OPTION_4E_D = 'Wprowadzenie nieuprawnionych zmian podczas odczytu, zapisu, transmisji lub przechowywania',
     OPTION_4E_E = 'Naruszenie dostępności danych',
     OPTION_4E_F = 'Brak możliwości wykorzystania danych na żądanie, w założonym czasie, przez osobę do tego uprawnioną',

     DESC_4F = '4F. Dzieci',
     OPTION_4F_A = 'Naruszenie dotyczy przetwarzania danych..',
     OPTION_4F_B = 'Naruszenie nie dotyczy dotyczy przetwarzania danych..',
}
export enum SECTION3 {
     TITLE = '3. Czas naruszenia',
     TITLE_3A = 'Wykrycie naruszenia i powiadomienie nadzorczego',
     DESC_3A_A = 'Data stwierdzenia naruszenia',
     DESC_3A_B = 'Sposób stwierdzenia naruszenia',
     DESC_3A_C = 'Data powiadomienia przez podmiot przetwarzający',
     DESC_3A_D = 'Powody opóźnienia powiadomienia organu nadzorczego o naruszeniu',
     TITLE_3B = '3B. Czas naruszenia',
     DESC_3B_A = 'Data i czas zaistnienia/rozpoczęcia naruszenia',
     DESC_3B_B = 'Data i czas zakończenia naruszenia',
}
export enum SECTION2 {
     TITLE = '2A. Dane administratora danych',
     TITLE_2A = '2A. Dane administratora danych',
     TITLE_2B = '2B. Adres siedziby administratora danych',
     ADMIN_FULL_NAME = 'Imię i nazwisko administratora',
     STREET = 'Ulica',
     CITY = 'Miasto i kod pocztowy',
     VOIVODSHIP = 'Województwo',
     ADMINISTRATIVE_AREA = 'Powiat',
     COMMUNE = 'Gmina',
     COUNTRY = 'Państwo',
     TITLE_2C = '2C. Osoby uprawnione do reprezentowania administratora',
     TITLE_2D = '2D. Pełnomocnik',
     TITLE_2E = '2E. Inspektor ochrony danych',
     REPRESENTANT_APPLICATION = 'Wniosek wypełniany przez pełnomocnika',
     REPRESENTANT_FULL_NAME = 'Imię i nazwisko',
     PHONE_NR = 'Numer telefonu',
}
export enum SECTION1 {
     TITLE = '1. Typ zgloszenia',
     DESC_1_A = 'Wskaż czy zgłaszasz naruszenie ochrony danych osobowych mające charakter jednorazowego zdarzenia (np. zgubienie, kradzież nośnika danych, przypadkowe wysłanie danych osobie nieuprawnionej), czy przygotowujesz wstępne zgłoszenie, które uzupełnisz później, lub czy uzupełniasz lub zmieniasz wcześniejsze zgłoszenie',
     OPTIONAL_SIGN = 'Sygnatura sprawy',
}
