document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    const navbar = document.querySelector('.navbar');

    function updateActiveNavLink() {
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        this.classList.add('active');
    }

    navLinks.forEach(link => {
        link.addEventListener('click', updateActiveNavLink);
    });

    function updateNavLinksOnScroll() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= (sectionTop - window.innerHeight / 2) &&
                window.pageYOffset < (sectionTop + sectionHeight - window.innerHeight / 2)) {
                current = section.getAttribute('id');
            }
        });

        if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
            current = 'contact';
            navbar.classList.add('hidden-nav');
        } else {
            navbar.classList.remove('hidden-nav');
        }

        navLinks.forEach(navLink => {
            navLink.classList.remove('active');
            if (navLink.getAttribute('href').includes(current)) {
                navLink.classList.add('active');
            }
        });
    }

    const homeLink = document.querySelector('.nav-link[href="#home"]');
    if (homeLink) {
        homeLink.classList.add('active');
    }

    window.addEventListener('scroll', updateNavLinksOnScroll, { passive: true });
});
