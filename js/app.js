// JavaScript do projeto.
// Funcionalidades interativas do site

// Mensagens sobre o universo
const citacoes = [
  "O universo é vasto demais para estar sozinho.",
  "Somos feitos do pó das estrelas.",
  "A curiosidade é o primeiro passo para a compreensão do universo.",
  "No vasto cosmos, cada planeta tem sua história.",
  "Os buracos negros são portais para o desconhecido.",
  "A Via Láctea é nosso lar.",
  "Cada estrela é um sol distante com seus próprios mistérios.",
  "Astronomia é a ciência que estuda os astros e o universo.",
  "Nem todos os pontos do céu são estrelas."
];

// ===== CITAÇÕES =====
// Mostrar citação aleatória ao carregar a página
function mostrarCitacaoAleatoria() {
  const citacao = citacoes[Math.floor(Math.random() * citacoes.length)];
  console.log("🌌 " + citacao);
  
  const elementoCitacao = document.getElementById('citacao');
  if (elementoCitacao) {
    elementoCitacao.textContent = '🌌 ' + citacao;
  }
}

// Trocar para próxima citação
function trocarCitacao() {
  mostrarCitacaoAleatoria();
}

// ===== NAVEGAÇÃO =====
// Voltar ao topo com scroll suave
function scrollAoTopo() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Mostrar/ocultar botão "Voltar ao Topo"
function mostrarBotaoTopo() {
  const botao = document.getElementById('btnTopo');
  if (botao) {
    if (window.scrollY > 300) {
      botao.style.display = 'block';
    } else {
      botao.style.display = 'none';
    }
  }
}

// ===== EFEITOS VISUAIS =====
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

// Mostrar/ocultar botão topo ao scroll
window.addEventListener('scroll', mostrarBotaoTopo);
