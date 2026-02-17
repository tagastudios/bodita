/**
 * Configuration Template for Bodita Wedding Website
 *
 * SETUP INSTRUCTIONS:
 * 1. Copy this file to config.js:  cp config.example.js config.js
 * 2. Fill in your values below (config.js is gitignored and will not be committed)
 * 3. Never commit config.js — it may contain sensitive credentials
 *
 * SECURITY NOTES:
 * - Firebase client config is designed to be public; security is via Firestore Rules
 * - Zoom meeting password and link SHOULD be kept private — never commit real values
 */

window.APP_CONFIG = {
  // --- Firebase (required for RSVP form) ---
  // Get these from: Firebase Console > Project Settings > Your apps
  firebase: {
    apiKey: "YOUR_FIREBASE_API_KEY",
    authDomain: "your-project.firebaseapp.com",
    databaseURL: "https://your-project.firebaseio.com",
    projectId: "your-project-id",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "G-XXXXXXXXXX", // Optional, for Analytics
  },

  // --- Zoom (optional — for virtual attendance) ---
  // Leave empty strings to hide the Zoom section
  zoom: {
    meetingUrl: "https://zoom.us/j/YOUR_MEETING_ID?pwd=YOUR_ENCODED_PASSWORD",
    meetingId: "XXX XXX XXXX",
    password: "your_meeting_password",
  },
};
