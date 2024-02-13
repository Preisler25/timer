const display = document.querySelector('body');

const createBtn = (text, func) => {
    const btn = document.createElement('button');
    btn.textContent = text;
    btn.style.position = 'absolute';
    btn.style.left = '50%';
    btn.style.top = '50%';
    btn.style.transform = 'translate(-50%, -50%)';
    btn.style.fontSize = '50px';
    btn.style.padding = '20px';
    btn.style.border = 'none';
    btn.style.backgroundColor = 'lightgreen';
    btn.style.color = 'white';
    btn.style.cursor = 'pointer';
    display.appendChild(btn);
    btn.addEventListener('click', () => {
        func();
        btn.remove();
    });
    return btn;
}

const menu = () => {
    createBtn('Start', startGame);
}

const startGame = () => {
    
}



document.addEventListener('DOMContentLoaded', () => {
    menu();
});