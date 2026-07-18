# Designsystem: Mineral Index

## 1. Überblick

„Mineral Index“ übersetzt die Arbeit eines gestaltungsorientierten Malerbetriebs in eine helle, grafische Materialwelt. Die Seite wirkt wie eine Mischung aus Werkstattarchiv, Pigmentkarte und zeitgenössischem Designkatalog. Sie vermeidet bewusst die zuvor dominante Kombination aus Near-Black, Kupfer und Editorial-Serif.

## 2. Gestaltungsprinzipien

1. **Material vor Dekoration:** Echte Oberflächen und Räume sind der Beweis.
2. **Große Gesten, ruhige Bedienung:** Typografie und Bildmaßstab dürfen mutig sein; Navigation und Interaktionen bleiben eindeutig.
3. **Unperfekte Präzision:** Organische Pigmentformen treffen auf ein strenges Raster.
4. **Kontrast statt Luxusklischee:** Helles Kreidepapier und Tintenblau erzeugen Eigenständigkeit ohne Gold- oder Kupfercodes.
5. **Persönliche Conversion:** Kontaktwege sind direkt, konkret und ohne künstlichen Druck.

## 3. Farbe

| Token | Wert | Verwendung |
| --- | --- | --- |
| `--paper` | `#F1F1E8` | Hauptfläche, mineralische Grundstimmung |
| `--paper-soft` | `#FAFAF4` | Sekundäre Flächen |
| `--ink` | `#102A43` | Primärtext, Linien, Footer |
| `--ink-soft` | `#385067` | Sekundärtext |
| `--blue` | `#2347C5` | Primärakzent, Links, wichtige Begriffe |
| `--blue-deep` | `#162B73` | Immersive Materialsektion |
| `--mint` | `#CDDBD2` | Ruhige Materialfläche |
| `--acid` | `#D7FF42` | Pigmentmarken und Conversion-Akzent |
| `--white` | `#FFFFFF` | Text auf dunklen Flächen |

Chartreuse wird sparsam eingesetzt: als Materialspur, nicht als flächiger Markenfarbersatz.

## 4. Typografie

- Display: **Bricolage Grotesque Variable**, 200–800, lokal eingebunden
- Body: **Manrope**, 400 und 600, lokal eingebunden
- Display-Zeilen: sehr enge Laufweite (`-0.07em`) und kompakte Zeilenhöhe
- Fließtext: 1rem bis 1.2rem, Zeilenlänge maximal etwa 70–80 Zeichen
- Kleine Metadaten: 0.65–0.75rem, Versalien und erhöhte Laufweite
- Keine Serifenschrift; dadurch klare Abgrenzung zum Vorgänger

## 5. Raster und Abstand

- Maximalbreite: 88rem
- Außenabstand: `clamp(1.25rem, 3.8vw, 4.5rem)`
- Sektionsabstand: `clamp(5.5rem, 11vw, 10rem)`
- Desktop-Grundraster: 2 asymmetrische Spalten (ungefähr 40/60 oder 60/40)
- Projektarchiv: horizontales Grid mit Scroll Snap
- Mobile: konsequent einspaltig, 1.25rem Außenabstand
- Abstände folgen einer 4/8-basierten Skala, werden aber für große Editorial-Flächen fluid interpoliert

## 6. Komponenten

### Header

Fixiert, anfangs transparent, beim Scrollen kreidefarben mit Blur. Desktop-Navigation wird unter 1100 px durch ein natives Button-Menü ersetzt.

### Buttons

Eckige, hochkontrastige Flächen ohne generische Pill-Form. Primär in Tintenblau, Kontaktbutton in Dunkelblau. Hover bewegt die Fläche nur leicht nach oben.

### Projektarchiv

Native horizontale Scrollfläche mit Scroll Snap. Jede Karte ist ein Button und öffnet einen nativen Dialog. Alle Bilder haben echte, beschreibende Alternativtexte.

### Leistungszeilen

Große, gerasterte Zeilen mit Nummer, Titel, Kurztext und Pfeil. Die Chartreuse-Fläche läuft auf Hover hinter den Inhalt.

### FAQ

Native `details`/`summary`-Elemente mit klarer Plus/Minus-Anzeige. Keine Überschriften im `summary`.

### Kontaktformular

Explizite Labels, Autocomplete, native Constraints, Validierung erst bei Blur beziehungsweise Submit und Statusmeldung per `aria-live`. Der Versand wird als vorbefüllte E-Mail vorbereitet; es gibt keine Datenspeicherung.

## 7. Bewegung

- Hero: gestaffeltes Einblenden beim Laden
- Materialband: langsame kontinuierliche Horizontalbewegung
- Scroll-Reveals: Opazität plus Y-Transformation
- Projektkarten: CSS View Timeline nur bei vollständiger Feature-Unterstützung
- Material-Orbit: organische, langsame Rotation
- Hover: ausschließlich `transform`, `opacity`, Farbe und Filter
- `prefers-reduced-motion: reduce` deaktiviert alle wesentlichen Bewegungen

## 8. Accessibility

- Semantische Landmarks, genau eine H1 und geordnete Überschriftenhierarchie
- Sichtbarer Skip-Link und programmatisch fokussierbares Hauptziel
- Kontrast mindestens WCAG AA für Text und Bedienelemente
- Sichtbare `:focus-visible`-Konturen
- Touch-Ziele mindestens ungefähr 48 px
- Native Buttons, Links, Details und Dialog statt simulierter Widgets
- Mobiles Menü mit `aria-expanded` und `aria-controls`
- Dialog bleibt per Tastatur bedienbar; Pfeiltasten wechseln Projekte
- Formulareingaben mit Label, Autocomplete, Fehlertext und Live-Status
- Keine Information ausschließlich über Farbe

## 9. Responsive und technische Regeln

- Breakpoints bei 1100 px und 780 px
- Desktop zuerst visuell priorisiert, mobile Bedienbarkeit vollständig erhalten
- Bilder erhalten feste intrinsische Maße, LCP-Bild wird vorab geladen
- Unterhalb des Folds: `loading="lazy"`
- Keine externen Fonts, Tracker, Karten oder Script-CDNs
- Scroll-Effekte sind Progressive Enhancement; der Inhalt bleibt ohne JavaScript und ohne neue CSS-APIs lesbar
- Sicherheitsheader werden über `vercel.json` gesetzt
