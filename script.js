if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(err => console.log('SW fail', err));
  });
}
// Cole o restante do código do jogo abaixo desta linha...
