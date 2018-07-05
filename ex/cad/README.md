# CAD

Dopo i primi tre esercizi, finalizzati a far affrontare all'allievo i passaggi fondamentali relativi alla messa in tavola
ed alla stampa, i successivi esercizi accompagnano lo studente nel disegno di un infisso.   
Inserisci i file richiesti in questa cartella.

### EX00

_Impariamo ad usare lo spazio carta per mettere in scala i disegni CAD_

Dalla sezione "Documenti e media" di [BeeP](http://beep.metid.polimi.it/) scarica il file *elemental.zip* ed estraine
il contenuto nel tuo computer.   
Apri uno dei 4 file dwg contenenti i progetti di Elemental ed aggiungi **un nuovo layout** in formato A2 orizzontale.   
Nel layout appena creato inserisci una finestra che inquadri la pianta di un'unità abitativa.
Assicurati che il disegno contenga delle quotature (le quote devono essere già presenti nel file,
non devono essere create da zero).   
La finestra deve essere in __scala 1:50__   

Accanto alla finestra appena creata aggiungi una nuova finestra che inquadri una porzione della stessa pianta ma,
questa volta, alla __scala 1:20__. Anche in questo caso il disegno deve contenere delle quotature.

Stampa la tavola in formato pdf utilizzando il ctb *E-BW-10.ctb* contenuto nella cartella scaricata  e nomina
il file secondo la forma **NOMEMATRICOLA_00.pdf** (ad es: *845127_00. pdf*).

---

### EX01

_Una tavola senza testi è poco leggibile: aggiungiamo quote e notazioni_

Partendo dal disegno realizzato per l'esercizio precedente, congela i layer contenenti le quote esistenti.   
Crea un **nuovo stile di testo** il cui carattere sia il *Times New Romans* corsivo ed utilizza lo stile appena
creato per aggiungere una didascalia significativa sotto le due finestre (ad esempio: _Pianta piano terra, scala 1:50_).   
Crea un **nuovo stile di quota** le cui caratteristiche principali siano:

* text font: *Arial*
* text height: *3.6*
* arrows style: *Architectural tick*
* arrows size: *3.6*

Quota sullo spazio carta i disegni visibili da entrambe le finestre.

Stampa la tavola in pdf e nominala secondo la forma **NOMEMATRICOLA_01.pdf**.

---

### EX02

_Il corretto uso degli spessori delle linee del disegno è fondamentale per permettere la comprensione dell'oggetto
rappresentato_

Partendo dal disegno realizzato per l'esercizio precedente, disegna un arredo a piacere (sedia, divano, mobile, letto...)
utilizzando gli **spessori 0.1 mm e 0.18 mm**.
Inserisci l'arredo nella porzione di pianta visibile nella finestra 1:20 (sarà pertanto visibile anche sull'altra finestra).   
Raddoppia, inoltre, lo spessore dei muri sezionati modificando il CTB relativo.

Stampa la tavola in pdf e nominala secondo la forma **NOMEMATRICOLA_02.pdf**.

---

### EX03

_Adesso possiamo cominciare a disegnare l'infisso. Partiamo dal muro_

Disegna, in pianta e sezione, un setto murario aventi le seguenti dimensioni:

* lunghezza: 200 cm
* altezza: 250 cm
* spessore: 25 cm

