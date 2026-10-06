// ---------------------------------------------------------------------------
// Wiki do Universo — dados do site.
// Tudo o que é conteúdo repetido (planetas, menu, cards, busca, citações)
// fica aqui, separado da lógica em app.js. Para adicionar uma página,
// um dado ou uma citação, basta editar estas listas.
// ---------------------------------------------------------------------------

// Corpos do Sistema Solar, na ordem a partir do Sol. A ordem define a
// sequência "anterior/próximo" exibida nas páginas de cada planeta.
//
// - ficha:     linhas da ficha técnica (dados de NASA Science — Facts)
// - orbita:    posição no Sistema Solar animado da página inicial
//              (diametro em % da área, periodo em segundos, tamanho do astro
//              em % da largura, angulo inicial em graus) — fora de escala real
// - palavras:  termos extras que a busca do menu também encontra
const CORPOS_CELESTES = [
  {
    nome: "Sol",
    pagina: "sol.html",
    imagem: "img/sol.webp",
    descricao: "A estrela no centro do nosso sistema",
    palavras: "estrela anã amarela fusão nuclear vento solar heliosfera",
    ficha: [
      ["Tipo", "Estrela anã amarela (G2V)"],
      ["Diâmetro", "1.392.700 km (109 Terras)"],
      ["Distância da Terra", "149,6 milhões de km (1 UA)"],
      ["Rotação", "≈ 25 dias no equador"],
      ["Idade", "≈ 4,6 bilhões de anos"],
      ["Temperatura", "≈ 5.500 °C na superfície"],
      ["Núcleo", "≈ 15 milhões de °C"],
      ["Gravidade", "274 m/s² (28× a da Terra)"]
    ],
    orbita: { tamanho: 12 }
  },
  {
    nome: "Mercúrio",
    pagina: "mercurio.html",
    imagem: "img/mercurio.webp",
    descricao: "O planeta mais próximo do Sol",
    palavras: "rochoso crateras menor planeta",
    ficha: [
      ["Tipo", "Planeta rochoso"],
      ["Diâmetro", "4.879 km"],
      ["Distância do Sol", "57,9 milhões de km (0,39 UA)"],
      ["Rotação", "59 dias terrestres"],
      ["Ano", "88 dias terrestres"],
      ["Luas", "Nenhuma"],
      ["Temperatura", "−180 °C a 430 °C"],
      ["Gravidade", "3,7 m/s² (38% da Terra)"]
    ],
    orbita: { diametro: 22, periodo: 6, tamanho: 2.4, angulo: 40 }
  },
  {
    nome: "Vênus",
    pagina: "venus.html",
    imagem: "img/venus.webp",
    descricao: "O planeta mais quente",
    palavras: "rochoso efeito estufa estrela da manhã estrela da tarde irmão da terra",
    ficha: [
      ["Tipo", "Planeta rochoso"],
      ["Diâmetro", "12.104 km"],
      ["Distância do Sol", "108,2 milhões de km (0,72 UA)"],
      ["Rotação", "243 dias terrestres (gira ao contrário)"],
      ["Ano", "225 dias terrestres"],
      ["Luas", "Nenhuma"],
      ["Temperatura", "≈ 465 °C (média)"],
      ["Gravidade", "8,9 m/s² (91% da Terra)"]
    ],
    orbita: { diametro: 31, periodo: 10, tamanho: 3.2, angulo: 200 }
  },
  {
    nome: "Terra",
    pagina: "terra.html",
    imagem: "img/terra.webp",
    descricao: "Nosso planeta, nossa casa",
    palavras: "rochoso vida lua oceanos placas tectônicas",
    ficha: [
      ["Tipo", "Planeta rochoso"],
      ["Diâmetro", "12.742 km"],
      ["Distância do Sol", "149,6 milhões de km (1 UA)"],
      ["Rotação", "23 h 56 min"],
      ["Ano", "365,25 dias"],
      ["Luas", "1 (a Lua)"],
      ["Temperatura", "≈ 15 °C (média)"],
      ["Gravidade", "9,8 m/s²"]
    ],
    orbita: { diametro: 40, periodo: 15, tamanho: 3.4, angulo: 110 }
  },
  {
    nome: "Marte",
    pagina: "marte.html",
    imagem: "img/marte.webp",
    descricao: "O planeta vermelho",
    palavras: "rochoso planeta vermelho monte olimpo fobos deimos valles marineris rover",
    ficha: [
      ["Tipo", "Planeta rochoso"],
      ["Diâmetro", "6.779 km"],
      ["Distância do Sol", "227,9 milhões de km (1,5 UA)"],
      ["Rotação", "24 h 37 min"],
      ["Ano", "687 dias terrestres"],
      ["Luas", "2 (Fobos e Deimos)"],
      ["Temperatura", "≈ −60 °C (média)"],
      ["Gravidade", "3,7 m/s² (38% da Terra)"]
    ],
    orbita: { diametro: 49, periodo: 22, tamanho: 2.8, angulo: 300 }
  },
  {
    nome: "Júpiter",
    pagina: "jupiter.html",
    imagem: "img/planeta-jupiter.webp",
    descricao: "O maior planeta do sistema",
    palavras: "gigante gasoso grande mancha vermelha ganimedes europa io",
    ficha: [
      ["Tipo", "Gigante gasoso"],
      ["Diâmetro", "139.820 km (11 Terras)"],
      ["Distância do Sol", "778 milhões de km (5,2 UA)"],
      ["Rotação", "9 h 56 min"],
      ["Ano", "11,9 anos terrestres"],
      ["Luas", "Mais de 90"],
      ["Temperatura", "≈ −110 °C (topo das nuvens)"],
      ["Gravidade", "24,8 m/s² (2,5× a da Terra)"]
    ],
    orbita: { diametro: 62, periodo: 34, tamanho: 6, angulo: 160 }
  },
  {
    nome: "Saturno",
    pagina: "saturno.html",
    imagem: "img/saturno.webp",
    descricao: "O planeta com anéis",
    palavras: "gigante gasoso anéis titã cassini huygens",
    ficha: [
      ["Tipo", "Gigante gasoso"],
      ["Diâmetro", "116.460 km (9 Terras)"],
      ["Distância do Sol", "1,4 bilhão de km (9,5 UA)"],
      ["Rotação", "10 h 33 min"],
      ["Ano", "29,4 anos terrestres"],
      ["Luas", "Mais de 270"],
      ["Temperatura", "≈ −140 °C"],
      ["Gravidade", "10,4 m/s² (1,07× a da Terra)"]
    ],
    orbita: { diametro: 75, periodo: 48, tamanho: 5, angulo: 20, aneis: true }
  },
  {
    nome: "Urano",
    pagina: "urano.html",
    imagem: "img/urano.webp",
    descricao: "Planeta de gelo e gás",
    palavras: "gigante gelado eixo inclinado gira de lado james webb",
    ficha: [
      ["Tipo", "Gigante gelado"],
      ["Diâmetro", "50.724 km (4 Terras)"],
      ["Distância do Sol", "2,9 bilhões de km (19,2 UA)"],
      ["Rotação", "17 h 14 min (gira de lado, eixo a 98°)"],
      ["Ano", "84 anos terrestres"],
      ["Luas", "29 conhecidas"],
      ["Temperatura", "≈ −195 °C"],
      ["Gravidade", "8,7 m/s² (89% da Terra)"]
    ],
    orbita: { diametro: 87, periodo: 64, tamanho: 4, angulo: 250 }
  },
  {
    nome: "Netuno",
    pagina: "netuno.html",
    imagem: "img/netuno.webp",
    descricao: "O planeta mais distante",
    palavras: "gigante gelado ventos tritão voyager",
    ficha: [
      ["Tipo", "Gigante gelado"],
      ["Diâmetro", "49.244 km (4 Terras)"],
      ["Distância do Sol", "4,5 bilhões de km (30 UA)"],
      ["Rotação", "16 h 6 min"],
      ["Ano", "165 anos terrestres"],
      ["Luas", "16 conhecidas"],
      ["Temperatura", "≈ −200 °C"],
      ["Gravidade", "11,2 m/s² (1,14× a da Terra)"]
    ],
    orbita: { diametro: 98, periodo: 80, tamanho: 3.8, angulo: 75 }
  }
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

// Páginas que não são astros do Sistema Solar (usadas nos cards e na busca).
const PAGINAS_UNIVERSO = [
  {
    nome: "O Universo",
    pagina: "universo.html",
    descricao: "Big Bang, energia escura e buracos negros",
    palavras: "big bang expansão matéria escura energia escura buraco negro gargantua interestelar sagitário m87 horizonte de eventos"
  },
  {
    nome: "Via Láctea",
    pagina: "via-lactea.html",
    descricao: "A galáxia que chamamos de lar",
    palavras: "galáxia espiral sagitário braço de órion grupo local galileu"
  }
];

const PAGINAS_OUTRAS = [
  {
    nome: "Curiosidades",
    pagina: "curiosidades.html",
    descricao: "Estrelas, galáxias e a velocidade da luz",
    palavras: "estrelas supernova anã branca andrômeda galáxias luz velocidade da luz fótons planetas gasosos"
  },
  {
    nome: "Sobre",
    pagina: "sobre.html",
    descricao: "O projeto e quem o desenvolveu",
    palavras: "projeto desenvolvedor davi unemat tecnologias"
  },
  {
    nome: "Contato",
    pagina: "pagina-de-contato.html",
    descricao: "Fontes, créditos e formulário",
    palavras: "formulário email mensagem fontes créditos imagens nasa"
  }
];

// Grupos de cards da página inicial. Cada chave corresponde a um elemento
// com o atributo data-cards="<chave>" no index.html.
const GRUPOS_DE_CARDS = {
  "sistema-solar": CORPOS_CELESTES,
  universo: PAGINAS_UNIVERSO,
  outros: PAGINAS_OUTRAS
};

// Tudo o que a busca do menu procura.
const ITENS_DA_BUSCA = [
  ...CORPOS_CELESTES,
  ...PAGINAS_UNIVERSO,
  ...PAGINAS_OUTRAS,
  {
    nome: "Foto do dia da NASA",
    pagina: "index.html#foto-do-dia",
    descricao: "A imagem astronômica do dia (APOD)",
    palavras: "apod foto imagem do dia nasa"
  },
  {
    nome: "Sistema Solar animado",
    pagina: "index.html#sistema-animado",
    descricao: "Os planetas girando em volta do Sol",
    palavras: "órbitas animação planetas girando"
  }
];

const CITACOES = [
  "“O cosmos está dentro de nós. Somos feitos de poeira de estrelas.” — Carl Sagan",
  "“Em algum lugar, algo incrível está esperando para ser descoberto.” — Carl Sagan",
  "“Olhar para as estrelas é sempre olhar para o passado.” — Autor desconhecido",
  "“A imaginação é mais importante que o conhecimento.” — Albert Einstein",
  "“O universo não é apenas mais estranho do que imaginamos, é mais estranho do que podemos imaginar.” — J.B.S. Haldane"
];
