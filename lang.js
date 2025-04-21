const translations = {
  en: {
    siteTitle: "Renova - DI",
    navHome: "Home",
    navAbout: "About",
    navServices: "Services",
    navGallery: "Gallery",
    navContact: "Contact",
    welcome: "Welcome to Renova - DI",
    introText: "We specialize in quality construction and renovation services."
  },
  fr: {
    siteTitle: "Renova - DI",
    navHome: "Accueil",
    navAbout: "À propos",
    navServices: "Services",
    navGallery: "Galerie",
    navContact: "Contact",
    welcome: "Bienvenue chez Renova - DI",
    introText: "Nous sommes spécialisés dans les services de construction et de rénovation de qualité."
  },
  nl: {
    siteTitle: "Renova - DI",
    navHome: "Home",
    navAbout: "Over ons",
    navServices: "Diensten",
    navGallery: "Galerij",
    navContact: "Contact",
    welcome: "Welkom bij Renova - DI",
    introText: "Wij zijn gespecialiseerd in kwaliteitsvolle bouw- en renovatiewerken."
  }
};

function setLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = translations[lang][key] || key;
  });
  localStorage.setItem('lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
  const lang = localStorage.getItem('lang') || 'en';
  setLanguage(lang);
});
