# LP_DESIGN_SPECS.md — Wikimee Ultra-Minimal Redesign

**Versão**: 2.0 | **Direção**: White Mode | **Referência**: Apple, OpenAI

---

## 1. Análise Estrutural — ManyRequests

### Princípios Extraídos

| Aspecto | Observação |
|---------|------------|
| **Hierarquia** | H1 dominante, H2 descritivo, corpo limpo |
| **Espaço** | Generoso padding entre seções (120px+) |
| **Tipografia** | Sans-serif moderna, peso variado |
| **Ritmo** | Alternância: texto → visual → texto |
| **Clareza** | Uma mensagem por seção, sem ruído |
| **CTAs** | "Try For Free" + "Learn More" (simples) |

### Estrutura de Seções

1. Hero (headline + subheadline + CTA único)
2. Feature Pills (navegação por módulos)
3. Features (uma por vez, com print)
4. Use Cases (4 segmentos)
5. Integrações (logos de ferramentas)
6. Pricing (tabela clara)
7. FAQ (accordion)
8. CTA Final (uma linha)
9. Footer (minimalista)

---

## 2. Diretrizes Visuais — ANTI-VIBECODE

### ❌ Proibido

| Elemento | Motivo |
|----------|--------|
| Gradientes decorativos | Vibecode |
| Blobs e squiggles | Genérico AI |
| Ícones decorativos | Sem função |
| Sombras exageradas | Ruído visual |
| Dark mode dominante | Não transmite leveza |
| Cards excessivos | Poluição |
| Linguagem hype | "Revolucionário", "Game changer" |

### ✅ Obrigatório

| Elemento | Motivo |
|----------|--------|
| Fundo branco puro | Silêncio visual |
| Espaço em branco generoso | Respiro |
| Tipografia limpa | Legibilidade |
| Cor apenas funcional | CTAs e status |
| Prints reais do produto | Credibilidade |
| Copy direto | Clareza > persuasão |

---

## 3. Paleta de Cores

```
/* BASE */
--white:          #FFFFFF      /* Fundo principal */
--gray-50:        #F9FAFB      /* Seções alternadas */
--gray-100:       #F3F4F6      /* Bordas sutis */
--gray-200:       #E5E7EB      /* Divisores */
--gray-400:       #9CA3AF      /* Texto terciário */
--gray-600:       #4B5563      /* Texto secundário */
--gray-900:       #111827      /* Texto principal */
--black:          #000000      /* Headlines */

/* ACCENTO (usar com moderação) */
--primary:        #4F46E5      /* CTA principal */
--primary-hover:  #4338CA      /* CTA hover */

/* FUNCIONAL (apenas quando necessário) */
--success:        #10B981      /* Status positivo */
--warning:        #F59E0B      /* Alerta */
```

### Regras de Uso

1. **Branco**: 85% da página
2. **Cinzas**: Estrutura e texto
3. **Primary**: APENAS em CTAs principais
4. **Nunca usar cor como decoração**

---

## 4. Tipografia

```
Família:     Inter (fallback: system-ui)
```

| Elemento | Tamanho | Peso | Cor |
|----------|---------|------|-----|
| H1 (Hero) | 56px / 3.5rem | 700 | #000000 |
| H2 (Seções) | 40px / 2.5rem | 600 | #111827 |
| H3 (Subtítulos) | 24px / 1.5rem | 600 | #111827 |
| Body | 18px / 1.125rem | 400 | #4B5563 |
| Small | 14px / 0.875rem | 400 | #9CA3AF |
| CTA | 16px / 1rem | 600 | #FFFFFF |

### Regras

- Line-height: 1.5 para corpo, 1.2 para headlines
- Max-width: 680px para parágrafos
- Letter-spacing: -0.02em para headlines

---

## 5. Espaçamento

| Elemento | Desktop | Mobile |
|----------|---------|--------|
| Padding seção | 120px | 64px |
| Gap entre elementos | 24px | 16px |
| Container max-width | 1200px | 100% |
| Padding horizontal | 80px | 24px |

