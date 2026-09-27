# Site photos

Drop a photo here named after its slot and it appears on the site after the
next deploy. Any of `.jpg`, `.jpeg`, `.png`, `.webp`, `.avif` works.

Each empty slot on the site shows its expected file name, so browse the site
to see what goes where. Current slots:

| File name              | Where it shows                              |
| ---------------------- | ------------------------------------------- |
| `home-hero`            | Home, next to the main headline             |
| `home-story`           | Home, Battal cloud burst story (main)       |
| `home-story-2`         | Home, Battal story (small)                  |
| `home-story-3`         | Home, Battal story (small)                  |
| `about-story`          | About, "Our story"                          |
| `year-2025`            | About, 2025 on the timeline                 |
| `year-2024`            | About, 2024 on the timeline                 |
| `year-2022`            | About, 2022 on the timeline                 |
| `program-<slug>`       | Program card and top of its page            |
| `program-<slug>-<n>`   | Each initiative on a program page (1, 2, …) |

Program slugs: `emergency-relief`, `education`, `healthcare`, `livelihood`,
`winter-relief`.

Tips: landscape photos around 1600px wide work best; keep each under ~500 KB
(Next.js serves resized versions automatically). Real people at real drives
beat posed or stock shots.
