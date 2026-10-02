# Changelog - Wiki do Universo

## [v3.1.0] - Fontes confiáveis e ajuste de menu

### ✨ Principais Mudanças

#### 1. 📚 Fontes confiáveis citadas em cada página
- **Descrição**: cada página de planeta, o Sol, a Via Láctea, "O Universo" e "Curiosidades" agora têm uma seção "Fontes" no rodapé do conteúdo, linkando para NASA Science, NASA Space Place ou ESA — no lugar de citar só "Wikipedia" genericamente na página de contato.
- **Dados revisados**: o texto sobre a colisão Via Láctea–Andrômeda foi atualizado com o resultado de 2025 (Hubble + Gaia), que reduziu a certeza da fusão de "praticamente certa" para cerca de 50% de chance em 10 bilhões de anos. O trecho sobre buracos negros em `universo.html` passou a mencionar também a imagem de 2022 de Sagitário A* pelo Event Horizon Telescope (antes só citava M87 em 2019).
- **Arquivos alterados**: todas as páginas de conteúdo, `pagina-de-contato.html`, `css/sistema-solar.css`

#### 2. 🧭 Ajuste fino da navbar
- **Descrição**: em larguras entre 992px e 1250px, o item "Via Láctea" (duas palavras) quebrava em duas linhas dentro do próprio link. Ajustado com `white-space: nowrap` e um leve ajuste de padding/tamanho de fonte nessa faixa de largura.
- **Arquivos alterados**: `css/menu.css`

## [v3.0.0] - Unificação da Navegação, Limpeza e Som Ambiente

### ✨ Principais Mudanças

#### 1. 🧭 Navbar e rodapé unificados em todas as páginas
- **Descrição**: a navbar Bootstrap (antes só em `index.html` e `pagina-de-contato.html`) e o rodapé agora são montados por JavaScript (`montarNavbar()`/`montarRodape()`) e aparecem em **todas** as 15 páginas, incluindo as 9 de planetas, `universo.html`, `via-lactea.html`, `curiosidades.html` e `sobre.html`.
- **Benefícios**: antes, sair da página inicial deixava o visitante sem menu (só um link "Voltar"); agora dá para navegar entre qualquer seção do site a partir de qualquer página. Um novo item "Universo" foi adicionado ao menu (a página existia mas não tinha link).
- **Arquivos alterados**: `js/app.js`, todas as páginas `.html`
- **Status**: ✅ Concluído

#### 2. 🧹 Limpeza de CSS duplicado e JS morto
- **Descrição**: o `sistema-solar.css` tinha um segundo `body`/`header`/`a` conflitando com o primeiro (fontes e cores disputando); removido, mantendo as variáveis de cor em um único `:root`. O menu antigo (`.site-nav`, `.menu-toggle`, usado só em `sobre.html`) e as funções `configurarMenu()`/`marcarPaginaAtual()` (que não encontravam mais elemento nenhum) foram removidos. O arquivo órfão `menu.html` (não referenciado em lugar nenhum) foi excluído.
- **Arquivos alterados**: `css/sistema-solar.css`, `css/menu.css`, `js/app.js`
- **Status**: ✅ Concluído

#### 3. ✅ Validação do formulário de contato unificada
- **Descrição**: `pagina-de-contato.html` tinha dois validadores rodando ao mesmo tempo no mesmo formulário (o `needs-validation` nativo do Bootstrap e uma função antiga em `app.js`). Mantido apenas o validador Bootstrap.
- **Arquivos alterados**: `js/app.js`
- **Status**: ✅ Concluído

#### 4. 🪐 Fotos reais nos cards do Sistema Solar
- **Descrição**: os círculos em SVG gerados nos cards da página inicial foram substituídos por fotos reais de cada planeta (já existentes em `img/`), em moldura circular com destaque ao passar o mouse.
- **Arquivos alterados**: `js/app.js`, `css/sistema-solar.css`

#### 5. 🎧 Player de som ambiente
- **Descrição**: implementado o player de áudio que só existia como CSS esboçado (`.audio-player`, nunca usado). Botão flutuante liga/pausa a trilha ambiente (`audios/this-is-interstellar-on-4k.mp3`, em loop e volume baixo); a preferência é lembrada entre páginas via `localStorage`.
- **Observação**: navegadores podem bloquear a retomada automática do som ao mudar de página sem uma interação recente; nesse caso o botão volta ao estado pausado e basta um clique.
- **Arquivos alterados**: `js/app.js`, `css/menu.css`
- **Status**: ✅ Concluído

#### 6. 🔒 Dados de contato revisados
- **Descrição**: removido o telefone pessoal da página "Sobre"; a seção de contato agora traz apenas e-mail (institucional) e Instagram.
- **Arquivos alterados**: `sobre.html`

#### 7. 🏷️ Outras melhorias
- Tag `<center>` (obsoleta) removida das páginas de planeta.
- `<meta name="description">` adicionada em todas as páginas.

## [v2.0.0] - Refatoração Completa com Bootstrap 5 e Design Melhorado

### ✨ Principais Mudanças

#### 1. 🎯 Integração do Bootstrap 5
- **Descrição**: Refatoração completa para usar Bootstrap 5 via CDN
- **Benefícios**: Grid responsivo automático, componentes prontos, melhor acessibilidade
- **Arquivos alterados**: `index.html`, `pagina-de-contato.html`
- **Status**: ✅ Concluído

#### 2. 📱 Navbar Responsiva
- **Descrição**: Menu substituído por navbar Bootstrap com hamburger menu automático
- **Features**:
  - Collapse automático em dispositivos móveis
  - Toggler com ícone hamburger
  - Logo RGB mantido e melhorado
  - Sticky-top para permanecer visível ao scroll
