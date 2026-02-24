# Portfolio — Atikun Chinnabud

**Stack:** React 18 + TypeScript + Vite + Tailwind CSS v4 + Framer Motion

---

## Setup (ทำครั้งแรกครั้งเดียว)

```bash
# 1. สร้าง vite project
npm create vite@latest portfolio -- --template react-ts
cd portfolio

# 2. ติดตั้ง dependencies
npm install

# 3. Tailwind CSS v4 (ใช้ vite plugin)
npm install -D tailwindcss @tailwindcss/vite

# 4. Framer Motion
npm install framer-motion

# 5. Fontsource
npm install @fontsource/dm-serif-display @fontsource/dm-sans
```

---

## โครงสร้าง Project

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── profile/
│       │   └── photo-main.jpg          ← รูปตัวเองบน hero
│       ├── projects/
│       │   ├── shaman/
│       │   │   ├── cover.jpg
│       │   │   ├── gameplay-1.jpg
│       │   │   ├── gameplay-2.jpg
│       │   │   ├── art-1.jpg
│       │   │   └── qr.png
│       │   ├── stardust/
│       │   │   ├── cover.jpg
│       │   │   ├── gameplay-1.jpg
│       │   │   ├── char-v1.jpg
│       │   │   ├── char-v2.jpg
│       │   │   ├── boss-1.jpg
│       │   │   ├── boss-2.jpg
│       │   │   └── qr.png
│       │   ├── merge-td/
│       │   │   ├── cover.jpg
│       │   │   ├── gameplay-1.jpg
│       │   │   ├── leaderboard.jpg
│       │   │   ├── dashboard.jpg
│       │   │   └── qr.png
│       │   ├── farmisekai/
│       │   │   ├── cover.jpg
│       │   │   ├── level-design.jpg
│       │   │   ├── ui-sketch.jpg
│       │   │   ├── char-sheet.jpg
│       │   │   └── qr.png
│       │   └── faceless/
│       │       ├── cover.jpg
│       │       ├── gameplay-1.jpg
│       │       ├── chars.jpg
│       │       └── qr.png
│       ├── activities/
│       │   ├── ggj2026.jpg
│       │   └── tgs2025.jpg
│       └── certificates/
│           └── ggj2026.jpg
│
├── src/
│   ├── components/
│   │   └── Navbar.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ActivitySection.tsx
│   │   └── ContactSection.tsx
│   ├── data/
│   │   └── portfolio.ts       ← แก้ข้อมูลที่นี่
│   ├── lib/
│   │   └── motion.ts          ← shared animation variants
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── index.html
├── vite.config.ts
└── tsconfig.json
```

---

## การใส่รูปภาพ

1. สร้าง folder ตามโครงสร้างด้านบนใน `public/images/`
2. ใส่รูปตามชื่อไฟล์ที่กำหนดไว้ใน `src/data/portfolio.ts`
3. **ถ้ายังไม่มีรูป** — ไม่ต้องกังวล เว็บจะ fallback แสดงชื่อโปรเจกต์แทนให้อัตโนมัติ

---

## Dev Server

```bash
npm run dev
```

เปิด http://localhost:5173

---

## Build

```bash
npm run build
npm run preview
```

---

## Design System

| Variable | Value | ใช้ทำอะไร |
|---|---|---|
| `--color-bg` | `#F5F0E8` | background หลัก (warm cream) |
| `--color-bg-alt` | `#EDE8DE` | section alt bg |
| `--color-surface` | `#FDFAF4` | card / modal bg |
| `--color-ink` | `#1C1A17` | text หลัก (warm charcoal) |
| `--color-ink-muted` | `#6B6459` | text รอง |
| `--color-accent` | `#C45C2A` | burnt orange — CTA, labels |
| `--color-line` | `#D4CFC4` | border / divider |

**Fonts:** DM Serif Display (heading) + DM Sans (body)

---

## แก้ข้อมูลตัวเอง

แก้ที่ไฟล์เดียว: `src/data/portfolio.ts`
- `personal` — ชื่อ, bio, contact, education
- `skills` — hard/soft skills
- `projects` — โปรเจกต์ทั้งหมด
- `activities` — กิจกรรม
- `certificates` — เกียรติบัตร
