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
// Função para mostrar uma citação aleatória ao carregar a página
function mostrarCitacaoAleatoria() {
  const citacao = citacoes[Math.floor(Math.random() * citacoes.length)];
  console.log("🌌 " + citacao);
  
  // Também exibir na página se houver elemento com id "citacao"
  const elementoCitacao = document.getElementById('citacao');
  if (elementoCitacao) {
    elementoCitacao.textContent = '🌌 ' + citacao;
  }
}

// Função para trocar citação com botão
function trocarCitacao() {
  mostrarCitacaoAleatoria();
}

// Copiar citação para o clipboard
function copiarCitacao() {
  const elementoCitacao = document.getElementById('citacao');
  if (elementoCitacao) {
    const texto = elementoCitacao.textContent;
    navigator.clipboard.writeText(texto).then(() => {
      alert('✨ Citação copiada para a área de transferência!');
    }).catch(err => console.error('Erro ao copiar:', err));
  }
}

// ===== NAVEGAÇÃO =====
// Voltar ao topo da página
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

// ===== TEMA (DARK/LIGHT) =====
// Alternar entre tema escuro e claro
function alternarTema() {
  const body = document.body;
  body.classList.toggle('tema-claro');
  
  // Salvar preferência no localStorage
  if (body.classList.contains('tema-claro')) {
    localStorage.setItem('tema', 'claro');
  } else {
    localStorage.setItem('tema', 'escuro');
  }
}

// Carregar tema salvo
function carregarTemaSalvo() {
  const temaSalvo = localStorage.getItem('tema');
  if (temaSalvo === 'claro') {
    document.body.classList.add('tema-claro');
  }
}

// ===== FONTE =====
// Aumentar tamanho da fonte
function aumentarFonte() {
  const tamanhoAtual = parseInt(getComputedStyle(document.body).fontSize);
  document.body.style.fontSize = (tamanhoAtual + 2) + 'px';
}

// Diminuir tamanho da fonte
function diminuirFonte() {
  const tamanhoAtual = parseInt(getComputedStyle(document.body).fontSize);
  if (tamanhoAtual > 12) {
    document.body.style.fontSize = (tamanhoAtual - 2) + 'px';
  }
}

// Resetar tamanho da fonte
function resetarFonte() {
  document.body.style.fontSize = '16px';
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

// Mostrar alert com informação
function mostrarInfo(titulo, mensagem) {
  alert(`${titulo}\n\n${mensagem}`);
}

// ===== COMPARTILHAMENTO =====
// Compartilhar página no WhatsApp
function compartilharWhatsApp() {
  const url = window.location.href;
  const titulo = document.title;
  const mensagem = `Confira essa incrível wiki sobre o universo: ${titulo} - ${url}`;
  const urlWhatsApp = `https://wa.me/?text=${encodeURIComponent(mensagem)}`;
  window.open(urlWhatsApp, '_blank');
}

// Compartilhar página no Twitter
function compartilharTwitter() {
  const url = window.location.href;
  const titulo = document.title;
  const urlTwitter = `https://twitter.com/intent/tweet?text=Confira: ${encodeURIComponent(titulo)}&url=${encodeURIComponent(url)}`;
  window.open(urlTwitter, '_blank');
}

// ===== BUSCADOR =====
// Buscar conteúdo na página
function buscarTexto(termo) {
  const regex = new RegExp(termo, 'gi');
  const body = document.body.innerHTML;
  if (body.match(regex)) {
    alert(`✓ Encontradas ${body.match(regex).length} ocorrências de "${termo}"`);
  } else {
    alert(`✗ Nenhuma ocorrência de "${termo}" encontrada`);
  }
}

// ===== VALIDAÇÃO DE FORMULÁRIO =====
// Validar e-mail
function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Validar formulário de contato
function validarFormularioContato() {
  const nome = document.getElementById('nome')?.value;
  const email = document.getElementById('email')?.value;
  const mensagem = document.getElementById('mensagem')?.value;
  
  if (!nome || !email || !mensagem) {
    alert('⚠️ Preencha todos os campos!');
    return false;
  }
  
  if (!validarEmail(email)) {
    alert('⚠️ Email inválido!');
    return false;
  }
  
  alert('✓ Formulário enviado com sucesso!');
  return true;
}

// Executar ao carregar a página
window.addEventListener('DOMContentLoaded', function() {
  mostrarCitacaoAleatoria();
  adicionarEfeitoBrilho();
  carregarTemaSalvo();
});

// Mostrar/ocultar botão topo ao scroll
window.addEventListener('scroll', mostrarBotaoTopo);
