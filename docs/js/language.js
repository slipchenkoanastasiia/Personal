<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', function () {
  const languageSelect = document.getElementById('language-select');
  const content = document.querySelector('.content');

  languageSelect.addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
=======
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
>>>>>>> 1bd78ee95345c88baf117d73f35fc87e45bb315c

    const langElements = content.querySelectorAll('.lang');
    langElements.forEach(element => {
      element.classList.remove('active');
    });

    const activeLang = content.querySelector(`.lang[data-lang="${selectedLanguage}"]`);
    if (activeLang) {
      activeLang.classList.add('active');
<<<<<<< HEAD
      console.log(`Switched language to: ${selectedLanguage}`);
    } else {
      console.error(`Language not found: ${selectedLanguage}`);
    }
=======
      console.log('Language switched to: ', selectedLanguage);
    }

    languageSelect.classList.remove('active');
>>>>>>> 1bd78ee95345c88baf117d73f35fc87e45bb315c
  });
});
