let countdown;
let timeLeft = 0;
let initialSeconds = 0;
let isTimerRunning = false;

// Função para disparar o cronômetro no modal de resultado
function startChallengeTimer(seconds) {
    clearInterval(countdown);
    timeLeft = seconds;
    initialSeconds = seconds;
    isTimerRunning = true;
    updateTimerDisplay();
    runTimerLogic();
}

function runTimerLogic() {
    countdown = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(countdown);
            isTimerRunning = false;
            return;
        }
        timeLeft--;
        updateTimerDisplay();
    }, 1000);
}

function toggleTimer() {
    const btn = document.getElementById('btnPlayPause');
    if (isTimerRunning) {
        clearInterval(countdown);
        btn.innerText = "CONTINUAR";
    } else {
        runTimerLogic();
        btn.innerText = "PAUSAR";
    }
    isTimerRunning = !isTimerRunning;
}

function resetTimer() {
    clearInterval(countdown);
    timeLeft = initialSeconds;
    isTimerRunning = false;
    document.getElementById('btnPlayPause').innerText = "PLAY";
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const m = Math.floor(timeLeft / 60).toString().padStart(2, '0');
    const s = (timeLeft % 60).toString().padStart(2, '0');
    const el = document.getElementById('timerDisplay');
    if (el) el.innerText = `${m}:${s}`;
}
