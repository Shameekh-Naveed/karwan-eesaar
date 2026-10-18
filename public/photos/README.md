# Site photos

Drop a photo here named after its slot and it appears on the site after the
next deploy. Any of `.jpg`, `.jpeg`, `.png`, `.webp`, `.avif` works. To swap a
photo, replace the file and keep the name.

Each empty slot on the site shows its expected file name, so browse the site
to see what goes where. Current slots:

| File name                | Where it shows                                   |
| ------------------------ | ------------------------------------------------ |
| `home-hero`              | Home, next to the main headline                  |
| `home-story`             | Home, featured story (main photo)                |
| `home-story-2`           | Home, featured story (small)                     |
| `home-story-3`           | Home, featured story (small)                     |
| `about-story`            | About, "Our story"                               |
| `year-2025`              | About, 2025 on the timeline                      |
| `year-2024`              | About, 2024 on the timeline                      |
| `year-2022`              | About, 2022 on the timeline                      |
| `team-<name>`            | About, team member portrait (square, face centred) |
| `program-<slug>`         | Program card and top of its page                 |
| `program-<slug>-<n>`     | Each initiative on a program page (1, 2, …); an initiative with no photo shows as text only |
| `blog-<post-slug>`       | Blog list card and top of that post              |
| `volunteers`             | Get Involved, next to the volunteer form         |

Program slugs: `emergency-relief`, `education`, `healthcare`, `livelihood`,
`winter-relief`.

Still empty (no photo of this activity yet):
`program-livelihood`, `program-livelihood-1`, `program-livelihood-2`,
`program-emergency-relief-4` (meals for patients' families),
`program-education-1` (IT classes), `program-education-2` (Taekwondo),
`program-healthcare-2` (blood donation), `program-healthcare-3` (emergency ward),
`program-winter-relief-1` (SOS Village), `program-winter-relief-2` (old age homes).

Tips: landscape photos around 1600px wide work best; keep each under ~500 KB
(Next.js serves resized versions automatically). Real people at real drives
beat posed or stock shots. Photos of children need the parents' consent.
