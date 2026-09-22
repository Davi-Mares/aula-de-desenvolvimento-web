// JavaScript do projeto.
// Funcionalidades interativas do site

// ===== DADOS: Array de objetos com os corpos celestes =====
const corposCelestes = [
  {
    nome: "Sol",
    arquivo: "sol.html",
    emoji: "☀️",
    descricao: "A estrela no centro do nosso sistema"
  },
  {
    nome: "Mercúrio",
    arquivo: "mercurio.html",
    emoji: "🔬",
    descricao: "O planeta mais próximo do Sol"
  },
  {
    nome: "Vênus",
    arquivo: "venus.html",
    emoji: "🟡",
    descricao: "O planeta mais quente"
  },
  {
    nome: "Terra",
    arquivo: "terra.html",
    emoji: "🌍",
    descricao: "Nosso planeta, nossa casa"
  },
  {
    nome: "Marte",
    arquivo: "marte.html",
    emoji: "🔴",
    descricao: "O planeta vermelho"
  },
  {
    nome: "Júpiter",
    arquivo: "jupiter.html",
    emoji: "🪐",
    descricao: "O maior planeta do sistema"
  },
  {
    nome: "Saturno",
    arquivo: "saturno.html",
    emoji: "✨",
    descricao: "O planeta com anéis"
  },
  {
    nome: "Urano",
    arquivo: "urano.html",
    emoji: "🔵",
    descricao: "Planeta de gelo e gás"
  },
  {
    nome: "Netuno",
    arquivo: "netuno.html",
    emoji: "🌀",
    descricao: "O planeta mais distante"
  }
];

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

// ===== RENDERIZAÇÃO DINÂMICA DE CARDS =====
function criarSVGPlaneta(nome) {
  const svgs = {
    Sol: '<defs><radialGradient id="sol-grad"><stop offset="0%" style="stop-color:#FDB813;stop-opacity:1" /><stop offset="100%" style="stop-color:#FF6B35;stop-opacity:1" /></radialGradient></defs><circle class="planeta-circulo" cx="50" cy="50" r="35" fill="url(#sol-grad)"/><circle cx="50" cy="50" r="35" fill="none" stroke="#FF6B35" stroke-width="2" opacity="0.3"/>',
    Mercúrio: '<circle class="planeta-circulo" cx="50" cy="50" r="20" fill="#8C7853"/><circle cx="50" cy="50" r="20" fill="none" stroke="#A0927D" stroke-width="1.5" opacity="0.4"/>',
    Vênus: '<defs><radialGradient id="venus-grad"><stop offset="0%" style="stop-color:#FFC649;stop-opacity:1" /><stop offset="100%" style="stop-color:#FF9A00;stop-opacity:1" /></radialGradient></defs><circle class="planeta-circulo" cx="50" cy="50" r="28" fill="url(#venus-grad)"/><circle cx="50" cy="50" r="28" fill="none" stroke="#FF9A00" stroke-width="1.5" opacity="0.3"/>',
    Terra: '<defs><radialGradient id="terra-grad"><stop offset="0%" style="stop-color:#4DA6FF;stop-opacity:1" /><stop offset="100%" style="stop-color:#0066CC;stop-opacity:1" /></radialGradient></defs><circle class="planeta-circulo" cx="50" cy="50" r="30" fill="url(#terra-grad)"/><circle cx="35" cy="35" r="8" fill="#2D8659" opacity="0.7"/><circle cx="60" cy="45" r="6" fill="#2D8659" opacity="0.6"/><circle cx="50" cy="50" r="30" fill="none" stroke="#0066CC" stroke-width="1.5" opacity="0.3"/>',
    Marte: '<defs><radialGradient id="marte-grad"><stop offset="0%" style="stop-color:#E27B58;stop-opacity:1" /><stop offset="100%" style="stop-color:#C1440E;stop-opacity:1" /></radialGradient></defs><circle class="planeta-circulo" cx="50" cy="50" r="26" fill="url(#marte-grad)"/><circle cx="55" cy="48" r="3" fill="#8B4513" opacity="0.6"/><circle cx="50" cy="50" r="26" fill="none" stroke="#C1440E" stroke-width="1.5" opacity="0.3"/>',
    Júpiter: '<defs><linearGradient id="jupiter-grad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:#DAA520;stop-opacity:1" /><stop offset="50%" style="stop-color:#CD853F;stop-opacity:1" /><stop offset="100%" style="stop-color:#8B4513;stop-opacity:1" /></linearGradient></defs><circle class="planeta-circulo" cx="50" cy="50" r="38" fill="url(#jupiter-grad)"/><ellipse cx="50" cy="40" rx="35" ry="4" fill="#8B4513" opacity="0.4"/><ellipse cx="50" cy="58" rx="35" ry="4" fill="#654321" opacity="0.5"/><circle cx="50" cy="50" r="38" fill="none" stroke="#8B4513" stroke-width="1.5" opacity="0.2"/>',
    Saturno: '<defs><radialGradient id="saturno-grad"><stop offset="0%" style="stop-color:#FAD5A5;stop-opacity:1" /><stop offset="100%" style="stop-color:#F4A460;stop-opacity:1" /></radialGradient></defs><ellipse class="planeta-anel" cx="50" cy="50" rx="45" ry="12" fill="none" stroke="#DAA520" stroke-width="3" opacity="0.7"/><circle class="planeta-circulo" cx="50" cy="50" r="28" fill="url(#saturno-grad)"/><circle cx="50" cy="50" r="28" fill="none" stroke="#F4A460" stroke-width="1.5" opacity="0.3"/>',
    Urano: '<defs><radialGradient id="urano-grad"><stop offset="0%" style="stop-color:#4FD0E7;stop-opacity:1" /><stop offset="100%" style="stop-color:#0099CC;stop-opacity:1" /></radialGradient></defs><circle class="planeta-circulo" cx="50" cy="50" r="32" fill="url(#urano-grad)"/><circle cx="50" cy="50" r="32" fill="none" stroke="#0099CC" stroke-width="1.5" opacity="0.3"/>',
    Netuno: '<defs><radialGradient id="netuno-grad"><stop offset="0%" style="stop-color:#4169E1;stop-opacity:1" /><stop offset="100%" style="stop-color:#000080;stop-opacity:1" /></radialGradient></defs><circle class="planeta-circulo" cx="50" cy="50" r="34" fill="url(#netuno-grad)"/><path d="M 45 40 Q 50 35, 55 40" fill="none" stroke="#87CEEB" stroke-width="1.5" opacity="0.5"/><circle cx="50" cy="50" r="34" fill="none" stroke="#000080" stroke-width="1.5" opacity="0.3"/>'
  };
  return svgs[nome] || '';
}

