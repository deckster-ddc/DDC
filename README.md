# DDC

DEMOLITION DIRT CREW – Your East German Tekkno Network.

**Inhalte ändern (Events, Bio, Flyer):** siehe [ANLEITUNG.md](ANLEITUNG.md).

---

## Technik

Die Seite wird mit [Jekyll](https://jekyllrb.com/) gebaut. Das macht GitHub Pages bei jedem Push automatisch.

| Ordner / Datei | Inhalt |
|---|---|
| `_data/*.yml` | alle Inhalte: Events, Timeline, Crew, Kontakt |
| `assets/img/flyer/` | Flyer; die Galerie liest den Ordner automatisch aus |
| `index.html`, `galerie.html` | Seiten |
| `impressum.md`, `datenschutz.md` | Rechtstexte; Angaben kommen aus `_data/impressum.yml` |
| `_layouts/`, `_includes/` | HTML-Gerüst, Header, Footer, Lightbox, Icons |
| `_sass/` + `assets/css/style.scss` | Styles (SCSS) |
| `assets/js/` | Menü, Scroll-Animation, Lightbox |

**SCSS-Hinweis:** GitHub Pages nutzt eine ältere Sass-Version. Partials deshalb mit `@import` einbinden,
nicht mit `@use`/`@forward`. CSS-Funktionen wie `min()`, `max()` und `clamp()` vermeiden.

### Lokale Vorschau

Voraussetzung: [Ruby mit DevKit](https://rubyinstaller.org/).

```sh
bundle install
bundle exec jekyll serve --livereload
```

Danach unter http://localhost:4000 öffnen.
