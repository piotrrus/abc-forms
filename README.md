# Uwagi
# Uporządkowanie aplikacji
 - formatowanie - wykorzystanie ng linta do automatycznego formatowania kodu i sprawdzenia jego poprawności
 - tslint (eslint, po przejściu na nowszą wersję)
 - husky - automatyczne formatowanie
## 1. Przebudowa formularzy
- usunięcie pól formularzy opartych na FormControls
- zastąpienie w/w formularzami opartymi na ReactiveForms i Material Design, podzielonymi na klasy definiujące formularze oraz cześć wizualną – komponenty formularzy.
- dodać klasę wspólną – rozszerzającą (Abstract), zawierającą wspólny kod dla klas formularzy oraz interface’y metod, zmiennych.
## 2. Rozważenie zamiany kontrolek RTF na TextArea
- nie wykorzystujemy ich fukcjonalności.
## 3. Uporządkowanie i ujednolicenie metodod unsubscribe
- wydzielenie do zewnętrznego komponentu metody opartej na implementacji OnDestroy
## 4. Uporządkowanie i uproszczenie serwisów (przebudowa)
- nie tworzymy serwisów z automatu - generujemy mnóstwo powtarzalnego DRY i małoczytelnego kodu 
- tworzymy oddzielne serwisy powiązane z domenami
- klasa abstrakcyjna zawierająca wszystkie metody typu GET, POST, DELETE..
- wpólna obsługa błędów - catchError
- część api ścieżki umiścić w pliku enviroment /api/uodom/ (/api/uodom/contacts/allStandardUsers)
- ścieżkę domeny umiszczamy w pliakch enums contacts/allStandardUsers (/api/uodom/contacts/allStandardUsers)
- header (autoryzacja) dołączany interceptorem - unikamy powielania kodu DRY
- podobnie ze ścieżką (plik enviroment)
- określamy strukturę zwracanych z API danych (nie any!)
## 5.	Dodać interceptory – nagłówek, ew. obsługa błędów, wysyłanych zapytań  
## 6.	Refactoring dużych komponentów – podzielenie na mniejsze zgodnie z zasadami Clean Code i OOP 
– z uwzględnieniem podziału komponenty na smart/dump (formularze, modale, itp).
- główny formularz uodo to ok 1500 linii kodu w części HTML.

# Migracja
## 1.	Wyczyszczenie i ujednolicenie kodu, przygotowanie pod migrację – interfaces (any)
## 2.	Sprawdzić kod pod względem jego powtarzalności i utrzymania i poprawić (utworzyć reużywalne komponenty, klasy typu abstract…).
## 3.	Podbicie wersji Angulara do 18, po wyczyszczeniu pakietów i wprowadzeniu w/w poprawek.
## 4.	Rozważyć stopniowe podbijanie wersji np.14/16/18
## 5.	W wersji 16/18 wykorzystać inject dla service – m.in. uproszczenie konstruktorów
## 6.	W wersji 18 wykorzystać inputs i ewentualnie standalone 
## 7.	Usunięcie modułu tłumaczeń ?
## 8.	Weryfikacja i ewentualne usunięcie zbędnych pakietów (package.json) m.in.
-	"timsort": "^0.3.0",
-	"tooltip.js": "^1.3.2", 
-	"component-emitter": "^1.3.0", 
-	"core-js": "^2.6.9", ?
-	"flat": "^4.1.0", 
-	"http-status-codes": "^1.3.2", 
-	moment=>dayjs? moment jest w chwili obecnej nierozwijany
	
# W przyszłości 
## 1.	Uwzględnić responsywność w stylowaniu dla przeglądarek Chrome/Firefox przy użyciu FlexFrid Material Design lub Bootstrap Grid
## 2.	Uzupełnienie testów do wskaźników coverage – przynajmniej 70%

# Bezpieczeństwo: 
## 1. Podbicie wersji, JWT (Token), 
## 2. Interceptor dla header’a  oraz walidacja pól formularzy, innerHtml z sanityzacyjnym pipe’m,
## 3. Walidacja
 1.Walidacja pól tekstowych
- min. Liczba znaków ?
 -  maks. liczba znaków – powiązane z wielkością pól w bazie
- określić dozwolone znaki (np. tylko alfanumeryczne, lub bez znaków specjalnych) – bez możliwości wpisania z klawiatury.
2 . Walidacja pól z datą
Walidacja zależności pomiędzy polami, określenie minimalnej i maksymalnej daty np.
 Data i czas zaistnienia/rozpoczęcia naruszenia vs Data i czas zakończenia naruszenia
- maks. I min data obu pól, zależność data zakończenia nie może być wcześniejsza niż data zaistnienia
- data zaistnienia nie może być późniejsza niż data dzisiejsza
3 . Walidacja pól testowych typu RTF – jak w przypadku pól tekstowych?
Czy potrzebujemy formatowanie tekstu ? Czy formatowanie jest zapisywane do bazy? Jaka funkcjonalność jest konieczna? A może wystarczy pole testowe o większej ilości znaków z kilkoma wierszami – TextArea?
Oddzielić możliwość dodania pliku?
Jakie znaki powinny być dozwolone?

# Inne:
## 18.	Obecnie w aplikacji występują 3 frameworki służące do kontrolek i stylowania : Material Design , NgxBootstap. Bootstrap (tylko style), Może dobrze byłoby zdecydować się na jedno rozwiązanie.

Interface'y serwisy - organizacja kodu
a.	Modyfikacja obsługi listy krajów
W chwili obecnej lista krajów występuje w postaci indywidualnych zmiennych po stronie FE i podejrzewam, że w tej postaci przekazywana jest do BE. Pojedynczo??
Sugerowane rozwiązanie to grupowanie wybranej listy krajów w tabeli – czyli umieszczenie listy w tabeli i po wybraniu w tej formie przekazanie do BE. Jak poniżej.
b.	Listy checkbox’ów 
np. 4B. Na czym polegało naruszenie?, 7. Kategorie osób, 8.Możliwe konsekwencje …
W chwili obecnej są to indywidualne FormControls, umieszczone bezpośrednio w głównym komponencie. Duża ilość kodu w głównym formularzu. Złamanie zasad SOLID,. Sugerowałbym:
- wydzielenie do zewnętrznych komponentów i utworzenie formularzy na bazie FormBuilder’a i FormArray – dane w postaci tabeli i w tej formie dane przekazywane do BE. 
 - oraz pobieranie automatyczne etykiet/nazw z serwisów, z lokalnego json’a lub z API – obecnie jest to wpisany ręcznie tekst. W przypadku jakiejkolwiek jego zmiany musimy to poprawiać ręcznie i budować ponownie aplikację itp. Przy pobieraniu  z API działo by się to automatycznie.
Otrzymujemy -DRY - powtarzalność kodu, łatwiejsze zarządzanie,  zmniejszenie ilości kodu,
1.	6. Kategorie danych osobowych
2.	Obecnie w formularzu brak informacji, które pola są wymagane. Jak wygląda walidacja poszczególnych pól?
3.	Po kliknięciu w wybrany checkbox, prawdopodobnie pojawia się pole tekstowe z możliwością jego wypełnienia. Jeśli tak, to może przegrupować trochę te checkboxy zgodnie z ich wymagalnością tj. 
4.	na samej górze umieszczamy te pola które są wymaga zakładam, że jest to imię i nazwisko, pesel, Seria i numer dowodu osobistego.
5.	W drugiej grupie dane adresowe/ kontaktowe… A może zakładki typu dane podstawowe, dane adresowe, kontaktowe, dodatkowe /inne




