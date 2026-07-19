# Rebuild-Plan: RaumDesign Rudek

## Ziel

Eigenständiges, conversion-orientiertes Redesign für RaumDesign Rudek in Düsseldorf. Das bestehende Projekt dient ausschließlich als verifizierte Quelle für Inhalte, Kontaktdaten und echte Projektbilder. Es wird nicht überschrieben.

## Quellenlage

- Verifizierte lokale Quelle: `../raumdesign-rudek.de`
- 16 echte Projektbilder übernommen; keine Stockbilder
- Kontaktdaten: Daniel Rudek, Kirchstraße 37, 40227 Düsseldorf, 0162 9353172, raumdesign-rudek@t-online.de
- Öffnungszeiten: Montag bis Donnerstag 8–18 Uhr, Freitag 8–14 Uhr
- Leistungen: kreative Wandgestaltung, Kalk- und Marmorputze, Lasuren, Spachteltechniken, Malerarbeiten innen und außen, Sanierung, Komplett- und Urlaubsservice
- Es gibt kein sicher verifiziertes Vorher/Nachher-Bildpaar. Entsprechend wird keines behauptet.
- Es gibt keine belastbaren Kundenbewertungen, Auszeichnungen oder Kennzahlen. Entsprechend werden keine erfunden.

## Zielgruppen

1. Private Eigentümerinnen und Eigentümer mit Anspruch an Material, Gestaltung und saubere Ausführung
2. Menschen vor Renovierung, Umbau oder Neueinrichtung im Raum Düsseldorf
3. Architekturbüros, Praxen, Büros und Gastronomie mit terminlich sensiblen Projekten

## Hauptziele

1. Gestaltungskompetenz anhand echter Arbeiten beweisen
2. Leistungsumfang schnell verständlich machen
3. Persönliche, inhabergeführte Beratung als Vertrauenssignal stärken
4. Telefon- und E-Mail-Anfragen ohne Tracking oder Backend ermöglichen
5. Lokale Relevanz für Düsseldorf semantisch und in den Metadaten abbilden

## Reflex-Check vor der Farbwahl

Naheliegender Kategorie-Reflex wäre erneut ein dunkles, luxuriöses Editorial-Design mit Kupfer, Gold und warmem Off-White. Genau diese Kombination prägt bereits die Quelle und ist für Handwerks- sowie Interior-Websites stark überrepräsentiert. Sie wurde deshalb nicht automatisch fortgeschrieben.

## Farbwelten

Bewertung: Markenevidenz 30 %, Bildverträglichkeit 25 %, Differenzierung 20 %, Lesbarkeit 15 %, Conversion 10 %.

| Farbwelt | Beschreibung | Evidenz | Punkte |
| --- | --- | --- | ---: |
| **A — Kalkatelier** | Kalkgrau, Graphit, gedämpfter Salbei, tiefes Aubergine und heller Putzton | Helle Putzflächen, Naturstein und das violette Farbkonzept realer Projekte; klarer Kontrast zur bestehenden Kupferwelt ohne digitale Signalfarben | **91/100** |
| B — Lapislazuli Nacht | Tiefblau, Nebelgrau, Eisblau, Weiß | Verträgt die dunklen Projektbilder gut, bleibt aber wieder überwiegend dunkel | 79/100 |
| C — Rosé Atelier | Puderrosa, Pflaume, Kalkweiß, Schwarz | Greift violette Räume auf, wirkt aber stärker mode- als materialgetrieben | 73/100 |

Farbwelt A gewinnt mit 12 Punkten Abstand und damit klar außerhalb der 10-Punkte-Nähe, die eine Nutzerentscheidung erfordern würde.

## Seitenarchitektur

1. Fixierter, kompakter Header mit klaren Sprungzielen
2. Hero mit Positionierung, echtem Projektbild und zwei CTAs
3. Bewegtes Materialband
4. Haltung und Vertrauenssignale
5. Leistungsübersicht
6. Horizontales Archiv echter Projekte mit zugänglicher Dialogansicht
7. Material-Story mit mineralischer Nahaufnahme
8. Vierstufiger Ablauf
9. Persönliche Arbeitsweise / Inhaberführung
10. FAQ
11. Kontakt mit Mailto-Formular, Telefonnummer, Adresse und Zeiten
12. Rechtliche Seiten und eigene 404-Seite

## Interaktionen und Bewegung

- Hero-Entrance mit gestaffelter Bewegung
- Kontinuierliches Materialband
- Scroll-Reveals per `IntersectionObserver`
- Progressive Scroll-Animation der Projektkarten mit CSS View Timelines und sauberem Fallback
- Bildzoom auf Hover
- Animierte organische Materialmarke
- Native, tastaturbedienbare Projektansicht mit `<dialog>`
- Vollständige Reduktion über `prefers-reduced-motion`

## SEO

- Primär: Malerbetrieb Düsseldorf, Wandgestaltung Düsseldorf
- Sekundär: Kalkputz Düsseldorf, Marmorputz Düsseldorf, Spachteltechnik Düsseldorf, Farbkonzept Düsseldorf
- Semantische Überschriftenstruktur und lokale Kontaktangaben
- `HousePainter`-JSON-LD mit Adresse, Telefon und Öffnungszeiten
- Canonical, Open Graph, Sitemap, Robots

## Technischer Ansatz

- Statisches HTML, CSS und Vanilla JavaScript
- Keine Frameworks, keine Laufzeitabhängigkeiten, kein Tracking
- Lokale Fonts und Bilder
- Progressive Enhancement statt Polyfills
- Deployment auf Vercel und Versionierung in einem neuen GitHub-Repository

## Risiken / Vor Veröffentlichung

- Impressums- und Datenschutzangaben rechtlich prüfen
- Canonical- und Sitemap-Domain bei einer späteren eigenen Domain anpassen
- Bildrechte durch den Betreiber final bestätigen
- Keine der gezeigten Arbeiten als bestimmtes Kundenprojekt benennen, solange dies nicht belegt ist
