// js logic for navbar

const nav = document.querySelector("nav"); // Selects the first <nav> element

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        nav.style.background = "#021526";
    } else {
        nav.style.background = "transparent"; // Reset background when scrolled back up
    }
});