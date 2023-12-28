document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    const navbar = document.querySelector('.navbar');

    // Function to set the active link based on the section ID
    function setActiveLink(newActiveId) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.href.includes(newActiveId)) {
                link.classList.add('active');
            }
        });
    }

    // Scroll event handler
    function onScroll() {
        let currentId = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const threshold = window.pageYOffset + window.innerHeight * 0.25;

            if (sectionTop <= threshold) {
                currentId = section.getAttribute('id');
            }
        });

        if (currentId) {
            setActiveLink(currentId);
        }

        const bodyHeight = document.body.offsetHeight;
        if (window.innerHeight + window.pageYOffset >= bodyHeight) {
            navbar.style.display = 'none';
        } else {
            navbar.style.display = 'flex';
        }
    }

    // Add click event listeners to nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            // Remove active class from all links and set it on the clicked link
            navLinks.forEach(lnk => lnk.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Attach the scroll event listener
    window.addEventListener('scroll', onScroll);

    // Call onScroll immediately to set initial active state
    onScroll();
});
