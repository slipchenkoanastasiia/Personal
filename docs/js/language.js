document.addEventListener('DOMContentLoaded', function () {
  const languageSelect = document.getElementById('language-select');
  const content = document.querySelector('.content');

  languageSelect.addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;

    const langElements = content.querySelectorAll('.lang');
    langElements.forEach(element => {
      element.classList.remove('active');
    });

    const activeLang = content.querySelector(`.lang[data-lang="${selectedLanguage}"]`);
    if (activeLang) {
      activeLang.classList.add('active');
      console.log(`Switched language to: ${selectedLanguage}`);
    } else {
      console.error(`Language not found: ${selectedLanguage}`);
    }
  });
});
