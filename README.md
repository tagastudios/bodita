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
├── config.example.js   # Template for secrets (copy to config.js)
├── config.js           # Your credentials (gitignored — create from example)
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

1. **Clone or download** the project.
2. **Create your config** (required for RSVP and Zoom):

   ```bash
   cp config.example.js config.js
   ```

   Edit `config.js` and add your Firebase and Zoom credentials.  
   **`config.js` is gitignored** — it will never be committed. This keeps your credentials out of the repo.

3. **Serve locally** with any static server:

   ```bash
   # Using Python
   python3 -m http.server 8000

   # Using Node.js (npx)
   npx serve .
   ```

4. Open `http://localhost:8000` (or the port your server uses).

### Config Template (`config.example.js`)

| Variable | Purpose |
|----------|---------|
| `firebase.*` | RSVP form — stores confirmations in Firestore. Required for RSVP. |
| `zoom.meetingUrl` | Full Zoom join link (with `?pwd=...` if needed) |
| `zoom.meetingId` | Meeting ID (e.g. `XXX XXX XXXX`) |
| `zoom.password` | Meeting password |

**Security notes:**

- **Firebase client config** is intended to be public; access is controlled via [Firestore Security Rules](https://firebase.google.com/docs/firestore/security/get-started). Ensure your `confirmados` collection has appropriate rules.
- **Zoom credentials** should be kept private. Never commit real values — use `config.js` (gitignored).

### Firebase Setup (RSVP)

1. Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com).
2. Enable **Firestore** and create a `confirmados` collection.
3. Copy your config from Project Settings → Your apps into `config.js`.
4. Configure [Firestore security rules](https://firebase.google.com/docs/firestore/security/get-started) for `confirmados`.

---

## License

This project is shared for portfolio and reference.  
Wedding content and images belong to the couple.  
Third-party assets (e.g., Bootstrap, jQuery, icons) follow their respective licenses.

---

## Acknowledgments

Built for Jose & Odarlis’ wedding, November 2020.  
