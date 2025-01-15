// Mostra a seção de flores quando o botão é clicado
document.getElementById('floresButton').addEventListener('click', () => {
  const floresSection = document.getElementById('floresSection');
  floresSection.classList.remove('hidden');
  floresSection.style.display = 'block'; // Garante exibição em dispositivos móveis
});
