# React Aufgaben

Aufgaben zum Lernen/Üben von React

## Einrichtung

Bevor die React-App gestartet werden kann, müssen die in der package.json angegebenen packages installiert werden. Das geht mit folgende 
Befehl:

### `npm install`

Der Befehl muss in dem Ordner/Package der React-App ausgeführt werden. 
("LaufwerkBuchstabe:/.../ProjektName", Wenn das Terminal in einem IDE benutzt wird ist es in der Regel schon im richtigen Pfad)

Die App kann gestartet werden mit:

### `npm start`

Das startet die React-App im Entwicklungsmodus.
Die App ist nun unter [http://localhost:3000](http://localhost:3000) verfügbar.
Bei Änderungen an der App wird die Seite neu geladen.

## Aufgaben

Für die Aufgaben sind unter src/ Ordner eingerichtet, in denen bereits die nötigen Dateien drin sind.

### Aufgabe 1

Für die erste Aufgabe sollst du eine Komponente erstellen, die einen Namen, ein Alter und eine Adresse als Props annimmt und wieder 
ausgibt. Es ist dabei egal, ob es eine Klassen- oder Funktionskomponente ist.

Erstelle die Komponente im firstTask-Ordner und pflege die erstellte Komponente dann in die FirstTask-Komponente ein. <br>
(Falls das IDE das nicht automatisch macht, muss die Komponente importiert werden) <br>
Wichtig: Die Komponente muss dafür exportiert werden. Schreib dafür in die JS-Datei:

### `export KLASSEN-/FUNKTIONSNAME`

Wenn die App gestartet ist, befindet sich die Komponente dann unter [http://localhost:3000/task1](http://localhost:3000/task1) 
(Erreichbar über Link oder Button im Header)

Falls Styling hinzugefügt werden soll, kann eine Styling-Datei im Ordner hinzugefügt werden. Diese muss dann importiert werden durch:
### `import 'DATEIPFAD'`

Im Unterordner examples sind Lösungsbeispiele für eine Funktions- und Klassenkomponente enthalten.

### Aufgabe 2

Erstelle eine Komponente im task2-Ordner, die
* (1) zwei States enthält, die von Input-Feldern verändert werden können.
* (2) zählt durch Effekt wie oft beide States geändert wurden (zusammen gezählt)

Es ist wieder egal, ob Klassen- oder Funktionskomponente.

Die Komponente soll in die SecondTask-Komponente gegeben werden. (/task2/SecondTask.js)

Die Komponente ist dann erreichbar unter [http://localhost:3000/task2](http://localhost:3000/task2)
(Erreichbar über Link oder Button im Header)

**Bitte die Ergebnisse nicht committen/pushen**