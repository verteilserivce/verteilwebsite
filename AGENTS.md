# Verteilservice Plus Website

Dieses Projekt ist die statische Marketing-Website fuer **Verteilservice Plus** – ein Dienstleister fuer professionelle Flyerverteilung, Prospektverteilung und Streetpromotion in ganz Deutschland. Inhaber: Douaa Bendali.

## Technologie-Stack

- **[Astro](https://astro.build/)** `^6.3.1` – Static Site Generator (Output-Modus: `static`)
- **[Tailwind CSS](https://tailwindcss.com/)** `^3.4.19` – Utility-First CSS-Framework
- **PostCSS & Autoprefixer** – CSS-Verarbeitung
- **TypeScript** – Strikte Typisierung (`astro/tsconfigs/strict`)
- **Node.js** `>=22.12.0`

## Projektstruktur

```text
├── public/                    # Statische Assets
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── robots.txt
│   ├── site.webmanifest       # PWA-Manifest (Theme-Color: #7c919e)
│   └── sitemap.xml
├── src/
│   ├── assets/
│   │   ├── fonts/             # (derzeit leer)
│   │   ├── images/            # Hero-Bilder, Galerie-Fotos, Ueber-uns-Bilder
│   │   │   ├── hero1.jpeg, hero2.jpg
│   │   │   ├── newhero1, newhero2.jpeg, newhero3.jpeg
│   │   │   ├── ueberuns.jpeg, ueberuns2.jpeg, warumwir.jpeg
│   │   │   └── ~30 WhatsApp-generierte JPEGs (Firmenfahrzeuge, Team, Aktionen)
│   │   └── partnerlogos/      # 8 JPG-Logos von Partnerunternehmen
│   ├── components/
│   │   ├── Header.astro       # Fixierte Navigation mit Mobile-Menue
│   │   ├── Footer.astro       # Footer mit Galerie-Marquee, Navigation, Kontakt
│   │   ├── icons/             # 16 wiederverwendbare SVG-Icon-Komponenten
│   │   │   ├── ArrowRight.astro
│   │   │   ├── Bullseye.astro
│   │   │   ├── Check.astro
│   │   │   ├── ChevronDown.astro
│   │   │   ├── ChevronLeft.astro
│   │   │   ├── ChevronRight.astro
│   │   │   ├── Cookie.astro
│   │   │   ├── Envelope.astro
│   │   │   ├── MapMarker.astro
│   │   │   ├── Menu.astro
│   │   │   ├── Phone.astro
│   │   │   ├── ShieldCheck.astro
│   │   │   ├── WhatsApp.astro
│   │   │   └── X.astro
│   │   ├── sections/          # Seitenabschnitte
│   │   │   ├── About.astro
│   │   │   ├── FAQ.astro      # Akkordeon mit 10 Fragen
│   │   │   ├── Gallery.astro
│   │   │   ├── Hero.astro     # Hintergrund-Slider mit Auto-Cycle (5s)
│   │   │   ├── PartnerLogos.astro
│   │   │   ├── Pricing.astro  # 4 Pakete nach Auflagenhoehe (Starter, Premium, Business, Mega Deal)
│   │   │   ├── Process.astro  # 4-Schritte-Ablauf (Planung, Verteilung, Live-Kontrolle, Qualitaetspruefung)
│   │   │   ├── ServicePackages.astro  # 4 Service-Pakete (Kompakt, Plus, Premium, Allrounder)
│   │   │   ├── Services.astro # Horizontales Carousel mit 9 Leistungen
│   │   │   ├── TrackingQuality.astro
│   │   │   └── TrustBar.astro
│   │   └── ui/
│   │       └── CookieBanner.astro
│   ├── layouts/
│   │   └── Layout.astro       # Basis-Layout mit Meta-Tags, Header, Footer, JSON-LD
│   ├── pages/                 # Dateibasiertes Routing
│   │   ├── 404.astro
│   │   ├── index.astro        # Startseite (komponiert aus 11 Sections)
│   │   ├── leistungen.astro   # Detailseite aller 9 Leistungen
│   │   ├── ueber-uns.astro    # Ueber-uns mit mehreren visuellen Abschnitten
│   │   ├── kontakt.astro      # 3-Step-Kontaktformular (Web3Forms)
│   │   ├── impressum.astro
│   │   └── datenschutz.astro
│   ├── styles/
│   │   └── global.css         # Tailwind-Direktiven + CSS-Custom-Properties
│   └── env.d.ts               # TypeScript-Deklarationen fuer ImportMetaEnv
├── astro.config.mjs           # Astro-Konfiguration (site, output: static, port: 3003)
├── tailwind.config.mjs        # Tailwind-Theme-Erweiterungen (Farben, Fonts, Animationen)
├── tailwind.config.ts         # Leere TypScript-Config (nicht aktiv genutzt)
├── postcss.config.js          # PostCSS mit Tailwind + Autoprefixer
├── tsconfig.json              # Striktes Astro-TypeScript
├── netlify.toml               # Netlify-Deployment + Security-Headers
├── .env.example               # Beispiel-Umgebungsvariablen
└── .env                       # Lokale Umgebungsvariablen (nicht committen)
```

## Build- und Entwicklungsbefehle

Alle Befehle werden im Projektroot ausgefuehrt:

| Befehl            | Aktion                                            |
|:------------------|:--------------------------------------------------|
| `npm install`     | Abhaengigkeiten installieren                       |
| `npm run dev`     | Entwicklungsserver starten (Port `3003`)          |
| `npm run build`   | Statische Produktions-Build in `./dist/` erstellen|
| `npm run preview` | Build lokal vor dem Deployment testen             |
| `npm run astro`   | Astro-CLI-Befehle ausfuehren                       |

> **Hinweis:** Es gibt keinen `test`-Script in `package.json`. Das Projekt hat kein Test-Framework konfiguriert.

## Routing

Astro verwendet dateibasiertes Routing. Jede `.astro`-Datei in `src/pages/` wird zu einer Route:

| Route           | Quelldatei                          |
|:----------------|:------------------------------------|
| `/`             | `src/pages/index.astro`             |
| `/leistungen`   | `src/pages/leistungen.astro`        |
| `/ueber-uns`    | `src/pages/ueber-uns.astro`         |
| `/kontakt`      | `src/pages/kontakt.astro`           |
| `/impressum`    | `src/pages/impressum.astro`         |
| `/datenschutz`  | `src/pages/datenschutz.astro`       |
| (404)           | `src/pages/404.astro`               |

## Code-Stil und Konventionen

- **Komponenten**: Astro-Dateien (`.astro`) mit Frontmatter-Script-Block (`---`) fuer Server-seitigen TypeScript-Code.
- **Styling**: Primaer Tailwind-Utility-Klassen. CSS-Custom-Properties fuer Brand-Farben und Fonts in `src/styles/global.css`.
- **Tailwind-Theme-Erweiterungen** (in `tailwind.config.mjs`):
  - **Farben**: `primary` (#7c919e), `primary-dark` (#5d727f), `background`, `background-alt`, `surface`, `text-primary`, `text-secondary`, `text-muted`, `border`
  - **Animationen**: `marquee`, `marquee-reverse`, `fade-in`, `slide-up`
  - **Fonts**: `sans` (Inter), `serif` (Merriweather)
  - **Border-Radii**: `4xl` (2rem), `5xl` (3rem)
- **Icons**: Inline-SVGs als eigenstaendige Astro-Komponenten unter `src/components/icons/`. Sie akzeptieren eine optionale `class`-Prop mit Standardwert `w-5 h-5` und verwenden `aria-hidden="true"`.
- **Client-seitige Scripts**: Werden direkt in `<script>`-Tags innerhalb der Astro-Komponenten geschrieben und als IIFE ausgefuehrt. Typ-Annotationen (`as HTMLFormElement | null`) werden verwendet, um TypeScript-Fehler zu vermeiden.
- **Barrierefreiheit**: `aria-label`, `aria-current`, `aria-expanded`, `aria-controls`, `aria-selected`, `aria-live`, `aria-invalid`, `role="dialog"`, `role="tablist"`, `role="tab"`, `role="status"`, `role="alert"`, Skip-Link zum Hauptinhalt, Fokus-Trap im Mobile-Menue und `focus-visible`-Styles werden konsequent eingesetzt.
- **Sprache**: Die gesamte Website-Inhalt, UI-Texte und die meisten Code-Kommentare sind auf **Deutsch**.
- **Responsive Design**: Mobile-First mit Tailwind-Breakpoints (`sm:`, `md:`, `lg:`).
- **Touch-Targets**: Interaktive Elemente verwenden konsistent `min-h-[44px]` und `min-w-[44px]` fuer ausreichende Klickflaechen.
- **Reduced Motion**: `prefers-reduced-motion`-Media-Query wird in `global.css` und einzelnen Komponenten beruecksichtigt.
- **Externe Links**: Verwenden konsequent `rel="noopener noreferrer"`.
- **Noscript-Fallbacks**: FAQ-Akkordeon und Mobile-Menue haben `<noscript>`-Fallbacks fuer den No-JS-Zustand.

## Umgebungsvariablen

Kopiere `.env.example` zu `.env` und fuelle die Werte aus:

| Variable              | Beschreibung                              |
|:----------------------|:------------------------------------------|
| `PUBLIC_WEB3FORMS_KEY`| Access Key fuer das Web3Forms-Kontaktformular |
| `PUBLIC_SITE_URL`     | Oeffentliche Website-URL                   |

> **Wichtig**: Alle Umgebungsvariablen muessen mit `PUBLIC_` prefixt sein, damit Astro sie dem Client-Code exponiert. Die Typen sind in `src/env.d.ts` deklariert.

## Wichtige Features

### Kontaktformular (3-Step)
- Verwendet [Web3Forms](https://web3forms.com/) (API-Endpoint: `https://api.web3forms.com/submit`).
- **Schritt 1**: Verteilungsdetails (Material, Menge, Format, Termin).
- **Schritt 2**: Region & Details (16 Bundesland-Optionen, PLZ-Gebiete, selektive Verteilung).
- **Schritt 3**: Kontaktdaten (Vorname, Nachname, Firma, Anschrift, Stadt, Region, PLZ, E-Mail, Telefon, Datenschutz).
- Client-seitiger Step-Wechsel mit Fortschrittsanzeige (3 Punkte).
- Validierung pro Step mit visuellem Feedback (rote Borders, `aria-invalid`).
- Step 1+2 Daten werden in versteckte Hidden-Inputs synchronisiert, bevor an Web3Forms gesendet wird.
- Ladezustand mit Spinner, Timeout von 10 Sekunden (`AbortController`).
- Erfolgs- und Fehlermeldungen werden dynamisch eingeblendet.
- Honeypot-Feld `botcheck` zur Spam-Abwehr.
- Alle CTA-Buttons verlinken auf `/kontakt#angebot` fuer direkten Scroll zum Formular.

### Service-Pakete (ServicePackages.astro)
- 4 Pakete als Karten-Grid: **Kompakt**, **Plus**, **Premium**, **Allrounder**.
- Features als Checkliste pro Paket (Check-Icon-Komponente).
- Jede Karte verlinkt auf `/kontakt#angebot`.

### Preis-Vorteile (Pricing.astro)
- 4 Pakete nach Auflagenhoehe: **Starter Vorteil** (ab 50.000), **Premium Vorteil** (ab 100.000), **Business Vorteil** (ab 250.000), **Mega Deal** (ab 500.000 + 25.000 gratis).
- **Mega Deal** ist visuell hervorgehoben (`ring-2 ring-primary`).
- Bonus-Box mit zusaetzlichen Premium-Vorteilen unterhalb des Grids.

### Cookie-Banner
- Speichert die Einwilligung (`accepted`/`declined`) im `localStorage` unter dem Schluessel `vsp_cookie_consent`.
- Sendet ein Custom-Event `cookieConsentChanged` mit `detail: { accepted }`.
- Banner erscheint mit 1-Sekunde-Verzoegerung fuer bessere UX.
- Zwei Optionen: "Nur notwendige" und "Alle akzeptieren".

### SEO
- Jede Seite nutzt das `Layout.astro` mit dynamischen `title`, `description`, Open-Graph-Tags, Twitter-Cards, Canonical-URLs und Schema.org `LocalBusiness` JSON-LD.
- Impressum & Datenschutz sind mit `noindex={true}` markiert.
- `site.webmanifest` ist fuer PWA-Faehigkeiten konfiguriert.
- `robots.txt` und `sitemap.xml` liegen in `public/`.

### Header
- Fixierter Header mit `backdrop-blur-md` und Scroll-Shadow-Effekt.
- Mobiles Menue mit Fokus-Trap, Escape-Taste-Schliessung und Body-Scroll-Lock.
- Noscript-Fallback fuer das Mobile-Menue.
- Aktive Navigationslinks werden mit Unterstrich und `aria-current="page"` hervorgehoben.
- Navigation: Startseite, Leistungen, Ueber Uns, Kontakt.

### Services-Carousel (Startseite)
- Horizontales Scroll-Carousel mit `snap-x snap-mandatory`.
- 9 Leistungskarten (Flyerverteilung, Prospektverteilung, Zeitungs- & Beilagenverteilung, Direktwerbung, Streetpromotion, Sampling Aktionen, Bundesweite Kampagnenplanung, Adressierte Verteilung, Web- & Logo Design).
- Navigation ueber Pfeil-Buttons und Dot-Indikatoren.
- Aktiver Dot wird ueber Scroll-Event mit `requestAnimationFrame` aktualisiert.
- Erste Karte (`Flyerverteilung`) ist visuell hervorgehoben (`highlighted: true` → primary Hintergrund).

### Hero-Slider
- Zwei Hintergrundbilder mit CSS-Opacity-Transition (1s).
- Auto-Cycle alle 5 Sekunden, gesteuert durch `IntersectionObserver` (pausiert, wenn nicht sichtbar).

### Footer
- Drei Bereiche: Content-Grid (Navigation, Rechtliches, Kontakt), Auto-Galerie-Marquee, Copyright.
- Galerie-Marquee mit 6 Firmenfahrzeug-Fotos, dupliziert fuer nahtloses Looping.
- Kontaktdaten: Telefon 0163 8866766, E-Mail Info@verteilservice-plus.de, Adresse Kupferhammer weg 51, 61440 Oberursel.

### Partner-Logos
- Automatisches CSS-Marquee mit 8 Partnerlogos.
- Titel: "Unsere Partner".
- Logos im Grayscale-Modus mit Hover-Effekt.

### FAQ-Akkordeon
- 10 haefig gestellte Fragen mit Grid-Transition-Animation (`grid-rows-[0fr]` / `grid-rows-[1fr]`).
- Nur ein Eintrag kann gleichzeitig geoeffnet sein.
- Sticky Info-Box auf der rechten Seite (Desktop).

## Assets

- **Bilder**: Alle Fotos liegen in `src/assets/images/`. Sie werden ueber Astro's Image-Handling importiert (`import img from '../assets/images/...'`).
- **Hero-Bilder**: `hero1.jpeg`, `hero2.jpg` (aktiv genutzt). Zusaetzlich `newhero1` (keine Dateiendung), `newhero2.jpeg`, `newhero3.jpeg` (derzeit nicht referenziert).
- **Galerie/About-Fotos**: Mehrere JPEGs mit WhatsApp-generierten Dateinamen.
- **Partnerlogos**: In `src/assets/partnerlogos/` als JPGs.
- **Fonts**: Das `src/assets/fonts/`-Verzeichnis ist derzeit leer. Es werden System-Fonts (Inter, Merriweather) ueber CSS-Custom-Properties geladen.

## Deployment

Das Projekt ist fuer **Netlify** konfiguriert (`netlify.toml`):

- Build-Befehl: `npm run build`
- Publish-Verzeichnis: `dist`
- Node-Version: `22`
- **Security-Headers**:
  - `Strict-Transport-Security` (HSTS)
  - `X-Frame-Options: DENY`
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy` (strikte Einschraenkungen)
  - `Content-Security-Policy` (CSP mit `default-src 'self'`, `connect-src 'self' https://api.web3forms.com`)
- **Caching**:
  - Statische Assets (`/_astro/*`): `max-age=31536000, immutable`
  - Startseite (`/`): `max-age=0, must-revalidate`

## Testen

Derzeit ist **kein Test-Framework** im Projekt konfiguriert. Es gibt keine Unit-Tests, Integrationstests oder E2E-Tests. Das Testen erfolgt manuell ueber `npm run dev` und `npm run preview`.

## Sicherheitshinweise

- `.env` und `.env.production` sind in `.gitignore` eingetragen und duerfen nicht committet werden.
- Das Kontaktformular enthaelt ein verstecktes Honeypot-Feld (`botcheck`) zur Spam-Abwehr.
- Netlify-Headers verhindern Clickjacking (X-Frame-Options: DENY) und Content-Type-Sniffing.
- CSP erlaubt Form-Action nur zu `self` und `https://api.web3forms.com`.
- Sensitive Dateien (`.env`) werden von Astro und Netlify nicht im Build ausgegeben.
- Externe Links (WhatsApp, Web3Forms) nutzen konsequent `rel="noopener noreferrer"`.

## Hinweise fuer Agenten

- `tailwind.config.ts` ist eine nicht-funktionale TypScript-Datei (leerer `content`-Array). Alle Tailwind-Erweiterungen befinden sich ausschliesslich in `tailwind.config.mjs`.
- `README.md` ist noch die unveraenderte Astro-Starter-Vorlage und spiegelt nicht den aktuellen Projektstatus wider.
- Neue Seiten werden als `.astro`-Dateien in `src/pages/` angelegt und sollten das `Layout.astro` importieren.
- Neue Icons folgen dem Muster in `src/components/icons/`: optionale `class`-Prop mit Default `w-5 h-5`, `aria-hidden="true"`.
- Neue Sections gehoeren in `src/components/sections/` und werden von den Page-Komponenten importiert.
- Brand-Farbe ist `#7c919e` (primary) und `#5d727f` (primary-dark).
- Kontakt-Telefonnummer: `+491638866766`, E-Mail: `Info@verteilservice-plus.de`.
- Adresse: Kupferhammer weg 51, 61440 Oberursel.
