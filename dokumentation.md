# Dokumentation #
Projektarbete i Multimedia, VT-16
Martin Bergström, Jonas Gabrielson, Erik Wistrand

## Projektbeskrivning ##

Vi har valt att skapa en hemsida med responsiv design som använder sig av en sökfunktion för att hitta bilder på fotosajter (till en början på Flickr) och visa dessa i ett rutnät. Tanken är att göra en hemsida inriktad på att finna bra foton som sedan kan användas som skrivbordsbilder på dator eller mobil. Tanken med att använda en responsiv design i projektet är att hemsidan då ska kunna presentera bilderna olika beroende på bredden på webbläsaren, vilket implicit då antas betyda att man använder en dator om webbläsaren är bred och en mobil om den är smal. Den responsiva designen förändrar också storleken på bilderna dynamiskt när användaren justerar sin webbläsare, vilket underlättar användningen och även gör utvecklingsarbetet enklare eftersom man bara behöver inrikta sig på att göra en hemsida som kan visas korrekt oavsett vilken sorts 

Bilderna som presenteras på hemsidan ska kunna inspekteras närmare i en "lightbox", och sedan laddas ned för användning. Om man vill ska man även kunna få en förhandsvisning av hur ens skrivbord kommer se ut med ikoner, startmeny, etc. med hjälp av ett separat lager bestående av en delvis transparent bild som man kan slå på och av. 

## Utvecklingsarbete ##

På grund av tidsbegränsningar valde vi tidigt att lägga vårt projektarbete inom ett välbekant område för att kunna komma igång snabbt. Valet föll då på att arbeta med responsiv design och foton. Idén om att inrikta projektet på skrivbords- eller bakgrundsbilder till dator och mobil kom också från en observation att en liknande tjänst nyligen gått i graven, och att många andra tjänster i segmentet framstår som oseriösa.

