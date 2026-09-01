# Changelog - Wiki do Universo

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
