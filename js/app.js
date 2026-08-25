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
    botao.hidden = window.scrollY <= 300;
  }
}

function criarBotaoTopo() {
  if (document.getElementById('btnTopo')) {
    return;
  }

  const botao = document.createElement('button');
  botao.id = 'btnTopo';
  botao.className = 'btn-topo';
  botao.type = 'button';
  botao.title = 'Voltar ao topo';
  botao.setAttribute('aria-label', 'Voltar ao topo');
  botao.textContent = '↑';
  botao.addEventListener('click', scrollAoTopo);
  document.body.appendChild(botao);
  mostrarBotaoTopo();
}

function configurarMenu() {
  const botao = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.site-nav');
  if (!botao || !menu) {
    return;
  }

  const fecharMenu = () => {
    menu.classList.remove('menu-aberto');
    botao.setAttribute('aria-expanded', 'false');
  };

  botao.addEventListener('click', () => {
    const aberto = menu.classList.toggle('menu-aberto');
    botao.setAttribute('aria-expanded', String(aberto));
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', fecharMenu);
  });

  document.addEventListener('keydown', evento => {
    if (evento.key === 'Escape') {
      fecharMenu();
      botao.focus();
    }
  });
}

function marcarPaginaAtual() {
  const paginaAtual = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-nav a').forEach(link => {
    const paginaDoLink = link.getAttribute('href').split('#')[0];
    if (paginaDoLink === paginaAtual) {
      link.setAttribute('aria-current', 'page');
    }
  });
}

function criarNavegacaoPlanetaria() {
  const paginas = [
    { arquivo: 'sol.html', nome: 'Sol' },
    { arquivo: 'mercurio.html', nome: 'Mercúrio' },
    { arquivo: 'venus.html', nome: 'Vênus' },
    { arquivo: 'terra.html', nome: 'Terra' },
    { arquivo: 'marte.html', nome: 'Marte' },
    { arquivo: 'jupiter.html', nome: 'Júpiter' },
    { arquivo: 'saturno.html', nome: 'Saturno' },
    { arquivo: 'urano.html', nome: 'Urano' },
    { arquivo: 'netuno.html', nome: 'Netuno' }
  ];
  const paginaAtual = window.location.pathname.split('/').pop();
  const indiceAtual = paginas.findIndex(pagina => pagina.arquivo === paginaAtual);
  const cabecalho = document.querySelector('.page-header');

  if (indiceAtual === -1 || !cabecalho) {
    return;
  }

  const navegacao = document.createElement('nav');
  navegacao.className = 'navegacao-planetaria';
  navegacao.setAttribute('aria-label', 'Ordem do Sistema Solar');

  const itens = paginas.map((pagina, indice) => {
    const atual = indice === indiceAtual;
    return `<li${atual ? ' class="atual"' : ''}><a href="${pagina.arquivo}"${atual ? ' aria-current="page"' : ''}>${pagina.nome}</a></li>`;
  }).join('');

  const anterior = indiceAtual > 0 ? paginas[indiceAtual - 1] : null;
  const proximo = indiceAtual < paginas.length - 1 ? paginas[indiceAtual + 1] : null;
  navegacao.innerHTML = `
    <div class="sequencia-planetas">
      <span class="sequencia-titulo">Ordem a partir do Sol</span>
      <ol>${itens}</ol>
    </div>
    <div class="controles-planetas">
      ${anterior ? `<a href="${anterior.arquivo}" class="planeta-anterior">← ${anterior.nome}</a>` : '<span></span>'}
      ${proximo ? `<a href="${proximo.arquivo}" class="planeta-proximo">${proximo.nome} →</a>` : '<span></span>'}
    </div>`;

  cabecalho.insertAdjacentElement('afterend', navegacao);
}

// ===== EFEITOS VISUAIS =====
// Efeito de brilho ao passar o mouse sobre os cards
function adicionarEfeitoBrilho() {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.classList.add('card-destacado');
    });
    card.addEventListener('mouseleave', function() {
      this.classList.remove('card-destacado');
    });
  });
}

// Executar ao carregar a página
window.addEventListener('DOMContentLoaded', function() {
  mostrarCitacaoAleatoria();
  adicionarEfeitoBrilho();
  configurarMenu();
  marcarPaginaAtual();
  criarNavegacaoPlanetaria();
  criarBotaoTopo();
});

// Mostrar/ocultar botão topo ao scroll
window.addEventListener('scroll', mostrarBotaoTopo);
