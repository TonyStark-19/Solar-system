// js logic for navbar

const nav = document.querySelector("nav"); // Selects the first <nav> element

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        nav.style.background = "#021526";
    } else {
        nav.style.background = "transparent"; // Reset background when scrolled back up
    }
});

// Animation

const sr = ScrollReveal({
    distance: '65px',
    duration: 1500,
    delay: 200,
    reset: false
});

// home page

// home section
sr.reveal('.content', { delay: 50, origin: 'top' });

// intro section

sr.reveal('.info-text', { delay: 50, origin: 'left' });
sr.reveal('.info-image', { delay: 50, origin: 'right' });

sr.reveal('.info-text2', { delay: 50, origin: 'right' });
sr.reveal('.info-image2', { delay: 50, origin: 'left' });