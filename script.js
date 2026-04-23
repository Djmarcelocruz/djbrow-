let timerInterval;
let timeLeft = 0;
let isPaused = true;

function toggleTimer() {
    const btn = document.getElementById('btnPlayPause');
    if (isPaused) {
        isPaused = false;
        btn.innerText = "PAUSAR";
        timerInterval = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateTimerUI();
            } else {
                clearInterval(timerInterval);
                alert("O tempo acabou!");
            }
        }, 1000);
    } else {
        isPaused = true;
        btn.innerText = "CONTINUAR";
        clearInterval(timerInterval);
    }
}

function updateTimerUI() {
    const m = Math.floor(timeLeft / 60).toString().padStart(2, '0');
    const s = (timeLeft % 60).toString().padStart(2, '0');
    const display = document.getElementById('timerDisplay');
    if (display) display.innerText = `${m}:${s}`;
}
