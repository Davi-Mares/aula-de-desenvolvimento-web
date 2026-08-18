// JavaScript do projeto.
// Funcionalidades interativas do site

// Mensagens sobre o universo
const citacoes = [
  "O universo é vasto demais para estar sozinho.",
  "Somos feitos do pó das estrelas.",
  "A curiosidade é o primeiro passo para a compreensão do universo.",
  "No vasto cosmos, cada planeta tem sua história.",
  "Os buracos negros são portais para o desconhecido.",
  "A Via Láctea é nosso lar galáxico.",
  "Cada estrela é um sol distante com seus próprios mistérios."
];

// Função para mostrar uma citação aleatória ao carregar a página
function mostrarCitacaoAleatoria() {
  const citacao = citacoes[Math.floor(Math.random() * citacoes.length)];
  console.log("🌌 " + citacao);
}

// Efeito de brilho ao passar o mouse sobre os cards
function adicionarEfeitoBrilho() {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)';
      this.style.boxShadow = '0 0 20px rgba(102, 204, 255, 0.5)';
    });
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
      this.style.boxShadow = 'none';
    });
  });
}

// Executar ao carregar a página
window.addEventListener('DOMContentLoaded', function() {
  mostrarCitacaoAleatoria();
  adicionarEfeitoBrilho();
});
