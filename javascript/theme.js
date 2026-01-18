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
    }
}

function applyTheme(theme) {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    const btnLight = document.getElementById('themeLight');
    const btnDark = document.getElementById('themeDark');
    if (btnLight) btnLight.setAttribute('aria-pressed', String(theme === 'light'));
    if (btnDark) btnDark.setAttribute('aria-pressed', String(theme === 'dark'));
    if (btnLight) btnLight.classList.toggle('text-btn-active', theme === 'light');
    if (btnDark) btnDark.classList.toggle('text-btn-active', theme === 'dark');
}

function getDefaultTheme() {
    return 'dark';
}

function initThemeControls() {
    const btnLight = document.getElementById('themeLight');
    const btnDark = document.getElementById('themeDark');
    if (!btnLight || !btnDark) {
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

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThemeControls);
} else {
    initThemeControls();
}
