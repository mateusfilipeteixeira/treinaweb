---
title: 06 - JavaScript no Navegador
description: Trabalhe com DOM, eventos, formulários, listas e armazenamento local em aplicações interativas.
section: Módulo 06
study_time: 2 a 3 semanas
permalink: /javascript-no-navegador/
prev_url: /javascript-fundamentos/
prev_label: JavaScript Fundamentos
next_url: /git-e-github/
next_label: Git e GitHub
---

# 06 - JavaScript no Navegador

Agora o foco sai da lógica isolada e entra na prática da web: selecionar elementos, reagir a cliques, validar formulários, atualizar conteúdo na tela e guardar dados no navegador.

## Objetivos do módulo

- Entender o que é DOM.
- Manipular elementos HTML com JavaScript.
- Trabalhar com eventos.
- Validar formulários.
- Introduzir armazenamento local e consumo básico de dados.

## Vídeos principais

- [JavaScript \[40 Horas\] - Curso em Vídeo](https://www.cursoemvideo.com/curso/javascript/)
- Material oficial de apoio: [repositório `gustavoguanabara/javascript`](https://github.com/gustavoguanabara/javascript)

## Leitura complementar

- [Modelo de Objeto de Documento (DOM) - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model)
- [Noções básicas de JavaScript - MDN](https://developer.mozilla.org/pt-BR/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
- [Window.localStorage - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage)
- [Usando Fetch - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch)
- [Abrir o Chrome DevTools](https://developer.chrome.com/docs/devtools/open?hl=pt-BR)

## Conceitos essenciais

### DOM

É a forma como o navegador representa a página para que o JavaScript consiga acessá-la e alterá-la.

### Evento

É algo que acontece na página, como:

- clique
- digitação
- envio de formulário
- carregamento da página

### LocalStorage

Permite guardar dados simples no navegador.

### Fetch

Permite buscar dados de outro lugar, como uma API.

## O que praticar

- selecionar elementos
- alterar texto e estilos
- adicionar e remover classes
- escutar eventos
- ler campos de formulário
- validar dados
- renderizar listas na tela
- salvar dados simples localmente

## Exercícios práticos

1. Troque o texto de um título ao clicar em um botão.
2. Mude a cor de fundo da página.
3. Mostre uma mensagem quando um formulário for enviado.
4. Valide se um campo está vazio.
5. Conte quantos caracteres a pessoa digitou em um campo.
6. Monte uma lista de itens adicionados por botão.
7. Salve uma preferência de tema com `localStorage`.
8. Busque dados de uma API pública simples e mostre na tela.

## Projeto do módulo

### Projeto: Lista de Tarefas

Crie uma aplicação simples com:

- campo para digitar tarefa
- botão para adicionar
- lista de tarefas visível
- opção de marcar como concluída
- opção de remover
- persistência usando `localStorage`

Se quiser evoluir:

- filtros de tarefas
- contador de concluídas
- tema claro/escuro

## Erros comuns neste módulo

- tentar manipular elemento antes de ele existir na página
- esquecer de testar seletores
- misturar lógica demais no mesmo bloco
- não inspecionar erros no console

## Checklist de conclusão

- Entendo o que é DOM.
- Consigo selecionar e alterar elementos da página.
- Consigo reagir a eventos.
- Consigo validar formulários simples.
- Consigo salvar dados básicos no navegador.
- Consegui montar uma pequena aplicação interativa.