- **Breakpoint**: Responsivo até 992px (lg)
- **Arquivos alterados**: `index.html`, `css/menu.css`
- **Status**: ✅ Concluído

#### 3. 🎨 Grid Responsivo com Cards
- **Descrição**: Sistema de cards auto-responsivo usando Bootstrap Grid
- **Breakpoints**:
  - Desktop (lg): 3 colunas
  - Tablet (sm): 2 colunas
  - Mobile: 1 coluna
- **Aplicações**: Sistema Solar (9 cards), Universo (2 cards), Outros (3 cards)
- **Arquivos alterados**: `index.html`, `css/sistema-solar.css`
- **Status**: ✅ Concluído

#### 4. 📋 Formulário de Contato Estilizado
- **Descrição**: Refatoração completa do formulário com classes Bootstrap
- **Features**:
  - Validação Bootstrap integrada
  - Classes: `form-control`, `form-label`, `form-check`, `form-select`
  - Layout responsivo automático
  - Feedback visual para erros
- **Arquivo alterado**: `pagina-de-contato.html`
- **Status**: ✅ Concluído

#### 5. 🖼️ Melhorias Visuais - Espaçamento e Bordas
- **Descrição**: Ajustes de espaçamento e bordas para melhor legibilidade
- **Mudanças**:
  - Imagem da Terra: borda ciano (3px), sombra aprimorada
  - Efeito hover na imagem (zoom 1.02)
  - Seção intro com fundo, borda e espaçamento
  - Cards com background custom e borda ciano
  - Sombras harmonizadas
- **Arquivo alterado**: `css/sistema-solar.css`
- **Status**: ✅ Concluído

#### 6. 📐 Seção Intro Centralizada
- **Descrição**: Refatoração da seção de boas-vindas com layout melhorado
- **Features**:
  - Imagem e texto lado a lado (desktop), empilhados (mobile)
  - Badges de estatísticas (9 Planetas, 1 Sol, ∞ Estrelas)
  - Legenda da imagem ("🌍 Planeta Terra - Nossa Casa")
  - Tipografia melhorada com `clamp()`
  - Links destacados com efeitos hover
- **Arquivo alterado**: `index.html`, `css/sistema-solar.css`
- **Status**: ✅ Concluído

#### 7. 🧹 Consolidação e Limpeza do CSS
- **Descrição**: Remoção de duplicações e organização do código CSS
- **Mudanças**:
  - Removidas 3 definições duplicadas de `.card`
  - Removidas 3 definições duplicadas de `.card:hover`
  - Grid consolidado em uma única definição
  - CSS organizado em seções claras comentadas
  - Sem impacto funcional, apenas limpeza
- **Arquivo alterado**: `css/sistema-solar.css`
- **Status**: ✅ Concluído

#### 8. 🎨 Menu Melhorado com Cores RGB
- **Descrição**: Redesign completo da navbar com cores, gradientes e efeitos
- **Features**:
  - Navbar com gradiente azul escuro e brilho
  - Borda inferior com gradiente ciano/roxo
  - Efeito glassmorphism com blur
  - Links com cores vivas: ciano (#63f4ff)
  - Animação shimmer ao passar
  - Link ativo com borda inferior animada
  - Ícone hamburger customizado em ciano
  - Botão topo com gradiente e glow
- **Logo**: RGB animado mantido intacto
- **Arquivo alterado**: `css/menu.css`
- **Status**: ✅ Concluído

### 📊 Resumo Técnico

| Aspecto | Antes | Depois |
|---------|-------|--------|
| Framework | Sem framework | Bootstrap 5 |
| Navbar | Personalizada | Bootstrap + customizações |
| Grid | Flex/Grid manual | Bootstrap Grid (12 cols) |
| Formulário | Estilo customizado | Bootstrap forms |
| Responsividade | Parcial | Completa (mobile-first) |
| CSS duplicado | Sim | Não |
| Cores/Efeitos | Básicas | RGB + gradientes + glow |

### 🔄 Fluxo de Trabalho

1. **Commit 1**: Bootstrap integrado, navbar responsiva, grid com cards
   - ```
     Refatoração com Bootstrap 5: navbar responsiva, grid com cards e formulário estilizado
     ```

2. **Commit 2**: Melhorias visuais, espaçamento e bordas
   - ```
     Melhorias visuais: espaçamento, bordas e cards estilizados
     ```

3. **Commit 3**: Seção intro centralizada, CSS consolidado
   - ```
     Refatoração: Seção intro centralizada com stats e CSS consolidado
     ```

4. **Commit 4**: Menu melhorado com cores e efeitos
   - ```
     🎨 Menu melhorado: cores, gradientes e efeitos RGB harmonizados
     ```

### 📋 Compatibilidade

- ✅ Bootstrap 5.3.0 (CDN)
- ✅ HTML5
- ✅ CSS3 (com fallbacks)
- ✅ JavaScript (vanilla)
- ✅ Responsive (320px - 2560px)
- ✅ Navegadores modernos (Chrome, Firefox, Safari, Edge)

### 🎯 Próximas Sugestões

- [ ] Adicionar animações de scroll reveal
- [ ] Dark/Light mode toggle
- [ ] Busca por planeta
- [ ] Sistema de comentários
- [ ] Página 404 customizada
- [ ] PWA - Progressive Web App

### 📝 Notas

- Toda estrutura semântica HTML foi mantida (header/main/footer)
- CSS antigo compatível, não foi removido
- JavaScript original funcionando perfeitamente
- Bootstrap integrado via CDN, sem build necessário
- Sem quebra de funcionalidade existente

---

**Última atualização**: 2026-09-01
**Desenvolvido por**: Davi Alves Mares
**Disciplina**: Desenvolvimento Web - UNEMAT
