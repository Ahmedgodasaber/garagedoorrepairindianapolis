(function () {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('#primary-navigation');
    const yearEl = document.querySelector('#year');

    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    if (!navToggle || !nav) {
        return;
    }

    const toggleNav = () => {
        const isOpen = nav.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', isOpen);
    };

    navToggle.addEventListener('click', toggleNav);

    nav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('open')) {
                toggleNav();
            }
        });
    });
})();
