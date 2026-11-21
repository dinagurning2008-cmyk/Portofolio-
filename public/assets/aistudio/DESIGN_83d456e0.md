---
name: Editorial Zine & Dark Scrapbook
colors:
  surface: '#151311'
  surface-dim: '#151311'
  surface-bright: '#3b3936'
  surface-container-lowest: '#0f0e0c'
  surface-container-low: '#1d1b19'
  surface-container: '#211f1d'
  surface-container-high: '#2c2a27'
  surface-container-highest: '#373432'
  on-surface: '#e7e1de'
  on-surface-variant: '#dbc0c7'
  inverse-surface: '#e7e1de'
  inverse-on-surface: '#32302e'
  outline: '#a38b91'
  outline-variant: '#554247'
  surface-tint: '#ffb0ca'
  primary: '#ffb0ca'
  on-primary: '#640036'
  primary-container: '#e66b9c'
  on-primary-container: '#5e0032'
  inverse-primary: '#a33565'
  secondary: '#cbc6bc'
  on-secondary: '#32302a'
  secondary-container: '#49473f'
  on-secondary-container: '#b9b5ab'
  tertiary: '#c3c7cc'
  on-tertiary: '#2d3135'
  tertiary-container: '#91959a'
  on-tertiary-container: '#2a2e32'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffd9e3'
  primary-fixed-dim: '#ffb0ca'
  on-primary-fixed: '#3e001f'
  on-primary-fixed-variant: '#841c4d'
  secondary-fixed: '#e7e2d8'
  secondary-fixed-dim: '#cbc6bc'
  on-secondary-fixed: '#1d1c15'
  on-secondary-fixed-variant: '#49473f'
  tertiary-fixed: '#e0e3e8'
  tertiary-fixed-dim: '#c3c7cc'
  on-tertiary-fixed: '#181c20'
  on-tertiary-fixed-variant: '#43474b'
  background: '#151311'
  on-background: '#e7e1de'
  surface-variant: '#373432'
  bg-charcoal: '#22201E'
  paper-beige: '#DDD8CE'
  paper-light: '#EAE6DF'
  ink-primary: '#1F1D1B'
  ink-soft: rgba(31, 29, 27, 0.72)
  ink-faint: rgba(31, 29, 27, 0.35)
  accent-pink: '#E66B9C'
  accent-pink-soft: rgba(230, 107, 156, 0.25)
  metal-silver: '#D4D7DC'
  metal-shadow: rgba(0, 0, 0, 0.30)
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-editorial:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '800'
    lineHeight: 36px
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 27px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 25px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-code:
    fontFamily: Space Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-meta:
    fontFamily: Space Mono
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 14px
    letterSpacing: 0.08em
  label-btn:
    fontFamily: Space Mono
    fontSize: 13px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  margin: 1.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4.5rem
---

# Design System: Editorial Zine / Dark Scrapbook

Sebuah sistem desain editorial taktil yang memadukan estetika *dark scrapbook collage*, tekstur kertas matte alami, aksen coretan kuas magenta-pink cerah, klip kertas logam, cap pos (*rubber postmark stamp*), dan jahitan silang (*cross-stitch trail*).

---

## 1. Color Palette & Tokens

### Core Colors
- `--bg-charcoal`: `#22201E` — Latar kanvas utama gelap bernuansa arang hangat.
- `--paper-beige`: `#DDD8CE` — Lembaran kertas editorial bertekstur matte hangat (*main paper sheets*).
- `--paper-light`: `#EAE6DF` — Permukaan kertas polaroid dan kartu index sekunder.
- `--ink-primary`: `#1F1D1B` — Tinta hitam arang pekat untuk teks utama dan garis pembatas.
- `--ink-soft`: `rgba(31, 29, 27, 0.72)` — Tinta sekunder untuk deskripsi dan paragraf pengiring.
- `--ink-faint`: `rgba(31, 29, 27, 0.35)` — Garis pemisah editorial dan pembatas kolom.
- `--accent-pink`: `#E66B9C` — Aksen pastel-magenta cerah untuk tulisan kuas, stempel pos, status dot, dan jahitan silang.
- `--accent-pink-soft`: `rgba(230, 107, 156, 0.25)` — Latar belakang badge halus dan sorotan teks.
- `--metal-silver`: `#D4D7DC` — Warna logam klip kertas 3D realistis.
- `--metal-shadow`: `rgba(0, 0, 0, 0.3)` — Bayangan kontur klip logam.

