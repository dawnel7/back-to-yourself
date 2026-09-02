BACK TO YOURSELF — PRIVATE PWA MVP

What this is:
A phone-friendly, installable web app containing the 365-day Back To Yourself journal.

Privacy:
- Journal entries are stored locally in your browser on the device.
- The app does not send journal entries to a server.
- The app itself can be hosted publicly, but the writing stays on the device.
- Export a backup before clearing browser data or changing phones.

Important:
This first version does NOT provide cloud sync between devices and does not encrypt entries with a separate passcode. For stronger privacy/security, that can be added in a later version.

How to put it online:
1. Upload the files in this folder to a static HTTPS host.
2. Open the site on your phone.
3. Use your browser's "Add to Home Screen" / "Install" option.
4. The app can then open like a normal phone app.

Files:
index.html — app shell
styles.css — design
app.js — journal content + saving
manifest.webmanifest — install metadata
service-worker.js — offline support
icon.svg — app icon

The source journal used to populate the app:
Back_To_You_Journal_365_Day_Digital.docx
