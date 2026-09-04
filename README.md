# Grovio - Zdieľaný nákupný zoznam

## O projekte 
Grovio je klientská webová aplikácia navrhnutá ako nákupný zoznam pre rodiny. Aktuálny kód predstavuje plne funkčné klientske MVP (Minimum Viable Product). Postavil som ho v Reacte s dôrazom na čistú architektúru, správu stavu a pripravenosť na budúce napojenie na backend.

## Budúcnosť Grovia
Vo finálnej verzii bude Grovio plnohodnotnou produkčnou SaaS platformou postavenou na Next.js App Routeri. Aplikácia bude využívať Auth.js pre bezpečné prihlasovanie používateľov a správu skupín s rôznymi úrovňami prístupových práv pre jednotlivých členov. Vďaka real-time synchronizácii databázy uvidia všetci členovia skupiny zmeny v nákupnom zozname okamžite bez nutnosti obnovovať stránku. Pre spoplatnenie prémiových funkcií, ako sú neobmedzené rodinné priestory, pokročilé štatistiky výdavkov či inteligentné odporúčania nákupov, bude integrovaná platobná brána Stripe spracovávajúca opakované predplatné.

## Použité technológie
React 19 (Vite)
Tailwind CSS a DaisyUI
React Context API a Custom Hooks
Natívne Web APIs (Intl.RelativeTimeFormat, LocalStorage, crypto.randomUUID)

## Architektúra a správa stavu
Pri návrhu kódu som dbal na striktné oddelenie logiky od samotného používateľského rozhrania:

- logika (useItems): Všetky CRUD operácie (pridávanie, úprava, mazanie, prepínanie stavu kúpené a nekúpené) a ukladanie do 
- LocalStorage sú vyčlenené do samostatného custom hooku useItems.
- Správa stavu (ItemContext): Aby som sa vyhol prop-drillingu, stav a funkcie zdržiavam a posielam cez React Context. Vytvoril som vlastný hook useItemContext pre čisté volanie v komponentoch.
- Komponenty UI: Komponenty v zložke components/UI sú čisto prezentačné. Nemajú v sebe zbytočné stavy a starajú sa len o zobrazenie dát a odchytenie používateľských udalostí.
- Odvodený stav (Derived State): Filtrovanie položiek (Všetky, Na nákup, Kúpené) a počítadlá zoznamu sa prepočítavajú dynamicky z existujúcich dát bez duplikovania stavov.

## Čo je aktuálne hotové
- Kompletné CRUD operácie nad položkami (Názov, Množstvo, Stav nákupu, Čas vytvorenia)
- Dynamické filtrovanie zoznamu a počítadlá položiek
- Trvalé ukladanie dát v prehliadači cez LocalStorage (s 'lazy' inicializáciou pri štarte)
- Validácie formulárov a modálne okná pre pridávanie a úpravu
- Relatívne formátovanie času pomocou natívneho rozhrania Intl

## Plánované rozšírenia (Roadmap)
- Prechod na Next.js App Router
- Auth.js
- Stripe
- Napojenie na reálnu databázu (Supabase alebo Firebase) namiesto LocalStorage. 
- funkcionalita tvorby skupín použivateľov a synchronizácie v reálnom čase
- Podpora PWA pre fungovanie na mobilných zariadeniach