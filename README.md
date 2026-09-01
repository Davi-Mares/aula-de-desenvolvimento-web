# Wiki do Universo

Projeto desenvolvido por **Davi Alves Mares** para a disciplina de Desenvolvimento Web do curso de Sistemas de Informação da UNEMAT.

## Sobre o projeto

A Wiki do Universo reúne conteúdos introdutórios sobre astronomia em páginas HTML simples, organizadas para facilitar a exploração do Sistema Solar e de outros temas do espaço.

Na área dos astros, cada página apresenta uma navegação na ordem em que os corpos estão organizados a partir do Sol:

**Sol → Mercúrio → Vênus → Terra → Marte → Júpiter → Saturno → Urano → Netuno**

É possível acessar diretamente qualquer astro pela página inicial ou avançar e voltar entre páginas usando os controles de navegação. O astro atual fica destacado na sequência.

## Conteúdo

- Página inicial com acesso ao Sistema Solar, Universo, Via Láctea e curiosidades.
- Páginas individuais para o Sol e os oito planetas.
- Conteúdos sobre o Universo e a Via Láctea.
- Página de curiosidades, informações sobre o projeto e formulário de contato.
- Menu responsivo e botão para voltar ao topo.

## Tecnologias

- HTML5
- CSS3
- JavaScript
- Bootstrap 5
- Git e GitHub

## Framework Escolhido

**Bootstrap 5** foi escolhido como framework CSS por ser confiável, amplamente utilizado na indústria, com excelente suporte responsivo via grid e componentes prontos (navbar, cards, forms). Mantém a estrutura semântica HTML intacta, integrando-se via classes nos elementos existentes.

## Estrutura

```text
.
├── index.html
├── sol.html, mercurio.html, venus.html, terra.html
├── marte.html, jupiter.html, saturno.html, urano.html, netuno.html
├── universo.html e via-lactea.html
├── curiosidades.html, sobre.html e pagina-de-contato.html
├── css/
│   ├── sistema-solar.css
│   └── menu.css
├── js/
│   └── app.js
├── img/
└── audios/
```

## Como executar

Abra o arquivo `index.html` no navegador. Como o projeto usa apenas HTML, CSS e JavaScript, não é necessário instalar dependências ou iniciar um servidor.

> Projeto desenvolvido como parte das atividades da disciplina de Desenvolvimento Web.