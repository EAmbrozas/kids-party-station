// Function to add 'active' class to the nav link corresponding to the current section
function updateNavLinks() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(navLink => {
        navLink.classList.remove('active');
        if (navLink.getAttribute('href').includes(current)) {
            navLink.classList.add('active');
        }
    });
}

// Listen for scroll events
window.addEventListener('scroll', updateNavLinks);
