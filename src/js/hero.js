document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('.hero');
    setTimeout(() => {
      heroSection.classList.add('visible');
    }, 100); 
  });