# Anleitung: Website selbst pflegen

Alles geht direkt im Browser auf **github.com**. Du musst nichts installieren.

Nach jedem Speichern baut GitHub die Seite automatisch neu. Nach **1–2 Minuten** ist die Änderung auf
www.demolition-dirt-crew.de zu sehen. Falls nicht: Seite im Browser neu laden (Strg + F5).

---

## So änderst du eine Datei

1. Öffne das Repo auf github.com.
2. Klicke dich zur Datei durch, z. B. `_data` → `events.yml`.
3. Klicke oben rechts auf den **Stift** (✏️ „Edit this file“).
4. Ändere den Text.
5. Klicke oben rechts auf **„Commit changes…“** und dann noch einmal auf **„Commit changes“**.

Fertig.

### Die wichtigste Regel

In den `.yml`-Dateien sind die **Leerzeichen am Zeilenanfang** wichtig.
Am einfachsten: eine bestehende Zeile kopieren und nur den Text **hinter** dem Doppelpunkt ändern.

```yaml
  datum: 30.04.2026      ← nur "30.04.2026" ändern, alles davor so lassen
```

Text, in dem ein Doppelpunkt `:` oder ein `#` vorkommt, in Anführungszeichen setzen:

```yaml
  titel: "Techno: Die Nacht"
```

---

## Nächstes Event ändern

Datei: **`_data/events.yml`**

```yaml
- titel: The Playground
  untertitel: Hexenjagd Edition
  datum: 30.04.2026
  zeit: 22.00 - OPEN END
  ort: Secret Location
  lineup:
    - HUMAN LIKE MACHINES
    - DECKSTER
```

- **Act hinzufügen:** eine Zeile `    - NAME` dazuschreiben (gleich weit eingerückt wie die anderen).
- **Kein Untertitel?** Die Zeile `untertitel:` einfach löschen.
- **Kein Event geplant?** Alles unter den Kommentaren (Zeilen mit `#`) löschen und nur `[]` hinschreiben.
  Auf der Seite steht dann „Aktuell sind keine Events geplant“.

---

## Vergangenes Event in die Timeline

Datei: **`_data/timeline.yml`**

Erst den Flyer hochladen (siehe unten), dann **ganz oben** einen neuen Block einfügen:

```yaml
- datum: 04/2026
  titel: The Playground
  flyer: the-playground-hexenjagd-04-2026.jpg
```

Bei `flyer` muss der Dateiname **genau** so stehen wie im Ordner (auch Groß-/Kleinschreibung).

---

## Flyer hochladen (Galerie)

1. Gehe in den Ordner **`assets/img/flyer`**.
2. Klicke auf **„Add file“** → **„Upload files“**.
3. Bild reinziehen, unten auf **„Commit changes“** klicken.

Das Bild erscheint **automatisch** in der Galerie. Sonst musst du nichts eintragen.

### Dateiname = Titel und Datum in der Galerie

So benennen: **kleinbuchstaben-mit-bindestrichen-MONAT-JAHR.jpg**

| Dateiname | In der Galerie |
|---|---|
| `the-playground-underground-02-2026.jpg` | THE PLAYGROUND UNDERGROUND – 02/2026 |
| `para-neujahr-01-2016.jpg` | PARA NEUJAHR – 01/2016 |
| `cooking-club-ddc.jpg` | COOKING CLUB DDC (ohne Datum, steht ganz hinten) |

- Keine Leerzeichen, keine Umlaute (ä → ae, ö → oe, ü → ue, ß → ss).
- Die Galerie sortiert nach Datum, der neueste Flyer steht vorne.

### Bilder klein halten

Handyfotos und Original-Flyer sind oft 5–10 MB groß, dann lädt die Seite langsam.
Vor dem Hochladen am besten verkleinern, z. B. auf **https://squoosh.app**:
Bild reinziehen, rechts „MozJPEG“ wählen, Breite auf etwa **1500 px** stellen, herunterladen.
Ziel: **unter 1 MB** pro Bild.

### Flyer löschen

Datei im Ordner anklicken → oben rechts **„…“** → **„Delete file“** → „Commit changes“.
Achtung: Wenn der Flyer in der Timeline benutzt wird, dort auch den Eintrag entfernen.

---

## Bio / Crew ändern

Datei: **`_data/crew.yml`**

```yaml
- name: DECKSTER
  bild: fliege_white.png
  genre: Hard Tekk, Schranz
  about: |
    Hier steht der Text über dich.
    Er darf auch über mehrere Zeilen gehen.
  links:
    - name: Soundcloud
      url: https://soundcloud.com/deckster-live
```

- **Eigenes Foto:** Bild in den Ordner **`assets/img/crew`** hochladen und bei `bild:` den Dateinamen eintragen.
- **Text bei `about`:** Das `|` hinter `about:` heißt „der Text beginnt in der nächsten Zeile und darf
  mehrere Zeilen lang sein“. Das `|` also stehen lassen. Jede Textzeile darunter muss gleich weit
  eingerückt sein wie die erste. Zeilenumbrüche erscheinen genau so auf der Website.

---

## Kontakt-Links ändern

Datei: **`_data/kontakt.yml`**. Als `icon` gehen: `music`, `instagram`, `facebook`.

---

## Impressum & Datenschutz

Datei: **`_data/impressum.yml`**. Name, Anschrift und E-Mail stehen dort **einmal** und erscheinen
automatisch im Impressum und in der Datenschutzerklärung. Bei Umzug oder neuer E-Mail nur dort ändern.

---

## Etwas ist kaputt?

Wenn nach dem Speichern nichts passiert oder die Seite komisch aussieht:

1. Im Repo oben auf den Reiter **„Actions“** klicken.
2. Ein **rotes ✗** heißt: Die Seite konnte nicht gebaut werden. Fast immer ist es ein Tippfehler in einer
   `.yml`-Datei (falsche Einrückung, fehlender Doppelpunkt, `:` im Text ohne Anführungszeichen).
3. Die Live-Seite bleibt in dem Fall einfach auf dem alten Stand. **Es geht nichts verloren.**
4. Letzte Änderung rückgängig machen: Datei öffnen → **„History“** → alte Version ansehen und den Text
   zurückkopieren. Oder einfach Bescheid geben.

---

## Was du nicht anfassen musst

Die Ordner `_layouts`, `_includes`, `_sass`, `assets/css`, `assets/js` und die Datei `_config.yml`
sind der technische Teil (Aussehen und Funktionen). Die braucht man für Inhalte nie.
