
const hamMenu = document.getElementById("ham-menu");
const offScreenMenu = document.getElementById("off-screen-menu");

const reveals = document.querySelectorAll(".reveal");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
});



function hideOfScreenMenu()
{
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        } else {
            entry.target.classList.remove("active");
        }
    });
}, {
    threshold: 0.15,
    rootMargin: "0px 0px -80px 0px"
});

reveals.forEach(el => observer.observe(el));