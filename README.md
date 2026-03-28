# 🚀 Personal Portfolio — Kyrylo Pavlov

A modern, high-performance personal portfolio built with React + TypeScript, featuring smooth animations, multilingual support, and a contact form.

**Live Demo:** [personal-portfolio-landing-theta.vercel.app](https://personal-portfolio-landing-theta.vercel.app/)

![PreviewImage](https://github.com/user-attachments/assets/b7d2c56a-a3a4-441d-b680-7ed8577b3a7d)

![Lighthouse Score](https://img.shields.io/badge/Lighthouse-97%2F100-brightgreen)
![Deploy](https://img.shields.io/badge/Deployed-Vercel-black)
![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)

---

## ✨ Features

- ⚡ **Lighthouse 97/100 Performance** — optimized for speed and SEO
- 🌍 **Multilingual (i18n)** — Russian, English, German with auto language detection
- 📬 **Contact Form** — EmailJS integration with toast notifications
- 🎨 **Smooth Animations** — Framer Motion throughout
- 📱 **Fully Responsive** — mobile-first design
- 🔒 **GDPR Compliant** — Impressum & Datenschutzerklärung included
- 🌑 **Dark Theme** — custom design system

---

## 🛠 Tech Stack

| Technology            | Purpose              |
| --------------------- | -------------------- |
| React 18 + TypeScript | Core framework       |
| Vite                  | Build tool           |
| Tailwind CSS v4       | Styling              |
| Framer Motion         | Animations           |
| EmailJS               | Contact form         |
| react-i18next         | Internationalization |
| react-icons           | Icons                |
| React-hot-toast       | Toast notifications  |

---

## 📁 Project Structure

```
src/
├── assets/
│   └── images/          # WebP optimized images
├── components/
│   ├── layout/
│   │   ├── header/      # Sticky header with mobile menu
│   │   └── footer/
│   ├── sections/
│   │   ├── hero/        # Hero section
│   │   ├── projects/    # Projects grid
│   │   ├── about/       # About + animated stats
│   │   └── contact/     # Contact form
│   └── ui/
│       ├── button/      # Button (primary/secondary/link)
│       ├── badge/       # Tech badge
│       ├── callMe/
│       ├── callsGrid/
│       ├── skillBadge/
│       ├── input/       # Form input
│       ├── textarea/    # Form textarea
│       ├── modal/       # Mobile menu modal
│       ├── stat/        # Animated counter
│       ├── project/     # Project card
│       └── sectionLine/ # Gradient divider
├── i18n/
│   ├── i18n.ts
│   └── locales/
│       ├── en/en.json
│       ├── ru/ru.json
│       └── de/de.json
├── App.tsx
├── main.tsx
└── index.css
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/dorbinDevFRLNCR/personal-portfolio-landing.git
cd personal-portfolio-landing
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

---

## 📊 Lighthouse Scores

| Metric         | Score |
| -------------- | ----- |
| Performance    | 97    |
| Accessibility  | 94    |
| Best Practices | 100   |
| SEO            | 100   |

![Lighthouse Scores](https://github.com/user-attachments/assets/be134f06-3ac9-4950-bb19-f45ff51fc2bc)

---

## 📬 Contact

- **Portfolio:** [personal-portfolio-landing-theta.vercel.app](https://personal-portfolio-landing-theta.vercel.app/)
- **GitHub:** [@dorbinDevFRLNCR](https://github.com/dorbinDevFRLNCR)
- **Telegram:** [@dorbinDev](https://t.me/dorbinDev)
