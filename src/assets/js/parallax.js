// Example custom JS for cursor movement effect
const parallaxElements = document.querySelectorAll('.parallax');

function handleMouseMove(event) {
    const { clientX, clientY } = event;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    parallaxElements.forEach(element => {
        const speed = element.getAttribute('data-speed') || 0.05;
        const x = (clientX - centerX) * speed;
        const y = (clientY - centerY) * speed;

        element.style.transform = `translate(${x}px, ${y}px)`;
    });
}

document.addEventListener('mousemove', handleMouseMove);

console.log("hola")