const genSnow = () => {
    const snow = document.createElement('img');
    snow.src = 'snow.png';
    snow.style.position = 'absolute';
    snow.style.width = '50px';
    snow.style.height = '50px';
    snow.style.left = Math.random() * window.innerWidth + 'px';
    snow.style.top = Math.random() * window.innerHeight + 'px';
    document.body.appendChild(snow);
    console.log(snow);
    setInterval(() => {
        if (parseInt(snow.style.top) > window.innerHeight) {
            snow.style.top = '0px';
            snow.remove();
        }
        const x = parseInt(snow.style.left);
        const y = parseInt(snow.style.top);
        snow.style.left = x + Math.random() * 10 - 5 + 'px';
        snow.style.top = y + Math.random() * 10 + 'px';
    }, 100);
    setTimeout(() => {
        snow.remove();
    }, 10000);
}
document.addEventListener('DOMContentLoaded', () => {
    setInterval(() => {
        genSnow();
    }, 200);
});