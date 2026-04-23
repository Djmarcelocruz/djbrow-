// VARIÁVEIS DO NOVO CRONÔMETRO
let countdownInterval;
let timeLeft = 0;
let isTimerActive = false;
let initialTimeSet = 0;

function toggleTimer() {
    const btn = document.getElementById('btnPlayPause');
    if (isTimerActive) {
        clearInterval(countdownInterval);
        btn.innerText = "PLAY";
    } else {
        btn.innerText = "PAUSAR";
        countdownInterval = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateTimerUI();
            } else {
                clearInterval(countdownInterval);
                isTimerActive = false;
                alert("O tempo acabou!");
            }
        }, 1000);
    }
    isTimerActive = !isTimerActive;
}

function updateTimerUI() {
    const m = Math.floor(timeLeft / 60).toString().padStart(2, '0');
    const s = (timeLeft % 60).toString().padStart(2, '0');
    const display = document.getElementById('timerDisplay');
    if(display) display.innerText = `${m}:${s}`;
}

// O RESTO DO SEU CÓDIGO ORIGINAL CONTINUA ABAIXO...
// Não altere a função init() nem as de banco de dados para não perder seus desafios salvos.
