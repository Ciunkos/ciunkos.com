Od listopada jestem programistą bezklientowym. Mam 15 lat doświadczenia jako full-stack i dziś nikt nie kupuje full-stacka. W tych samych dwunastu miesiącach liczba ofert dla [Forward Deployed Engineerów](https://ciunkos.com/slownik/forward-deployed-engineer) wzrosła 4,6 raza.

```chart
role-shift
```

> [!WARNING]
> Nie jestem neutralny. Sam szukam roli Forward Deployed Engineera, a ten wpis jest częścią tego szukania. Każda liczba ma link do źródła, żebyś mógł mnie sprawdzić.

> [!TLDR]
> Forward Deployed Engineer (FDE) to programista, który pracuje w zespole klienta i odpowiada za wynik, który klient dostaje. Agenci AI piszą dziś większość kodu w minuty, więc firmy płacą za to, czego agenci nie zrobią: znalezienie właściwego problemu i sprawienie, żeby rozwiązanie się przyjęło. Ofert dla front-endu i mobile ubyło w rok mniej więcej o połowę. Ofert FDE przybyło 4,6 raza, ale to wciąż około 2 na 100 ofert inżynierskich. Jeśli żyjesz z pisania kodu, zacznij się ruszać teraz.

Ten wpis ma trzech czytelników. Jeśli jesteś programistą, to ostrzeżenie od kogoś, kto ruszył się za późno. Jeśli prowadzisz firmę, zobaczysz, co FDE robi u Ciebie i ile kosztuje. Jeśli szukasz FDE, przejdź od razu do sekcji [Szukasz FDE?](#hire)

## Zabrali nam robotę {#they-took-our-jobs}

```chart
they-took-our-jobs
```

[Raport Lenny'ego Rachitsky'ego z 10 listopada 2026](https://www.lennysnewsletter.com/p/state-of-the-tech-job-market-late) liczy otwarte oferty w ponad 9000 firm technologicznych. W rok ofert dla front-end engineerów ubyło 51%, dla Androida 47%, dla iOS 46%, a dla mobile 39%. Backend urósł o 4,2%. Forward deployed engineer urósł o 361%.

Lenny czyta to tak: wąskie, zamknięte w silosach specjalizacje zapadają się w mniejsze zespoły o szerszej odpowiedzialności, a umożliwiło to AI. Zgadzam się, bo sam to przeżyłem. Przez lata moją wartością było to, że umiem front, backend i wdrożenie. Dziś agent robi wszystkie trzy, kiedy ja parzę kawę.

Ogłoszenia kryją drugi problem. Firmy ogłaszają więcej, a zatrudniają mniej.

```chart
openings-vs-hires
```

Dwie uwagi, zanim wpadniesz w panikę. Wykres na górze liczy nazwy stanowisk w ogłoszeniach, więc część wzrostu FDE to dawni sales engineerowie pod nową nazwą. Lenny sam to przyznaje. A otwarta oferta to zamiar, a nie zatrudnienie.

Straty rozkładają się nierówno. [SignalFire](https://www.signalfire.com/blog/signalfire-state-of-talent-report-2026) podaje, że największe firmy technologiczne zatrudniają o około 65% mniej absolwentów niż w 2019, a wczesne startupy o około 76% mniej. [Stanford Digital Economy Lab](https://digitaleconomy.stanford.edu/news/canariesaug26/) wylicza, że zatrudnienie osób w wieku 22 do 25 lat w zawodach najbardziej wystawionych na AI jest o około 19% niższe, niż byłoby bez niej. Seniorzy w większości zostają. Juniorzy nie wchodzą.

### A w Polsce {#poland}

Mieszkam we Wrocławiu, więc sprawdziłem, czy to tylko amerykańska historia. Nasza też, z opóźnieniem.

```chart
poland
```

Ogłoszenia wróciły w 2025 i średnio kolejka do każdego się skróciła. Na ogłoszenie dla juniora front-end wciąż przypada 146 aplikacji. Polskie liczby śledzę na własnym [radarze pracy IT](https://ciunkos.com/radar-pracy-it).

Na meetupie w tym tygodniu przedstawiłem się jako programista bezklientowy. Ludzie się zaśmiali, a potem kilka osób zapytało, od kiedy szukam.

## Kim jest Forward Deployed Engineer? {#what-is-fde}

Forward Deployed Engineer to programista, który pracuje w zespole klienta, buduje na gotowym produkcie albo modelu i odpowiada za to, czy problem klienta został rozwiązany.

Rolę wymyślił Palantir na początku lat 2010. i nazwał tych inżynierów Deltami. W jego ogłoszeniach do dziś stoi, że to firma, która zaczęła osadzać inżynierów bezpośrednio u klientów. Według [The Pragmatic Engineer](https://newsletter.pragmaticengineer.com/p/forward-deployed-engineers) mniej więcej do 2016 Palantir miał więcej forward deployed engineerów niż zwykłych programistów. Podział jest prosty: programista produktowy buduje jedną funkcję dla wielu klientów, a forward deployed engineer używa wielu funkcji dla jednego klienta.

Przez dekadę prawie nikt tego nie kopiował, bo wyglądało to jak drogi konsulting. Potem laboratoria AI odkryły, że sprzedać model jest łatwo, a sprawić, żeby działał w banku, jest trudno. FDE zatrudniają dziś OpenAI, Anthropic, Databricks i Google. W czerwcu 2026 [AWS wyłożył miliard dolarów](https://www.aboutamazon.com/news/aws/aws-1-billion-forward-deployed-ai-engineers) na organizację forward deployed, która osadza swoich inżynierów u klientów.

```chart
fde-compare
```

Liczy się kolumna „Odpowiada za wynik po wdrożeniu”. Konsultant wychodzi po slajdach. Zespół z outsourcingu zamyka tickety. FDE jest na miejscu w poniedziałek po demie, kiedy ludzie na hali albo korzystają z nowego narzędzia, albo po cichu wracają do Excela.

[Bloomberry przeczytało 1000 ogłoszeń FDE](https://bloomberry.com/blog/i-analyzed-1000-forward-deployed-engineer-jobs-what-i-learned/) i w żadnym nie znalazło planu sprzedażowego do wyrobienia. Dwie trzecie wymagały Pythona. To praca inżynierska, tylko z klientem obok.

## Dlaczego teraz {#why-now}

Nawet seniorzy, którzy siedzieli na spotkaniach z klientem, większość czasu poświęcali na implementację i architekturę. Dziś robią to Claude Code, ChatGPT i Codex, dosłownie w minuty. Mnie zajmowało to godziny, dni albo tygodnie.

Nie zgaduję. W 2026 agenci kodujący zbudowali około dwóch trzecich zmergowanych pull requestów w dwóch produktach, nad którymi pracuję, prawie wszystkie przez moje review. W Sandtime przejąłem wzrost i zbudowałem widoczność w wyszukiwarkach i w wyszukiwaniu AI prawie od zera. Kilka lat temu trzeba by do tego zatrudnić osobę na pełen etat. Tym razem większość zrobił agent, w dużej mierze sam.

> [!PRZEMO]
> Robotę zrobił agent. Ja wiedziałem, którą robotę warto zrobić. I ta druga część jest dziś pracą.

Wąskie gardło się przesunęło. Kod jest tani. Drogie jest wiedzieć, co zbudować, wpiąć to w prawdziwe systemy firmy i sprawić, żeby ludzie tego używali. [Databricks opisuje](https://www.databricks.com/blog/forward-deployed-engineering-delivering-business-outcomes-ai) wdrożenie FDE w Qualcommie, które skróciło wielodniowe procesy do minut. Qualcommowi nie brakowało kodu.

```chart
day-shift
```

## Dwa dni w fabryce okien {#discovery}

Tak wygląda ta praca. Weźmy średniej wielkości zakład, który produkuje okna i drzwi. Kilkudziesięciu pracowników. Zamówienia przychodzą mailami, dokumentacja techniczna jest w PDF-ach, a handlowcy ręcznie przepisują wszystko do ERP. Pomyłki zamieniają się w opóźnienia i reklamacje. Właściciel słyszał o AI i nie ma miliona złotych na „transformację cyfrową”.

Zwykle telefon dzwoni, bo prezes mówi: „konkurencja robi AI, my też chcemy AI”. W porządku, od czegoś trzeba zacząć. Tyle że właściciel często nie umie powiedzieć, gdzie uciekają pieniądze, więc pierwsze zadanie to się tego dowiedzieć.

```chart
fde-loop
```

Siadam z ludźmi, którzy wykonują pracę. Na miejscu, jeśli praca jest na miejscu. Jeśli zdalna, czytam kanały na Slacku albo Teamsach, zaglądam do repozytoriów i wchodzę na calle. To trwa dwa dni i nie wymaga całego działu. Wystarczy dobra obserwacja i szybka kalkulacja.

Po tych dwóch dniach dostajesz plan z liczbami: co da się zautomatyzować, ile kosztuje każdy kawałek i ile oszczędza, policzone na Twoich prawdziwych kosztach. To wymaga z Twojej strony pewnej otwartości co do stawek. Potem decydujesz, czy idziemy dalej.

Podstaw własne liczby:

```chart
roi
```

Dwa dni discovery to 16 godzin po mojej [standardowej stawce 180 zł](https://ciunkos.com/cennik), czyli 2880 zł netto. Jest w moim publicznym cenniku i jest taka sama dla każdego.

Czasem uczciwy wynik brzmi: AI nie ma u Ciebie dziś sensu. Wtedy zapłaciłeś za tę odpowiedź i warto ją mieć, zanim wydasz dziesięć razy więcej na pilotaż. To się szybko zmienia, więc za kilka miesięcy patrzymy jeszcze raz, a drugie podejście jest tańsze, bo mapa już istnieje.

Większość projektów AI umiera między pilotażem a codziennym użyciem. Ludzie dostają oficjalne narzędzie, które jest niewygodne, więc dalej używają swojego. To właśnie shadow IT. Dlatego szkolenia i poprawki są częścią roboty, a nie dodatkiem. A po sześciu tygodniach wracam i mierzę, jak Magda Gessler w „Kuchennych rewolucjach”: czy zyski się zmaterializowały, czy zostały zaprzepaszczone.

Trzy sygnały, że FDE firmie nie pomoże, niezależnie od budżetu: biurokracja, usztywnione procesy i brak chęci do zmiany.

## Czy to tylko konsulting z lepszą nazwą? {#rebrand}

Po części tak. Chris Degnan, były szef sprzedaży Snowflake, nazwał FDE podrasowanym pracownikiem professional services i stwierdził, że dobry inżynier nie powinien chcieć tej roli. Analityk Gartnera powiedział [CIO Dive](https://www.ciodive.com/news/can-forward-deployed-engineers-fdes-fix-ai-gartner/831833/), że wielu dostawców nazywa dziś „forward deployed” zwykłe wdrożenia, bo to brzmi bardziej strategicznie. Andreessen Horowitz opublikował obie strony: [jeden esej](https://a16z.com/services-led-growth/) przekonuje, że startupy powinny oddać marżę za taką pracę u klienta, a [drugi](https://a16z.com/the-palantirization-of-everything/) ostrzega, że większość firm kopiujących Palantira skończy jako drogie firmy usługowe.

Rynek jest też mniejszy niż nagłówki.

```chart
fde-share
```

Projekty IT zawsze miały ten problem. Na prezentacji wyniki wyglądały dobrze, w realnym zastosowaniu już niekoniecznie. Nowa nazwa tego nie naprawia.

Mój test, czy rola to prawdziwe FDE, ma trzy pytania. Czy ta osoba wdraża kod na produkcję? Czy zostaje po wdrożeniu? Czy ktoś po sześciu tygodniach mierzy wynik w złotówkach albo godzinach? Trzy razy tak i nie obchodzi mnie, jak rola się nazywa. Spodziewam się, że w Polsce każda firma od outsourcingu i body leasingu w ciągu roku przemaluje się na FDE, więc zadawaj te pytania.

## Ile to płaci {#pay}

```chart
pay
```

To widełki z ogłoszeń, więc czytaj je jako to, co firmy są gotowe powiedzieć publicznie. W USA duże laboratoria ogłaszają od 180 do 320 tysięcy dolarów pensji podstawowej rocznie. W Polsce obraz się rozjeżdża. Google płaci pracownikowi w Warszawie albo Wrocławiu około 23 tysięcy złotych miesięcznie przed premią i akcjami. Agencje ogłaszają 250 do 400 zł za godzinę dla seniorów na kontrakcie, a mój własny przegląd około 14 tysięcy ofert z tego miesiąca znalazł mniej więcej 120 ról typu FDE, z czego około 30 w Polsce albo zdalnie w UE. Jedna uwaga z tego przeglądu: ten sam klient końcowy często pojawia się w czterech ogłoszeniach różnych agencji.

Stawka B2B i pensja na etacie to nie te same pieniądze. B2B jest przed Twoimi podatkami, ZUS-em, urlopem i chorobowym.

## Jak tam dojść {#how-to}

### Jeśli jesteś juniorem {#junior}

Na panelu, na którym siedziałem w tym tygodniu, padło pytanie, czy programista będzie jeszcze potrzebny. Moja odpowiedź zaskoczyła salę: dzisiejsi juniorzy mają lepiej niż juniorzy dziesięć lat temu.

Wtedy pytałeś na Stack Overflow albo na forum i czekałeś godzinami albo dniami na łaskawą odpowiedź kogoś z doświadczeniem. Takich osób było niewiele. Dziś AI tłumaczy nowy temat od ręki, tyle razy, ile potrzebujesz, i pozwala zmienić technologię w tygodnie.

Ceną jest to, że próg wejścia rośnie. Dzisiejszy junior musi pracować na poziomie wczorajszego seniora, bo proste zadania, na których juniorzy się uczyli, zniknęły. Juniorów będą szkolić AI-e, a nie seniorzy. [Badanie Anthropic na 400 tysiącach sesji Claude Code](https://www.anthropic.com/research/claude-code-expertise) pokazuje, czemu wiedza dalej się liczy: sesje osób, które znały się na zadaniu, kończyły się sukcesem mniej więcej dwa razy częściej niż sesje nowicjuszy.

### Jeśli jesteś midem {#mid}

Najwięcej uczy własny biznes. Odpal własną aplikację albo mały biznes online i dotknij problemów, które mają prawdziwi właściciele firm.

Albo zaproponuj pomoc komuś znajomemu, kto prowadzi działalność. Mój brat cioteczny wykleja billboardy. Pierwsze, co bym dla niego zrobił, to strona zbudowana z AI, która pokazuje jego content z TikToka i przyprowadza mu klientów. To rodzina, a i tak musiałbym rozmawiać z klientem, ustalić, co znaczy „zrobione”, i poprawić to, co mu się nie spodoba. O takie doświadczenie pytają pracodawcy.

### Jeśli jesteś seniorem {#senior}

Odpuść umiejętności arcane. Klepanie komend z pamięci było powodem do dumy, a dziś nie jest nic warte. Pozwól AI przejąć ręczną robotę i przekieruj uwagę na problemy, które kogoś realnie bolą. Jest ich więcej niż kiedyś.

Pierwsze, co wyrzuciłem z własnego dnia, to ręczne programowanie. Claude Code i harnessy wokół niego piszą kod lepiej niż większość programistów, w wiele dni lepiej niż ja.

Mogę uczyć innych rozwiązywania problemów. Do tej roli wciąż brakuje mi komunikacji i otwartości na nowe kontakty. Przez 15 lat płacono mi za to, żebym siedział cicho i budował, więc ćwiczę publicznie. Ten wpis jest częścią tych ćwiczeń.

> [!NOTE]
> Czy AI naprawdę przyspiesza doświadczonych programistów? [Badanie METR z 2025](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) pokazało, że 16 programistów open source pracowało z AI o 19% wolniej, wierząc, że pracują o 20% szybciej. [Aktualizacja METR z 2026](https://metr.org/blog/2026-02-24-uplift-update/) mówi, że tamten wynik jest już nieaktualny, a nowsze dane wskazują w drugą stronę, choć są niepewne. Moje doświadczenie od tamtej pory zgadza się z aktualizacją.

## Kto za to zapłaci {#cost}

Wolę powiedzieć to wprost. Dla biznesu automatyzacja to czysta korzyść, a pierwsze oszczędności to etaty. Voicebot potrafi ściąć setki albo tysiące etatów konsultantów. To samo dzieje się z programistami na poziomie juniora i mida, a programiści zawsze byli drodzy, nawet na wejściu. Agent robi to od ręki i nie narzeka.

Kiedy pokazuję klientowi zwrot z wdrożenia, częścią tej liczby są stanowiska, których już nie potrzebuje. Co z tym zrobi, to jego decyzja, ale nie będę udawał, że ta liczba jest czymś innym.

Zapłaci całe społeczeństwo. W Polsce duża część naszej branży pracuje na B2B, czyli firmy nigdy nie ponosiły kosztów społecznych ludzi, których teraz zwalniają. Większość programistów, których znam, ma mieszkanie i oszczędności, więc to nie jest sprawa terminalna. Ale wielu nie było gotowych na takie tempo. Pierwsze sygnały przyszły na początku roku, a dziewięć miesięcy później były już fale zwolnień.

Chcę tym wpisem sprowadzić na ziemię kilka osób, które dalej myślą, że mają czas.

## Moje zakłady {#bets}

To są opinie. Nie mam na nie źródeł i mogę się mylić.

**Rola FDE też zniknie.** Wszyscy się teraz pod nią optymalizujemy, a za kilka lat też nie będzie potrzebna. Aplikuję na stanowisko, które według mnie się zestarzeje.

**„Architektura i security zostaną dla ludzi” to gówno prawda.** To samo mówiono dwa lata temu o pisaniu kodu. Modele poradzą sobie z jednym i drugim.

**Firmy staną się hive mindem.** Większość biznesu, nawet wielkości Google, może stać się masą agentów z zarządem na górze. Później może i bez zarządu. Moim zdaniem to kwestia kilku lat.

**Jedno się nie zestarzeje.** Programistom zawsze dobrze płacono, bo oczekiwano od nas zmian. Technologia rotowała co kilka lat i nie dało się stać w miejscu.

```chart
shifts
```

Sporo osób w branży jeszcze żadnej takiej zmiany nie przeżyło, bo dzieli je kilka lat. Ta jest szybsza od poprzednich. Ale układ jest ten sam co zawsze: panta rhei, wszystko płynie, a nam płacą za to, że płyniemy razem z tym. To właśnie znaczy agile, kiedy wyjmiesz je z korporacyjnej prezentacji.

Dlatego jestem optymistą. Firmy mają więcej problemów niż kiedykolwiek i mniej do nich cierpliwości. Ktoś musi wejść, znaleźć ten, który kosztuje najwięcej, i go naprawić. Przez najbliższe kilka lat ten ktoś nazywa się FDE.

## FAQ {#faq}

### Co znaczy skrót FDE? {#faq-stands-for}

Forward Deployed Engineer. Palantir używa nazwy Forward Deployed Software Engineer (FDSE). Niektóre firmy piszą „forward deployment engineer” albo „deployed engineer” i mają na myśli tę samą pracę.

### Czym FDE różni się od solutions engineera? {#faq-solutions-engineer}

Solutions albo sales engineer pracuje przed sprzedażą, buduje dema i często jest rozliczany z umowy. FDE pracuje po sprzedaży, wdraża kod produkcyjny w systemach klienta i jest rozliczany z tego, czy klient dostał wynik.

### Czy Forward Deployed Engineer pisze kod? {#faq-code}

Tak, i wdraża go na produkcję. W 2026 dużą część tego kodu piszą agenci, których FDE prowadzi i sprawdza, więc zostaje mu więcej czasu dla klienta.

### Ile zarabia Forward Deployed Engineer? {#faq-pay}

W USA [Levels.fyi](https://www.levels.fyi/t/software-engineer/title/forward-deployed-engineer) podaje medianę całkowitego wynagrodzenia 225 tysięcy dolarów, a ogłoszenia laboratoriów AI sięgają 320 tysięcy dolarów pensji podstawowej. W Polsce publiczne ogłoszenia z listopada 2026 to od około 23 tysięcy złotych miesięcznie na etacie do 250 do 400 zł za godzinę na B2B.

### Czy junior może zostać FDE? {#faq-junior}

Większość ogłoszeń wymaga pięciu albo więcej lat. Wyjątkiem jest Palantir, który ogłaszał tę rolę także dla absolwentów. Praktyczna droga to zostać najpierw solidnym inżynierem, a doświadczenie z klientem zdobywać z boku, choćby w małej firmie znajomego.

### Czy w Polsce są oferty FDE? {#faq-poland}

Tak. Google zatrudnia FDE w Warszawie i Wrocławiu, rolę ogłaszają też firmy konsultingowe i agencje. To wciąż mały rynek: w moim przeglądzie z tego miesiąca około 30 ról było w Polsce albo zdalnie w UE.

## Szukasz FDE? {#hire}

Jestem seniorem z Wrocławia. Dziewięć lat pracowałem w zespołach klientów, a od dwóch lat buduję z agentami. Uczciwie o brakach: robiłem scoping, estymacje i wyceny, ale nie zamykałem sprzedaży enterprise. Najlepiej pracuję tam, gdzie widzę użytkownika i wynik.

```chart
hire
```

## Źródła {#sources}

- Lenny Rachitsky, [State of the tech job market: late 2026](https://www.lennysnewsletter.com/p/state-of-the-tech-job-market-late), dane TrueUp i Live Data Technologies
- Gergely Orosz, [Forward deployed engineers](https://newsletter.pragmaticengineer.com/p/forward-deployed-engineers), The Pragmatic Engineer
- Amazon, [AWS invests $1 billion in forward deployed AI engineers](https://www.aboutamazon.com/news/aws/aws-1-billion-forward-deployed-ai-engineers)
- Databricks, [Forward deployed engineering: delivering business outcomes with AI](https://www.databricks.com/blog/forward-deployed-engineering-delivering-business-outcomes-ai)
- Bloomberry, [I analyzed 1,000 forward deployed engineer jobs](https://bloomberry.com/blog/i-analyzed-1000-forward-deployed-engineer-jobs-what-i-learned/)
- Fortune, [Forward deployed engineers are a fast-growing six-figure job](https://fortune.com/2026/09/03/forward-deployed-engineers-fast-growing-six-figure-silicon-valley-job-integrate-ai-with-customers-tech-careers-palantir/), dane Lightcast
- CIO Dive, [Can forward deployed engineers fix AI?](https://www.ciodive.com/news/can-forward-deployed-engineers-fdes-fix-ai-gartner/831833/)
- Andreessen Horowitz, [Trading margin for moat](https://a16z.com/services-led-growth/) i [The Palantirization of everything](https://a16z.com/the-palantirization-of-everything/)
- SignalFire, [State of Talent Report 2026](https://www.signalfire.com/blog/signalfire-state-of-talent-report-2026)
- Stanford Digital Economy Lab, [Canaries in the coal mine, aktualizacja z sierpnia 2026](https://digitaleconomy.stanford.edu/news/canariesaug26/)
- METR, [badanie z 2025](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) i [aktualizacja z 2026](https://metr.org/blog/2026-02-24-uplift-update/)
- Anthropic, [Agentic coding and persistent returns to expertise](https://www.anthropic.com/research/claude-code-expertise)
- Just Join IT, [Rynek IT w Polsce 2025](https://justjoin.it/blog/rynek-it-w-polsce-2025-stabilizacja-i-koniec-kryzysu-raport)
- Antyweb, [Rynek pracy IT 2026](https://antyweb.pl/rynek-pracy-it-2026), za No Fluff Jobs
- Levels.fyi, [Forward Deployed Engineer compensation](https://www.levels.fyi/t/software-engineer/title/forward-deployed-engineer)
