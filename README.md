# THE VEIL PROTOCOL — Cinematic Landing Page

A high-converting, epic, single-page React sales landing page for **"The Veil Protocol"**—a 13-part digital documentary series investigating ancient manuscripts, biblical archaeology, and forbidden human history.

Built with **React (Vite)**, **Tailwind CSS**, **Framer Motion**, and an **Apple-style canvas image-sequence scroll hero**.

---

## 🚀 Quick Start

### 1. Installation

Run the following command to install dependencies:

```bash
npm install
```

### 2. Development Server

Start the Vite development server:

```bash
npm run dev
```

Open your browser at the URL indicated by Vite (usually `http://localhost:5173`).

### 3. Production Build

To test or generate the production build:

```bash
npm run build
npm run preview
```

---

## 🎬 Hero Image Sequence Configuration

The Hero section uses a sticky `<canvas>` element driven by smooth `requestAnimationFrame` scroll progress calculation to animate an image sequence.

### Where to Place Your Hero Frames:

Place your frame sequence in:
```
public/images/hero/
```

### Frame Naming Convention:
- `frame-0001.jpg`, `frame-0002.jpg`, ..., `frame-0120.jpg`
*(PNG format `.png` and 3-digit names are also automatically supported as fallback)*

### Image Specifications Recommendation:
- **Resolution:** 1920x1080 (16:9 ratio) or higher
- **Format:** Optimized JPG (compressed to ~150KB–300KB per image)
- **Total Frames:** Default is **120 frames**

### Changing Total Frames:

If you want to use a different frame count (e.g. 60 or 180 frames), open `src/components/Hero.jsx` and modify the constant at the top of the file:

```javascript
const TOTAL_FRAMES = 120; // Set to your exact number of sequence frames
```

> **Note:** The project includes an atmospheric procedural canvas fallback mode. If frames are missing or still loading, a dark gold mist and particle vignette will render seamlessly so the site never breaks.

---

## 🎨 Visual Identity & Tech Stack

- **Framework:** React 18 + Vite (Pure JavaScript / JSX)
- **Styling:** Tailwind CSS (Custom dark parchment palette & gold tokens)
- **Motion:** Framer Motion (Scroll entrance animations)
- **Typography:** 
  - Display / Headings: **Cinzel** (Google Fonts)
  - Body Copy: **Manrope** / **Inter** (Google Fonts)
- **CTA Target:** All CTA buttons point directly to `https://santuzmedia.gumroad.com/l/TheVeilProtocol`

---

## 📁 Project Structure

```
The Veil Protocol/
├── public/
│   ├── favicon.svg
│   └── images/hero/          # Sequence frames (frame-0001.jpg ... frame-0120.jpg)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Sticky translucent navigation bar
│   │   ├── Hero.jsx          # Scroll-driven canvas sequence hero
│   │   ├── Intro.jsx         # Mystery opening narrative
│   │   ├── Questions.jsx     # "What Do Ancient Texts Truly Reveal?" (3 cards)
│   │   ├── Chapters.jsx      # 13 Documentaries interactive grid
│   │   ├── Discoveries.jsx  # Key discoveries checklist
│   │   ├── Access.jsx       # Premium Access breakdown + featured CTA
│   │   ├── Disclaimer.jsx   # Serious educational research disclaimer
│   │   ├── CTA.jsx          # Final closing conversion section
│   │   ├── Footer.jsx       # Solemn footer with credits
│   │   └── CTAButton.jsx    # Reusable Gumroad CTA button with shine effect
│   ├── App.jsx               # Main page layout
│   ├── main.jsx              # React mounting root
│   └── index.css             # Base styles, scrollbars, texture overlays
├── index.html                # Google Fonts & SEO metadata
├── vite.config.js
├── tailwind.config.js
└── package.json
```
