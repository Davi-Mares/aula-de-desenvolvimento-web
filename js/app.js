// ---------------------------------------------------------------------------
// Wiki do Universo — script único, compartilhado por todas as páginas.
// Monta a navbar e o rodapé (assim toda página tem o mesmo menu), gera os
// cards do Sistema Solar, cuida da navegação sequencial entre planetas,
// do botão de voltar ao topo e do player de som ambiente.
// ---------------------------------------------------------------------------

const corposCelestes = [
  { nome: "Sol", pagina: "sol.html", imagem: "img/sol.webp", descricao: "A estrela no centro do nosso sistema" },
  { nome: "Mercúrio", pagina: "mercurio.html", imagem: "img/mercurio.jpg", descricao: "O planeta mais próximo do Sol" },
  { nome: "Vênus", pagina: "venus.html", imagem: "img/venus.webp", descricao: "O planeta mais quente" },
  { nome: "Terra", pagina: "terra.html", imagem: "img/terra.jpg", descricao: "Nosso planeta, nossa casa" },
  { nome: "Marte", pagina: "marte.html", imagem: "img/marte.jpg", descricao: "O planeta vermelho" },
  { nome: "Júpiter", pagina: "jupiter.html", imagem: "img/planeta-jupiter.webp", descricao: "O maior planeta do sistema" },
  { nome: "Saturno", pagina: "saturno.html", imagem: "img/saturno.webp", descricao: "O planeta com anéis" },
  { nome: "Urano", pagina: "urano.html", imagem: "img/urano.webp", descricao: "Planeta de gelo e gás" },
  { nome: "Netuno", pagina: "netuno.html", imagem: "img/netuno.jpg", descricao: "O planeta mais distante" }
];

const citacoes = [
  "“O cosmos está dentro de nós. Somos feitos de poeira de estrelas.” — Carl Sagan",
  "“Em algum lugar, algo incrível está esperando para ser descoberto.” — Carl Sagan",
  "“Olhar para as estrelas é sempre olhar para o passado.” — Autor desconhecido",
  "“A imaginação é mais importante que o conhecimento.” — Albert Einstein",
  "“O universo não é apenas mais estranho do que imaginamos, é mais estranho do que podemos imaginar.” — J.B.S. Haldane"
];

// ---------------------------------------------------------------------------
// Navbar e rodapé — os mesmos em todas as páginas, montados a partir daqui
// para não precisar manter o HTML da navegação copiado em 15 arquivos.
// ---------------------------------------------------------------------------

const NAVEGACAO_PRINCIPAL = [
  { href: "index.html", rotulo: "Início", paginas: ["index.html", ""] },
  { href: "universo.html", rotulo: "Universo", paginas: ["universo.html"] },
  {
    href: "sol.html",
    rotulo: "Planetas",
    paginas: corposCelestes.map((corpo) => corpo.pagina)
  },
  { href: "via-lactea.html", rotulo: "Via Láctea", paginas: ["via-lactea.html"] },
  { href: "curiosidades.html", rotulo: "Curiosidades", paginas: ["curiosidades.html"] },
  { href: "sobre.html", rotulo: "Sobre", paginas: ["sobre.html"] },
  { href: "pagina-de-contato.html", rotulo: "Contato", paginas: ["pagina-de-contato.html"] }
];

function obterPaginaAtual() {
  const partes = window.location.pathname.split("/");
  return partes[partes.length - 1] || "index.html";
}

function montarNavbar() {
  const alvo = document.getElementById("app-navbar");
  if (!alvo) return;

  const paginaAtual = obterPaginaAtual();

  const itens = NAVEGACAO_PRINCIPAL.map((item) => {
    const ativo = item.paginas.includes(paginaAtual);
    const classeAtiva = ativo ? " active" : "";
    const atributoAtual = ativo ? ' aria-current="page"' : "";
    return `<li class="nav-item"><a class="nav-link${classeAtiva}" href="${item.href}"${atributoAtual}>${item.rotulo}</a></li>`;
  }).join("");

  alvo.outerHTML = `
    <header class="site-header bg-dark text-white py-3 sticky-top" role="banner">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Navegação principal">
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
    <footer class="bg-dark text-white text-center py-4 mt-5" role="contentinfo">
      <p class="mb-0">Projeto de Desenvolvimento Web — UNEMAT</p>
    </footer>
  `;
}

// ---------------------------------------------------------------------------
// Cards do Sistema Solar (usados na página inicial)
// ---------------------------------------------------------------------------

function criarCardPlaneta(corpo) {
  return `
    <div class="col-12 col-sm-6 col-lg-4">
      <a href="${corpo.pagina}" class="card text-decoration-none h-100 border-0 shadow-sm">
        <div class="card-body text-center">
          <div class="planeta-foto-wrap">
            <img src="${corpo.imagem}" alt="${corpo.nome}" loading="lazy" class="planeta-foto">
          </div>
          <h5 class="card-title">${corpo.nome}</h5>
          <p class="card-text small mt-1 mb-0" style="opacity: 0.8;">${corpo.descricao}</p>
        </div>
      </a>
    </div>
  `;
}

function gerarCardsDoSistemaSolar() {
  const container = document.querySelector("#sistema-solar .row");
  if (!container) return;

  container.innerHTML = corposCelestes.map(criarCardPlaneta).join("");
}

function adicionarEfeitoBrilho() {
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("mouseenter", () => card.classList.add("brilho"));
    card.addEventListener("mouseleave", () => card.classList.remove("brilho"));
  });
}