Grunden för vår hemsida är CSS- och JS-biblioteket Bootstrap 3 (http://getbootstrap.com), som vi har modifierat med egen CSS och JS för att få den funktionalitet vi tänkt oss. Bootstrap är ett vida spritt bibliotek som ursprungligen utvecklades på Twitter som ett internt utvecklingsverktyg och som nu är mycket vanligt som grund för webbutveckling. Eftersom Bootstrap innehåller färdiga stilmallar som lämpar sig för just responsiv design var det ett naturligt val, samtidigt som det gav oss en ursäkt att lära oss mer om det här verktyget. Förutom ett CSS- och ett JS-bibliotek använder sig Bootstrap 3 också av jQuery.

Sökfunktionen använder sig av fotosajten Flickr:s API för att hämta hem foton som sedan kan visas i vårt bildflöde. Istället för att dela upp bilderna på flera sidor använder vår sida en “Lazy Load”-funktion där fler bilder laddas in efterhand som man scrollar nedåt på sidan. Tyvärr hade Bootstrap lite svårt att skapa ett helt glappfritt flöde. Detta hade vi kunnat lösa genom att använda en av många JS-plugins som finns för ändamålet, men vi bestämde oss för att bara hålla oss inom begränsningarna för Bootstrap.

Vi har valt att skapa en väldigt enkel design för hemsidan, och det mesta i den grundar sig direkt i Bootstraps funktionalitet. Exempelvis finns det ett tillhörande bibliotek av ikoner kallade Glyphicons som vi använde oss av till knapparna på hemsidan. För att få ikoner för knappar till Facebook och Twitter var vi dock tvungna att använda ett annat ikonbibliotek, FontAwesome (https://fortawesome.github.io/Font-Awesome/). Logotypen till hemsidan och en startbild skapade vi själva i Illustrator.

Efter att ha jobbat på projektet i en vecka lyckades vi relativt väl med våra föresatser. Tyvärr visade det sig att Flickr inte har någon inbyggd funktion för att söka efter bilder bara i landskaps- eller porträtt-orientering, vilket gjorde att vi för tillfället inte kunde implementera en funktion som ska byta bildurvalet från det ena till det andra beroende på skärmstorlek. Vi brottades också en del med att få bildvisningen i lightbox att fungera som det var tänkt men hann inte klart före deadline.

## Tidsrapport ##

| Martin Bergström      | Jonas Gabrielson | Erik Wistrand | Totalt |    |
|-----------------------|------------------|---------------|--------|----|
| Förarbete & Planering | 3                | 3             | 3      | 9  |
| Bakgrundsstudier      |                  | 4             | 4      | 8  |
| HTML & CSS            | 6                | 6             | 5      | 17 |
| Javascript            | 10               | 3             | 2      | 15 |
| Illustration          |                  | 2             |        | 2  |
| Dokumentation         | 1                | 4             | 2      | 7  |
| Totalt                | 20               | 22            | 16     | 56 |

## Utvecklardagbok, Jonas Gabrielson

### Måndag 8/2, 14-15
Inledande gruppmöte. Vi hälsade på varandra och började diskutera inriktningen på vårt arbete. Vi kom fram till en grundidé och ajournerade för att fundera vidare hemma.

### Tisdag 9/2, 12-15
Jag skissade fram lite enkla pappersprototyper medan de andra gjorde en prototyp på dator för att skapa oss en uppgift om hur vi ville att hemsidan skulle se ut. Diskuterade lite tekniska lösningar och läste på om Bootstrap.

### Onsdag 10/2, 12-15
Påbörjade utvecklingen av hemsidan. Skapade ett projekt på Github, laddade ned Bootstrap och skapade en grundläggande html-kod med länkar till Bootstraps css och js. Samarbetade med de andra i gruppen för att fortsätta utvecklingen. Lade in sökruta, navbar och lite grundläggande element.

### Torsdag 11/2, 12-15
Skapade menyknappar med ikoner. Valde ett namn för hemsidan (“Tapet”) och skapade en logotyp i Illustrator som jag sedan placerade in på menyraden. Förfinade bildvisaren genom att lägga in knappar för nedladdning, Facebook och Twitter. Skapade en länk till ikonbiblioteket FontAwesome för kunna använda korrekta ikoner på dessa knappar. Läste på mer om Bootstrap.

### Fredag 12/2, 14-18
Fortsatt utveckling av hemsidan, nu med en fungerande sökfunktion. Hjälpte till att skapa en bra design för kolumner och bildvisning.

### Lördag 13/2, 14-19 + 21-23
Skapade en splash-bild i Illustrator som visas när hemsidan laddas för första gången. Gjorde även en ny logotyp med wordmark (typsatt hemsidestitel) och lade in den. Hjälpte till att identifiera och lösa problemet med varför bilderna inte bara fyller på under existerande bilder när Lazy load aktiverar. Rensade upp i koden för att göra den mer läslig och korrekt indenterad. Skapade en favicon.

### Söndag 14/2, 14-18 + 20-24
Dokumentation, lite vidare kodrensning.

## Logg, Erik Wistrand
 
### Måndag – 8/2, 14-15
Träffade gruppen och började bolla idéer sinsemellan. Vi fokuserade på att försöka hitta en konkret grundidé och kom överens om att skapa en responsiv hemsida med upp- samt nedladdning av bilder. Vi diskuterade även snabbt vilka funktioner som skulle innefattas samt utelämnas. Sedan skapade vi en planering för hur vi skulle arbeta.

### Tisdag – 9/2, 12-15
Började skissa på en prototyp för att använda som mall när vi sedan skulle utforma vår hemsida. Vi började även fördjupa oss i vilka funktioner och användningsområden hemsidan skulle innefatta.

### Onsdag – 10/2, 12-15
Genom att använda bootstrap fick vi möjligheten att ladda ner en html-kod som vi använde som grund för vårt projekt. Vi lade sedan in flera av de grundläggande elementen, såsom sökruta och navbar.

### Torsdag – 11/2, 12-15
Fortsatte att designa sidan med ikoner och en logga. Vi valde också att lägga in funktionen att kunna dela en in-zoomad bild till Twitter och Facebook samt en funktion för nedladdning.

### Fredag – 12/2, 14-18
Fortsatt utveckling av hemsidan. Fokuserade på sökfunktionen och design.

### Söndag – 14/2, 17-19
Sammanställa dokumentationen och avsluta arbetet.
## Utvecklardagbok, Martin Bergström

### Måndag – 8/2, 14-15
Första möte med gruppen. Vi diskuterade olika förslag på projekt och valde sedermera ett fotogalleri med api-funktion.

### Tisdag – 9/2, 12-15
Skapade “mockups” i paint.net för att påvisa ungefär hur sidan skall se ut. Skuggat igenom dokumentation jquery för jsonp.

### Onsdag – 10/2, 12-15
Jag läste vidare om jquery för jsonp och bistod med hjälp i designen med bootstrap.

### Fredag – 12/2, 14-18
Implementerar sökfunktionen och ett enkelt “grid” för bilderna som laddas in.

### Lördag – 13/2, 16-19
Implementerar bildvisare samt gör om “grid” på grund av tekniska problem.

### Söndag – 14/2, 15-22
Gör klart den sista koden och sammanställer dokumentationen samt förebereder för att lämna in.
