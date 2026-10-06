// ---------------------------------------------------------------------------
// Wiki do Universo — comportamento compartilhado por todas as páginas.
// Monta navbar e rodapé, gera os cards da página inicial, a navegação entre
// planetas, o botão de voltar ao topo, o som ambiente e a validação do
// formulário. Os dados usados aqui ficam em dados.js.
// ---------------------------------------------------------------------------

const PAGINA_ATUAL = window.location.pathname.split("/").pop() || "index.html";

// ---------------------------------------------------------------------------
// Navbar e rodapé — montados aqui para não repetir o mesmo HTML em 15 páginas.
// ---------------------------------------------------------------------------

function montarNavbar() {
  const alvo = document.getElementById("app-navbar");
  if (!alvo) return;

  const itens = NAVEGACAO_PRINCIPAL.map((item) => {
    const ativo = item.paginas.includes(PAGINA_ATUAL);
    return `
      <li class="nav-item">
        <a class="nav-link${ativo ? " active" : ""}" href="${item.href}"${ativo ? ' aria-current="page"' : ""}>${item.rotulo}</a>
      </li>`;
  }).join("");

  alvo.outerHTML = `
    <a href="#conteudo" class="skip-link">Pular para o conteúdo principal</a>
    <header class="site-header sticky-top">
      <nav class="navbar navbar-expand-lg" aria-label="Navegação principal">
        <div class="container-fluid">
          <a class="navbar-brand logo-rgb" href="index.html">🌌 Wiki do Universo</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu-principal"
                  aria-controls="menu-principal" aria-expanded="false" aria-label="Alternar navegação">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="menu-principal">
            <ul class="navbar-nav ms-auto">${itens}</ul>
          </div>
        </div>
      </nav>
    </header>
  `;
}

function montarRodape() {
  const alvo = document.getElementById("app-footer");
  if (!alvo) return;

  alvo.outerHTML = `
    <footer class="site-footer">
      <p>Projeto de Desenvolvimento Web — UNEMAT</p>
    </footer>
  `;
}

// ---------------------------------------------------------------------------
// Cards da página inicial — cada elemento [data-cards="grupo"] recebe os
// cards do grupo correspondente em GRUPOS_DE_CARDS.
// ---------------------------------------------------------------------------

function criarCard(item) {
  const foto = item.imagem
    ? `<div class="planeta-foto-wrap"><img src="${item.imagem}" alt="" loading="lazy" class="planeta-foto"></div>`
    : "";

  return `
    <div class="col-12 col-sm-6 col-lg-4">
      <a href="${item.pagina}" class="card h-100">
        <div class="card-body">
          ${foto}
          <h3 class="card-title">${item.nome}</h3>
          <p class="card-text">${item.descricao}</p>
        </div>
      </a>
    </div>
  `;
}

function gerarCards() {
  document.querySelectorAll("[data-cards]").forEach((container) => {
    const itens = GRUPOS_DE_CARDS[container.dataset.cards] || [];
    container.innerHTML = itens.map(criarCard).join("");
  });
}

// ---------------------------------------------------------------------------
// Citação do dia — mostra uma citação aleatória e troca ao clicar no botão,
// sem repetir a que já está na tela.
// ---------------------------------------------------------------------------

function iniciarCitacoes() {
  const texto = document.getElementById("citacao");
  const botao = document.getElementById("botao-citacao");
  if (!texto) return;

  let indiceAtual = -1;

  function trocarCitacao() {
    let novoIndice;
    do {
      novoIndice = Math.floor(Math.random() * CITACOES.length);
    } while (novoIndice === indiceAtual && CITACOES.length > 1);

    indiceAtual = novoIndice;
    texto.textContent = CITACOES[indiceAtual];
  }

  trocarCitacao();
  botao?.addEventListener("click", trocarCitacao);
}

// ---------------------------------------------------------------------------
// Navegação entre planetas (sequência + anterior/próximo), inserida logo
// depois do cabeçalho de cada página de planeta.
// ---------------------------------------------------------------------------

