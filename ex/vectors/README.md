# RASTER

Gli esercizi che seguono hanno lo scopo di simulare, attraverso tipiche operazioni di editing,
un processo di impaginazione per una tavola di presentazione di un progetto.   
Inserisci i file prodotti per gli esercizi in questa cartella.

### EX00

_Per partire dobbiamo scegliere il formato_

Utilizzando un software di disegno vettoriale predisponi una tavola in formato __42cm x 42cm__.   
Crea un rettangolo delle stesse dimensioni della tavola (42cm x 42cm) ed applica un colore di riempimento a scelta.
Il rettangolo non deve avere linea contorno.  
Centra il rettangolo nel foglio affinché faccia da fondo alla tavola.

Esporta la tavola in formato _svg_\* nominando il file secondo la forma **NUMEROMATRICOLA_00.svg** (ad es: *845127_00.svg*).

> \* Su Adobe Illustrator utilizzare il comando File &rarr; Export &rarr; Export for Screens... e,
> nella sezione Formats, scegliere il formato SVG   
> Su Inkscape effettuare un semplice salvataggio del file

---

### EX01

_Prima di inserire i contenuti è bene dare struttura alla tavola con una griglia modulare_

A partire dalla tavola prodotta per l'esercizio precedente crea una griglia di riferimento
sulla falsa riga della celebre __griglia tipografica creata da Karl Gerstner per la rivista Capital__ negli anni 60\*.   
In particolare la tavola deve contenere 3 griglie sovrapposte composte da __moduli quadrati distanziati tra loro di 13mm__.

