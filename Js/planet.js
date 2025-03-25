// Animation

const sr = ScrollReveal({
    distance: '65px',
    duration: 1500,
    delay: 200,
    reset: false
});

// planet page

// planets

sr.reveal('.planets-heading', { delay: 50, origin: 'top' });
sr.reveal('.planets-wrap', { delay: 50, origin: 'bottom' });
sr.reveal('.planet-box', { delay: 50, origin: 'left' });

// dwarf planets

sr.reveal('.dwarf-planets-heading', { delay: 50, origin: 'top' });
sr.reveal('.dwarf-planet-wrap', { delay: 50, origin: 'bottom' });