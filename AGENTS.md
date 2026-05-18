<!-- AGENTS.md – Verteilservice Plus Website -->

Dieses Projekt ist die statische Marketing-Website für **Verteilservice Plus** – ein Dienstleister für professionelle Flyerverteilung, Prospektverteilung und Streetpromotion bundesweit in Deutschland. Inhaber: Douaa Bendali.

## Technologie-Stack

- **[Astro](https://astro.build/)** `^6.3.1` – Static Site Generator (Output-Modus: `static`)
- **[Tailwind CSS](https://tailwindcss.com/)** `^3.4.19` – Utility-First CSS-Framework
- **[Font Awesome Free](https://fontawesome.com/)** `^7.2.0` – Icon-Font (Solid + Brands)
- **PostCSS & Autoprefixer** – CSS-Verarbeitung
- **TypeScript** – Strikte Typisierung (`astro/tsconfigs/strict`)
- **Node.js** `>=22.12.0`

## Projektstruktur

```text
├── public/                    # Statische Assets
│   ├── css/
│   │   └── fontawesome.min.css       # Font Awesome CSS (manuell kopiert)
│   ├── webfonts/                     # Font Awesome Webfont-Dateien
│   │   ├── fa-brands-400.woff2
│   │   ├── fa-regular-400.woff2
│   │   ├── fa-solid-900.woff2
│   │   └── fa-v4compatibility.woff2
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── robots.txt
│   ├── site.webmanifest       # PWA-Manifest (Theme-Color: #536c85)
│   └── sitemap.xml
├── src/
│   ├── assets/
│   │   ├── images/            # Fotos der Verteilung, Hero-Bilder, Team-Fotos,
│   │   │                      # Nachweise, Avatars, Leistungsbilder
│   │   └── partnerlogos/      # Logos von Partnerunternehmen
│   ├── components/
│   │   ├── Header.astro       # Fixierte Navigation mit Mobile-Menü
│   │   ├── Footer.astro       # Footer mit Galerie-Marquee, Navigation, Kontakt
│   │   ├── sections/          # Seitenabschnitte
│   │   │   ├── About.astro    # Bento-Grid mit Stats, Avatars, Features
│   │   │   ├── CTABanner.astro# Wiederverwendbarer CTA-Banner (Props: title, subtitle, compact)
│   │   │   ├── FAQ.astro      # Akkordeon-FAQ mit sticky Info-Spalte
│   │   │   ├── Gallery.astro  # Bildergalerie
│   │   │   ├── Hero.astro     # Statischer Hero mit Hintergrundbild + Overlay
│   │   │   ├── PartnerLogos.astro
│   │   │   ├── Pricing.astro  # Vorteile nach Auflagenhöhe
│   │   │   ├── Process.astro  # 4-Schritte-Prozess
│   │   │   ├── ProofSection.astro # Nachweis-Prozess + Fotos
│   │   │   ├── ServicePackages.astro  # 4 Pakete (Kompakt, Plus, Premium, Allrounder)
│   │   │   ├── Services.astro # Horizontales Carousel mit Snap-Scrolling
│   │   │   ├── TrackingQuality.astro
│   │   │   └── TrustBar.astro
│   │   └── ui/
│   │       └── CookieBanner.astro
│   ├── layouts/
│   │   └── Layout.astro       # Basis-Layout mit Meta-Tags, Header, Footer, JSON-LD
│   ├── pages/                 # Dateibasiertes Routing
│   │   ├── 404.astro
│   │   ├── index.astro        # Startseite (komponiert aus 13 Sections)
│   │   ├── leistungen.astro   # Detailseite aller 9 Leistungen
│   │   ├── ueber-uns.astro    # Über-uns mit mehreren visuellen Abschnitten
│   │   ├── kontakt.astro      # 3-Step-Kontaktformular (Web3Forms)
│   │   ├── impressum.astro
│   │   └── datenschutz.astro
│   ├── styles/
│   │   └── global.css         # Tailwind-Direktiven + CSS-Custom-Properties +
│   │                          # Glassmorphism-System + Decorative Blobs
│   └── env.d.ts               # TypeScript-Deklarationen für ImportMetaEnv
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

Alle Befehle werden im Projektroot ausgeführt:

| Befehl          | Aktion                                            |
|:----------------|:--------------------------------------------------|
| `npm install`   | Abhängigkeiten installieren                       |
| `npm run dev`   | Entwicklungsserver starten (Port `3003`)          |
| `npm run build` | Statische Produktions-Build in `./dist/` erstellen|
| `npm run preview`| Build lokal vor dem Deployment testen            |
| `npm run astro` | Astro-CLI-Befehle ausführen                       |

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

- **Komponenten**: Astro-Dateien (`.astro`) mit Frontmatter-Script-Block (`---`) für Server-seitigen TypeScript-Code.
- **Styling**: Primär Tailwind-Utility-Klassen. CSS-Custom-Properties für Brand-Farben und Fonts in `src/styles/global.css`.
- **Glassmorphism**: Ein umfangreiches System aus `.glass`, `.glass-strong`, `.glass-primary` und `.glass-dark` ist in `global.css` definiert und wird konsistent für Karten, Panels und Formulare verwendet.
- **Tailwind-Theme-Erweiterungen** (in `tailwind.config.mjs`):
  - **Farben**: `primary` (#536c85), `primary-dark` (#3e5268), `background`, `background-alt`, `surface`, `text-primary`, `text-secondary`, `text-muted`, `border`, `accent` (#536c85), `accent-dark` (#3e5268)
  - **Animationen**: `marquee`, `marquee-reverse`, `fade-in`, `slide-up`
  - **Fonts**: `sans` (Inter), `serif` (Merriweather)
  - **Border-Radii**: `4xl` (2rem), `5xl` (3rem)
- **Icons**: Es werden ausschließlich **Font Awesome**-Icons verwendet (`<i class="fas fa-...">` bzw. `<i class="fab fa-...">`). Die Schriftart-Dateien liegen in `public/webfonts/`, das CSS in `public/css/fontawesome.min.css`. Das Verzeichnis `src/components/icons/` existiert nicht mehr.
- **Client-seitige Scripts**: Werden direkt in `<script>`-Tags innerhalb der Astro-Komponenten geschrieben und als IIFE ausgeführt. Typ-Annotationen (`as HTMLFormElement | null`) werden verwendet, um TypeScript-Fehler zu vermeiden.
- **Barrierefreiheit**: `aria-label`, `aria-current`, `aria-expanded`, `aria-controls`, `aria-selected`, `aria-live`, `aria-invalid`, `role="dialog"`, `role="tablist"`, `role="tab"`, `role="status"`, `role="alert"`, Skip-Link zum Hauptinhalt, Fokus-Trap im Mobile-Menü und `focus-visible`-Styles werden konsequent eingesetzt.
- **Sprache**: Die gesamte Website-Inhalt, UI-Texte und die meisten Code-Kommentare sind auf **Deutsch**.
- **Responsive Design**: Mobile-First mit Tailwind-Breakpoints (`sm:`, `md:`, `lg:`).
- **Touch-Targets**: Interaktive Elemente verwenden konsistent `min-h-[44px]` und `min-w-[44px]` für ausreichende Klickflächen.
- **Reduced Motion**: `prefers-reduced-motion`-Media-Query wird in `global.css` und einzelnen Komponenten berücksichtigt.
- **Dekorative Blobs**: Abschnitte verwenden häufig animierte, verschwommene Farbkreise (`.blob`, `.blob-animated`, `.blob-animated-delayed`, `.blob-animated-slow`) als Hintergrunddekor.

## Umgebungsvariablen

Kopiere `.env.example` zu `.env` und fülle die Werte aus:

| Variable              | Beschreibung                              |
|:----------------------|:------------------------------------------|
| `PUBLIC_WEB3FORMS_KEY`| Access Key für das Web3Forms-Kontaktformular |
| `PUBLIC_SITE_URL`     | Öffentliche Website-URL                   |

> **Wichtig**: Alle Umgebungsvariablen müssen mit `PUBLIC_` prefixt sein, damit Astro sie dem Client-Code exponiert. Die Typen sind in `src/env.d.ts` deklariert.

## Wichtige Features

### Kontaktformular (3-Step)
- Verwendet [Web3Forms](https://web3forms.com/) (API-Endpoint: `https://api.web3forms.com/submit`).
- **Schritt 1**: Verteilungsdetails (Material, Menge, Format, Termin).
- **Schritt 2**: Region & Details (Bundesland, PLZ-Gebiete, selektive Verteilung).
- **Schritt 3**: Kontaktdaten (Name, Firma, Anschrift, E-Mail, Telefon, Datenschutz).
- Client-seitiger Step-Wechsel mit Fortschrittsanzeige (3 Punkte mit Icons).
- Validierung pro Step mit visuellem Feedback (rote Borders, `aria-invalid`).
- Step 1+2 Daten werden in versteckte Hidden-Inputs synchronisiert, bevor an Web3Forms gesendet wird.
- Ladezustand mit Spinner, Timeout von 10 Sekunden (`AbortController`).
- Erfolgs- und Fehlermeldungen werden dynamisch eingeblendet.
- Honeypot-Feld `botcheck` zur Spam-Abwehr.
- Alle CTA-Buttons verlinken auf `/kontakt#angebot` für direkten Scroll zum Formular.

### Service-Pakete (ServicePackages.astro)
- 4 Pakete als Karten-Grid: **Kompakt**, **Plus**, **Premium**, **Allrounder**.
- Features als Checkliste pro Paket.
- Jede Karte verlinkt auf `/kontakt#angebot`.

### Cookie-Banner
- Speichert die Einwilligung (`accepted`/`declined`) im `localStorage` unter dem Schlüssel `vsp_cookie_consent`.
- Sendet ein Custom-Event `cookieConsentChanged` mit `detail: { accepted }`.
- Banner erscheint mit 1-Sekunde-Verzögerung für bessere UX.
- Zwei Optionen: "Nur notwendige" und "Alle akzeptieren".

### SEO
- Jede Seite nutzt das `Layout.astro` mit dynamischen `title`, `description`, Open-Graph-Tags, Twitter-Cards, Canonical-URLs und Schema.org `LocalBusiness` JSON-LD.
- Impressum & Datenschutz sind mit `noindex={true}` markiert.
- `site.webmanifest` ist für PWA-Fähigkeiten konfiguriert.
- `robots.txt` und `sitemap.xml` liegen in `public/`.

### Header
- Fixierter Header mit `backdrop-blur-sm` und Scroll-Shadow-Effekt (`shadow-md` ab Scroll-Position > 10px).
- Mobiles Menü mit Fokus-Trap, Escape-Taste-Schließung und Body-Scroll-Lock.
- Noscript-Fallback für das Mobile-Menü.
- Aktive Navigationslinks werden mit Unterstrich und `aria-current="page"` hervorgehoben.

### Services-Carousel (Startseite)
- Horizontales Scroll-Carousel mit `snap-x snap-mandatory`.
- Navigation über Pfeil-Buttons und Dot-Indikatoren.
- Aktiver Dot wird über Scroll-Event mit `requestAnimationFrame` aktualisiert.
- Erste Karte (`Flyerverteilung`) ist visuell hervorgehoben (`highlighted: true`).

### Hero
- Statischer Hero-Bereich mit Vollbild-Hintergrundbild (`echterhero.jpeg`), dunklem Overlay (60% Schwarz) und dekorativen SVG-Linien.
- Kein Auto-Cycle-Slider mehr.

### FAQ-Akkordeon
- Einzeln öffnendes Akkordeon mit CSS `grid-rows-[0fr]` / `grid-rows-[1fr]` für Animation.
- Noscript-Fallback zeigt alle Antworten direkt an.

### Footer
- Content-Grid mit Brand, Navigation, Rechtliches und Kontakt in `.glass-dark`-Karten.
- Automatisches CSS-Marquee mit duplizierten Bildern für nahtloses Looping (10 Firmenfahrzeug-Fotos).
- Copyright-Zeile mit dynamischem Jahr.

## Assets

- **Bilder**: Alle Fotos liegen in `src/assets/images/`. Sie werden über Astro's Image-Handling importiert (`import img from '../assets/images/...'`).
- **Hero-Bild**: `echterhero.jpeg`
- **Galerie/Footer-Fotos**: Mehrere JPEGs mit WhatsApp-generierten Dateinamen
- **Nachweise**: `src/assets/images/nachweise/nachweis1.jpg` bis `nachweis3.jpg`
- **Avatars**: `src/assets/images/avatars/avatar1.png` bis `avatar5.png` (Verwendung in `About.astro`)
- **Leistungsbilder**: `leistung1.jpg` bis `leistung9.jpg`
- **Partnerlogos**: In `src/assets/partnerlogos/` als JPGs
- **Fonts**: System-Fonts (Inter, Merriweather) über CSS-Custom-Properties in `global.css`. Font Awesome wird als Icon-Font geladen.

## Deployment

Das Projekt ist für **Netlify** konfiguriert (`netlify.toml`):

- Build-Befehl: `npm run build`
- Publish-Verzeichnis: `dist`
- Node-Version: `22`
- **Security-Headers**:
  - `Strict-Transport-Security` (HSTS)
  - `X-Frame-Options: DENY`
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy` (strikte Einschränkungen)
  - `Content-Security-Policy` (CSP mit `default-src 'self'`, `connect-src 'self' https://api.web3forms.com`, `img-src 'self' data: https://randomuser.me`)
- **Caching**:
  - Statische Assets (`/_astro/*`): `max-age=31536000, immutable`
  - HTML-Dateien (`/*.html`): `max-age=0, must-revalidate`

## Testen

Derzeit ist **kein Test-Framework** im Projekt konfiguriert. Es gibt keine Unit-Tests, Integrationstests oder E2E-Tests. Das Testen erfolgt manuell über `npm run dev` und `npm run preview`.

## Sicherheitshinweise

- `.env` und `.env.production` sind in `.gitignore` eingetragen und dürfen nicht committet werden.
- Das Kontaktformular enthält ein verstecktes Honeypot-Feld (`botcheck`) zur Spam-Abwehr.
- Netlify-Headers verhindern Clickjacking (X-Frame-Options: DENY) und Content-Type-Sniffing.
- CSP erlaubt Form-Action nur zu `self` und `https://api.web3forms.com`.
- Sensitive Dateien (`.env`) werden von Astro und Netlify nicht im Build ausgegeben.
- Externe Links (WhatsApp, Web3Forms) nutzen konsequent `rel="noopener noreferrer"`.

## Hinweise für Agenten

- `tailwind.config.ts` ist eine leere TypScript-Datei und wird nicht aktiv genutzt. Alle Tailwind-Erweiterungen befinden sich in `tailwind.config.mjs`.
- `README.md` ist noch die unveränderte Astro-Starter-Vorlage und spiegelt nicht den aktuellen Projektstatus wider.
- Neue Seiten werden als `.astro`-Dateien in `src/pages/` angelegt und sollten das `Layout.astro` importieren.
- Neue Icons folgen dem **Font Awesome**-Muster: `<i class="fas fa-[name]" aria-hidden="true"></i>` bzw. `<i class="fab fa-[name]" aria-hidden="true"></i>`. Es werden keine eigenen SVG-Icon-Komponenten mehr erstellt.
- Neue Sections gehören in `src/components/sections/` und werden von den Page-Komponenten importiert.
- Brand-Farbe ist `#536c85` (primary) und `#3e5268` (primary-dark).
- Für Font Awesome müssen bei Updates die Dateien in `public/css/` und `public/webfonts/` manuell aus dem `@fortawesome/fontawesome-free`-Package aktualisiert werden.
- `public/sitemap.xml` muss bei neuen Seiten manuell ergänzt werden.
