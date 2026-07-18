# QA-Bericht

Stand: 18. Juli 2026

## Ergebnis

Die statische Website ist funktional, responsiv und für das Deployment freigegeben. Es wurden keine blockierenden Fehler gefunden.

## Automatische Prüfungen

| Prüfung | Ergebnis |
| --- | --- |
| `html-validate` für `index.html`, `impressum.html`, `datenschutz.html`, `404.html` | Bestanden, 0 Fehler |
| `node --check assets/js/main.js` | Bestanden |
| Lokale `src`- und `href`-Referenzen | Vollständig auflösbar |
| HTTP-Abruf lokal | Startseite, Impressum, Datenschutz, 404, Robots und Sitemap liefern HTTP 200 |
| Defekte Bilder im Browser | 0 |
| Horizontales Seitenoverflow | 0 bei 375, 768 und 1440 px |
| Lokale Fonts geladen | Bricolage und Manrope bestätigt |

## Lighthouse

Simulierter mobiler Lauf gegen den lokalen, unkomprimierten Python-Server:

| Kategorie | Score |
| --- | ---: |
| Performance | 74 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

Weitere Werte:

- First Contentful Paint: 1,5 s
- Largest Contentful Paint: 4,4 s
- Cumulative Layout Shift: 0
- Übertragungsgröße im unkomprimierten lokalen Lauf: 621 KiB

Nach diesem Lauf wurde das initial versteckte Dialogbild zusätzlich auf Lazy Loading umgestellt. Vercel liefert Assets komprimiert aus; die lokale Python-Messung ist deshalb konservativ.

Hinweis: Lighthouse erzeugte den vollständigen Bericht, konnte aber sein temporäres Chrome-Verzeichnis unter Windows nicht selbst löschen (`EPERM`). Die erzeugten Temp-Dateien wurden anschließend kontrolliert aus dem Projekt entfernt.

## Browser- und Layoutprüfung

Geprüfte Viewports:

- Desktop: 1440 × 900
- Tablet: 768 × 1024
- Mobile: 375 × 812

Gespeicherte Referenzen:

- `screenshots/desktop-hero.png`
- `screenshots/desktop-services.png`
- `screenshots/desktop-work.png`
- `screenshots/desktop-dialog.png`
- `screenshots/tablet-hero.png`
- `screenshots/mobile-hero.png`
- `screenshots/mobile-menu.png`
- `screenshots/mobile-work.png`
- `screenshots/mobile-contact.png`

## Interaktive Prüfung

| Funktion | Ergebnis |
| --- | --- |
| Desktop-Navigation und Sprunglinks | Bestanden |
| Mobiles Menü öffnen/schließen | Bestanden; `aria-expanded` synchron |
| Projekt öffnen/schließen | Bestanden |
| Projektwechsel per Pfeiltaste | Bestanden; Zähler wechselt von 01/06 auf 02/06 |
| FAQ öffnen | Bestanden |
| Kontaktformular leer absenden | Bestanden; drei verständliche Fehler, Fokus auf Name |
| Mailto-Inhalt | Name, Telefon, E-Mail und Nachricht werden URL-kodiert vorbereitet |
| Jahreszahl | Dynamisch gesetzt |
| Reduced Motion | Alle wesentlichen Animationen deaktiviert |

## Content- und Faktenprüfung

- Nur vorhandene Projektbilder verwendet
- Keine erfundenen Bewertungen, Kennzahlen, Auszeichnungen oder Kundenprojekte
- Kein falscher Vorher/Nachher-Vergleich
- Telefon, E-Mail, Adresse und Öffnungszeiten gegen die lokale Quelle geprüft
- Rechtliche Angaben sind als übernommene, vor offizieller Nutzung zu prüfende Angaben gekennzeichnet

## Bekannte Hinweise

1. Impressum, Datenschutz und Bildrechte müssen vom Betreiber rechtlich bestätigt werden.
2. Bei Verwendung einer eigenen Domain sind Canonical, Open-Graph-URL, JSON-LD, Sitemap und Robots auf diese Domain umzustellen.
3. Das Mailto-Formular benötigt ein lokal konfiguriertes E-Mail-Programm. Telefon und direkte E-Mail-Adresse bleiben als Fallback sichtbar.
