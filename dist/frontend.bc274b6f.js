const circle = document.querySelector('.circle-follow');
const body = document.body;
function activateCustomCursor() {
    body.classList.add('cursor-hidden');
    circle.style.display = 'flex';
    document.addEventListener('mousemove', (e)=>{
        const x = e.clientX;
        const y = e.clientY;
        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;
    });
}
activateCustomCursor();

//# sourceMappingURL=frontend.bc274b6f.js.map