function gerarCardsDoSistemaSolar() {
  const containerCards = document.querySelector('#sistema-solar .row');
  
  if (!containerCards) {
    console.log("Container de cards não encontrado");
    return;
  }

  // Limpar cards anteriores
  containerCards.innerHTML = '';

  // Gerar cada card dinamicamente
  corposCelestes.forEach(corpo => {
    const colDiv = document.createElement('div');
    colDiv.className = 'col-12 col-sm-6 col-lg-4';

    const cardLink = document.createElement('a');
    cardLink.href = corpo.arquivo;
    cardLink.className = 'card text-decoration-none h-100 border-0 shadow-sm';

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body text-center';

    // Criar SVG
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'planeta-svg');
    svg.setAttribute('viewBox', '0 0 100 100');
    svg.innerHTML = criarSVGPlaneta(corpo.nome);

    // Criar título
    const titulo = document.createElement('h5');
    titulo.className = 'card-title';
    titulo.textContent = corpo.nome;

    // Criar descrição (bonus)
    const descricao = document.createElement('p');
    descricao.className = 'card-text small';
    descricao.style.marginTop = '8px';
    descricao.style.opacity = '0.8';
    descricao.textContent = corpo.descricao;

    // Montar estrutura
    cardBody.appendChild(svg);
    cardBody.appendChild(titulo);
    cardBody.appendChild(descricao);
    cardLink.appendChild(cardBody);
    colDiv.appendChild(cardLink);
    containerCards.appendChild(colDiv);
  });

  console.log("✅ Cards do Sistema Solar gerados dinamicamente via JavaScript");
}

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

