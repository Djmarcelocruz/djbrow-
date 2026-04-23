let currentPlayer = null;
let points = { F: 0, M: 0 };

const desafios = [
    "Dê um beijo de 30 segundos onde seu parceiro(a) escolher.",
    "Faça uma massagem sensual por 2 minutos.",
    "Sussurre um desejo proibido no ouvido.",
    "Tire uma peça de roupa.",
    "O parceiro(a) tem direito a um comando livre agora."
];

function selectPlayer(p) {
    currentPlayer = p;
    document.getElementById('cardF').classList.remove('active');
    document.getElementById('cardM').classList.remove('active');
    document.getElementById('card' + p).classList.add('active');
}

function spinWheel() {
    if (!currentPlayer) {
        alert("Primeiro, selecione quem vai jogar!");
        return;
    }

    const wheel = document.getElementById('wheel');
    const randomDeg = Math.floor(Math.random() * 360) + 1800; // Gira 5 vezes
    wheel.style.transform = `rotate(${randomDeg}deg)`;

    setTimeout(() => {
        const index = Math.floor(Math.random() * desafios.length);
        document.getElementById('challengeDisplay').innerText = desafios[index];
        
        // Adiciona ponto
        points[currentPlayer] += 10;
        document.getElementById('points' + currentPlayer).innerText = points[currentPlayer];
    }, 3100);
}

// Registro para o Celular reconhecer como App
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}
