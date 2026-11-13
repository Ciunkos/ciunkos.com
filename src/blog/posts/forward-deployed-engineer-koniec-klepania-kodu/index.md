Od listopada jestem programistą bezklientowym. Mam 15 lat doświadczenia jako full-stack i nikt nie kupuje full-stacka. W tych samych dwunastu miesiącach liczba ofert dla [Forward Deployed Engineerów](https://ciunkos.com/slownik/forward-deployed-engineer) wzrosła 4,6 raza.

```chart
role-shift
```

> [!WARNING]
> Nie jestem neutralny. Sam szukam roli Forward Deployed Engineera, a ten wpis jest częścią tego szukania. Każda liczba ma link do źródła.

> [!TLDR]
> Forward Deployed Engineer (FDE) to programista, który pracuje w zespole klienta i odpowiada za wynik, który klient dostaje. Kod piszą dziś agenci AI, więc firmy płacą za to, czego agenci nie zrobią: znalezienie właściwego problemu i sprawienie, żeby rozwiązanie się przyjęło. Ofert dla front-endu i mobile ubyło w rok mniej więcej o połowę. Ofert FDE przybyło 4,6 raza i wciąż jest to około 2 na 100 ofert inżynierskich. Jeśli żyjesz z pisania kodu, zacznij się ruszać teraz.

Programisto: to ostrzeżenie od kogoś, kto ruszył się za późno. Właścicielu firmy: zobaczysz, co FDE robi u Ciebie i ile kosztuje. Szukasz FDE? Przejdź do sekcji [Szukasz FDE?](#hire)

## Zabrali nam robotę {#they-took-our-jobs}

```chart
they-took-our-jobs
```

Lenny Rachitsky, z którego [raportu o rynku pracy](https://www.lennysnewsletter.com/p/state-of-the-tech-job-market-late) pochodzi wykres powyżej, czyta to tak: wąskie specjalizacje zapadają się w mniejsze zespoły o szerszej odpowiedzialności, a umożliwiło to AI.

Zgadzam się, bo sam to przeżyłem. Przez lata moją wartością było to, że umiem front, backend i wdrożenie. Dziś agent robi wszystkie trzy, kiedy ja parzę kawę.

Ogłoszenia kryją drugi problem. Firmy ogłaszają więcej, a zatrudniają mniej.

```chart
openings-vs-hires
```

Dwie uwagi. Pierwszy wykres liczy nazwy stanowisk, więc część wzrostu FDE to sales engineerowie pod nową nazwą. A otwarta oferta to zamiar, a nie zatrudnienie.

Straty rozkładają się nierówno. Największe firmy technologiczne zatrudniają [o około 65% mniej absolwentów niż w 2019](https://www.signalfire.com/blog/signalfire-state-of-talent-report-2026), a wczesne startupy o około 76% mniej. Zatrudnienie osób w wieku 22 do 25 lat w zawodach najbardziej wystawionych na AI jest [o około 19% niższe](https://digitaleconomy.stanford.edu/news/canariesaug26/), niż byłoby bez niej. Seniorzy w większości zostają. Juniorzy nie wchodzą.

### A w Polsce {#poland}

Mieszkam we Wrocławiu, więc sprawdziłem, czy to tylko amerykańska historia. Nasza też, z opóźnieniem.

```chart
poland
```

Ogłoszenia wróciły w 2025. Na ogłoszenie dla juniora front-end wciąż przypada 146 aplikacji. Polskie liczby śledzę na własnym [radarze pracy IT](https://ciunkos.com/radar-pracy-it).

```chart
they-took-my-job
```

Na meetupie w tym tygodniu przedstawiłem się jako programista bezklientowy. Ludzie się zaśmiali. Potem kilka osób zapytało, od kiedy szukam.

## Kim jest Forward Deployed Engineer? {#what-is-fde}

Forward Deployed Engineer to programista, który pracuje w zespole klienta, buduje na gotowym produkcie albo modelu i odpowiada za to, czy problem klienta został rozwiązany.

Rolę wymyślił Palantir na początku lat 2010. i nazwał tych inżynierów Deltami. [Mniej więcej do 2016](https://newsletter.pragmaticengineer.com/p/forward-deployed-engineers) miał ich więcej niż zwykłych programistów. Podział jest prosty: programista produktowy buduje jedną funkcję dla wielu klientów, a forward deployed engineer używa wielu funkcji dla jednego klienta.

Przez dekadę prawie nikt tego nie kopiował, bo wyglądało to jak drogi konsulting. Potem laboratoria AI odkryły, że sprzedać model jest łatwo, a sprawić, żeby działał w banku, jest trudno. FDE zatrudniają dziś OpenAI, Anthropic, Databricks i Google. W czerwcu 2026 [AWS wyłożył miliard dolarów](https://www.aboutamazon.com/news/aws/aws-1-billion-forward-deployed-ai-engineers) na organizację forward deployed.

```chart
fde-compare
```

Spójrz na kolumnę „Odpowiada za wynik po wdrożeniu”. Konsultant wychodzi po slajdach. [Zespół z outsourcingu](https://ciunkos.com/slownik/staff-augmentation) zamyka tickety. FDE jest na miejscu w poniedziałek po demie, kiedy ludzie albo korzystają z nowego narzędzia, albo po cichu wracają do Excela.

To praca inżynierska. Na [1000 ogłoszeń FDE](https://bloomberry.com/blog/i-analyzed-1000-forward-deployed-engineer-jobs-what-i-learned/) żadne nie miało planu sprzedażowego, a dwie trzecie wymagały Pythona.

## Dlaczego teraz {#why-now}

Seniorzy, którzy siedzieli na spotkaniach z klientem, i tak większość czasu poświęcali na implementację i architekturę. Dziś robią to Claude Code, ChatGPT i Codex, dosłownie w minuty. Mnie zajmowało to godziny, dni albo tygodnie.

W 2026 [agenci kodujący](https://ciunkos.com/slownik/agent-kodujacy) zbudowali około dwóch trzecich zmergowanych pull requestów w dwóch produktach, nad którymi pracowałem, prawie wszystkie przez moje review. Dziś AI pisze 100% mojego kodu. Ręcznie piszę tylko wtedy, gdy skończą się limity albo zdarzy się coś wyjątkowego.

W Sandtime przejąłem wzrost i zbudowałem widoczność w wyszukiwarkach i w wyszukiwaniu AI prawie od zera. Kilka lat temu trzeba by do tego zatrudnić osobę na pełen etat. Tym razem większość zrobił agent.

> [!PRZEMO]
> Robotę zrobił agent. Ja wiedziałem, którą robotę warto zrobić.

Wąskie gardło się przesunęło. Kod jest tani. Drogie jest wiedzieć, co zbudować, wpiąć to w prawdziwe systemy firmy i sprawić, żeby ludzie tego używali. Jedno wdrożenie FDE w Qualcommie [skróciło wielodniowe procesy do minut](https://www.databricks.com/blog/forward-deployed-engineering-delivering-business-outcomes-ai). Qualcommowi nie brakowało kodu.

Klepanie kodu się skończyło. Programowanie ma się dobrze, bo [kodowanie to nie programowanie](https://lnkd.in/p/d9ymUTAa). AI robi coraz więcej, a równocześnie coraz więcej jest do zrobienia.

```chart
day-shift
```

## Dwa dni w spedycji {#discovery}

Weźmy firmę spedycyjną, czterdzieści osób. Zlecenia transportowe przychodzą mailem jako PDF-y. Dyspozytorzy ręcznie przepisują je do systemu transportowego. Jedna zła cyfra w kodzie pocztowym wysyła ciężarówkę do złego miasta, a faktury wychodzą późno, bo nikt nie sparował listów przewozowych. Właściciel słyszał o AI i nie ma miliona złotych na „transformację cyfrową”.

Zwykle telefon dzwoni, bo prezes mówi: „konkurencja robi AI, my też chcemy AI”. Właściciel często nie umie powiedzieć, gdzie uciekają pieniądze, więc pierwsze zadanie to się tego dowiedzieć.

```chart
fde-loop
```

Siadam z ludźmi, którzy wykonują pracę. Na miejscu, jeśli praca jest na miejscu. Jeśli zdalna, czytam kanały na Slacku albo Teamsach, zaglądam do repozytoriów i wchodzę na calle. To trwa dwa dni i nie wymaga całego działu.

Potem dostajesz plan z liczbami: co da się zautomatyzować, ile kosztuje każdy kawałek i ile oszczędza, policzone na Twoich prawdziwych kosztach. Ty decydujesz, czy idziemy dalej. Podstaw własne liczby:

```chart
roi
```

Dwa dni [płatnego discovery](https://ciunkos.com/slownik/platna-faza-discovery) to 16 godzin po mojej [standardowej stawce](https://ciunkos.com/cennik): 2880 zł netto. Cena jest taka sama dla każdego.

Czasem uczciwy wynik brzmi: AI nie ma u Ciebie dziś sensu. Wtedy zapłaciłeś za tę odpowiedź, zanim wydałeś dziesięć razy więcej na [pilotaż](https://ciunkos.com/slownik/poc-czy-pilot). To się szybko zmienia, więc za kilka tygodni patrzymy jeszcze raz, a drugie podejście jest tańsze.

Większość projektów AI umiera między pilotażem a codziennym użyciem. Ludzie dostają oficjalne narzędzie, które jest niewygodne, więc dalej używają swojego. To [shadow IT](https://ciunkos.com/slownik/shadow-it-shadow-ai), a przy chatbotach [shadow AI](https://ciunkos.com/slownik/shadow-ai). Dlatego szkolenia i poprawki są częścią roboty. Po sześciu tygodniach wracam i mierzę, jak [Magda Gessler](https://pl.wikipedia.org/wiki/Magda_Gessler) w „Kuchennych rewolucjach”.

```chart
red-flags
```

## Czy to tylko konsulting z lepszą nazwą? {#rebrand}

Po części tak. Chris Degnan, były szef sprzedaży Snowflake, [nazwał FDE](https://letsdatascience.com/news/chris-degnan-critiques-forward-deployed-engineer-role-e05975bb) podrasowanym pracownikiem professional services. Analityk Gartnera [mówi](https://www.ciodive.com/news/can-forward-deployed-engineers-fdes-fix-ai-gartner/831833/), że wielu dostawców nazywa „forward deployed” zwykłe wdrożenia, bo to brzmi bardziej strategicznie. Andreessen Horowitz argumentował w obie strony: startupy powinny [oddać marżę za taką pracę](https://a16z.com/services-led-growth/), a większość firm kopiujących Palantira [skończy jako drogie firmy usługowe](https://a16z.com/the-palantirization-of-everything/).

Rynek jest też mniejszy niż nagłówki.

```chart
fde-share
```

Mój test na prawdziwe FDE ma trzy pytania. Czy ta osoba wdraża kod na produkcję? Czy zostaje po wdrożeniu? Czy ktoś po sześciu tygodniach mierzy wynik w złotówkach albo godzinach? Trzy razy tak i nie obchodzi mnie, jak rola się nazywa. Spodziewam się, że każda firma od outsourcingu i body leasingu w Polsce w ciągu roku przemaluje się na FDE, więc pytaj.

## Ile to płaci {#pay}

```chart
pay
```

To widełki z ogłoszeń. W USA duże laboratoria ogłaszają od 180 do 320 tysięcy dolarów pensji podstawowej, czyli od 730 tysięcy do 1,28 miliona złotych rocznie. W Polsce Google płaci pracownikowi około 280 tysięcy złotych rocznie przed premią i akcjami, a agencje ogłaszają 250 do 400 zł za godzinę dla seniorów na kontrakcie, czyli 480 do 770 tysięcy złotych rocznie. Moja cena to 360 tysięcy.

Pieniądze na B2B są przed Twoimi podatkami, ZUS-em, urlopem i chorobowym. A rynek agencji jest cieńszy, niż wygląda: mój przegląd około 14 tysięcy ofert z tego miesiąca znalazł mniej więcej 120 ról typu FDE, z czego około 30 w Polsce albo zdalnie w UE, a ten sam klient końcowy często pojawia się w czterech ogłoszeniach różnych agencji.

## Jak tam dojść {#how-to}

### Jeśli jesteś juniorem {#junior}

Na panelu, na którym siedziałem w tym tygodniu, padło pytanie, czy programista będzie jeszcze potrzebny. Moja odpowiedź zaskoczyła salę: dzisiejsi juniorzy mają lepiej niż juniorzy dziesięć lat temu.

Wtedy pytałeś na Stack Overflow i czekałeś godzinami albo dniami na łaskawą odpowiedź kogoś z doświadczeniem. Dziś AI tłumaczy nowy temat od ręki, tyle razy, ile potrzebujesz, a technologię zmienisz w tygodnie.

Ceną jest wyższy próg wejścia. Dzisiejszy junior musi pracować na poziomie wczorajszego seniora, bo proste zadania, na których juniorzy się uczyli, zniknęły. Juniorów będą szkolić AI-e, a nie seniorzy. A wiedza dalej się opłaca: w [400 tysiącach sesji Claude Code](https://www.anthropic.com/research/claude-code-expertise) osoby, które znały dziedzinę zadania, odnosiły sukces mniej więcej dwa razy częściej niż nowicjusze.

### Jeśli jesteś midem {#mid}

Najwięcej uczy własny biznes. Odpal własną aplikację albo mały biznes online i dotknij problemów, które mają prawdziwi właściciele firm.

Albo pomóż komuś znajomemu, kto prowadzi działalność. Mój brat cioteczny wykleja billboardy. Zbudowałbym mu z AI stronę, która pokazuje jego content z TikToka i przyprowadza klientów. To rodzina, a i tak musiałbym rozmawiać z klientem, ustalić, co znaczy „zrobione”, i poprawić to, co mu się nie spodoba. Dokładnie o to pytają pracodawcy.

### Jeśli jesteś seniorem {#senior}

Odpuść umiejętności arcane. Klepanie komend z pamięci było powodem do dumy, a dziś nie jest nic warte. Pozwól AI przejąć ręczną robotę i przekieruj uwagę na problemy, które kogoś realnie bolą. Jest ich więcej niż kiedyś.

```chart
let-it-go
```

Pierwsze, co wyrzuciłem z własnego dnia, to ręczne programowanie. Claude Code i [harnessy](https://ciunkos.com/slownik/harness-agenta) wokół niego piszą kod lepiej niż większość programistów, w wiele dni lepiej niż ja.

Przez większość z 15 lat płacono mi za budowanie. Ostatnie dwa były inne: miniprojekty prosto od pomysłu do implementacji, eksperymenty, R&D, prezentacje dla klientów i feedback w tym samym tygodniu. Praca FDE, tylko bez tej nazwy. Mogę uczyć rozwiązywania problemów. Wciąż ćwiczę komunikację i otwartość na nowe kontakty, więc ćwiczę publicznie. Ten wpis jest tego częścią.

## Kto za to zapłaci {#cost}

Dla biznesu automatyzacja to czysta korzyść, a pierwsze oszczędności to etaty. Voicebot potrafi ściąć setki albo tysiące etatów konsultantów. To samo dzieje się z juniorami i midami, a programiści zawsze byli drodzy, nawet na wejściu. Agent robi to od ręki i nie narzeka.

Kiedy pokazuję klientowi [zwrot z wdrożenia](https://ciunkos.com/slownik/roi-wdrozenia-ai), częścią tej liczby są stanowiska, których już nie potrzebuje. Co z tym zrobi, to jego decyzja. Nie będę udawał, że ta liczba jest czymś innym.

Zapłaci całe społeczeństwo. W Polsce duża część branży pracuje na B2B, więc firmy nigdy nie ponosiły kosztów społecznych ludzi, których teraz zwalniają. Większość programistów, których znam, ma mieszkanie i oszczędności. Ale wielu nie było gotowych na takie tempo. Pierwsze sygnały przyszły na początku roku. W maju były już fale.

```chart
layoffs
```

Nie piszę tego, żeby straszyć. Spójrz na wykres, a potem we własny kalendarz. Najłatwiej się ruszyć, kiedy jeszcze masz klienta.

## Moje zakłady {#bets}

To są opinie. Nie mam na nie źródeł i mogę się mylić. Mam nadzieję, że się mylę!

**Rola FDE też zniknie.** Wszyscy się pod nią optymalizujemy, a za kilka lat też nie będzie potrzebna. Aplikuję na stanowisko, które według mnie się zestarzeje.

**„Architektura i security zostaną dla ludzi” to gówno prawda.** To samo mówiono dwa lata temu o pisaniu kodu.

**Firmy staną się hive mindem.** Google już nim jest: [rozszerzeń do Chrome nie sprawdza żaden człowiek](https://lnkd.in/p/dzDxxS-5). Większość biznesu może działać jako masa agentów z zarządem na górze. Później może i bez zarządu.

**Jedno się nie zestarzeje.** Programistom zawsze dobrze płacono, bo oczekiwano od nas zmian. Technologia rotowała co kilka lat i nie dało się stać w miejscu.

```chart
shifts
```

Sporo osób w branży jeszcze żadnej takiej zmiany nie przeżyło. Ta jest szybsza od poprzednich, ale układ jest ten sam: panta rhei, a nam płacą za to, że płyniemy razem z tym. To właśnie znaczy [agile](https://agilemanifesto.org/iso/pl/manifesto.html), kiedy wyjmiesz je z korporacyjnej prezentacji.

Dlatego jestem optymistą. Firmy mają więcej problemów niż kiedykolwiek i mniej do nich cierpliwości. Ktoś musi wejść, znaleźć ten, który kosztuje najwięcej, i go naprawić. Przez najbliższe kilka lat ten ktoś nazywa się FDE.

## FAQ {#faq}

### Co znaczy skrót FDE? {#faq-stands-for}

Forward Deployed Engineer. Palantir używa nazwy Forward Deployed Software Engineer (FDSE). Niektóre firmy piszą „forward deployment engineer” albo „deployed engineer” i mają na myśli tę samą pracę.

### Czym FDE różni się od solutions engineera? {#faq-solutions-engineer}

Solutions albo [sales engineer](https://ciunkos.com/slownik/sales-engineer) pracuje przed sprzedażą, buduje dema i często jest rozliczany z umowy. FDE pracuje po sprzedaży, wdraża kod produkcyjny w systemach klienta i jest rozliczany z tego, czy klient dostał wynik.

### Czy Forward Deployed Engineer pisze kod? {#faq-code}

Tak, i wdraża go na produkcję. W 2026 większość tego kodu piszą agenci, których FDE prowadzi i sprawdza, więc zostaje mu więcej czasu dla klienta.

### Ile zarabia Forward Deployed Engineer? {#faq-pay}

W USA mediana całkowitego wynagrodzenia to [225 tysięcy dolarów rocznie](https://www.levels.fyi/t/software-engineer/title/forward-deployed-engineer), czyli około 900 tysięcy złotych, a ogłoszenia laboratoriów AI sięgają 1,28 miliona złotych pensji podstawowej. W Polsce ogłoszenia z listopada 2026 to od około 280 tysięcy złotych rocznie na etacie do 480 do 770 tysięcy złotych rocznie na B2B.

### Czy junior może zostać FDE? {#faq-junior}

Większość ogłoszeń wymaga pięciu albo więcej lat. Wyjątkiem jest Palantir, który ogłaszał tę rolę także dla absolwentów. Praktyczna droga to zostać najpierw solidnym inżynierem, a doświadczenie z klientem zdobywać z boku, choćby w małej firmie znajomego.

### Czy w Polsce są oferty FDE? {#faq-poland}

Tak. Google zatrudnia FDE w Warszawie i Wrocławiu, rolę ogłaszają też firmy konsultingowe i agencje. To mały rynek: około 30 ról w Polsce albo zdalnie w UE w tym miesiącu. [Szukacz Pracy AI](https://ciunkos.com/szukacz-pracy-ai) dopasuje Twoje CV do otwartych ofert z polskich i zdalnych portali, w tym ról FDE.

## Szukasz FDE? {#hire}

Jestem seniorem z Wrocławia. Dziewięć lat pracowałem w zespołach klientów, a od dwóch lat buduję z agentami. Jeden uczciwy brak: robiłem scoping, estymacje i wyceny, ale nie zamykałem sprzedaży enterprise. Najlepiej pracuję tam, gdzie widzę użytkownika i wynik.

```chart
hire
```
