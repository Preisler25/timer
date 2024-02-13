/* Készíts egy "toastmaster timer" alkalmazást, vagyis egy olyat, amely méri, hogy egy előadás/nyilvános beszéd mikor kell véget érjen. A működése:
* Az oldalon jelenjen meg egy számláló. Gombra kattintással a számlálót el lehet indítani.
* Alapból az oldal háttere legyen fehér.
* 1:00 (60mp) váltson zöldre
* 1:30 (90mp) sárgára
* 2:00 (120mp) pirosra*/

genStart = () => {
    console.log('genStart');
    
    const display = document.querySelector('body');
    const start = document.createElement('button');
    start.textContent = 'Start';
    start.style.position = 'absolute';
    start.style.left = '50%';
    start.style.top = '50%';
    start.style.transform = 'translate(-50%, -50%)';
    start.style.fontSize = '50px';
    start.style.padding = '20px';
    start.style.border = 'none';
    start.style.backgroundColor = 'lightgreen';
    start.style.color = 'white';
    start.style.cursor = 'pointer';
    display.appendChild(start);
    start.addEventListener('click', () => {
        start.remove();
        genToast();
    });
}

genToast = () => {
    const start_time = new Date().getTime();
    const display = document.querySelector('body');
    const text = document.createElement('h1');
    const text2 = document.createElement('h1');

    text2.textContent = 'Press ESC to stop';

    text.textContent = 'loading...';
    text.style.position = 'absolute';
    text.style.left = '50%';
    text.style.top = '50%';
    text.style.transform = 'translate(-50%, -50%)';
    text.style.fontSize = '80px';
    text.style.color = 'black';
    display.style.backgroundColor = 'white';
    display.style.height = '100vh';
    display.style.width = '100vw';
    display.appendChild(text);
    display.appendChild(text2);
    
    const ti = setInterval(() => {
        const current_time = new Date().getTime();
        const elapsed_time = (current_time - start_time) / 1000;
        const minutes = Math.floor(elapsed_time / 60);
        const seconds = Math.floor(elapsed_time % 60);
        if (seconds < 10 && minutes < 10) {
            text.textContent = `0${minutes}:0${seconds}`;
        }   
        else if (seconds < 10) {
            text.textContent = `${minutes}:0${seconds}`;
        } 
        else if (minutes < 10) {
            text.textContent = `0${minutes}:${seconds}`;
        }
        else {
            text.textContent = `${minutes}:${seconds}`;
        }
        if (elapsed_time < 60) {
            display.style.backgroundColor = 'lightgreen';
        } else if (elapsed_time < 90) {
            display.style.backgroundColor = 'yellow';
        } else if (elapsed_time < 120) {
            display.style.backgroundColor = 'red';
        }
        console.log(elapsed_time);
    }, 1000);
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            display.style.backgroundColor = 'white';
            clearInterval(ti);
            text.remove();
            genStart();
        }
    });
}


document.addEventListener('DOMContentLoaded', () => {
    genStart();
});