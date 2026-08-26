function onDomReady(cb) {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', cb, { once: true });
    } else {
        cb();
    }
}

onDomReady(() => {
    const btn = document.getElementById('copy-btn');
    const success = document.getElementById('copy-success');
    if (!btn) return;

    btn.addEventListener('click', () => {
        const code = document.getElementById('snippet').innerText.trim();
        navigator.clipboard.writeText(code).then(() => {
            btn.classList.add('copied');
            success.textContent = 'Copied!';
            setTimeout(() => {
                btn.classList.remove('copied');
                success.textContent = '';
            }, 1400);
        }).catch((err) => {
            console.error('Copy failed:', err);
        });
    });
});

const StyleMyTooltips = (() => {
    let smtTooltip = null;
    let smtTooltipInner = null;
    let smtTooltip_delay = null;
    let currentElement = null;
    let mouseMoveHandler = null;

    function init(options = {}) {
        const defaults = {
            tip_follows_cursor: false,
            tip_delay_time: 700,
            tip_fade_speed: 300,
            attribute: 'title'
        };
        const settings = { ...defaults, ...options };

        if (!document.getElementById('s-m-t-tooltip')) {
            const tooltip = document.createElement('div');
            tooltip.id = 's-m-t-tooltip';
            const inner = document.createElement('div');
            tooltip.appendChild(inner);
            document.body.appendChild(tooltip);
        }

        smtTooltip = document.getElementById('s-m-t-tooltip');
        smtTooltipInner = smtTooltip.querySelector('div');

        smtTooltip.style.position = 'absolute';
        smtTooltip.style.display = 'none';
        smtTooltip.style.opacity = '0';
        smtTooltipInner.style.width = '100%';
        smtTooltipInner.style.height = '100%';

        const isTouchDevice = ('ontouchstart' in window || navigator.maxTouchPoints) &&
            window.matchMedia('(max-width: 768px)').matches;

        document.addEventListener('mouseleave', handleMouseLeave, true);
        document.addEventListener('mousedown', handleMouseDown, true);

        let isMouseDown = false;
        document.addEventListener('mousedown', () => { isMouseDown = true; });
        document.addEventListener('mouseup', () => { isMouseDown = false; });

        let hasInteracted = false;
        const markInteracted = () => { hasInteracted = true; };
        document.addEventListener('mousedown', markInteracted, { once: true });
        document.addEventListener('keydown', markInteracted, { once: true });
        document.addEventListener('touchstart', markInteracted, { once: true });

        let isWindowRefocus = false;
        window.addEventListener('blur', () => { isWindowRefocus = true; });
        window.addEventListener('focus', () => {
            setTimeout(() => { isWindowRefocus = false; }, 100);
        });

        function handleMouseLeave(e) {
            if (!e.target.classList.contains('smt-current-element')) return;

            clearTimeout(smtTooltip_delay);
            hide(settings.tip_fade_speed);

            if (mouseMoveHandler) {
                document.removeEventListener('mousemove', mouseMoveHandler);
                mouseMoveHandler = null;
            }

            e.target.classList.remove('smt-current-element');

            const originalTitle = e.target.getAttribute('data-smt-title');
            if (originalTitle !== null) {
                e.target.setAttribute(settings.attribute, originalTitle);
            }
        }

        function handleMouseDown(e) {
            const current = document.querySelector('.smt-current-element');
            if (!current) return;

            clearTimeout(smtTooltip_delay);
            hide(settings.tip_fade_speed);

            if (mouseMoveHandler) {
                document.removeEventListener('mousemove', mouseMoveHandler);
                mouseMoveHandler = null;
            }

            current.classList.remove('smt-current-element');

            const originalTitle = current.getAttribute('data-smt-title');
            if (originalTitle !== null) {
                current.setAttribute(settings.attribute, originalTitle);
            }
        }

        document.querySelectorAll(`[${settings.attribute}]`).forEach(element => {
            const title = element.getAttribute(settings.attribute);
            if (!title) return;

            if (isTouchDevice) {
                element.addEventListener('click', function (event) {
                    event.stopPropagation();
                    if (this.classList.contains('smt-current-element')) return;

                    const title = this.getAttribute(settings.attribute) || '';
                    this.classList.add('smt-current-element');
                    this.setAttribute('data-smt-title', title);
                    this.setAttribute('data-smt-fade-speed', settings.tip_fade_speed);
                    this.removeAttribute(settings.attribute);

                    update(this, title, settings.tip_fade_speed, 0, 'mobile');
                });
            } else {
                element.addEventListener('mouseenter', function (event) {
                    if (this.classList.contains('smt-current-element')) return;

                    const title = this.getAttribute(settings.attribute) || '';
                    this.classList.add('smt-current-element');
                    this.setAttribute('data-smt-title', title);
                    this.setAttribute('data-smt-fade-speed', settings.tip_fade_speed);
                    this.removeAttribute(settings.attribute);

                    mouseMoveHandler = (e) => {
                        positionCursor(e.pageX, e.pageY);
                    };
                    document.addEventListener('mousemove', mouseMoveHandler);

                    positionCursor(event.pageX, event.pageY);

                    update(this, title, settings.tip_fade_speed, settings.tip_delay_time, 'desktop');
                });

                element.addEventListener('focusin', function () {
                    if (isMouseDown || !hasInteracted || isWindowRefocus) return;
                    if (this.classList.contains('smt-current-element')) return;

                    const title = this.getAttribute(settings.attribute)
                        || this.getAttribute('data-smt-title')
                        || '';
                    if (!title) return;

                    this.classList.add('smt-current-element');
                    this.setAttribute('data-smt-title', title);
                    this.setAttribute('data-smt-fade-speed', settings.tip_fade_speed);
                    this.removeAttribute(settings.attribute);
                    this.setAttribute('aria-describedby', 's-m-t-tooltip');

                    update(this, title, settings.tip_fade_speed, 0, 'mobile');
                });

                element.addEventListener('focusout', function () {
                    clearTimeout(smtTooltip_delay);
                    hide(settings.tip_fade_speed);
                    this.removeAttribute('aria-describedby');
                    this.classList.remove('smt-current-element');
                    const originalTitle = this.getAttribute('data-smt-title');
                    if (originalTitle !== null) {
                        this.setAttribute(settings.attribute, originalTitle);
                    }
                });
            }
        });

        document.addEventListener('click', (e) => {
            if (!e.target.closest('.smt-current-element') && !e.target.closest('#s-m-t-tooltip')) {
                const current = document.querySelector('.smt-current-element');
                if (current) {
                    const title = current.getAttribute('data-smt-title');
                    if (title !== null) {
                        current.setAttribute(settings.attribute, title);
                    }
                }
                smtTooltip.style.display = 'none';
                smtTooltip.style.opacity = '0';
                if (current) current.classList.remove('smt-current-element');
            }
        });

        document.addEventListener('touchstart', (e) => {
            if (!e.target.closest('.smt-current-element') && !e.target.closest('#s-m-t-tooltip')) {
                const current = document.querySelector('.smt-current-element');
                if (current) {
                    const title = current.getAttribute('data-smt-title');
                    if (title !== null) {
                        current.setAttribute(settings.attribute, title);
                    }
                }
                smtTooltip.style.display = 'none';
                smtTooltip.style.opacity = '0';
                if (current) current.classList.remove('smt-current-element');
            }
        });
    }

    function update(triggerElement, title, speed, delay, mode) {
        currentElement = triggerElement;
        smtTooltip.style.display = 'none';
        smtTooltip.style.opacity = '0';
        smtTooltipInner.textContent = title;

        clearTimeout(smtTooltip_delay);
        smtTooltip_delay = setTimeout(() => {
            show(speed, mode);
        }, delay);
    }

    function show(speed, mode) {
        smtTooltip.style.display = 'block';

        if (mode === 'mobile') {
            positionMobile();
        }

        void smtTooltip.offsetHeight;

        setTimeout(() => {
            smtTooltip.style.opacity = '1';
        }, 10);
    }

    function hide(speed) {
        smtTooltip.style.opacity = '0';
        setTimeout(() => {
            smtTooltip.style.display = 'none';
        }, 300);
    }

    function positionCursor(cursorX, cursorY) {
        const winScrollX = window.pageXOffset;
        const winScrollY = window.pageYOffset;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const spacing = 30;
        const padding = 20;

        smtTooltip.style.display = 'block';
        smtTooltip.style.visibility = 'hidden';
        smtTooltip.style.opacity = '0';

        const tipWidth = smtTooltip.offsetWidth;
        const tipHeight = smtTooltip.offsetHeight;

        smtTooltip.style.visibility = 'visible';

        const viewportLeft = winScrollX + padding;
        const viewportRight = winScrollX + windowWidth - padding;
        const viewportTop = winScrollY + padding;
        const viewportBottom = winScrollY + windowHeight - padding;

        let left = cursorX + 16;
        let top = cursorY + spacing;

        if (left + tipWidth > viewportRight) {
            left = cursorX - tipWidth - 16;
            if (left < viewportLeft) {
                left = viewportRight - tipWidth;
            }
        }

        if (left < viewportLeft) left = viewportLeft;

        if (top + tipHeight > viewportBottom) {
            top = cursorY - tipHeight - spacing;
            if (top < viewportTop) {
                top = viewportBottom - tipHeight;
            }
        }

        if (top < viewportTop) top = viewportTop;

        smtTooltip.style.left = Math.round(left) + 'px';
        smtTooltip.style.top = Math.round(top) + 'px';
    }

    function positionMobile() {
        if (!currentElement) return;

        const triggerRect = currentElement.getBoundingClientRect();
        const triggerOffset = {
            left: triggerRect.left + window.pageXOffset,
            top: triggerRect.top + window.pageYOffset
        };
        const triggerWidth = currentElement.offsetWidth;
        const triggerHeight = currentElement.offsetHeight;

        const winScrollX = window.pageXOffset;
        const winScrollY = window.pageYOffset;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const spacing = 10;
        const padding = 15;

        smtTooltip.style.display = 'block';
        smtTooltip.style.visibility = 'hidden';
        smtTooltip.style.opacity = '0';

        const tipWidth = smtTooltip.offsetWidth;
        const tipHeight = smtTooltip.offsetHeight;

        smtTooltip.style.visibility = 'visible';

        const viewportLeft = winScrollX + padding;
        const viewportRight = winScrollX + windowWidth - padding;
        const viewportTop = winScrollY + padding;
        const viewportBottom = winScrollY + windowHeight - padding;

        let left = triggerOffset.left + (triggerWidth / 2) - (tipWidth / 2);
        let top = triggerOffset.top - tipHeight - spacing;

        const fitsAbove = top >= viewportTop;
        const fitsBelow = (triggerOffset.top + triggerHeight + spacing + tipHeight) <= viewportBottom;

        if (!fitsAbove && fitsBelow) {
            top = triggerOffset.top + triggerHeight + spacing;
        } else if (!fitsAbove && !fitsBelow) {
            top = triggerOffset.top < (winScrollY + windowHeight / 2)
                ? triggerOffset.top + triggerHeight + spacing
                : triggerOffset.top - tipHeight - spacing;
        }

        if (left < viewportLeft) left = viewportLeft;
        else if (left + tipWidth > viewportRight) left = viewportRight - tipWidth;

        if (top < viewportTop) top = viewportTop;
        else if (top + tipHeight > viewportBottom) top = viewportBottom - tipHeight;

        smtTooltip.style.left = Math.round(left) + 'px';
        smtTooltip.style.top = Math.round(top) + 'px';
    }

    return { init };
})();

