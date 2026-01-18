const THEME_STORAGE_KEY = 'portfolio_theme';

function getStoredTheme() {
    try {
        const t = localStorage.getItem(THEME_STORAGE_KEY);
        if (t === 'light' || t === 'dark') return t;
        return null;
    } catch (e) {
        return null;
    }
}

function storeTheme(theme) {
    try {
        localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch (e) {
        // ignore
    }
}

function applyTheme(theme) {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);

    // Accessibilité : indique l'état aux lecteurs d'écran
    const btnLight = document.getElementById('themeLight');
    const btnDark = document.getElementById('themeDark');
    if (btnLight) btnLight.setAttribute('aria-pressed', String(theme === 'light'));
    if (btnDark) btnDark.setAttribute('aria-pressed', String(theme === 'dark'));

    // Style actif (même logique que text-btn-active)
    if (btnLight) btnLight.classList.toggle('text-btn-active', theme === 'light');
    if (btnDark) btnDark.classList.toggle('text-btn-active', theme === 'dark');
}

function getDefaultTheme() {
    // Si rien n'est stocké, on reste sur le thème sombre (comportement actuel)
    return 'dark';
}

function initThemeControls() {
    const btnLight = document.getElementById('themeLight');
    const btnDark = document.getElementById('themeDark');

    // Les boutons n'existent pas forcément sur toutes les pages
    if (!btnLight || !btnDark) {
        // Applique quand même un thème au chargement
        applyTheme(getStoredTheme() || getDefaultTheme());
        return;
    }

    btnLight.addEventListener('click', () => {
        applyTheme('light');
        storeTheme('light');
    });

    btnDark.addEventListener('click', () => {
        applyTheme('dark');
        storeTheme('dark');
    });

    applyTheme(getStoredTheme() || getDefaultTheme());
}

// Init au chargement
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThemeControls);
} else {
    initThemeControls();
}
