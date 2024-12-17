document.addEventListener("DOMContentLoaded", ()=>{
    const services = document.querySelectorAll(".service");
    const observer = new IntersectionObserver((entries, observer)=>{
        entries.forEach((entry)=>{
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });
    services.forEach((service)=>observer.observe(service));
});

//# sourceMappingURL=index.979fef59.js.map
