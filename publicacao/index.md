---
title: Publicação, Domínio e Analytics
description: Guia prático para publicar este site no GitHub Pages, configurar Google Analytics 4 e apontar um domínio próprio.
section: Apoio
study_time: setup técnico
permalink: /publicacao/
prev_url: /glossario/
prev_label: Glossário
next_url: /guia-de-estudos/
next_label: Começar a trilha
---

# Publicação, Domínio e Analytics

Este site já está preparado para ser publicado com Jekyll no GitHub Pages, com SEO técnico básico, sitemap, metadados sociais e integração opcional com Google Analytics 4.

## 1. O que você precisa ajustar antes de publicar

Edite o arquivo `_config.yml` e preencha:

- `url`: a URL final do site
- `baseurl`: deixe vazio se usar domínio próprio ou repositório `usuario.github.io`; use `"/nome-do-repo"` se publicar como project page sem domínio próprio
- `google_analytics`: seu ID do GA4, no formato `G-XXXXXXXXXX`

## 2. Publicar no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie este conteúdo para a branch `main`.
3. Verifique se a aba `Actions` está habilitada.
4. O workflow `.github/workflows/deploy.yml` fará o build e o deploy automaticamente.
5. Em `Settings > Pages`, confirme que o ambiente publicado é `GitHub Pages`.

## 3. Configurar o Google Analytics 4

1. Crie uma propriedade no Google Analytics.
2. Adicione um fluxo da Web para seu domínio.
3. Copie o Measurement ID.
4. Cole esse valor em `google_analytics` no `_config.yml`.
5. Faça novo push para publicar a configuração.

### Consentimento

O site já inclui um banner simples para consentimento de estatística. O script do GA4 só é carregado depois de aceite.

## 4. Apontar um domínio próprio

Quando você tiver o domínio:

1. Copie `CNAME.example` para `CNAME`.
2. Troque o conteúdo pelo seu domínio real, por exemplo `estudos.seudominio.com`.
3. Atualize `url` no `_config.yml` com `https://estudos.seudominio.com`.
4. No provedor de DNS, crie os registros exigidos para GitHub Pages.
5. No GitHub, configure o domínio em `Settings > Pages`.

## 5. Checklist de SEO já incluído

- títulos e descrições por página
- HTML semântico
- URLs limpas com permalinks
- sitemap via plugin
- metadados sociais e estruturados via `jekyll-seo-tag`
- `robots.txt`
- layout responsivo e foco em performance

## 6. O que ainda vale fazer depois

- conectar o domínio final antes de divulgar amplamente
- cadastrar o site no Google Search Console
- criar uma imagem social em PNG se quiser melhorar compartilhamento em algumas redes
- revisar títulos e descrições conforme o conteúdo evoluir
