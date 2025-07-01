document.addEventListener("DOMContentLoaded", () => {
  const langFull = (navigator.language || navigator.userLanguage || 'en').toLowerCase();

  let currentLang = 'en';

  if (langFull === 'pt-br' || langFull === 'pt-pt' || langFull.startsWith('pt')) {
    currentLang = 'pt-BR';
  } else if (langFull.startsWith('ja') || langFull.startsWith('jp')) {
    currentLang = 'jp';
  }

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang] && translations[currentLang][key]) {
      el.innerHTML = translations[currentLang][key];
    }
  });
});