onDomReady(() => {
    StyleMyTooltips.init({
        tip_follows_cursor: false,
        tip_delay_time: 700,
        tip_fade_speed: 300
    });
});

(() => {
    const hourH = document.querySelector('.hour');
    const minuteH = document.querySelector('.minute');
    const secondH = document.querySelector('.second');
    const skyEl = document.querySelector('.sky');
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!hourH || reduce) return;

    let animationId;

    matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
        if (e.matches && animationId) {
            cancelAnimationFrame(animationId);
        } else if (!e.matches) {
            tick();
        }
    });

    function tick() {
        const now = new Date();
        const seconds = now.getSeconds();
        const minutes = now.getMinutes() + seconds / 60;
        const hours = (now.getHours() % 12) + minutes / 60;
        const hours24 = now.getHours();

        secondH.style.transform = `translateY(-50%) rotate(${(seconds * 6) + 270}deg)`;
        minuteH.style.transform = `translateY(-50%) rotate(${(minutes * 6) + 270}deg)`;
        hourH.style.transform = `translateY(-50%) rotate(${(hours * 30) + 270}deg)`;

        if (skyEl) {
            const skyRotation = (hours24 * 15) + (minutes * 0.25);
            skyEl.style.transform = `rotate(${skyRotation}deg)`;
        }

        animationId = requestAnimationFrame(tick);
    }

    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            if (animationId) cancelAnimationFrame(animationId);
        } else {
            tick();
        }
    });

    tick();
})();

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
            document.cookie = `theme=${nowDark ? 'dark' : 'light'}; domain=.pearlitegates.com; path=/; max-age=31536000`;
        });
    }
})();

function lbSwitchTab(id, btn) {
    document.querySelectorAll('[role="tabpanel"]').forEach(p => p.hidden = true);
    document.querySelectorAll('.lb-tab').forEach(b => {
        b.classList.remove('lb-tab--active');
        b.setAttribute('aria-selected', 'false');
    });
    const panel = document.getElementById('tab-' + id);
    panel.hidden = false;
    btn.classList.add('lb-tab--active');
    btn.setAttribute('aria-selected', 'true');
    if (typeof Prism !== 'undefined') Prism.highlightAllUnder(panel);

    if (id === 'rings') {
        history.replaceState(null, '', '#webrings');
    } else {
        history.replaceState(null, '', window.location.pathname);
    }
}

onDomReady(() => {
    if (window.location.hash === '#webrings') {
        const btn = document.querySelector('[aria-controls="tab-rings"]');
        if (btn) {
            lbSwitchTab('rings', btn);
            document.getElementById('tab-rings')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
});