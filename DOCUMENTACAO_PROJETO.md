# 📄 Documento de Entrega — Landing Page Wikimee

**Projeto**: Landing Page para Campanha de Performance  
**Cliente**: Wikimee  
**Data**: 2026-01-10  
**Status**: ✅ V1 Pronta para Deploy

---

## 1. Resumo Executivo

| Campo | Valor |
|-------|-------|
| **Objetivo** | Landing page focada em conversão para agências criativas |
| **ICP** | Agências de design, web, vídeo e 3D (10-50 funcionários) |
| **Conversão Principal** | Agendar Demo (popup com HubSpot Meetings) |
| **URL Final** | https://lp.wikimee.app |
| **Hospedagem** | AWS S3 (cliente gerencia) |

---

## 2. Stack Técnico

```
Framework:    Astro 5.x (Static Site Generator)
CSS:          Tailwind CSS 3.4
Output:       100% estático (HTML/CSS/JS)
Fonte:        Axiforma (brand do cliente)
```

### Requisitos para Rodar

```bash
Node.js 18+
npm ou yarn
```

---

## 3. Estrutura do Projeto

```
lp/
├── src/
│   ├── components/
│   │   ├── Hero.astro           # Seção principal
│   │   ├── ValueProp.astro       # Proposta de valor
│   │   ├── Features.astro        # 6 features
│   │   ├── Testimonial.astro     # Depoimento
│   │   ├── Segments.astro        # Segmentos atendidos
│   │   ├── Pricing.astro         # 3 planos
│   │   ├── FAQ.astro             # 8 perguntas
│   │   ├── CTAFinal.astro        # CTA de fechamento
│   │   ├── Footer.astro          # Rodapé
│   │   └── DemoModal.astro       # Popup HubSpot
│   ├── layouts/
│   │   └── Layout.astro          # Layout base
│   └── pages/
│       └── index.astro           # Página principal
├── public/                        # Assets estáticos
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

---

## 4. Seções Implementadas

| # | Seção | Descrição |
|---|-------|-----------|
| 1 | **Hero** | Headline + CTAs + Badges + VSL placeholder |
| 2 | **Proposta de Valor** | 3 benefícios principais |
| 3 | **Features** | 6 funcionalidades detalhadas |
| 4 | **Depoimento** | Bruno Zago (Sicredi) |
| 5 | **Segmentos** | Design, Web, Vídeo, 3D |
| 6 | **Pricing** | Gratuito / R$ 95,20 / Personalizado |
| 7 | **FAQ** | 8 perguntas em accordion |
| 8 | **CTA Final** | Urgência + garantias |
| 9 | **Footer** | Links + redes sociais |
| 10 | **Modal Demo** | Popup com embed HubSpot |

---

## 5. Screenshots

### Hero Section
![Hero da LP](file:///C:/Users/Pichau/.gemini/antigravity/brain/b11aaf19-a847-4cf4-af27-ad862ec530a0/landing_page_hero_fixed_1767972135136.png)

### Features + Depoimento
![Features](file:///C:/Users/Pichau/.gemini/antigravity/brain/b11aaf19-a847-4cf4-af27-ad862ec530a0/landing_page_segments_pricing_1767972177156.png)

### FAQ + CTA Final
![FAQ e CTA](file:///C:/Users/Pichau/.gemini/antigravity/brain/b11aaf19-a847-4cf4-af27-ad862ec530a0/landing_page_footer_final_view_1767972256937.png)

### Demo Completo (Vídeo)
![Demo da LP](file:///C:/Users/Pichau/.gemini/antigravity/brain/b11aaf19-a847-4cf4-af27-ad862ec530a0/wikimee_lp_demo_1767972122234.webp)

---

## 6. Configurações de Conversão

### CTA "Agendar Demo"
Todos os botões "Agendar Demo" abrem um **popup modal** com embed do HubSpot Meetings:

```
https://meetings.hubspot.com/novos-negocios/demonstracao?uuid=a302e469-9c12-40f5-86c6-15a91cac9ab5
```

### CTA "Comece Grátis"
Link direto para signup:

```
https://wikimee.app/signup
```

---

## 7. Como Rodar Localmente

```bash
# Entrar na pasta do projeto
cd lp

# Instalar dependências
npm install

# Rodar servidor de desenvolvimento
npm run dev

# Acessar
http://localhost:4321
```

---

## 8. Como Gerar Build para Produção

```bash
# Gerar build estático
npm run build
```

A pasta `dist/` conterá todos os arquivos prontos para upload:

```
dist/
├── index.html
├── assets/
│   ├── *.css
│   └── *.js
└── favicon.svg
```

---

## 9. Deploy no AWS S3

### Opção 1: FileZilla Pro
1. Conectar ao bucket S3 via credenciais AWS
2. Upload de toda a pasta `dist/` para o bucket
3. Configurar index.html como documento padrão

### Opção 2: AWS CLI
```bash
# Sync dos arquivos
aws s3 sync ./dist s3://SEU_BUCKET --delete

# Invalidar cache CloudFront (se houver)
aws cloudfront create-invalidation --distribution-id DIST_ID --paths "/*"
```

---

## 10. Itens para V2

| Item | Responsável |
|------|-------------|
| Substituir logo placeholder | Cliente (Danilo) |
| Adicionar prints reais da ferramenta | Cliente (Danilo) |
| Adicionar VSL quando disponível | Cliente |
| Adicionar logos de clientes reais | Cliente |
| Configurar tracking (GA4/Meta/LinkedIn) | Cliente |
| Foto real no depoimento | Cliente |

---

## 11. Arquivos de Referência

| Documento | Caminho |
|-----------|---------|
| Estratégia | `LP_STRATEGY.md` |
| Copy Completo | `LP_COPY.md` |
| Stack Técnico | `LP_STACK_DECISION.md` |

---

## 12. Contatos

- **Projeto desenvolvido por**: Você (com assistência AI)
- **Cliente**: Wikimee (Danilo)
- **Deploy**: AWS S3 → https://lp.wikimee.app

---

> **Nota**: Esta é a V1 de validação. Após feedback do cliente, ajustes podem ser feitos antes do deploy final.
