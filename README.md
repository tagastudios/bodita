# Bodita — Wedding Website

A bilingual wedding website for **Jose Tannous & Odarlis Perez**, featuring RSVP confirmation, live countdown, love story timeline, and virtual attendance via Zoom.

![Wedding Date](https://img.shields.io/badge/date-November%2028%2C%202020-coral)

---

## Overview

A single-page wedding website built with HTML5, CSS3, and JavaScript. It was created during 2020 and tailored for a hybrid ceremony (in-person + Zoom) with personalized content, RSVP handling, and responsive layout.

---

## Technologies

| Category | Stack |
|----------|-------|
| **Markup** | HTML5 (semantic structure) |
| **Styling** | CSS3, Bootstrap 3, SASS |
| **Scripting** | Vanilla JavaScript, jQuery |
| **Backend / Data** | Firebase (Firestore, Auth) |
| **Fonts** | Google Fonts (Source Sans Pro, Clicker Script) |
| **Icons** | Icomoon, Simple Line Icons, Flaticon SVGs |
| **Animations** | Animate.css, jQuery Waypoints, jQuery Easing |
| **Media** | Owl Carousel, Magnific Popup, Flexslider |
| **Layout** | jQuery Stellar (parallax), Modernizr |

---

## Highlights

### Custom Features

- **Firebase RSVP form** — Guests confirm attendance via a form that saves name and email to Firestore, with error handling and fallback messaging.
- **Live countdown** — Real-time countdown to the wedding date (Nov 28, 2020, 6:00 PM).
- **Love story timeline** — Vertical timeline with real milestones (met Apr 2014, couple Jun 2019, engaged Nov 2020).
- **Zoom integration** — Dedicated section with Zoom link and credentials for remote attendees.
- **Google Maps embed** — Venue map (Studio 5 Ten, Lauderhill, FL) and link to directions.
- **Spanish localization** — Full site content in Spanish.

### Technical Choices

- **Responsive design** — Bootstrap grid and mobile-first approach for phones, tablets, and desktops.
- **Scroll-triggered animations** — Sections animate on scroll using Waypoints + Animate.css.
- **Parallax backgrounds** — Stellar.js used for layered background effects.
- **Inline SVG support** — SVG icons loaded and injected for better control.
- **Structured content** — Sections reduced and focused on ceremony, story, and RSVP.
- **Fallback UX** — Clear error message with WhatsApp option if RSVP submission fails.

### Content and UX

- Personalized hero with couple names and wedding date.
- Couple introduction with photos and parent names.
- Ceremony details (date, time, venue).
- RSVP form requesting name and email for confirmations and follow-up info.

---

## Project Structure

```
bodita/
├── index.html          # Main page
├── .env.example        # Env template (copy to .env — gitignored)
├── .env                # Your credentials (gitignored)
├── config.js           # Generated from .env at build (gitignored)
├── scripts/
│   └── build-config.js # Generates config.js from env vars
├── package.json        # build, vercel-build, dev scripts
├── css/
│   ├── style.css       # Custom styles
│   ├── bootstrap.css   # Bootstrap framework
│   ├── animate.css
│   └── ...
├── js/
│   ├── main.js         # UI logic, countdown, parallax, animations
│   ├── confirmar.js    # Firebase RSVP form handling
│   ├── config-loader.js # Injects Zoom credentials from config
│   └── ...
├── sass/               # SASS source files
├── images/
│   ├── fotos/          # Wedding photos
│   └── flaticon/       # SVG icons
└── fonts/
```

---

## Local Development

Same config flow as Vercel — **env vars everywhere**:

1. **Install dependencies** (for the build script):

   ```bash
   npm install
   ```

2. **Create `.env`** from the template:

   ```bash
   cp .env.example .env
   ```

   Edit `.env` and add your Firebase and Zoom credentials.  
   **`.env` is gitignored** — never committed.

3. **Build** (generates `config.js` from your env vars):

   ```bash
   npm run build
   ```

4. **Serve** the site:

   ```bash
   npm run dev
   # or: npx serve .   or   python3 -m http.server 8000
   ```

5. Open `http://localhost:3000` (or 8000 if using Python).

### Environment Variables (`.env.example`)

| Variable | Purpose |
|----------|---------|
| `FIREBASE_*` | RSVP form — stores confirmations in Firestore |
| `ZOOM_MEETING_URL` | Full Zoom join link (with `?pwd=...` if needed) |
| `ZOOM_MEETING_ID` | Meeting ID |
| `ZOOM_PASSWORD` | Meeting password |

**Security:** Firebase client config is public by design; access is via [Firestore Security Rules](https://firebase.google.com/docs/firestore/security/get-started). Zoom credentials should stay private.

### Firebase Setup (RSVP)

1. Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com).
2. Enable **Firestore** and create a `confirmados` collection.
3. Copy your config from Project Settings → Your apps into `.env` (same keys as Vercel).
4. Configure [Firestore security rules](https://firebase.google.com/docs/firestore/security/get-started) for `confirmados`.

### Deploy to Vercel

Same env vars as local — add them in Vercel Dashboard → Settings → Environment Variables:

   | Variable | Description |
   |----------|-------------|
   | `FIREBASE_API_KEY` | Firebase API key |
   | `FIREBASE_AUTH_DOMAIN` | e.g. `your-project.firebaseapp.com` |
   | `FIREBASE_DATABASE_URL` | e.g. `https://your-project.firebaseio.com` |
   | `FIREBASE_PROJECT_ID` | Firebase project ID |
   | `FIREBASE_STORAGE_BUCKET` | e.g. `your-project.appspot.com` |
   | `FIREBASE_MESSAGING_SENDER_ID` | Messaging sender ID |
   | `FIREBASE_APP_ID` | Firebase app ID |
   | `FIREBASE_MEASUREMENT_ID` | Analytics measurement ID (optional) |
   | `ZOOM_MEETING_URL` | Full Zoom join URL with `?pwd=...` |
   | `ZOOM_MEETING_ID` | Meeting ID (e.g. `671 519 1656`) |
   | `ZOOM_PASSWORD` | Meeting password |

Connect your repo to Vercel — it runs `npm run build` on deploy (same script as local). Each push deploys.

---

## License

This project is shared for portfolio and reference.  
Wedding content and images belong to the couple.  
Third-party assets (e.g., Bootstrap, jQuery, icons) follow their respective licenses.

---

## Acknowledgments

Built for Jose & Odarlis’ wedding, November 2020.  