function criarNavegacaoPlanetaria() {
  const cabecalho = document.querySelector(".page-header");
  const indiceAtual = CORPOS_CELESTES.findIndex((corpo) => corpo.pagina === PAGINA_ATUAL);
  if (!cabecalho || indiceAtual === -1) return;

  const anterior = CORPOS_CELESTES[indiceAtual - 1];
  const proximo = CORPOS_CELESTES[indiceAtual + 1];

  const itens = CORPOS_CELESTES.map((corpo, indice) => {
    const atual = indice === indiceAtual;
    return `<li${atual ? ' class="atual"' : ""}><a href="${corpo.pagina}"${atual ? ' aria-current="page"' : ""}>${corpo.nome}</a></li>`;
  }).join("");

  const navegacao = document.createElement("nav");
  navegacao.className = "navegacao-planetaria";
  navegacao.setAttribute("aria-label", "Navegação entre planetas");
  navegacao.innerHTML = `
    <span class="sequencia-titulo">Sequência a partir do Sol</span>
    <ol class="sequencia-planetas">${itens}</ol>
    <div class="controles-planetas">
      ${anterior ? `<a href="${anterior.pagina}">⬅️ ${anterior.nome}</a>` : "<span></span>"}
      ${proximo ? `<a href="${proximo.pagina}">${proximo.nome} ➡️</a>` : "<span></span>"}
    </div>
  `;

  cabecalho.insertAdjacentElement("afterend", navegacao);
}

// ---------------------------------------------------------------------------
// Botão de voltar ao topo — aparece depois de rolar 400px.
// ---------------------------------------------------------------------------

function criarBotaoTopo() {
  const botao = document.createElement("button");
  botao.type = "button";
  botao.className = "botao-flutuante btn-topo";
  botao.setAttribute("aria-label", "Voltar ao topo da página");
  botao.textContent = "⬆️";
  botao.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  document.body.appendChild(botao);

  const atualizar = () => botao.classList.toggle("visivel", window.scrollY > 400);
  window.addEventListener("scroll", atualizar, { passive: true });
  atualizar();
}

// ---------------------------------------------------------------------------
// Som ambiente — a preferência é lembrada entre páginas via localStorage.
// Navegadores podem bloquear a retomada automática do áudio sem interação
// recente; nesse caso o botão volta ao estado pausado e basta um clique.
// ---------------------------------------------------------------------------

const CHAVE_SOM_AMBIENTE = "wikiUniverso:somAtivo";

function lerPreferenciaSom() {
  try {
    return localStorage.getItem(CHAVE_SOM_AMBIENTE) === "1";
  } catch {
    return false;
  }
}

function salvarPreferenciaSom(ativo) {
  try {
    localStorage.setItem(CHAVE_SOM_AMBIENTE, ativo ? "1" : "0");
  } catch {
    // Sem armazenamento disponível (ex.: modo privado): só não lembra.
  }
}

function criarPlayerAmbiente() {
  const audio = new Audio("audios/this-is-interstellar-on-4k.mp3");
  audio.loop = true;
  audio.preload = "none";
  audio.volume = 0.35;

  const botao = document.createElement("button");
  botao.type = "button";
  botao.className = "botao-flutuante player-ambiente";
  botao.setAttribute("aria-pressed", "false");
  botao.innerHTML = '<span class="icone" aria-hidden="true">🔈</span><span class="rotulo">Som ambiente</span>';
  document.body.appendChild(botao);

  const icone = botao.querySelector(".icone");
  const rotulo = botao.querySelector(".rotulo");

  function atualizarBotao(tocando) {
    botao.setAttribute("aria-pressed", String(tocando));
    icone.textContent = tocando ? "🔊" : "🔈";
    rotulo.textContent = tocando ? "Pausar som" : "Som ambiente";
  }

  function tocar() {
    audio.play()
      .then(() => {
        salvarPreferenciaSom(true);
        atualizarBotao(true);
      })
      .catch(() => atualizarBotao(false));
  }

  botao.addEventListener("click", () => {
    if (audio.paused) {
      tocar();
    } else {
      audio.pause();
      salvarPreferenciaSom(false);
      atualizarBotao(false);
    }
  });

  if (lerPreferenciaSom()) tocar();
}

// ---------------------------------------------------------------------------
// Validação de formulários (padrão do Bootstrap: .needs-validation).
// ---------------------------------------------------------------------------

function iniciarValidacaoFormularios() {
  document.querySelectorAll("form.needs-validation").forEach((formulario) => {
    formulario.addEventListener("submit", (evento) => {
      if (!formulario.checkValidity()) {
        evento.preventDefault();
        evento.stopPropagation();
      }
      formulario.classList.add("was-validated");
    });
  });
}

// ---------------------------------------------------------------------------
// Inicialização
// ---------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  montarNavbar();
  montarRodape();
  gerarCards();
  iniciarCitacoes();
  criarNavegacaoPlanetaria();
  criarBotaoTopo();
  criarPlayerAmbiente();
  iniciarValidacaoFormularios();
});
