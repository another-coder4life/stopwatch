import './style.css';

const time = document.querySelector('.time');
const startBtn = document.querySelector('#startBtn');
const pauseBtn = document.querySelector('#pauseBtn');
const resetBtn = document.querySelector('#resetBtn');

let intervalId;
let startTime = 0;
let elapsedTime = 0;
let hh = 0;
let mm = 0;
let ss = 0;
let ms = 0;
let isStopped = true;

startBtn.addEventListener('click', () => {
    if (isStopped) {
        isStopped = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 10);
    }
});

pauseBtn.addEventListener('click', () => {
    if (!isStopped) {
        isStopped = true;
        clearInterval(intervalId);
    }
});

resetBtn.addEventListener('click', () => {
    isStopped = true;
    clearInterval(intervalId);
    startTime = elapsedTime = hh = mm = ss = ms = 0;
    time.textContent = '00:00:00:00';
});

function updateTime() {
    elapsedTime = Date.now() - startTime;

    const diffHH = elapsedTime / 3600000;
    const hh = Math.floor(diffHH);

    const diffMM = (diffHH - hh) * 60;
    const mm = Math.floor(diffMM);

    const diffSS = (diffMM - mm) * 60;
    const ss = Math.floor(diffSS);

    const diffMS = (diffSS - ss) * 100;
    const ms = Math.floor(diffMS);

    const formattedHH = hh.toString().padStart(2, '0');
    const formattedMM = mm.toString().padStart(2, '0');
    const formattedSS = ss.toString().padStart(2, '0');
    const formattedMS = ms.toString().padStart(2, '0');

    time.textContent = `${formattedHH}:${formattedMM}:${formattedSS}:${formattedMS}`;
}
