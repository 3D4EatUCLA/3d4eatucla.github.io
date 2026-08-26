(function () {
    'use strict';

    const NOZZLE_W = 44;
    const SWEEP_L = -NOZZLE_W;
    const SWEEP_R = '100vw';

    const LAYERS = parseFloat(
        getComputedStyle(document.documentElement)
            .getPropertyValue('--layer-count')
    );
    // Gets the animation length from the CSS
    const duration = parseFloat(
        getComputedStyle(document.documentElement)
            .getPropertyValue('--transition-duration')
    ) * 1000;

    function generateZigZag(nozzleName, clipName, fromBot, toBot, startRight) {
        // This function dynamically generates the keyframes for
        // the zig zag animation a printer will do. We could do
        // left -> right -> up -> right -> left, but i'm lazy
        const STEP = 100 / LAYERS;
        const DROP_FRAC = 0.1;
        let kfNozzle = '@keyframes ' + nozzleName  + ' {\n';
        let kfClip = '@keyframes ' + clipName  + ' {\n';

        for (let i = 0; i < LAYERS; i++) {
            let t_start = (i === 0) ? "0.0000" : (i * STEP + 0.0001).toFixed(4);
            let t_sweep_end = ((i+1 - DROP_FRAC) * STEP).toFixed(4);
            let t_end = ((i+1) * STEP).toFixed(4);

            // finds where the bottom of the nozzle should be in relation to the layers
            let bot_current = (fromBot + (toBot - fromBot) * (i / LAYERS)).toFixed(2);
            let bot_next = (fromBot + (toBot - fromBot) * ((i + 1) / LAYERS)).toFixed(2);

            let y1 = (100 - bot_current).toFixed(2);
            let y2 = (100 - bot_next).toFixed(2);

            let goRight = (i%2 === 0) === startRight;
            let x1 = goRight ? SWEEP_L + 'px' : SWEEP_R;
            let x2 = goRight ? SWEEP_R : SWEEP_L + 'px';

            let x_start_clip = goRight ? `calc(0% - ${NOZZLE_W}px)` : '100%';
            let x_end_clip = goRight ? '100%' : `calc(0% - ${NOZZLE_W}px)`;

            
            // Generates nozzle keyframes
            if (i === 0) kfNozzle += ` ${t_start}% {left: ${x1}; bottom: ${bot_current}%;}\n`;
            kfNozzle += ` ${t_sweep_end}% {left: ${x2}; bottom: ${bot_current}%;}\n`;
            kfNozzle += ` ${t_end}% {left: ${x2}; bottom: ${bot_next}%;}\n`;

            let clipStart, clipSweep;
            if (goRight) {
                clipStart = `polygon(0% 100%, 100% 100%, 100% ${y1}%, ${x_start_clip} ${y1}%, ${x_start_clip} ${y2}%, 0% ${y2}%)`;
                clipSweep = `polygon(0% 100%, 100% 100%, 100% ${y1}%, ${x_end_clip} ${y1}%, ${x_end_clip} ${y2}%, 0% ${y2}%)`;
            } else {
                clipStart = `polygon(0% 100%, 100% 100%, 100% ${y2}%, ${x_start_clip} ${y2}%, ${x_start_clip} ${y1}%, 0% ${y1}%)`;
                clipSweep = `polygon(0% 100%, 100% 100%, 100% ${y2}%, ${x_end_clip} ${y2}%, ${x_end_clip} ${y1}%, 0% ${y1}%)`;
            }

            kfClip += ` ${t_start}% {clip-path: ${clipStart};}\n`;
            kfClip += ` ${t_sweep_end}% {clip-path: ${clipSweep};}\n`;
            kfClip += ` ${t_end}% {clip-path: ${clipSweep};}\n`;
        }

        return `${kfNozzle}}\n${kfClip}}\n`;
    }

    let styleElement = document.createElement('style');
    styleElement.textContent =
        generateZigZag('nozzlePaintUp', 'paintUp', 0, 100, true) + '\n' +
        generateZigZag('nozzleWipeDown', 'wipeDown', 100, 0, false);
        
    document.head.appendChild(styleElement);

    let nozzle = document.createElement('div');
    nozzle.id = 'filament-nozzle';

    nozzle.innerHTML =
        '<svg viewBox="0 0 44 54" width="44" height="54">' +
        '<rect x="16" y="0" width="12" height="10" rx="2" fill="#FF6B00"/>' + 
        '<rect x="18" y="10" width="8" height="6" fill="#555"/>' + 
        '<rect x="8" y="16" width="28" height="18" rf="3" fill="#5a5a5a" stroke="#888" stroke-width="1.5"/>' + 
        '<polygon points="14,34 30,34 22,50" fill="#777" stroke="#999" stroke-width="1.5"/>' + 
        '<rect x="20" y="48" width="4" height="4" fill="#bbb" />' + 
        '<circle cx="30" cy="22" r="2.5" fill="#FF3300" opacity="0.8" />' + 
        '</svg>'
    document.body.appendChild(nozzle)


    // This is page load code
    function revealPage() {
        nozzle.style.animation = 'none';
        void nozzle.offsetWidth;
        nozzle.style.animation = `nozzleWipeDown ${duration}ms linear forwards`;
        nozzle.classList.add('active');
        document.documentElement.classList.add('revealing');

        setTimeout(function () {
            document.documentElement.classList.remove('revealing');
            document.documentElement.classList.add('revealed');
            nozzle.classList.remove('active');
            nozzle.style.animation = '';
        }, duration + 50);
    }

    window.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            navigating = false;

            document.documentElement.classList.remove('painting');

            revealPage();
        }
    })

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', revealPage);
    } else {
        revealPage();
    }


    // outgoing animation code triggered by captured link
    let navigating = false;

    document.addEventListener('click', function (e) {
        if (navigating) return;

        let link = e.target.closest('a');
        if (!link) return;

        if (link.hasAttribute('data-no-transition')) return;
        if (link.target ==='_blank') return;
        if (link.hasAttribute('download')) return;
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

        let url;
        try { url = new URL(link.href); } catch (err) { return; }
        if (url.protocol !== 'http:' && url.protocol !== 'https:' && url.protocol !== 'file:') return;

        if (url.origin !== window.location.origin) return;

        if (url.pathname === window.location.pathname &&
            url.search === window.location.search && url.hash) return;

        e.preventDefault();
        navigating = true;

        nozzle.style.animation = 'none';
        void nozzle.offsetWidth;
        nozzle.style.animation = 'nozzlePaintUp ' + duration + 'ms linear forwards';
        nozzle.classList.add('active');
        document.documentElement.classList.add('painting');

        setTimeout(function() {
            window.location.href = link.href;
        }, duration);
    })
})();
