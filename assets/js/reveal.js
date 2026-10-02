/**
 * Blendet Elemente mit der Klasse "reveal" ein, sobald sie ins Bild scrollen.
 */
class Reveal {

    /** @param {NodeListOf<Element>} elements */
    constructor(elements) {
        this.observer = new IntersectionObserver(
            (entries) => this.handleEntries(entries),
            { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
        );

        elements.forEach((element) => this.observer.observe(element));
    }

    /** @param {IntersectionObserverEntry[]} entries */
    handleEntries(entries) {
        entries.forEach((entry) => {
            entry.target.classList.toggle("active", entry.isIntersecting);
        });
    }
}
