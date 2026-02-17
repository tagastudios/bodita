/**
 * Generates config.js from environment variables.
 * Same process for local and Vercel:
 * - Local: copy .env.example to .env, fill in values, run npm run build
 * - Vercel: set env vars in Dashboard, build runs automatically
 */

require("dotenv").config();

const fs = require("fs");
const path = require("path");

const config = {
  firebase: {
    apiKey: process.env.FIREBASE_API_KEY || "",
    authDomain: process.env.FIREBASE_AUTH_DOMAIN || "",
    databaseURL: process.env.FIREBASE_DATABASE_URL || "",
    projectId: process.env.FIREBASE_PROJECT_ID || "",
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "",
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || "",
    appId: process.env.FIREBASE_APP_ID || "",
    measurementId: process.env.FIREBASE_MEASUREMENT_ID || "",
  },
  zoom: {
    meetingUrl: process.env.ZOOM_MEETING_URL || "",
    meetingId: process.env.ZOOM_MEETING_ID || "",
    password: process.env.ZOOM_PASSWORD || "",
  },
};

const output = `/**
 * Generated at build time from environment variables.
 * Do not edit — configure via Vercel Dashboard or .env
 */
window.APP_CONFIG = ${JSON.stringify(config, null, 2)};
`;

const outPath = path.join(__dirname, "..", "config.js");
fs.writeFileSync(outPath, output);
console.log("config.js generated");