// ===== VALIDAÇÃO DE FORMULÁRIO =====
function configurarValidacaoFormulario() {
  const form = document.querySelector('[role="form"], form');
  
  if (!form) {
    console.log("Formulário não encontrado");
    return;
  }

  // Validar campo de nome ao sair (blur)
  const campoNome = form.querySelector('#nome');
  if (campoNome) {
    // Criar elemento para mensagem de erro se não existir
    let erroNome = document.querySelector('#erro-nome');
    if (!erroNome) {
      erroNome = document.createElement('div');
      erroNome.id = 'erro-nome';
      erroNome.style.color = '#ff6b6b';
      erroNome.style.fontSize = '0.85rem';
      erroNome.style.marginTop = '4px';
      campoNome.parentElement.appendChild(erroNome);
    }

    campoNome.addEventListener('blur', function() {
      const valor = this.value.trim();
      if (valor === '') {
        erroNome.textContent = '⚠️ Por favor, informe seu nome completo.';
        this.classList.add('is-invalid');
      } else if (valor.length < 3) {
        erroNome.textContent = '⚠️ Nome deve ter pelo menos 3 caracteres.';
        this.classList.add('is-invalid');
      } else {
        erroNome.textContent = '';
        this.classList.remove('is-invalid');
      }
    });

    // Limpar erro ao digitar
    campoNome.addEventListener('input', function() {
      if (this.value.trim().length >= 3) {
        erroNome.textContent = '';
        this.classList.remove('is-invalid');
      }
    });
  }

  // Validar campo de email
  const campoEmail = form.querySelector('#email');
  if (campoEmail) {
    let erroEmail = document.querySelector('#erro-email');
    if (!erroEmail) {
      erroEmail = document.createElement('div');
      erroEmail.id = 'erro-email';
      erroEmail.style.color = '#ff6b6b';
      erroEmail.style.fontSize = '0.85rem';
      erroEmail.style.marginTop = '4px';
      campoEmail.parentElement.appendChild(erroEmail);
    }

    campoEmail.addEventListener('blur', function() {
      const valor = this.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      if (valor === '') {
        erroEmail.textContent = '⚠️ Por favor, informe seu e-mail.';
        this.classList.add('is-invalid');
      } else if (!emailRegex.test(valor)) {
        erroEmail.textContent = '⚠️ E-mail inválido. Use o formato: seu@email.com';
        this.classList.add('is-invalid');
      } else {
        erroEmail.textContent = '';
        this.classList.remove('is-invalid');
      }
    });

    campoEmail.addEventListener('input', function() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(this.value.trim())) {
        erroEmail.textContent = '';
        this.classList.remove('is-invalid');
      }
    });
  }

  // Validar formulário ao enviar
  form.addEventListener('submit', function(evento) {
    evento.preventDefault(); // Impede o envio padrão

    const nome = campoNome.value.trim();
    const email = campoEmail.value.trim();

    let valido = true;

    // Validar nome
    if (nome === '') {
      erroNome.textContent = '⚠️ Por favor, informe seu nome.';
      campoNome.classList.add('is-invalid');
      valido = false;
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
      erroEmail.textContent = '⚠️ Por favor, informe seu e-mail.';
      campoEmail.classList.add('is-invalid');
      valido = false;
    } else if (!emailRegex.test(email)) {
      erroEmail.textContent = '⚠️ E-mail inválido.';
      campoEmail.classList.add('is-invalid');
      valido = false;
    }

    if (valido) {
      console.log("✅ Formulário válido! Dados:");
      console.log({ nome, email });
      console.log("📧 Na próxima aula enviaremos via AJAX/Fetch");
      
      // Mostrar mensagem de sucesso temporária
      const msgSucesso = document.createElement('div');
      msgSucesso.style.cssText = 'color: #51cf66; font-weight: bold; margin-top: 16px; padding: 12px; border-radius: 8px; background: rgba(81, 207, 102, 0.1); border: 1px solid #51cf66;';
      msgSucesso.textContent = '✅ Mensagem recebida! Em breve entraremos em contato.';
      form.appendChild(msgSucesso);

      // Limpar formulário
      setTimeout(() => {
        form.reset();
        msgSucesso.remove();
        campoNome.classList.remove('is-invalid');
        campoEmail.classList.remove('is-invalid');
      }, 3000);
    }
  });

  console.log("✅ Validação de formulário configurada");
}

// Executar ao carregar a página
window.addEventListener('DOMContentLoaded', function() {
  mostrarCitacaoAleatoria();
  gerarCardsDoSistemaSolar();  // Gera os cards dinamicamente via JavaScript
  adicionarEfeitoBrilho();
  configurarMenu();
  marcarPaginaAtual();
  criarNavegacaoPlanetaria();
  criarBotaoTopo();
});

// Mostrar/ocultar botão topo ao scroll
window.addEventListener('scroll', mostrarBotaoTopo);
