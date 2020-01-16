# DOMProjekt
I forhold til opgavebeskrivelsen af denne aflevering, har vi som gruppe valgt at lave en side med en fysik simulator som man kan komme til via WOrdpress siden og vores egen side. Idéen med simulatoren kommer fra, at vi som gruppe samtidig også er meget glad for fysik, og samtidig at gøre det en smule udfordrende da der skal tages højde for mange programmeringsrelaterede ting, samt hvordan fysikken egentlig virker.

Efter en del snakken faldt valgte på Newtons første lov, der fortæller om relationerne mellem mekanisk energi når et objekt bevæger sig. Loven lyder således: "at påvirkes et legeme ikke af en resulterende kraft, vil det enten ligge stille eller blive ved at bevæge sig med konstant hastighed i samme retning".

Selve layoutet blev skabt med et canvas hvori simulatoren skulle befinde sig. Objektet blev til en kvadratisk boks og for at påvirke denne boks blev der sat 4 "slidebars" op i venstre hjørne af vores canvas. Med disse bare kan man selv regulere antallat af "newton" som objektet bliver påvirket med i X og Y koordinater. For eksempel kan man påvirke vores objekt ved at slide den øverste bar til højre, og derved give vores objekt acceleration og så bevæger objektet sig til højre på x-aksen i en værdi tilsvarende til det valgte på baren. Ved siden af baren er der placeret pile for at visualisere hvilken vej objektet vil blive påvirket. Selve den interaktive del er blevet skrevet i DOM. 

Foruden vores simulator i vores canvas skulle der selvfølgelig gøres opmærksom på hvad der foregår - derfor tilføjede vi en tekstbox til højre på skærmen vi vi blandt andet har anført hvilken lov og hvad der sker osv. 

Selve simulatoren viste sig at være lidt mere vanskelig end vi først havde forestillet også - problemet lå dog ikke i det programmeringsmæssige, men i det faktum at vi ikke havde taget højde for den korrekte måde at udføre loven på, og derfor blev den skrevet om et par gange

Der skal selvfølgelig være mulighed for at komme frem og tilbage mellem siden, og derfor har vi skabt en Navbar øverst til højre, som fungerer som en navigationsbar frem og tilbage.

Den oprindelig idé var at lave en simulator for hver af Newtons love, men gruppen måtte erkende, at det blev for stort et arbejde at gribe om, og derfor besluttede vi os for at i stedet for at lave tre halve simulationere ville vi fokusere på en lov, og lave den tilfredsstillende. Dette viste sig at være en god idé, eftersom allerede første lov bragte os en del problemer 

Navigationsbaren er blevet ændret en del gange, for at finde et passende layout til baren. Dette gjaldt specielt hvordan vi gjorde baren spændende, og vi endte med at beholde navbaren i en mørk farve, for at stå ud fra baggrunden og textboksen. Foruden har vi gjort den en smule mere spændende, ved at den ændre facon ved at holde musen over den valgte menu

Samarbejdsmæssigt har vi hjulpet hinanden og sørget for at komme med input der hvor de andre i gruppen havde det mere vanskeligt. Vi har som gruppe været enige omkring eventuelt ændringer, og der er ikke blevet lavet noget, uden at vi har snakket om det først. 