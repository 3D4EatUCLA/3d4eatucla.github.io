(() => {
    const toggleSidebar = document.getElementById('theme-toggle');
    const toggleTopNav = document.getElementById('theme-toggle-top');
    const toggleMobile = document.getElementById('theme-toggle-mobile');
    const html = document.documentElement;

    if (!toggleSidebar && !toggleTopNav) return;

    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = savedTheme === 'dark' || (savedTheme === null && prefersDark);

    html.classList.toggle('dark-mode', isDark);
    [toggleSidebar, toggleTopNav, toggleMobile].forEach(btn => {
        if (btn) btn.setAttribute('aria-pressed', isDark);
    });
    if (toggleSidebar) toggleSidebar.classList.toggle('theme-toggle--toggled', isDark);
    if (toggleTopNav) toggleTopNav.classList.toggle('theme-toggle--toggled', isDark);
    if (toggleMobile) toggleMobile.classList.toggle('theme-toggle--toggled', isDark);

    function toggleTheme() {
        const nowDark = html.classList.toggle('dark-mode');
        if (toggleSidebar) toggleSidebar.classList.toggle('theme-toggle--toggled', nowDark);
        if (toggleTopNav) toggleTopNav.classList.toggle('theme-toggle--toggled', nowDark);
        localStorage.setItem('theme', nowDark ? 'dark' : 'light');
        document.cookie = `theme=${nowDark ? 'dark' : 'light'}; domain=.pearlitegates.com; path=/; max-age=31536000`;
        [toggleSidebar, toggleTopNav, toggleMobile].forEach(btn => {
            if (btn) btn.setAttribute('aria-pressed', nowDark);
        });
    }

    if (toggleSidebar) toggleSidebar.addEventListener('click', toggleTheme);
    if (toggleTopNav) toggleTopNav.addEventListener('click', toggleTheme);
})();

(() => {
    const hamburger = document.querySelector('.topnav-hamburger');
    const dropdown = document.querySelector('.topnav-dropdown');
    const themeBtn = document.querySelector('#theme-toggle-mobile');

    if (!hamburger || !dropdown) return;

    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = hamburger.classList.toggle('active');
        dropdown.classList.toggle('open', isOpen);
        hamburger.setAttribute('aria-expanded', isOpen);
    });

    dropdown.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            dropdown.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.top-header')) {
            hamburger.classList.remove('active');
            dropdown.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && hamburger.classList.contains('active')) {
            hamburger.classList.remove('active');
            dropdown.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
            hamburger.focus();
        }
    });

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const nowDark = document.documentElement.classList.toggle('dark-mode');
            const topToggle = document.getElementById('theme-toggle-top');
            const sidebarToggle = document.getElementById('theme-toggle');
            if (topToggle) topToggle.classList.toggle('theme-toggle--toggled', nowDark);
            if (sidebarToggle) sidebarToggle.classList.toggle('theme-toggle--toggled', nowDark);
            themeBtn.classList.toggle('theme-toggle--toggled', nowDark);
            [themeBtn, topToggle, sidebarToggle].forEach(btn => {
                if (btn) btn.setAttribute('aria-pressed', nowDark);
            });
            localStorage.setItem('theme', nowDark ? 'dark' : 'light');
            document.cookie = `theme=${nowDark ? 'dark' : 'light'}; path=/; max-age=31536000`;
        });
    }
})();
