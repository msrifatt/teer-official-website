(() => {
  const langButton = document.getElementById('langToggle');
  const menuButton = document.getElementById('menuToggle');
  const nav = document.getElementById('mainNav');
  let language = 'bn';
  function setLanguage(next) {
    language = next;
    document.documentElement.lang = next;
    document.querySelectorAll('[data-bn][data-en]').forEach((el) => {
      const value = el.dataset[next];
      if (value !== undefined) el.innerHTML = value;
    });
    langButton.textContent = next === 'bn' ? 'EN' : 'বাংলা';
  }
  langButton.addEventListener('click', () => setLanguage(language === 'bn' ? 'en' : 'bn'));
  menuButton.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => nav.classList.remove('open')));
  document.getElementById('year').textContent = new Date().getFullYear();
})();
