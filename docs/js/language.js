document.addEventListener('DOMContentLoaded', function() {
  const languageSelect = document.getElementById('language-select'); 
  const languageIcon = document.getElementById('language-toggle'); 
  const content = document.querySelector('.content'); 

  languageIcon.addEventListener('click', () => {
    languageSelect.classList.toggle('active'); 
  });

  languageSelect.addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
    console.log('Selected Language: ', selectedLanguage);

    const langElements = content.querySelectorAll('.lang');
    langElements.forEach(element => {
      element.classList.remove('active'); 
      element.style.display = 'none'; 
    });

    const activeLang = content.querySelector(`.lang[data-lang="${selectedLanguage}"]`);
    if (activeLang) {
      activeLang.classList.add('active'); 
      activeLang.style.display = 'block'; 
      console.log('Language switched to: ', selectedLanguage);
    } else {
      console.warn(`Language not found: ${selectedLanguage}`); 
    }

    languageSelect.classList.remove('active');
  });
});