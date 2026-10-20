# Local web fonts

The site serves its fonts from `public/fonts`; it makes no Google Fonts requests at runtime. Files are downloaded unmodified from the Google Fonts CSS API, with its Latin and Latin Extended subsets (including Hungarian ő/ű).

- Montserrat v31, normal, variable weights 300–700. [Upstream](https://github.com/google/fonts/tree/main/ofl/montserrat), [included SIL Open Font License](../public/fonts/Montserrat-OFL.txt).
- Playfair Display v40, normal, weight 600 (the weight used by display headings). [Upstream](https://github.com/google/fonts/tree/main/ofl/playfairdisplay), [included SIL Open Font License](../public/fonts/PlayfairDisplay-OFL.txt).

Downloaded on 2026-10-21 using `https://fonts.googleapis.com/css2?family=Montserrat:wght@300..700&family=Playfair+Display:wght@600&display=swap` with a modern Chrome user agent. The four WOFF2 files are checked in, so builds do not need to download them.

CSS retains the supplied Unicode ranges and uses `font-display: swap`. The initial HTML preloads the local font subsets and, only on `/`, the same desktop/mobile photo selected by the homepage's `<picture>`. Font files use versioned filenames and long-lived Netlify cache headers; change filenames and references when replacing a font.
