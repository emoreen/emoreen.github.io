# Dokumentation #

Projektarbete i Multimedia, VT-16
Martin Bergström, Jonas Gabrielson, Erik Wistrand

## Projektbeskrivning

Vi har valt att skapa en hemsida med responsiv design som använder sig av en sökfunktion för att hitta bilder på fotosajter (till en början på Flickr) och visa dessa i ett rutnät. Tanken var att göra en hemsida inriktad på att finna bra foton att använda som skrivbordsbilder på dator eller mobil. Med responsiv design menas här att hemsidan presenterar bilderna olika beroende på bredden på webbläsaren, vilket implicit då antas betyda att man använder en dator om webläsaren är bred och en mobil om den är smal. Bilderna som presenteras på hemsidan kan inspekteras närmare i en "lightbox", och sedan laddas ned för användning. Om man vill kan man även få en förhandsvisning av hur ens skrivbord kommer se ut med ikoner, startmeny, etc. med hjälp av ett separat lager som man kan slå på och av.

## Utvecklingsarbete

Grunden för vår hemsida är CSS- och JS-biblioteket Bootstrap (getbootstrap.com), som vi har modifierat med egen CSS och JS för att få den funktionalitet vi önskat. Sökfunktionen använder sig av fotosajten Flickr:s 