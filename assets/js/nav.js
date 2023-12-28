document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    function setActiveLink(newActiveId) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(newActiveId)) {
                link.classList.add('active');
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.forEach(lnk => lnk.classList.remove('active'));
            link.classList.add('active');
        });
    });

    function updateNavLinksOnScroll() {
        let currentId = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const scrollPosition = window.pageYOffset + window.innerHeight / 2;

            if (scrollPosition > sectionTop + sectionHeight * 0.25 && scrollPosition < sectionTop + sectionHeight * 0.75) {
                currentId = section.getAttribute('id');
            }
        });

        // Adjusted condition for detecting if the user is near the bottom of the page
        if ((window.innerHeight + window.pageYOffset) >= (document.body.offsetHeight - 100) && currentId !== 'contact') {
            currentId = 'contact';
        }

        if (currentId) {
            setActiveLink(currentId);
        }
    }

    window.addEventListener('scroll', updateNavLinksOnScroll);
    updateNavLinksOnScroll(); // Initialize active link on page load
});
