# Accessibility-Audit

Stand: 18. Juli 2026  
Ziel: WCAG 2.2 AA im Rahmen einer statischen Vorschau

## Ergebnis

Lighthouse Accessibility: **100/100**

Die manuelle Browserprüfung ergab keine blockierenden Tastatur-, Fokus- oder Strukturprobleme.

## Struktur und Semantik

- Seitensprache `de`
- Skip-Link vor wiederkehrender Navigation
- Semantische Bereiche für Header, Navigation, Main und Footer
- Genau eine H1 auf der Startseite
- Geordnete H1–H3-Hierarchie
- Listen für Leistungen, Projekte, Prozess und Materialgruppen
- Native `details`/`summary`-Elemente für FAQ
- Native `<dialog>`-Projektansicht
- Rechtliche Seiten mit eigenen Titeln und einer H1

## Tastatur und Fokus

- Sichtbarer Fokusindikator mit mindestens 3 px Kontur
- Keine positiven `tabindex`-Werte
- Alle Aktionen verwenden native Links oder Buttons
- Mobiles Menü kommuniziert den Zustand mit `aria-expanded`
- Dialog besitzt native Fokusbegrenzung und Escape-Verhalten
- Pfeiltasten wechseln in der Projektansicht vor und zurück
- Nach fehlerhaftem Formular-Submit erhält das erste ungültige Feld Fokus

## Formulare

- Explizite Labels für alle Eingaben
- Passende Autocomplete-Werte für Name, Telefon und E-Mail
- E-Mail- und Telefon-Eingabetypen
- Pflichtfelder mit nativen Constraints
- Fehler werden nach Blur beziehungsweise Submit gezeigt, nicht während der ersten Eingabe
- Fehlertexte werden per `aria-describedby` verbunden
- Allgemeiner Formularstatus nutzt `aria-live="polite"`
- Keine Datenspeicherung oder versteckte Übertragung

## Bilder und Medien

- Alle inhaltlichen Bilder besitzen konkrete Alternativtexte
- Dekorative SVGs und Pigmentformen sind aus dem Accessibility Tree entfernt
- Keine automatisch startenden Videos oder Audios
- Projektbilder sind als benannte Buttons erreichbar
- Dialogbild erhält beim Projektwechsel den passenden Alternativtext

## Farbe und Typografie

- Primärtext auf Kreideweiß und Weiß auf Dunkelblau erfüllen AA
- Interaktive Grenzen und Fokuszustände sind klar sichtbar
- Zustände werden nie ausschließlich über Farbe kommuniziert
- Relative Schriftgrößen und fluide Typografie
- Keine Blocksatz-Absätze
- Textzeilen sind auf gut lesbare Breiten begrenzt
- `prefers-contrast: more` verstärkt Linien und Sekundärtexte

## Bewegung

- `prefers-reduced-motion: reduce` deaktiviert Lade-, Scroll-, Marquee-, Orbit- und Hoveranimationen praktisch vollständig
- Scroll-getriebene Animationen werden nur bei vollständiger Feature-Unterstützung aktiviert
- Ohne CSS View Timelines bleibt das Projektarchiv vollständig nutzbar
- JavaScript-Reveals haben einen Fallback für fehlenden `IntersectionObserver`

## Responsive Bedienung

- Mobile Touch-Ziele ungefähr 48 px oder größer
- Fixierte mobile CTA mit zwei eindeutig benannten Aktionen
- Kein horizontaler Seitenüberlauf bei 375 px
- Inhalte bleiben bei 200 % Zoom strukturell einspaltig erreichbar

## Manuell noch sinnvoll

- Test mit NVDA und VoiceOver durch reale Nutzende
- Prüfung der Textvergrößerung in individuellen Betriebssystemeinstellungen
- Rechtliche Prüfung der Datenschutzerklärung
