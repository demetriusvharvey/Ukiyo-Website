# Ukiyo Virginia

Ukiyo is a nightlife and events website built for **Ukiyo Virginia**, featuring upcoming events, Instagram integration, and venue information with a modern, high‑end UI inspired by top nightlife brands.

---

## 🚀 Tech Stack

- **Next.js 13+ (App Router)**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Google Fonts (Italiana, Inter)**
- **Eventbrite** (ticket links)
- **Instagram** (social integration)

---

## 📁 Project Structure
src/
└── app/
├── layout.tsx # Global layout (header, footer, fonts)
├── page.tsx # Home page (hero, events, instagram, FAQ)
├── globals.css # Minimal global styles
├── events/ # Events page
├── venue/ # Venue page
├── reservations/ # Reservations page
├── menu/ # Menu page
└── faqs/ # FAQ page


---

## 🎨 UI Overview

- **Hero section** with brand typography
- **Events section** with Eventbrite ticket links
- **Instagram section** (4x2 grid) linking to @ukiyo_virginia
- **FAQ section** with expandable answers
- **Distinct section backgrounds** for visual separation
- **Shared header & footer** across all pages

---

## 🧑‍💻 Development Workflow

### Branches
- `main` → production / final code
- `ukiyo-ui` → active development branch

### Daily workflow
```bash
git checkout ukiyo-ui
git pull origin ukiyo-ui
