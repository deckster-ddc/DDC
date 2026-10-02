/**
 * Startet alle Funktionen der Seite.
 */

new Menu(
    document.getElementById("ham-menu"),
    document.getElementById("header-nav-links")
);

new Reveal(document.querySelectorAll(".reveal"));

const lightbox = new Lightbox(document.getElementById("lightbox"));
document.querySelectorAll("[data-lightbox-group]").forEach((group) => lightbox.registerGroup(group));