---

## 6. Componentes

### Botão Primário
```
Background: #4F46E5
Texto: #FFFFFF
Padding: 16px 32px
Border-radius: 8px
Hover: #4338CA
Sem sombra
```

### Botão Secundário
```
Background: transparent
Texto: #111827
Border: 1px solid #E5E7EB
Padding: 16px 32px
Border-radius: 8px
Hover: background #F9FAFB
```

### Cards (se necessário)
```
Background: #FFFFFF
Border: 1px solid #E5E7EB
Border-radius: 12px
Padding: 32px
Sem sombra (ou shadow-sm muito sutil)
```

---

## 7. Estrutura de Seções — Nova LP

### 7.1 Hero
- H1: "Gerencie sua agência de um só lugar."
- Subheadline: Uma frase curta (max 15 palavras)
- CTA único: "Agendar demonstração"
- Print do produto (opcional)
- **Fundo: Branco puro**

### 7.2 Proposta de Valor
- H2: "Substitua 5 ferramentas por uma."
- 3 bullets curtos (sem ícones decorativos)
- **Fundo: Gray-50**

### 7.3 Features
- Uma feature por bloco
- H3 + descrição curta + print
- 6 blocos, alternando lado do print
- **Fundo: Branco puro**

### 7.4 Segmentos
- H2: "Para agências de qualquer segmento."
- 4 cards simples (Design, Web, Vídeo, 3D)
- Apenas texto, sem ícones
- **Fundo: Gray-50**

### 7.5 Depoimento
- Quote + Nome + Cargo
- Sem foto (ou foto muito discreta)
- **Fundo: Branco puro**

### 7.6 Pricing
- H2: "Preços claros."
- 3 colunas simples
- Sem badges "Popular" ou "Recomendado"
- **Fundo: Gray-50**

### 7.7 FAQ
- H2: "Perguntas frequentes."
- Accordion simples
- **Fundo: Branco puro**

### 7.8 CTA Final
- Uma linha: "Pronto para organizar sua agência?"
- Botão único
- **Fundo: Branco puro**

### 7.9 Footer
- Logo + Links + Copyright
- Mínimo de elementos
- **Fundo: Gray-900 (única exceção dark)**

---

## 8. Diretrizes de Copy

### ✅ Fazer

| Regra | Exemplo |
|-------|---------|
| Frases curtas | "Uma plataforma. Todas as ferramentas." |
| Verbos diretos | "Agendar", "Testar", "Conhecer" |
| Benefício claro | "Menos ferramentas. Mais controle." |
| Tom profissional | Sem exclamações excessivas |

### ❌ Evitar

| Regra | Exemplo |
|-------|---------|
| Hype | "Revolucione sua agência!" |
| Adjetivos vazios | "Incrível", "Poderoso", "Brutal" |
| Promessas exageradas | "Triplique seus resultados!" |
| Urgência falsa | "Últimas vagas!" |

### Headlines das Seções

1. Hero: "Gerencie sua agência de um só lugar."
2. Proposta: "Substitua 5 ferramentas por uma."
3. Features: "Tudo que você precisa."
4. Segmentos: "Para agências de qualquer segmento."
5. Pricing: "Preços claros."
6. FAQ: "Perguntas frequentes."
7. CTA: "Pronto para organizar sua agência?"

---

## 9. Verificação

### Testes Visuais
1. Abrir LP em http://localhost:8080
2. Verificar fundo branco dominante
3. Confirmar ausência de gradientes/blobs
4. Validar espaçamento generoso
5. Testar responsividade mobile

### Testes de Copy
1. Nenhuma headline com mais de 8 palavras
2. Nenhum adjetivo exagerado
3. CTAs com verbos de ação

---

## 10. Próximos Passos

1. [ ] Atualizar tailwind.config.mjs com nova paleta
2. [ ] Reescrever Layout.astro (white mode)
3. [ ] Refatorar cada componente
4. [ ] Testar no browser
5. [ ] Validar com usuário
