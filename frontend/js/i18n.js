// Language Switcher Logic
let currentLang = localStorage.getItem('icn_lang') || 'vi';

function initI18n() {
    applyTranslations();
    updateFlagUI();

    const switchers = document.querySelectorAll('.lang-switcher img');
    switchers.forEach(flag => {
        flag.addEventListener('click', (e) => {
            const selectedLang = e.target.getAttribute('data-lang');
            if (selectedLang !== currentLang) {
                currentLang = selectedLang;
                localStorage.setItem('icn_lang', currentLang);
                applyTranslations();
                updateFlagUI();
            }
        });
    });
}

function applyTranslations() {
    // Translate text nodes
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (TRANSLATIONS[key] && TRANSLATIONS[key][currentLang]) {
            el.innerHTML = TRANSLATIONS[key][currentLang];
        }
    });

    // Translate placeholders
    const inputs = document.querySelectorAll('[data-i18n-placeholder]');
    inputs.forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (TRANSLATIONS[key] && TRANSLATIONS[key][currentLang]) {
            el.placeholder = TRANSLATIONS[key][currentLang];
        }
    });

    // Notify other scripts (e.g., members page) so they can re-render dynamic text
    if (typeof window.rerenderMembersForLanguage === 'function') {
        window.rerenderMembersForLanguage();
    }
}

function updateFlagUI() {
    const flags = document.querySelectorAll('.lang-switcher img');
    flags.forEach(flag => {
        if (flag.getAttribute('data-lang') === currentLang) {
            flag.classList.add('active');
        } else {
            flag.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', initI18n);

// Export for other scripts if needed
window.i18n = {
    getLang: () => currentLang,
    t: (key) => TRANSLATIONS[key] ? TRANSLATIONS[key][currentLang] : key,
    applyTranslations: applyTranslations
};