// ---------------------------------------------------------------------------
// Citação aleatória (widget da página inicial)
// ---------------------------------------------------------------------------

function mostrarCitacaoAleatoria() {
  const elemento = document.getElementById("citacao");
  if (!elemento) return;

  const indice = Math.floor(Math.random() * citacoes.length);
  elemento.textContent = citacoes[indice];
}

function trocarCitacao() {
  mostrarCitacaoAleatoria();
}

// ---------------------------------------------------------------------------
// Navegação sequencial entre planetas (anterior/próximo), inserida logo
// depois do <header class="page-header"> de cada página de planeta.
// ---------------------------------------------------------------------------

function criarNavegacaoPlanetaria() {
  const cabecalho = document.querySelector(".page-header");
  if (!cabecalho) return;

  const paginaAtual = obterPaginaAtual();
  const indiceAtual = corposCelestes.findIndex((corpo) => corpo.pagina === paginaAtual);
  if (indiceAtual === -1) return;

  const anterior = corposCelestes[indiceAtual - 1];
  const proximo = corposCelestes[indiceAtual + 1];

  const itensLista = corposCelestes
    .map((corpo, indice) => {
      const classeAtual = indice === indiceAtual ? " atual" : "";
      return `<li class="${classeAtual.trim()}"><a href="${corpo.pagina}">${corpo.nome}</a></li>`;
    })
    .join("");

  const navegacao = document.createElement("nav");
  navegacao.className = "navegacao-planetaria";
  navegacao.setAttribute("aria-label", "Navegação entre planetas");
  navegacao.innerHTML = `
    <span class="sequencia-titulo">Sequência a partir do Sol</span>
    <div class="sequencia-planetas">
      <ol>${itensLista}</ol>
    </div>
    <div class="controles-planetas">
      ${anterior ? `<a href="${anterior.pagina}">⬅️ ${anterior.nome}</a>` : "<span></span>"}
      ${proximo ? `<a href="${proximo.pagina}">${proximo.nome} ➡️</a>` : "<span></span>"}
    </div>
  `;

  cabecalho.insertAdjacentElement("afterend", navegacao);
}

// ---------------------------------------------------------------------------
// Botão de voltar ao topo
// ---------------------------------------------------------------------------

function criarBotaoTopo() {
  if (document.getElementById("btn-topo")) return;

  const botao = document.createElement("button");
  botao.id = "btn-topo";
  botao.type = "button";
  botao.className = "btn-topo";
  botao.setAttribute("aria-label", "Voltar ao topo da página");
  botao.textContent = "⬆️";
  botao.style.display = "none";
  botao.addEventListener("click", scrollAoTopo);

  document.body.appendChild(botao);

  window.addEventListener("scroll", () => mostrarBotaoTopo(botao));
}

function mostrarBotaoTopo(botao) {
  botao.style.display = window.scrollY > 400 ? "flex" : "none";
}

function scrollAoTopo() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ---------------------------------------------------------------------------
// Player de som ambiente — persiste a preferência entre páginas via
// localStorage. Navegadores podem bloquear a retomada automática do áudio
// sem uma interação recente do usuário; nesse caso o botão volta ao estado
// pausado e basta um clique para retomar.
// ---------------------------------------------------------------------------

const CHAVE_SOM_AMBIENTE = "wikiUniverso:somAtivo";

function criarPlayerAmbiente() {
  if (document.getElementById("player-ambiente")) return;

  const audio = document.createElement("audio");
  audio.id = "audio-ambiente";
  audio.src = "audios/this-is-interstellar-on-4k.mp3";
  audio.loop = true;
  audio.preload = "none";
  audio.volume = 0.35;
  document.body.appendChild(audio);

  const botao = document.createElement("button");
  botao.id = "player-ambiente";
  botao.type = "button";
  botao.className = "player-ambiente";
  botao.setAttribute("aria-pressed", "false");
  botao.innerHTML = '<span class="icone" aria-hidden="true">🔈</span><span class="rotulo">Som ambiente</span>';
  document.body.appendChild(botao);

  function atualizarBotao(tocando) {
    botao.setAttribute("aria-pressed", String(tocando));
    botao.querySelector(".icone").textContent = tocando ? "🔊" : "🔈";
    botao.querySelector(".rotulo").textContent = tocando ? "Pausar som" : "Som ambiente";
  }

  botao.addEventListener("click", () => {
    if (audio.paused) {
      audio
        .play()
        .then(() => {
          localStorage.setItem(CHAVE_SOM_AMBIENTE, "1");
          atualizarBotao(true);
        })
        .catch(() => atualizarBotao(false));
    } else {
      audio.pause();
      localStorage.setItem(CHAVE_SOM_AMBIENTE, "0");
      atualizarBotao(false);
    }
  });

  if (localStorage.getItem(CHAVE_SOM_AMBIENTE) === "1") {
    audio
      .play()
      .then(() => atualizarBotao(true))
      .catch(() => atualizarBotao(false));
  }
}

// ---------------------------------------------------------------------------
// Inicialização
// ---------------------------------------------------------------------------

window.addEventListener("DOMContentLoaded", () => {
  montarNavbar();
  montarRodape();
  mostrarCitacaoAleatoria();
  gerarCardsDoSistemaSolar();
  adicionarEfeitoBrilho();
  criarNavegacaoPlanetaria();
  criarBotaoTopo();
  criarPlayerAmbiente();
});
