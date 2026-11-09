# Image credits

## Home hero: open sea near Budva

- Local assets: `public/images/index/hero-budva-open.webp` and `public/images/index/hero-budva-open-mobile.webp`.
- Photographer: Ekin Deniz Çoban (@ekindenizc).
- Photo: [A large body of water sitting next to a lush green hillside](https://unsplash.com/photos/a-large-body-of-water-sitting-next-to-a-lush-green-hillside-QCoBEFPBGsI).
- Location stated by the photo page: Budva, Montenegro, a destination in the site’s transfer list.
- License: [Unsplash License](https://unsplash.com/license), verified on the individual free photo page on 2026-10-20. Commercial use is allowed without mandatory attribution.
- Downloaded source: `https://images.unsplash.com/photo-1688918466975-718e5d9b0623?fm=jpg&q=90&w=2800&fit=max` (2800 × 1521).
- Desktop derivative: full composition resized to 2400 px wide, WebP quality 80.
- Mobile derivative: portrait crop at source coordinates left 380, top 320, width 800, height 1201; WebP quality 82. Less sky, with the coast retained alongside the sea; CSS uses a 20% horizontal focal position for different phone proportions.
- A masked 1 px CSS backdrop blur fades away from the copy (centered on desktop, left aligned on mobile); the source photo remains unmodified.
- No generative changes or upscaling. Responsive image selection keeps phones from downloading the desktop file.
- Status: used on the Netlify review preview; this is not the final production website.

The previous `main3.png` asset is retained. Its beach could not be independently identified. This entry covers only the replacement hero, not the licensing of other existing site images.

## Client-supplied town and landmark photographs

- Local originals: 19 JPEG files under `public/images/attractions/varosok/` and `public/images/attractions/nevezetessegek/`, received on 2026-11-09.
- The client’s content contributor supplied these for the Montapart website and identified them as her own photographs in the accompanying email. They are client-supplied material, not stock or Creative Commons assets.
- Original image bytes are preserved. The existing image pipeline creates responsive WebP copies with camera orientation applied; no generated imagery or upscaling is used.
- Sveti Stefan currently illustrates the new page and its home card provisionally; the client’s final card-image choice is pending.
- Private Drive file IDs and original filename mappings are recorded in `docs/montapart-photos-20261109.local` and are not published.

## Provisional beach stock photographs

Downloaded on 2026-11-09. These three photographs replace the unrelated beach stock imagery in the Látnivalók beach cards. The cards are provisional; detailed client-supplied beach copy is still pending.

| Local asset under `public/images/attractions/strandok/` | Photographer and photo page | Location stated by the photographer |
| --- | --- | --- |
| `sutomore.jpg` | Oleksandr (@pan_snig), [A couple of rocks sitting on top of a sandy beach](https://unsplash.com/photos/a-couple-of-rocks-sitting-on-top-of-a-sandy-beach-yHYF1jdZBdc) | Sutomore, Montenegro; the specific beach is not named, so the card uses only the town name. |
| `sveti-stefan.jpg` | Lieana Slapinsh (@smitik), [An aerial view of a small village on an island](https://unsplash.com/photos/an-aerial-view-of-a-small-village-on-an-island-5zYrv9cHDqE) | Sveti Stefan, Montenegro. CSS aligns the portrait image to the bottom to retain the beach in the card crop. |
| `drobni-pijesak.jpg` | Stefan Kostić (@thestefankostic), [A large rock in the middle of a body of water](https://unsplash.com/id/foto/batu-besar-di-tengah-badan-air-JGcRuNmZonQ) | Drobni Pijesak beach, Drobnići, Montenegro. |

- Each photo page identifies the photograph as free under the [Unsplash License](https://unsplash.com/license), which permits free commercial use. Verified 2026-11-09.
- Download sources, respectively: `https://images.unsplash.com/photo-1681563016952-29bb01ac0ea6`, `https://images.unsplash.com/photo-1727551237079-9911cf8e3200`, `https://images.unsplash.com/photo-1635255227873-b81dccdce3e7`.
- Download parameters: `fm=jpg&q=85&w=1600&fit=max`. The existing pipeline produces responsive WebP variants. No generated imagery or upscaling is used.

## Home category thumbnails — 2026-11-09

- The Látnivalók home card now uses the client-supplied Kotor / San Giovanni photograph, `public/images/attractions/nevezetessegek/san-giovanni-erod.jpg`, covered by the client-supplied photographs section above. It replaces the unrelated monument stock photograph.
- The Hotelek home card now uses `public/images/index/hotelek-budva.jpg`: Lieana Slapinsh (@smitik), [An aerial view of a hotel and beach](https://unsplash.com/photos/an-aerial-view-of-a-hotel-and-beach-JxkIW9gjR2Y). The photographer identifies the location as Budva, Montenegro. Free commercial use under the [Unsplash License](https://unsplash.com/license), verified on the individual photo page on 2026-11-09.
- Hotel photo download: `https://images.unsplash.com/photo-1727537199624-ee471d23c202?fm=jpg&q=85&w=1600&fit=max`. Responsive WebP variants are produced by the existing pipeline, without generated content or upscaling.
- The hotel image illustrates the general home category only. It is not assigned to any of the existing hotel listings, whose final identities and corresponding photographs remain to be supplied.
- The Miért éppen Montenegró? card retains the provisional client-supplied Sveti Stefan photograph. The Apartmanok card uses the existing client apartment-gallery photograph `public/images/apartmanok/rusztikus/images/ap3/rusztikus_9.JPG`, showing the sea-view terrace, instead of the previous exterior image. The individual apartment listings and their galleries are unchanged.


## Provisional Cetinje photograph — 2026-11-09

- Local original: `public/images/attractions/varosok/cetinje.jpg`.
- Photographer: Refik Mollabeqiri; [photo on Unsplash](https://unsplash.com/photos/v6_lyoCu7R8).
- The photographer identifies the location as Cetinje, Montenegro, and describes the subject as a local church. The website uses it as a provisional city illustration, pending a client-supplied replacement.
- Free use under the [Unsplash License](https://unsplash.com/license), verified on the individual photo page on 2026-11-09.
- Download: `https://images.unsplash.com/photo-1629293403651-7789f68ce158?fm=jpg&q=85&w=1600&fit=max`. Responsive WebP variants use the existing pipeline, without generative changes or upscaling.

The additional client-supplied photograph is retained as `public/images/attractions/nevezetessegek/lovcen-mauzoleum.jpg`, covered by the client-supplied photographs section above. Its description is pending. The card now uses the provisional exterior photograph credited below.


## Lovćen-mauzóleum exterior — 2026-11-09

- Local asset: `public/images/attractions/nevezetessegek/lovcen-mauzoleum-stock.jpg`.
- Photographer: **Ingo Mehling / Wikimedia Commons**.
- Source: [Njegos mausoleum frontside.jpg](https://commons.wikimedia.org/wiki/File:Njegos_mausoleum_frontside.jpg), taken 2025-06-08.
- License: [Creative Commons Attribution-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-sa/4.0/), verified on the file page 2026-11-09. The image and its derivatives remain under this license; the license applies to this image, not to the site's original code or unrelated assets.
- Downloaded the existing 1280 × 853 thumbnail: `https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5c/Njegos_mausoleum_frontside.jpg/1280px-Njegos_mausoleum_frontside.jpg`.
- The Lovćen card links to its own photo page, where the author/source and license links and modification notice appear below the photograph; they are not repeated on the list card. The existing responsive pipeline creates resized WebP copies; the card displays a centered 4:3 crop via CSS. No generative changes or upscaling. The downloaded photograph is otherwise unchanged.
- The earlier client-supplied interior photograph is retained separately for potential later use. No placeholder description was added. The card opens a photo page with the title and credit, pending the client description.
