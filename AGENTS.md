# Verteilservice Plus Website

Dieses Projekt ist die statische Marketing-Website für **Verteilservice Plus** – ein Dienstleister für professionelle Flyerverteilung und Werbebotschaften in Oberursel und bundesweit. Inhaber: Douaa Bendali.

## Technologie-Stack

- **[Astro](https://astro.build/)** `^6.3.1` – Static Site Generator (Output-Modus: `static`)
- **[Tailwind CSS](https://tailwindcss.com/)** `^3.4.19` – Utility-First CSS-Framework
- **PostCSS & Autoprefixer** – CSS-Verarbeitung
- **TypeScript** – Strikte Typisierung (`astro/tsconfigs/strict`)
- **Font Awesome Free** `^7.2.0` – Icons via CSS-Klassen (`fas`, `fab`)
- **Node.js** `>=22.12.0`

## Projektstruktur

```text
├── public/                    # Statische Assets
│   ├── css/
│   │   └── fontawesome.min.css
│   ├── webfonts/              # Font Awesome Schriftdateien
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── robots.txt
│   ├── site.webmanifest       # PWA-Manifest (Theme-Color: #064efd)
│   └── sitemap.xml
├── src/
│   ├── assets/
│   │   ├── fonts/             # (derzeit leer)
│   │   ├── images/            # Fotos der Verteilung, Hero-Bilder, Team-Fotos
│   │   └── partnerlogos/      # 8 Logos von Partnerunternehmen
│   ├── components/
│   │   ├── Header.astro       # Fixierte Navigation mit Mobile-Menü
│   │   ├── Footer.astro       # Footer mit Galerie-Marquee, Navigation, Kontakt
│   │   ├── sections/          # Seitenabschnitte (Hero, About, Services, etc.)
│   │   │   ├── About.astro
│   │   │   ├── FAQ.astro
│   │   │   ├── Gallery.astro
│   │   │   ├── Hero.astro     # Hintergrund-Slider mit 3 Bildern, Auto-Cycle (5s)
│   │   │   ├── PartnerLogos.astro
│   │   │   ├── Pricing.astro  # Vorteile nach Auflagenhöhe
│   │   │   ├── Process.astro
│   │   │   ├── ServicePackages.astro  # 4 Service-Pakete (Kompakt, Plus, Premium, Allrounder)
│   │   │   ├── Services.astro # Horizontales Carousel mit Snap-Scrolling (9 Leistungen)
│   │   │   ├── TrackingQuality.astro
│   │   │   └── TrustBar.astro
│   │   └── ui/
│   │       └── CookieBanner.astro
│   ├── layouts/
│   │   └── Layout.astro       # Basis-Layout mit Meta-Tags, Header, Footer, JSON-LD
│   ├── pages/                 # Dateibasiertes Routing
│   │   ├── 404.astro
│   │   ├── index.astro        # Startseite (komponiert aus 10 Sections)
│   │   ├── leistungen.astro   # Detailseite aller 9 Leistungen
│   │   ├── ueber-uns.astro    # Über-uns mit mehreren visuellen Abschnitten
│   │   ├── kontakt.astro      # 3-Step-Kontaktformular (Web3Forms)
│   │   ├── impressum.astro
│   │   └── datenschutz.astro
│   ├── styles/
│   │   └── global.css         # Tailwind-Direktiven + CSS-Custom-Properties + Glassmorphism
│   └── env.d.ts               # TypeScript-Deklarationen für ImportMetaEnv
├── astro.config.mjs           # Astro-Konfiguration (site, output: static, port: 3003)
├── tailwind.config.mjs        # Tailwind-Theme-Erweiterungen (Farben via CSS-Var, Fonts, Animationen)
├── tailwind.config.ts         # Leere TypeScript-Config (nicht aktiv genutzt)
├── postcss.config.js          # PostCSS mit Tailwind + Autoprefixer
├── tsconfig.json              # Striktes Astro-TypeScript
├── netlify.toml               # Netlify-Deployment + Security-Headers
├── .env.example               # Beispiel-Umgebungsvariablen
└── .env                       # Lokale Umgebungsvariablen (nicht committen)
```

## Build- und Entwicklungsbefehle

Alle Befehle werden im Projektroot ausgeführt:

| Befehl            | Aktion                                            |
|:------------------|:--------------------------------------------------|
| `npm install`     | Abhängigkeiten installieren                       |
| `npm run dev`     | Entwicklungsserver starten (Port `3003`)          |
| `npm run build`   | Statische Produktions-Build in `./dist/` erstellen|
| `npm run preview` | Build lokal vor dem Deployment testen             |
| `npm run astro`   | Astro-CLI-Befehle ausführen                       |

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

- **Komponenten**: Astro-Dateien (`.astro`) mit Frontmatter-Script-Block (`---`) für server-seitigen TypeScript-Code.
- **Styling**: Primär Tailwind-Utility-Klassen. CSS-Custom-Properties für Brand-Farben und Fonts in `src/styles/global.css`.
- **Tailwind-Theme-Erweiterungen** (in `tailwind.config.mjs`):
  - **Farben**: Werden über CSS-Custom-Properties referenziert (`primary: var(--color-primary)`, `primary-dark: var(--color-primary-dark)`, `background`, `background-alt`, `surface`, `text-primary`, `text-secondary`, `text-muted`, `border`). Zusätzlich feste Akzentfarben `accent` (#f97316) und `accent-dark` (#ea580c).
  - **Animationen**: `marquee`, `marquee-reverse`, `fade-in`, `slide-up`
  - **Fonts**: `sans` (Inter via CSS-Var), `serif` (Merriweather via CSS-Var)
  - **Border-Radii**: `4xl` (2rem), `5xl` (3rem)
- **Icons**: Es werden **keine** eigenen SVG-Icon-Komponenten verwendet. Stattdessen wird **Font Awesome Free** über `public/css/fontawesome.min.css` eingebunden. Icons werden als `<i class="fas fa-xxx" aria-hidden="true"></i>` (Solid) oder `<i class="fab fa-xxx" aria-hidden="true"></i>` (Brands) verwendet.
- **Client-seitige Scripts**: Werden direkt in `<script>`-Tags innerhalb der Astro-Komponenten geschrieben und als IIFE ausgeführt. Typ-Annotationen (`as HTMLFormElement | null`) werden verwendet, um TypeScript-Fehler zu vermeiden.
- **Barrierefreiheit**: `aria-label`, `aria-current`, `aria-expanded`, `aria-controls`, `aria-selected`, `aria-live`, `aria-invalid`, `role="dialog"`, `role="tablist"`, `role="tab"`, `role="status"`, `role="alert"`, Skip-Link zum Hauptinhalt, Fokus-Trap im Mobile-Menü und `focus-visible`-Styles werden konsequent eingesetzt.
- **Sprache**: Die gesamte Website-Inhalt, UI-Texte und die meisten Code-Kommentare sind auf **Deutsch**.
- **Responsive Design**: Mobile-First mit Tailwind-Breakpoints (`sm:`, `md:`, `lg:`).
- **Touch-Targets**: Interaktive Elemente verwenden konsistent `min-h-[44px]` und `min-w-[44px]` für ausreichende Klickflächen.
- **Reduced Motion**: `prefers-reduced-motion`-Media-Query wird in `global.css` und einzelnen Komponenten berücksichtigt.

## Glassmorphism-System

In `src/styles/global.css` sind mehrere wiederverwendbare Glassmorphism-Klassen definiert:

- `.glass` – Standard-Glas für Karten, Tags, Badges
- `.glass-strong` – Stärkeres Glas für wichtige Panels, Formulare, Pricing-Cards
- `.glass-primary` – Primär getöntes Glas für hervorgehobene Karten auf dunklen Hintergründen
- `.glass-dark` – Dunkles Glas für Footer und dunkle Sections
- `.blob` / `.blob-animated` – Dekorative, animierte Hintergrund-Formen (Blur, float-Animation)

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
- Client-seitiger Step-Wechsel mit Fortschrittsanzeige (3 Icons).
- Validierung pro Step mit visuellem Feedback (rote Borders).
- Step 1+2 Daten werden in versteckte Hidden-Inputs synchronisiert, bevor an Web3Forms gesendet wird.
- Ladezustand mit Spinner, Timeout von 10 Sekunden (`AbortController`).
- Erfolgs- und Fehlermeldungen werden dynamisch eingeblendet.
- Honeypot-Feld `botcheck` zur Spam-Abwehr.
- Alle CTA-Buttons verlinken auf `/kontakt#angebot` für direkten Scroll zum Formular.

### Service-Pakete (ServicePackages.astro)
- 4 Pakete als Karten-Grid: **Kompakt**, **Plus**, **Premium**, **Allrounder**.
- Features als Checkliste pro Paket.
- Jede Karte verlinkt auf `/kontakt#angebot`.
- Alle Karten verwenden `.glass-strong`.

### Cookie-Banner
- Speichert die Einwilligung (`accepted`/`declined`) im `localStorage` unter dem Schlüssel `vsp_cookie_consent`.
- Sendet ein Custom-Event `cookieConsentChanged` mit `detail: { accepted }`.
- Banner erscheint mit 1-Sekunde-Verzögerung für bessere UX.
- Zwei Optionen: "Nur notwendige" und "Alle akzeptieren".

### SEO
- Jede Seite nutzt das `Layout.astro` mit dynamischen `title`, `description`, Open-Graph-Tags, Twitter-Cards, Canonical-URLs und Schema.org `LocalBusiness` JSON-LD.
- Impressum & Datenschutz sind mit `noindex={true}` markiert.
- `site.webmanifest` ist für PWA-Fähigkeiten konfiguriert (Theme-Color: `#064efd`).
- `robots.txt` und `sitemap.xml` liegen in `public/`.

### Header
- Fixierter Header mit `.glass-strong` und Scroll-Shadow-Effekt.
- Mobiles Menü mit Fokus-Trap, Escape-Taste-Schließung und Body-Scroll-Lock.
- Noscript-Fallback für das Mobile-Menü.
- Aktive Navigationslinks werden mit Unterstrich und `aria-current="page"` hervorgehoben.

### Services-Carousel (Startseite)
- Horizontales Scroll-Carousel mit `snap-x snap-mandatory`.
- 9 Leistungen als Karten. Die erste Karte (`Flyerverteilung`) ist visuell hervorgehoben (`bg-primary` statt `glass`).
- Navigation über Pfeil-Buttons und Dot-Indikatoren.
- Aktiver Dot wird über Scroll-Event mit `requestAnimationFrame` aktualisiert.

### Hero-Slider
- Drei Hintergrundbilder (`newhero1.jpeg`, `newhero2.jpeg`, `newhero3.jpeg`) mit CSS-Opacity-Transition (1s).
- Auto-Cycle alle 5 Sekunden, gesteuert durch `IntersectionObserver` (pausiert, wenn nicht sichtbar).

### Footer-Galerie
- Automatisches CSS-Marquee mit duplizierten Bildern für nahtloses Looping.
- 6 Firmenfahrzeug-Fotos, importiert aus `src/assets/images/`.

### Partner-Logos
- Automatisches CSS-Marquee mit 8 Partnerlogos.
- Titel: "Unsere Partner".
- Logos im Grayscale-Modus mit Hover-Effekt.

## Assets

- **Bilder**: Alle Fotos liegen in `src/assets/images/`. Sie werden über Astro's Image-Handling importiert (`import img from '../assets/images/...'`).
- **Hero-Bilder**: `newhero1.jpeg`, `newhero2.jpeg`, `newhero3.jpeg`
- **Galerie/About-Fotos**: Mehrere JPEGs mit WhatsApp-generierten Dateinamen
- **Partnerlogos**: In `src/assets/partnerlogos/` als JPGs
- **Fonts**: Das `src/assets/fonts/`-Verzeichnis ist derzeit leer. Es werden System-Fonts (Inter, Merriweather) über CSS-Custom-Properties geladen.
- **Icons**: Font Awesome Free wird als lokale CSS-Datei in `public/css/fontawesome.min.css` ausgeliefert. Die zugehörigen Schriftdateien liegen in `public/webfonts/`.

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

- `tailwind.config.ts` ist eine leere TypeScript-Datei und wird nicht aktiv genutzt. Alle Tailwind-Erweiterungen befinden sich in `tailwind.config.mjs`.
- `README.md` ist noch die unveränderte Astro-Starter-Vorlage und spiegelt nicht den aktuellen Projektstatus wider.
- Neue Seiten werden als `.astro`-Dateien in `src/pages/` angelegt und sollten das `Layout.astro` importieren.
- Neue Sections gehören in `src/components/sections/` und werden von den Page-Komponenten importiert.
- Brand-Farbe ist `#064efd` (primary) und `#0039c7` (primary-dark). Die alte graue Farbe (#7c919e) und die alte rote Farbe (#d91c26) wurden komplett ersetzt.
- Für Icons wird **Font Awesome** verwendet. Füge keine eigenen SVG-Icon-Komponenten unter `src/components/icons/` hinzu – dieser Ordner existiert nicht mehr.