### Functional Roles
- **Canvas / Outer**: `#22201E`
- **Surface Elevation 1 (Sheet)**: `#DDD8CE` (Offset shadow `0 24px 60px rgba(0,0,0,.45)`)
- **Surface Elevation 2 (Cards / Polaroid)**: `#EAE6DF` (Border `1px solid rgba(31,29,27,0.15)`)
- **Interactive Highlight & Shadow**: `#E66B9C` (Offset solid drop shadow `4px 4px 0 #E66B9C` / `6px 6px 0 #E66B9C`)

---

## 2. Typography

### Typefaces
1. **Primary & Editorial**: `'Plus Jakarta Sans'`, sans-serif
   - `400` (Regular) — Body text, paragraf naratif (15px – 16px, line-height 1.7)
   - `500` (Medium) — Subheading & list item
   - `700` (Bold) — Judul kartu & penekanan utama
   - `800 Italic` (Extra Bold Italic) — Judul section editorial (`.ed-title`), huruf kapital (*uppercase*), letter-spacing `-0.02em`
2. **Expressive Brush / Handwritten**: `'Caveat Brush'`, cursive (atau `'Caveat'`, `'Reenie Beanie'`)
   - `700` — Coretan spidol ekspresif aksen pink (`.brush-note`), rotasi organik `-3deg` s/d `-7deg`, line-height `1.05`
3. **Monospace & Metadata**: `'Space Mono'`, monospace
   - `400`, `700` — Tag kategori teknis, folder tab (`PROJECT 01 // PYTHON`), stempel pos, tahun, tombol aksi, dan blok kode

---

## 3. Tactile Components & Primitives

### A. Lembaran Kertas Taktil (.about-sheet / .zine-card)
- Background: `var(--paper-beige)` atau `var(--paper-light)`
- Tekstur: Lapisan SVG *fractal noise grain* (`feTurbulence` opacity 0.04)
- Sudut: Sedikit melengkung halus (`border-radius: 4px` s/d `6px`)
- Rotasi Organik: `-0.8deg` s/d `1.5deg` untuk menciptakan kesan susunan kertas buatan tangan.

### B. Klip Kertas Logam Realistis (.paperclip)
- Klip vektor SVG multilayer: kawat belakang diletakkan di bawah foto polaroid (`z-index: 1`), kawat depan menjepit di atas foto (`z-index: 3`).
- Finishing: Gradien logam perak kilau (`#D4D7DC` ke `#999DA3`) dengan drop shadow natural.

### C. Cap Stempel Pos Karet (.postmark)
- Desain lingkaran ganda konsentris (*double concentric ovals*) dengan tipografi melengkung Space Mono.
- Warna: `var(--accent-pink)` dengan `opacity: 0.82` dan `mix-blend-mode: multiply` agar meresap ke dalam serat kertas.
- Rotasi: Miring `-14deg`.

### D. Jejak Jahitan Silang (.stitch-trail)
- Simbol aksen `+` dan `x` berwarna magenta (`#E66B9C`) yang tersebar berirama di tepi lembaran kertas editorial.

### E. Tombol Aksi Scrapbook (.zine-btn)
- Background: `var(--ink-primary)` `#1F1D1B` dengan teks krem `#DDD8CE` atau sebaliknya.
- Shadow: Offset solid brutalist `4px 4px 0 var(--accent-pink)`.
- Interaksi Hover: `transform: translate(-2px, -2px)` dengan shadow membesar `6px 6px 0 var(--accent-pink)`.

---

## 4. Layout & Grid Rules

- **Latar Belakang Global**: Grid titik putih samar (`rgba(255,255,255,0.03)` setiap 28px) di atas warna dasar arang `#22201E`.
- **Max Content Width**: `1080px` terpusat secara horizontal.
- **Spasi Antar Section**: `70px` hingga `90px` dengan ritme vertikal yang konsisten.
- **Responsivitas**:
  - Kolom editorial 2-kolom (300px | 1fr) otomatis berganti menjadi 1-kolom bertumpuk vertikal pada layar mobile (≤820px).
  - Elemen taktil (klip kertas & stempel pos) tetap menempel secara absolut pada wadah kartu polaroid.