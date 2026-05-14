# Verteilservice Plus Website

Dieses Projekt ist die statische Marketing-Website für **Verteilservice Plus** – ein Dienstleister für professionelle Flyerverteilung, Prospektverteilung, Streetpromotion und Web- & Logo Design in ganz Deutschland. Inhaber: Douaa Bendali. Sitz: Kupferhammer weg 51, 61440 Oberursel.

## Technologie-Stack

- **[Astro](https://astro.build/)** `^6.3.1` – Static Site Generator (Output-Modus: `static`)
- **[Tailwind CSS](https://tailwindcss.com/)** `^3.4.19` – Utility-First CSS-Framework
- **PostCSS & Autoprefixer** – CSS-Verarbeitung
- **TypeScript** – Strikte Typisierung (`astro/tsconfigs/strict`)
- **Node.js** `>=22.12.0`

## Projektstruktur

```text
├── public/                    # Statische Assets (favicon.ico, favicon.svg, robots.txt, sitemap.xml, site.webmanifest)
├── src/
│   ├── assets/
│   │   ├── images/            # Bilder für Seiteninhalte (Hero, Über uns, Galerie, FAQ, Footer-Marquee etc.)
│   │   └── partnerlogos/      # Partner-Logos für Marquee-Banner
│   ├── components/
│   │   ├── Header.astro       # Fixierte Navigation mit Mobile-Menü, Logo, CTA-Button
│   │   ├── Footer.astro       # Footer mit Auto-Galerie-Marquee, Navigation, Rechtliches, Kontakt, Copyright
│   │   ├── icons/             # Wiederverwendbare SVG-Icon-Komponenten (15 Stück)
│   │   │                      #   ArrowRight, Bullseye, Check, ChevronDown, ChevronLeft, ChevronRight,
│   │   │                      #   Cookie, Envelope, MapMarker, Menu, Phone, ShieldCheck, WhatsApp, X
│   │   ├── sections/          # Seitenabschnitte für die Startseite
│   │   │   ├── Hero.astro     # Vollbild-Hero mit Hintergrund-Slider (2 Bilder, 5s Intervall)
│   │   │   ├── TrustBar.astro # Vertrauensindikatoren (Stats/Badges)
│   │   │   ├── About.astro    # Über-uns-Teaser mit "Mehr anzeigen"-Toggle
│   │   │   ├── PartnerLogos.astro   # Unendliches Logo-Marquee (CSS-Animation)
│   │   │   ├── Process.astro  # Ablaufdarstellung (Schritt-für-Schritt)
│   │   │   ├── Services.astro # Horizontales Leistungs-Carousel (9 Karten) auf der Startseite
│   │   │   ├── TrackingQuality.astro # Feature-Highlights Tracking & Qualität
│   │   │   ├── Gallery.astro  # Horizontale Bildergalerie mit Pfeil-Navigation
│   │   │   ├── Pricing.astro  # Preispakete (3 Varianten)
│   │   │   └── FAQ.astro      # Akkordeon-FAQ (10 Fragen)
│   │   └── ui/
│   │       └── CookieBanner.astro   # Cookie-Einwilligungsbanner (localStorage-basiert)
│   ├── layouts/
│   │   └── Layout.astro       # Basis-Layout mit Meta-Tags, Header, Footer, CookieBanner, Schema.org JSON-LD
│   ├── pages/                 # Dateibasiertes Routing
│   │   ├── index.astro        # Startseite (komponiert aus ~10 Sections)
│   │   ├── leistungen.astro   # Detaillierte Leistungsübersicht (9 Services + Benefits + Zielgruppen + CTA)
│   │   ├── ueber-uns.astro    # Über-uns-Seite mit Story, Werten, Stats, Kontakt-Teaser
│   │   ├── kontakt.astro      # Kontaktseite mit Kontaktinfos und Web3Forms-Formular
│   │   ├── 404.astro          # Benutzerdefinierte Fehlerseite
│   │   ├── impressum.astro    # Impressum (noindex)
│   │   └── datenschutz.astro  # Datenschutzerklärung (noindex)
│   ├── styles/
│   │   └── global.css         # Tailwind-Direktiven + CSS-Custom-Properties (Brand-Farben, Fonts)
│   └── env.d.ts               # TypeScript-Deklarationen für ImportMetaEnv
├── astro.config.mjs           # Astro-Konfiguration (site, output: static, port: 3003)
├── tailwind.config.mjs        # Aktive Tailwind-Konfiguration (Farben, Fonts, Animationen, Border-Radii)
├── tailwind.config.ts         # Leerer Stub (wird nicht aktiv genutzt)
├── postcss.config.js          # PostCSS-Konfiguration (tailwindcss, autoprefixer)
├── tsconfig.json              # Erweitert astro/tsconfigs/strict
├── netlify.toml               # Netlify-Deployment-Konfiguration + Security-Headers + Cache-Control
├── .env.example               # Beispiel-Umgebungsvariablen
├── .gitignore                 # Ignoriert dist/, .astro/, node_modules/, .env, .env.production, .DS_Store
└── .vscode/                   # VS Code: Launch-Konfiguration für Astro Dev-Server + Extension-Empfehlung
    ├── extensions.json
    └── launch.json
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

## Routing

Astro verwendet dateibasiertes Routing. Jede `.astro`-Datei in `src/pages/` wird zu einer Route:

| Route               | Datei                                   |
|:--------------------|:----------------------------------------|
| `/`                 | `src/pages/index.astro`                 |
| `/leistungen`       | `src/pages/leistungen.astro`            |
| `/ueber-uns`        | `src/pages/ueber-uns.astro`             |
| `/kontakt`          | `src/pages/kontakt.astro`               |
| `/impressum`        | `src/pages/impressum.astro`             |
| `/datenschutz`      | `src/pages/datenschutz.astro`           |
| `*` (404)           | `src/pages/404.astro`                   |

## Code-Stil und Konventionen

- **Komponenten**: Astro-Dateien (`.astro`) mit Frontmatter-Script-Block (`---`) für server-seitigen TypeScript-Code.
- **Styling**: Primär Tailwind-Utility-Klassen. CSS-Custom-Properties für Brand-Farben und Fonts in `src/styles/global.css`.
- **Tailwind-Theme-Erweiterungen**: Brand-Farben (`primary`, `primary-dark`, `background`, `background-alt`, `surface`, `text-primary`, `text-secondary`, `text-muted`, `border`), Animationen (`marquee`, `marquee-reverse`, `fade-in`, `slide-up`), Font-Familien (`sans`, `serif`) und Border-Radii (`4xl`, `5xl`) sind in `tailwind.config.mjs` definiert.
- **Icons**: Inline-SVGs als eigenständige Astro-Komponenten unter `src/components/icons/`. Sie akzeptieren eine optionale `class`-Prop mit Standardwert `w-5 h-5`.
- **Client-seitige Scripts**: Werden direkt in `<script>`-Tags innerhalb der Astro-Komponenten geschrieben und als IIFE ausgeführt. Typ-Annotationen (z. B. `as HTMLFormElement | null`) werden verwendet, um TypeScript-Fehler zu vermeiden.
- **Barrierefreiheit**: `aria-label`, `aria-current`, `aria-expanded`, `aria-controls`, `aria-selected`, `aria-hidden`, `aria-live`, `role`, `aria-invalid`, `aria-pressed` und `focus-visible`-Styles werden konsequent eingesetzt. Skip-Link und Focus-Trap im mobilen Menü vorhanden.
- **Sprache**: Die gesamte Website-Inhalt, UI-Texte und die meisten Code-Kommentare sind auf **Deutsch**.
- **Responsive Design**: Mobile-First mit Tailwind-Breakpoints (`sm:`, `md:`, `lg:`).
- **Touch-Ziele**: Interaktive Elemente haben mindestens `44px` × `44px` (`min-w-[44px] min-h-[44px]`).
- **Bilder**: Dekorative Bilder verwenden `alt=""` und `aria-hidden="true"`. Inhaltliche Bilder haben beschreibende `alt`-Texte.
- **Reduzierte Bewegung**: `prefers-reduced-motion` wird in `global.css` und einzelnen Komponenten unterstützt (Animationen deaktiviert, Scroll-Verhalten auf `auto`).

## Umgebungsvariablen

Kopiere `.env.example` zu `.env` und fülle die Werte aus:

| Variable              | Beschreibung                              |
|:----------------------|:------------------------------------------|
| `PUBLIC_WEB3FORMS_KEY`| Access Key für das Web3Forms-Kontaktformular |
| `PUBLIC_SITE_URL`     | Öffentliche Website-URL                   |

> **Hinweis**: Alle Umgebungsvariablen müssen mit `PUBLIC_` prefixt sein, damit Astro sie dem Client-Code exponiert. Die Typen sind in `src/env.d.ts` deklariert.

## Wichtige Features

### Kontaktformular (Web3Forms)
- Endpoint: `https://api.web3forms.com/submit`
- Felder: Name, E-Mail, Telefon (optional), Betreff (Select mit 10 Optionen), Nachricht, Datenschutz-Checkbox, Honeypot (`botcheck`)
- Client-seitige Validierung (Pflichtfelder, E-Mail-Format, `maxlength`-Attribute)
- Ladezustand mit Spinner, Erfolgsmeldung, Fehlerbehandlung inkl. 10s-Timeout via `AbortController`
- `aria-live`-Regionen für Erfolg/Fehler; `aria-invalid` bei Validierungsfehlern
- Das Formular befindet sich vollständig in `src/pages/kontakt.astro`

### Cookie-Banner
- Speichert die Einwilligung (`accepted`/`declined`) im `localStorage` unter dem Schlüssel `vsp_cookie_consent`
- Sendet ein Custom-Event `cookieConsentChanged` mit Detail `{ accepted: boolean }`
- Wird mit 1s Verzögerung eingeblendet, falls noch keine Entscheidung vorliegt
- Komponente: `src/components/ui/CookieBanner.astro`

### SEO
- Jede Seite nutzt das `Layout.astro` mit dynamischen `title`, `description`, Open-Graph-Tags, Twitter-Cards, Canonical-URLs, `theme-color`, `author`, Web-App-Manifest und Schema.org `LocalBusiness` JSON-LD
- `impressum.astro` und `datenschutz.astro` sind mit `noindex={true}` markiert
- `Astro.site` ist in `astro.config.mjs` auf `https://verteilservice-plus.de` gesetzt
- `public/robots.txt`, `public/sitemap.xml` und `public/site.webmanifest` sind vorhanden
- Das Layout referenziert `/og-image.jpg` und `/apple-touch-icon.png` – diese sollten im `public/`-Ordner bereitgestellt werden

### Interaktive Komponenten (Client-seitige Scripts)
- **Header**: Scroll-Schatten-Effekt, Mobile-Menü-Toggle mit Focus-Trap (Fokusverschiebung in Menü, Tab-Loop, Escape), `aria-expanded`-Steuerung. `<noscript>`-Fallback für mobiles Menü.
- **Hero**: Hintergrundbild-Slider mit 5-Sekunden-Intervall und Opazitäts-Transition. LCP-optimiert via `<img fetchpriority="high">`. Intervall pausiert per `IntersectionObserver`, wenn Hero nicht sichtbar.
- **Services (Startseite)**: Horizontales Scroll-Carousel mit Snap-Scrolling, Pfeil-Buttons, Dot-Navigation und `requestAnimationFrame`-basiertem Aktiv-Dot-Update
- **FAQ**: Akkordeon mit `grid-template-rows`-Transition, schließt andere Items beim Öffnen, `aria-expanded`-Steuerung. `<noscript>`-Fallback zeigt Antworten standardmäßig an.
- **Über uns**: "Mehr anzeigen"-Toggle mit `max-h-0` / `max-h-[2000px]`-Transition und `aria-hidden`-Synchronisierung
- **Gallery**: Horizontale Bildergalerie mit Pfeil-Buttons und `scrollBy`-Navigation
- **Footer**: Auto-Galerie-Marquee mit dupliziertem Inhalt für nahtloses Looping

## Assets

- Bilder werden aus `src/assets/images/` und `src/assets/partnerlogos/` importiert und von Astro optimiert
- Statische Assets (Favicons, robots.txt, sitemap.xml, site.webmanifest) liegen in `public/`
- Ein `og-image.jpg` wird im Layout referenziert, sollte im `public/`-Ordner bereitgestellt werden
- Ein `apple-touch-icon.png` wird im Layout referenziert, sollte im `public/`-Ordner bereitgestellt werden

## Deployment

Das Projekt ist für **Netlify** konfiguriert (`netlify.toml`):

- Build-Befehl: `npm run build`
- Publish-Verzeichnis: `dist`
- Node-Version: `22`
- Sicherheits-Header sind gesetzt (HSTS, CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy)
- Statische Assets (`/_astro/*`) werden mit langem Cache-Control ausgeliefert (`max-age=31536000, immutable`)
- Die Startseite (`/`) hat `Cache-Control: public, max-age=0, must-revalidate`

## Testen

Derzeit ist **kein Test-Framework** im Projekt konfiguriert. Es gibt keine Unit-Tests, Integrationstests oder E2E-Tests. Das Testen erfolgt manuell über `npm run dev` und `npm run preview`.

## Sicherheitshinweise

- `.env` und `.env.production` sind in `.gitignore` eingetragen und dürfen nicht committet werden.
- Das Kontaktformular enthält ein verstecktes Honeypot-Feld (`botcheck`) zur Spam-Abwehr.
- Netlify-Headers verhindern Clickjacking (X-Frame-Options: DENY) und Content-Type-Sniffing.
- Sensitive Dateien (`.env`) werden von Astro und Netlify nicht im Build ausgegeben.
- Die Content-Security-Policy in `netlify.toml` erlaubt Verbindungen nur zu `self` und `https://api.web3forms.com`.