Disponi le due rappresentazioni in una tavola A2 verticale alla scala 1:10 secondo lo schema rappresentato dall'immagine
[wall01.png](https://github.com/strumet/strumet.github.io/blob/master/img/cad_ex/wall01.png).
Lo spessore delle linee dei due muri (entrambi sezionati) deve essere **0.5 mm**

Stampa la tavola in pdf e nominala secondo la forma **NOMEMATRICOLA_03.pdf**.

---

### EX04

_Adesso facciamo posto nel muro per inserire l'infisso_

Partendo dal disegno del precedente esercizio rappresenta, sempre in proiezioni ortogonali, al centro del setto,
un foro rettangolare largo 100 cm ed alto 150 cm (vedi
[wall02.png](https://github.com/strumet/strumet.github.io/blob/master/img/cad_ex/wall02.png)).

Lo spessore delle linee proiettate deve essere **0.13 mm**, mentre quelle sezionate devono mantenere lo spessore di **0.5 mm**.

Stampa la tavola in pdf e nominala secondo la forma **NOMEMATRICOLA_04.pdf**.

---

### EX05

_Prepariamo la base per la posa dell'infisso_

Al setto disegnato in precedenza aggiungi due lastre di marmo che facciano da base per l'infisso e da protezione per il muro
(vedi [wall03.png](https://github.com/strumet/strumet.github.io/blob/master/img/cad_ex/wall03.png)).   
La lunghezza delle 2 lastre deve coincidere con la larghezza del foro (100 cm) mentre il loro spessore è di **3 cm**.
Le due lastre devono avere la stessa dimensione e devono sporgere di **5 cm** rispetto al setto.
Per evitare ponti termici, è necessario, infine, che siano distanziate tra di loro di **2.5 cm**.

Lo spessore di tutte le linee proiettate deve essere **0.13 mm**, mentre quelle sezionate devono essere di:

* **0.5** per il muro
* **0.35** per le lastre

Stampa la tavola in pdf e nominala secondo la forma **NOMEMATRICOLA_05.pdf**.

---

### EX06

_Cominciamo a disegnare l'infisso_

Per permettere un'adeguata posa dell'infisso è necessario disporre un controtelaio che faccia da interfaccia
tra il telaio e la muratura. Questo può essere rappresentato come un'asse di legno fissata alle pareti laterali
del foro ed a quella superiore (formando una "C").   
La sezione del controtelaio deve essere di di **10 x 2 cm** e deve essere situato al centro del foro
(vedi [wall04.png](https://github.com/strumet/strumet.github.io/blob/master/img/cad_ex/wall04.png)).

Mantieni gli stessi spessori delle linee dell'esercizio precedente aggiungendo lo spessore **0.25 mm**
per le linee sezionate del controtelaio.

Stampa la tavola in pdf e nominala secondo la forma **NOMEMATRICOLA_06.pdf**.

---

### EX07

_Si procede con la posa del telaio_

Continua il disegno aggiungendo il telaio fisso della finestra. La sezione del telaio è uguale sia per la pianta
che per la sezione ed è descritta nell'immagine
[wall05.png](https://github.com/strumet/strumet.github.io/blob/master/img/cad_ex/wall05.png).   
Ricorda di aggiungere solo il telaio: **non disegnare l'anta mobile e l'intonaco** (lo farai dopo).

Lo spessore delle linee sezionate del telaio deve essere di **0.35 mm**.

Stampa la tavola in pdf e nominala secondo la forma **NOMEMATRICOLA_07.pdf**.

---

### EX08

_Adesso è possibile disegnare l'anta_

Seguendo le indicazioni riportate nell'immagine
[wall05.png](https://github.com/strumet/strumet.github.io/blob/master/img/cad_ex/wall05.png)
aggiungi il disegno dell'anta, completa di doppia lastra di vetro, al disegno fin qui prodotto.

Utilizza i seguenti spessori per disegnare l'anta:

* **0.35 mm**: anta e ferma-vetro sezionati
* **0.25 mm**: lastre di vetro e distanziatore sezionati
* **0.13 mm**: tutte le linee proiettate

Stampa la tavola in pdf e nominala secondo la forma **NOMEMATRICOLA_08.pdf**.

---

### EX09

_Concludiamo col coprifilo_

Per nascondere il controtelaio e proteggere l'attacco tra infisso e muratura è necessario aggiungere un coprifilo.   
Per farlo aggiungi attorno al perimetro del muro uno strato di intonaco di spessore **2.5 cm**:
in questo modo il giunto sarà pulito ed il controtelaio non sarà visibile.

Usa lo spessore **0.25 mm** per le linee che rappresentano l'intonaco sezionato e lo spessore **0.13 mm**
per quelle relative all'intonaco proiettato.

Stampa la tavola in pdf e nominala secondo la forma **NOMEMATRICOLA_09.pdf**.

### EX10

_Ultimo tocco: quote, retini e testi_

Per concludere il disegno aggiungi a piacere quote, retini (hatch) ed annotazioni alla tavola.   
Aggiungi anche un semplice cartiglio indicante le informazioni principali della tavola:

* oggetto della tavola
* scala del disegno
* numero di matricola
* eventuali altre informazioni utili (data, nome del corso, etc...)

Stampa la tavola in pdf e nominala secondo la forma **NOMEMATRICOLA_10.pdf**.