* La prima griglia deve contare __4 x 4 moduli di lato 84.5mm__ come da
[immagine collegata](https://github.com/strumet/strumet.github.io/blob/master/various/4x4.png)
* La seconda griglia deve contare __5 x 5 moduli di lato 65mm__ come da
[immagine collegata](https://github.com/strumet/strumet.github.io/blob/master/various/5x5.png)
* La terza griglia deve contare __6 x 6 moduli di lato 52mm__ come da
[immagine collegata](https://github.com/strumet/strumet.github.io/blob/master/various/6x6.png)

Differenzia il colore del contorno dei moduli di ogni griglia per facilitare la lettura e centra
le tre griglie rispetto al foglio (si consiglia inoltre di depositare ogni griglia su un layer differente
e di bloccare i layer per evitare modifiche involontarie).   
Alla fine il risultato dovrebbe essere simile a
[questa immagine](https://github.com/strumet/strumet.github.io/blob/master/various/grid.png).

Esporta la tavola in formato *svg* nominando il file secondo la forma **NUMEROMATRICOLA_01.svg**

> \* Per maggiori informazioni vedi https://readymag.com/flatfile/03-capital/ e https://www.rototype.org/projektiranje/en/gerstner-3/

---

### EX02

_È ora di aggiungere qualche contenuto alla tavola. Cominciamo con una foto   
Ci sono due modi per inserire contenuti esterni ad un file: incorporandoli (embedding)
o creando dei collegamento (linking). Proviamo col primo caso_

Aggiungi alla tavola prodotta per l'esercizio precedente un'immagine raster liberamente scelta.
Fai attenzione: **l'immagine deve essere incorporata alla tavola (embed), non linkata!**\*

Esporta la tavola in formato *svg* nominando il file secondo la forma **NUMEROMATRICOLA_02.svg**

> \* Per maggiori informazioni su come importare le immagini su AI vedi
> https://helpx.adobe.com/illustrator/using/importing-artwork-files.html   
> Per importare le immagini su Inkscape richiamare il comando File -> Import e,
> nel campo Image import Type, scegliere Embed o Link

---

### EX03

_Incorporare un'immagine non è sempre il modo migliore per inserire contenuti esterni alla tavola:
utilizzando i link, infatti, è possibile mantenere leggero il peso del file ed effettuare modifiche dinamiche_

Partendo dalla tavola prodotta per l'esercizio EX01 inserisci, questa volta, un'immagine raster,
diversa dalla precedente, in forma di **collegamento esterno (link)**.

Esporta la tavola in formato *svg* nominando il file secondo la forma **NUMEROMATRICOLA_03.svg**
e pubblicala insieme all'immagine linkata. Il nome del file immagine deve rispettare la forma
**NUMEROMATRICOLA_03.estensione** (ad es: *845127_03.png*).

---

### EX04

_Adesso, per rendere coerente il formato dell'immagine con la griglia di riferimento, proviamo a
ritagliare Il formato dell'immagine: questa operazione si chiama "clipping" e permette di mascherare
l'immagine senza dover modificare il file originale_

Partendo dalla tavola prodotta per la EX03 posiziona l'immagine linkata in un punto qualsiasi della tavola.
Su di essa **crea una "clipping mask"**\* che ricalchi uno dei quadrati della griglia.

Esporta la tavola in formato *svg* e nomina il file secondo la forma **NUMEROMATRICOLA_04.svg**

> \* Per maggiori informazioni su come creare delle clipping mask su AI vedi
> https://helpx.adobe.com/illustrator/using/clipping-masks.html   
> Per maggiori informazioni su come creare delle clipping mask su Inkscape vedi
> https://inkscapetutorials.wordpress.com/2014/04/22/inkscape-faq-how-do-i-crop-in-inkscape/

---

### EX05

_Il "clipping" può essere realizzato utilizzando qualsiasi geometria, non solo i rettangoli_

Aggiungi alla tavola prodotta per l'esercizio precedente una **nuova immagine linkata**.
Anche in questo caso l'immagine deve essere ritagliata attraverso clipping mask ma, questa volta,
utilizzando **una maschera circolare**.

Esporta la tavola in formato *svg* e nomina il file secondo la forma **NUMEROMATRICOLA_05.svg**.
Pubblica il file svg insieme all'immagine linkata: il nome del file immagine deve rispettare la forma
**NUMEROMATRICOLA_05.estensione**

---

### EX06

_Una tavola di presentazione contiene sempre dei testi. Aggiungiamoli_

Inserisci alla tavola prodotta per l'esercizio precedente **tre elementi di testo** utilizzando font,
rilasciati con licenza open, disponibili su *[Google Fonts](https://fonts.google.com/)*\*:

* __un titolo (qualsiasi), di corpo 60pt__, liberamente posizionato sulla tavola. Il carattere utilizzato
deve essere l'__*[Open Sans Condensed Bold](https://fonts.google.com/specimen/Open+Sans+Condensed)*__
* __un paragrafo__: per il contenuto utilizzare il classico
__*[Lorem ipsum](https://it.wikipedia.org/wiki/Lorem_ipsum)*__\*\*.
Formattare il testo usando il __carattere *[Open Sans Light](https://fonts.google.com/specimen/Open+Sans)*
con corpo 16pt ed un'interlinea di 24pt__. La dimensione del paragrafo deve ricalcare le linee della griglia sottostante
* __una didascalia__ da porre accanto all'immagine. Il corpo deve essere __10pt__,
il font da utilizzare è l'__*[EB Garamond](https://fonts.google.com/specimen/EB+Garamond)*__, lo stile deve essere corsivo

Esporta la tavola in formato *svg* e nomina il file secondo la forma **NUMEROMATRICOLA_06.svg**

> \* Per scaricare ed installare i font vedi
https://developers.google.com/fonts/faq#can_i_download_the_fonts_on_google_fonts_to_my_own_computer

> \*\* AI genera automaticamente il Lorem Ipsum durante la creazione del paragrafo, mentre su
Inkscape è possibile usare l'estensione Extensions -> Text -> Lorem ipsum...   
> In alternativa è possibile incollare in un paragrafo vuoto il testo creato da un generatore online come,
ad esempio, https://loremipsum.io/

---

### EX07

_Spesso l'uso dei testi non è limitato a trasmettere contenuti verbali. A volte infatti questi
possono contribuire alla composizione generale della tavola assumendo connotati grafici specifici_

Partendo dalla tavola prodotta per l'esercizio precedente, aggiungi un nuovo paragrafo
utilizzando le stesse caratteristiche del precedente. Questa volta però __la forma del paragrafo deve essere circolare__.

Esporta la tavola in formato *svg* e nomina il file secondo la forma **NUMEROMATRICOLA_07.svg**

---

### EX08

_Nella tavola di presentazione di un progetto non può mancare... il progetto!_

Effettua il login su *BeeP* e, dalla pagina del wiki *[Interni
CAD](https://beep.metid.polimi.it/web/2017-18-strumenti-e-metodi-del-progetto-marco-ferrara-/wiki/-/wiki/Main/Interni+CAD)*
scegli il disegno riportando il tuo numero di matricola accanto al progetto che vuoi utilizzare.   
**Scarica il pdf selezionato ed inseriscilo nella tavola** prodotta per l'esercizio precedente.

Esporta la tavola in formato *svg* e nomina il file secondo la forma **NUMEROMATRICOLA_08.svg**

---

### EX09

_Per completare il lavoro aggiungiamo un po' di colore al progetto_

Rifinisci la tavola di presentazione **aggiungendo un colore alle parti sezionate del disegno**
(murature, pareti, solai...).   
Completa il lavoro effettuando **libere elaborazioni grafiche sul disegno**
(aggiunta di campiture, ombre, textures, rimozione di elementi, etc...).

Esporta la tavola in formato *svg* e nomina il file secondo la forma **NUMEROMATRICOLA_09.svg**


