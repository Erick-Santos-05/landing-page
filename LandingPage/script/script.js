document.getElementById('mensal').addEventListener('click', function() {

  document.getElementById('basico-preco').innerText = 'R$ 49,90/mês';
  document.getElementById('intermediario-preco').innerText = 'R$ 149,90/mês';
  document.getElementById('corporativo-preco').innerText = 'R$ 499,90/mês';

  this.classList.remove('naoselecionado');
  this.classList.add('selecionado');
  document.getElementById('anual').classList.remove('selecionado');
  document.getElementById('anual').classList.add('naoselecionado');
});

document.getElementById('anual').addEventListener('click', function() {
  document.getElementById('basico-preco').innerText = 'R$ 499,90/ano';
  document.getElementById('intermediario-preco').innerText = 'R$ 1.499,90/ano';
  document.getElementById('corporativo-preco').innerText = 'R$ 4.999,90/ano';


  this.classList.remove('naoselecionado');
  this.classList.add('selecionado');
  document.getElementById('mensal').classList.remove('naoselecionado');
document.getElementById('mensal').classList.add('naoselecionado');
});



document.addEventListener('scroll', function() {
  const elementos = document.querySelectorAll('.aparecer-cima, .aparecer-direita, .aparecer-esquerda');

  elementos.forEach(function(elemento) {
    const posicao = elemento.getBoundingClientRect().top;
    const alturaTela = window.innerHeight;

    if (posicao < alturaTela - 100) {
      if (elemento.classList.contains('aparecer-cima')) {
        elemento.classList.add('apareceu-cima');
      } else if (elemento.classList.contains('aparecer-direita')) {
        elemento.classList.add('apareceu-direita');
      } else if (elemento.classList.contains('aparecer-esquerda')) {
        elemento.classList.add('apareceu-esquerda');
      }
    }
  });
});

const video = document.querySelector('video');
video.playbackRate = 0.5;