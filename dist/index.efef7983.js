const languageSelect = document.getElementById('language-select');
const languageIcon = document.getElementById('language-toggle');
const content = document.querySelector('.content');
languageIcon.addEventListener('click', ()=>{
    languageSelect.classList.toggle('active');
});
languageSelect.addEventListener('change', (event)=>{
    const selectedLanguage = event.target.value;
    const langElements = content.querySelectorAll('.lang');
    langElements.forEach((element)=>{
        element.classList.remove('active');
    });
    const activeLang = content.querySelector(`.lang[data-lang="${selectedLanguage}"]`);
    if (activeLang) activeLang.classList.add('active');
    languageSelect.classList.remove('active');
});

//# sourceMappingURL=index.efef7983.js.map
