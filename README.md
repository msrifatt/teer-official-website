# TEER Official Website — Starter v1

A responsive, bilingual (Bangla/English) static website starter for Team for Energy and Environmental Research (TEER).

## Included
- `index.html` — homepage and sections (About, work, recognition, news/events, attendance portal, contact)
- `styles.css` — responsive visual design
- `script.js` — language toggle and mobile navigation
- `assets/teer-logo.png` — original supplied TEER logo
- `assets/teer-leaflet-reference.jpg` — provided leaflet scan for reference only
- `admin/index.html` — setup notice; **not an active or secure admin panel**

## Local preview
Open `index.html` in a browser, or use VS Code Live Server.

## Deploy with GitHub + Netlify
1. Upload the *contents* of this folder to the root of the `teer-official-website` GitHub repository (so `index.html` is at the repository root).
2. In Netlify, import the repository and use the default static-site settings. No build command is required; publish directory is `.`.
3. Test the Netlify preview URL on desktop and mobile before connecting `teerbd.online`.
4. Do not change domain DNS until the current attendance portal and domain configuration are checked.

## Before production
- Confirm the official spelling and wording of the award/recognition against documentation.
- Add verified photos, committee details, news, events and project results.
- Configure a real backend (e.g. Supabase), authentication, role-based permissions, database policies and secure content forms before enabling admin functions.
- Confirm the exact current attendance portal URL. The current link in this starter points to `https://www.teerbd.netlify.app`; change it if the canonical URL differs.
- Review accessibility, privacy notice, analytics/cookie choices (if added), and SEO metadata.

## Content accuracy
The introductory details and listed activities are based on the supplied TEER leaflet and user-provided information. Placeholder sections are explicitly marked as awaiting verified updates; no impact statistics are invented.
