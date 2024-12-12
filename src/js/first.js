
 document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".first-section h1"); 

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible"); 
          observer.unobserve(entry.target); 
        }
      });
    },
    {
      threshold: 0.2, 
    }
  );

  if (header) {
    observer.observe(header); 
  }
});
