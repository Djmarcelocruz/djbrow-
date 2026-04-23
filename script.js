// Lógica de Controle do Cronômetro (Play/Pausa/Reset)
let timerInterval;
let timeLeft = 0;
let isTimerActive = false;

function toggleTimer() {
    const btn = document.getElementById('playPauseBtn');
    if (isTimerActive) {
        clearInterval(timerInterval);
        btn.innerText = "PLAY";
    } else {
        btn.innerText = "PAUSAR";
        timerInterval = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateTimerUI();
            } else {
                clearInterval(timerInterval);
                isTimerActive = false;
                btn.innerText = "FIM";
            }
        }, 1000);
    }
    isTimerActive = !isTimerActive;
}

function resetTimer(initialSeconds) {
    clearInterval(timerInterval);
    timeLeft = initialSeconds;
    isTimerActive = false;
    document.getElementById('playPauseBtn').innerText = "PLAY";
    updateTimerUI();
}

function updateTimerUI() {
    const m = Math.floor(timeLeft / 60).toString().padStart(2, '0');
    const s = (timeLeft % 60).toString().padStart(2, '0');
    const display = document.getElementById('timerDisplay');
    if(display) display.innerText = `${m}:${s}`;
}
