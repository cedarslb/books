# Nicolas Hanhan — Author Website

A fully static site (HTML, CSS, vanilla JS). No build step, backend, or subscription.

## Files
- `index.html` — all content and SEO/structured data
- `styles.css`, `script.js` — styling; menu, share buttons, copy link, copyright year
- `assets/images/` — book covers, author photo, social share image
- `assets/favicon/` — NH favicon (SVG + PNG)

## Preview locally
Open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit http://localhost:8000.

## Update the latest release
Edit the `<section id="latest-release">` block in `index.html`: replace the cover image (and its `alt`), title, description, facts, and Amazon link. Then add the new book to **My Books** (below). Move the previous latest book into My Books if it isn't there already. Also update the matching `Book` entry in the JSON-LD script in `<head>`.

## Add a book
In `index.html`, copy one `<article class="book-card">` block inside `.book-grid`, put it first, and change the cover, title, category, description, formats, and links. Save the cover in `assets/images/` with a descriptive name (e.g. `title-of-book-cover.jpg`). Add a `Book` entry to the JSON-LD.

## Notes
- Site address is set to https://cedarslb.github.io/books/ (canonical, Open Graph). Update if the address changes.
- Prices are not shown on the page except $7.00 for *A Grateful Heart*; update if it changes.
- Other-store links come from Books2Read (*Loving a Broken Country* eBook only).

## Free hosting
- **GitHub Pages**: create a repository, upload the contents of this folder to the root, then Settings → Pages → Deploy from branch → `main` / root.
- **Cloudflare Pages**: Workers & Pages → Create → Pages → Upload assets (or connect the repo); no build command, output directory `/`.
- **Netlify Drop**: drag the folder onto https://app.netlify.com/drop.

Custom domains are optional and are the only part that costs money.

## Accessibility notes
Skip link, semantic landmarks, keyboard-operable menu (Esc closes it), visible focus, alt text, external links open in a new tab with `rel="noopener noreferrer"` and a screen-reader notice, and reduced-motion support. An automated axe-core WCAG 2.2 AA scan found no violations.
