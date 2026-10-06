// ---------------------------------------------------------------------------
// Wiki do Universo — dados do site.
// Tudo o que é conteúdo repetido (planetas, menu, cards, citações) fica aqui,
// separado da lógica em app.js. Para adicionar uma página ou citação, basta
// editar estas listas.
// ---------------------------------------------------------------------------

// Corpos do Sistema Solar, na ordem a partir do Sol. A ordem define a
// sequência "anterior/próximo" exibida nas páginas de cada planeta.
const CORPOS_CELESTES = [
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

// Itens do menu principal. "paginas" lista quais arquivos deixam o item ativo.
const NAVEGACAO_PRINCIPAL = [
  { href: "index.html", rotulo: "Início", paginas: ["index.html"] },
  { href: "universo.html", rotulo: "Universo", paginas: ["universo.html"] },
  { href: "sol.html", rotulo: "Planetas", paginas: CORPOS_CELESTES.map((corpo) => corpo.pagina) },
  { href: "via-lactea.html", rotulo: "Via Láctea", paginas: ["via-lactea.html"] },
  { href: "curiosidades.html", rotulo: "Curiosidades", paginas: ["curiosidades.html"] },
  { href: "sobre.html", rotulo: "Sobre", paginas: ["sobre.html"] },
  { href: "pagina-de-contato.html", rotulo: "Contato", paginas: ["pagina-de-contato.html"] }
];

// Grupos de cards da página inicial. Cada chave corresponde a um elemento
// com o atributo data-cards="<chave>" no index.html.
const GRUPOS_DE_CARDS = {
  "sistema-solar": CORPOS_CELESTES,
  universo: [
    { nome: "O Universo", pagina: "universo.html", descricao: "Big Bang, energia escura e buracos negros" },
    { nome: "Via Láctea", pagina: "via-lactea.html", descricao: "A galáxia que chamamos de lar" }
  ],
  outros: [
    { nome: "Curiosidades", pagina: "curiosidades.html", descricao: "Estrelas, galáxias e a velocidade da luz" },
    { nome: "Sobre", pagina: "sobre.html", descricao: "O projeto e quem o desenvolveu" },
    { nome: "Contato", pagina: "pagina-de-contato.html", descricao: "Fontes, créditos e formulário" }
  ]
};

const CITACOES = [
  "“O cosmos está dentro de nós. Somos feitos de poeira de estrelas.” — Carl Sagan",
  "“Em algum lugar, algo incrível está esperando para ser descoberto.” — Carl Sagan",
  "“Olhar para as estrelas é sempre olhar para o passado.” — Autor desconhecido",
  "“A imaginação é mais importante que o conhecimento.” — Albert Einstein",
  "“O universo não é apenas mais estranho do que imaginamos, é mais estranho do que podemos imaginar.” — J.B.S. Haldane"
];
