/**
 * Mobiles Menü: der Hamburger-Button blendet die Navigation ein und aus.
 * Ein Klick auf einen Link schließt das Menü wieder.
 */
class Menu {

    /**
     * @param {HTMLButtonElement} toggleButton
     * @param {HTMLElement} navigation
     */
    constructor(toggleButton, navigation) {
        this.toggleButton = toggleButton;
        this.navigation = navigation;

        this.toggleButton.addEventListener("click", () => this.toggle());
        this.navigation.addEventListener("click", (event) => {
            if (event.target.closest("a")) this.close();
        });
    }

    toggle() {
        this.setOpen(!this.isOpen());
    }

    close() {
        this.setOpen(false);
    }

    isOpen() {
        return this.navigation.classList.contains("active");
    }

    /** @param {boolean} open */
    setOpen(open) {
        this.toggleButton.classList.toggle("active", open);
        this.navigation.classList.toggle("active", open);
        this.toggleButton.setAttribute("aria-expanded", String(open));
        this.toggleButton.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
    }
}
