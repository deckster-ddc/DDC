/**
 * Vollbild-Ansicht für Flyer.
 *
 * Jeder Bereich mit dem Attribut "data-lightbox-group" ist eine eigene Gruppe.
 * Darin öffnet jedes Element mit "data-lightbox-src" die Lightbox.
 * Vor/Zurück blättert nur innerhalb dieser Gruppe.
 *
 * Bedienung: Pfeiltasten zum Blättern, Escape oder Klick daneben zum Schließen,
 * auf dem Handy auch wischen.
 */
class Lightbox {

    static SWIPE_DISTANCE = 50;

    /** @param {HTMLDialogElement} dialog */
    constructor(dialog) {
        this.dialog = dialog;
        this.image = dialog.querySelector(".lightbox-image");
        this.title = dialog.querySelector("#lightbox-title");
        this.counter = dialog.querySelector(".lightbox-counter");

        this.items = [];
        this.index = 0;
        this.touchStartX = null;

        this.bindDialogEvents();
    }

    /** @param {Element} group */
    registerGroup(group) {
        const items = Array.from(group.querySelectorAll("[data-lightbox-src]"));

        items.forEach((item, index) => {
            item.addEventListener("click", () => this.open(items, index));
        });
    }

    /**
     * @param {Element[]} items
     * @param {number} index
     */
    open(items, index) {
        this.items = items;
        this.show(index);
        this.dialog.showModal();
    }

    close() {
        this.dialog.close();
    }

    next() {
        this.show(this.index + 1);
    }

    previous() {
        this.show(this.index - 1);
    }

    /** @param {number} index – läuft am Ende wieder von vorne los */
    show(index) {
        const count = this.items.length;
        this.index = (index + count) % count;

        const item = this.items[this.index];
        this.image.src = item.dataset.lightboxSrc;
        this.image.alt = item.querySelector("img")?.alt ?? "";
        this.title.textContent = item.dataset.lightboxTitle ?? "";
        this.counter.textContent = `${this.index + 1} / ${count}`;
    }

    bindDialogEvents() {
        this.dialog.addEventListener("click", (event) => this.handleClick(event));
        this.dialog.addEventListener("keydown", (event) => this.handleKey(event));
        this.dialog.addEventListener("touchstart", (event) => this.handleTouchStart(event), { passive: true });
        this.dialog.addEventListener("touchend", (event) => this.handleTouchEnd(event));
    }

    /** @param {MouseEvent} event */
    handleClick(event) {
        // Klick auf den dunklen Hintergrund (außerhalb des Dialogs) schließt ihn
        if (event.target === this.dialog && this.isOutsideDialog(event)) {
            this.close();
            return;
        }

        const action = event.target.closest("[data-lightbox]")?.dataset.lightbox;
        if (action === "close") this.close();
        if (action === "next") this.next();
        if (action === "previous") this.previous();
    }

    /** @param {MouseEvent} event */
    isOutsideDialog(event) {
        const box = this.dialog.getBoundingClientRect();
        return event.clientX < box.left || event.clientX > box.right
            || event.clientY < box.top || event.clientY > box.bottom;
    }

    /** @param {KeyboardEvent} event */
    handleKey(event) {
        if (event.key === "ArrowRight") this.next();
        if (event.key === "ArrowLeft") this.previous();
    }

    /** @param {TouchEvent} event */
    handleTouchStart(event) {
        this.touchStartX = event.changedTouches[0].clientX;
    }

    /** @param {TouchEvent} event */
    handleTouchEnd(event) {
        if (this.touchStartX === null) return;

        const distance = event.changedTouches[0].clientX - this.touchStartX;
        this.touchStartX = null;

        if (distance <= -Lightbox.SWIPE_DISTANCE) this.next();
        if (distance >= Lightbox.SWIPE_DISTANCE) this.previous();
    }
}
