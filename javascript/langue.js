const translations = {
    fr: {
        homepage_subtitle: "Futur Data Engineer, étudiant en BUT Informatique parcours DATA, toujours prêt à relever de nouveaux défis.",
    },
    en: {
        homepage_subtitle: "Future Data Engineer, student in BUT Computer Science DATA track, always ready to take on new challenges.",
    }
};

let currentLang = 'fr';

function setLanguage(lang) {
    if (lang === currentLang) return;
    currentLang = lang;
    updateContent();
    updateFlagStyles();
}

function updateContent() {
    const elements = document.querySelectorAll('[data-key]');

    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[currentLang][key]) {
            element.innerHTML = translations[currentLang][key];
        }
    });
}

function updateFlagStyles() {
    const btnFr = document.getElementById('flag_fr');
    const btnEn = document.getElementById('flag_en');
    if (!btnFr || !btnEn) return;
    btnFr.classList.remove('flag-active');
    btnEn.classList.remove('flag-active');
    if (currentLang === 'fr') {
        btnFr.classList.add('flag-active');
    } else {
        btnEn.classList.add('flag-active');
    }
}


document.addEventListener('DOMContentLoaded', () => {
    updateContent();
    updateFlagStyles();
});