# Cartão de Crédito Válido

## Índice

- [1. Introdução](#1-Introdução)
- [2. Resumo do projeto](#2-resumo-do-projeto)
- [4. Considerações gerais](#4-consideracoes-gerais)
- [6. Hacker edition](#6-hacker-edition)
- [7. Considerações técnicas](#7-considerações-técnicas)
- [8. Guias, dicas e leituras complementares](#8-guias-dicas-e-leituras-complementares)
- [9. Checklist](#9-checklist)

---

## 1. Introdução

O [algoritmo de Luhn](https://en.wikipedia.org/wiki/Luhn_algorithm), também
chamado de módulo 10, é um método de soma de verificação, usado para validar
números de identificação, como o IMEI de telefones celulares, cartões de crédito
etc.

Esse algoritmo é simples. Obtemos o inverso do número a ser verificado (que
contém apenas dígitos [0-9]); todos os números que ocupam uma posição par devem
ser multiplicados por dois; se esse número for maior ou igual a 10, devemos
adicionar os dígitos do resultado; o número a verificar será válido se a soma de
seus dígitos finais for um múltiplo de 10.

![gráfico do algoritmo de
Luhn](https://www.101computing.net/wp/wp-content/uploads/Luhn-Algorithm.png)

## 2. Resumo do projeto




## 4. Considerações gerais

- A equipe de mentores te dará um tempo sugerido e indicações sobre trabalhar
  individualmente ou em equipe. Lembre-se de que cada pessoa aprende em um ritmo
  diferente.

- O projeto será entregue subindo seu código no GitHub (commit/push) e a
  interface será implementada usando as páginas do GitHub. Caso desconheça o
  GitHub, não se preocupe, pois você vai aprender sobre ele ao longo do projeto.


### Definição do produto

Como o projeto tinha como objetivo criar um validador de cartões com a lógica de LUHN, veio 
como ideia que esse validador deveria ser utilizado em bancos. Porém em qual contexto?
Após algumas horas de pesquisas para conhecer os usuários de bancos o projeto se encaixou como um
dos processos que precisam ser feitos para desbloquear um cartão. 

Quando o usuário irá desbloquear um cartão novo que recebeu, é necessário que o banco valide 
o número desse cartão que a pessoa está digitando para só depois o processo de desbloqueio do 
mesmo começar a acontecer, com alguns outros passos que não serão abordados nesse projeto. 

Portanto os principais usuários desse projeto seriam os clientes de bancos, com o objetivo de 
desbloquear seu cartão novo, para assim poderem usar o mesmo sem a necessidade de sairem de suas casas 
ou de ligarem para a instituição para realizar o procedimento.

### Interface do usuário (UI)

A interface permite ao usuário:

- Inserir o número que desejamos validar.
- Constatar se o resultado é válido ou não.
- Ocultar todos os dígitos do número do cartão, exceto os últimos 4
  caracteres.
- Não aceita campo vazio ou com outros caracteres que não sejam de 0 - 9.

### UX (Design da experiência do usuário)

Antes de começar a codificar, você deve entender o problema que deseja resolver
e como o aplicativo o resolve.

- Trabalhe seu primeiro protótipo com papel e lápis (preto e branco).
- Em seguida, valide esta solução com uma companheira (peça feedback).
- Use o aprendizado no momento de validar seu primeiro protótipo e desenvolva um
  novo protótipo empregando alguma ferramenta para design de protótipos
  ([Balsamiq](https://balsamiq.com/), [Figma](https://www.figma.com/),
  [Apresentações Google](https://www.google.com/intl/pt-br/slides/about/) etc.)
  Esses pontos serão apresentados no `README.md`.

### Scripts / Arquivos

- `REAME.md`: deve explicar como "deployar", instalar e executar a aplicação,
  assim como uma introdução a aplicação, suas funcionalidades e as decisões que
  foram tomadas.
- `src/index.html`: aqui será o ponto de entrada da sua aplicação. Este arquivo
  deve conter a marcação HTML e chamar o CSS e JavaScript necessários.
- `src/style.css`: este arquivo deve conter as regras de estilo. Queremos que
  você escreva suas próprias regras. Por isso, NÃO é permitido o uso de frameworks
  de CSS (Bootstrap, materialize etc).
- `src/validator.js`: aqui você deve implementar o objeto `validador`, o qual já
  está _exportado_ no _boilerplate_. Este objeto (`validador`) deve conter dois métodos:
  - **`validator.isValid(creditCardNumber)`**: `creditCardNumber` é um `string`
    com o número do cartão a ser verificado. Esta função deve retornar um
    `boolean`, dependendo de sua validade, de acordo com o [algoritmo de
    Luhn](https://en.wikipedia.org/wiki/Luhn_algorithm).
  - **`validator.maskify(creditCardNumber)`**: `creditCardNumber` é um `string`
    com o número do cartão e esta função deve retornar um `string` onde todos,
    exceto os últimos quatro caracteres, são substituídos por um número (`#`) ou
    🐱. Essa função deve sempre manter os quatro últimos caracteres intactos,
    mesmo quando a `string` for mais curta.
- `src/index.js`: aqui, você escreverá todo o código relacionado à interação do DOM
  (selecionar, atualizar e manipular elementos do DOM e eventos). Nesse arquivo,
  você precisará chamar as funções `validator.isValid` e `validator.maskify` conforme
  seja necessário para atualizar o resultado na tela (UI).
- `test/validator.spec.js`: este arquivo contem alguns testes de exemplo e aqui
  você deve implementar os testes para `validator.isValid()` e `validator.maskify()`.

---

## 6. Hacker Edition

As seções chamadas _Hacker Edition_ são **opcionais**. Se você **terminou** tudo
e ainda sobrou tempo, faça essa parte. Assim você poderá aprofundar e exercitar
mais sobre os objetivos de aprendizagem do projeto.

Uma sugestão de funcionalidade Hacker Edition é identificar e mostrar ao usuário
o [instituição emissora](https://economiaenegocios.com/de-onde-vem-o-numero-do-seu-cartao-de-credito/)
do cartão de crédito (exemplo: Visa, MasterCard, etc). Você pode usar estas
[regras de validação](https://stevemorse.org/ssn/cc.html).

## 7. Considerações técnicas

A lógica do projeto deve estar implementada inteiramente em JavaScript. Nesse
projeto **NÃO** está permitido usar bibliotecas ou frameworks, só vanilla
JavaScript.

Os testes unitários devem cobrir no mínimo de 70% dos _statements_, _functions_
e _lines_, e um mínimo de 50% de _branches_. O _boilerplate_ já contem o setup e
configurações necessárias para executar os testes assim como _code coverage_
para ver o nível de cobertura dos testes usando o comando `npm test`.

O _boilerplate_ inclui testes de exemplo, como ponto de partida.

Para começar esse projeto você terá que fazer um _fork_ e _clonar_ este
repositório que contém o _boilerplate_.

O _boilerplate_ contém uma estrutura de arquivos como ponto de partida assim
como toda a configuração de dependências e testes de exemplo:

```text
./
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── index.html
│   ├── index.js
│   ├── style.css
│   └── validator.js
└── test
    ├── .eslintrc
    └── validator.spec.js
```

O _boilerplate_ inclui tarefas que executam [eslint](https://eslint.org/) e
[htmlhint](https://github.com/yaniswang/HTMLHint) para verificar o `HTML` e
`JavaScript` com respeito a uma guia de estilos. Ambas tarefas são executadas
automaticamente antes de executar os testes quando usamos o comando `npm run test`.

No caso do `JavaScript` estamos usando o `eslint` que está configurado no
arquivo `.eslintrc` que contem o mínimo de informação como versão do
JavaScript/ECMAScript, o ambiente (_browser_ nesse caso) e as [regras
recomendadas (`"eslint:recommended"`)](https://eslint.org/docs/rules/).

Nas regras/guias de estilo usaremos das recomendações padrão tanto para o
`eslint` quanto `htmlhint`.

---

## 8. Guias, dicas e leituras complementares

### Primeiros passos

1. Antes de mais nada, se assegure de ter um bom 📝 editor de texto, algo
   como [Code](https://code.visualstudio.com/) ou [Atom](https://atom.io/).
2. Para executar os comandos você precisará de um 🐚 UNIX Shell, que é um
   programa que interpreta linhas de comando (command-line interpreter) e também
   deve ter o git instalado. Se você usa um sistema operacional "UNIX-like",
   como GNU/Linux ou MacOS, você já tem um _shell_ (terminal) instalado (e
   provavelmente o `git` também). Se você usa o Windows, pode utilizar a
   versão completa do [Cmder](https://cmder.net/) que já inclui o Git bash.
   Se tiver o Windows 10 ou superior,
   pode usar o [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10).
3. Faça seu próprio🍴
   [fork](https://help.github.com/articles/fork-a-repo/) do repositório.
4. ⬇️ [Clone](https://help.github.com/articles/cloning-a-repository/)
   o \_fork* para seu computador (cópia local).
5. 📦 Instale as dependências do projeto rodando o comando `npm install`. Mas
   antes disso tenha certeza de ter instalado o [Node.js](https://nodejs.org/)
   (que inclui o [npm](https://docs.npmjs.com/)).
6. Se tudo foi bem, você deve conseguir executar os 🚥 testes
   unitários com o comando `npm test`.
7. Para ver a interface do seu programa no navegador, use o comando `npm start`
   para iniciar o servidor web e entre na url `http://localhost:5000` no seu
   navegador.
8. Let's Code! 🚀

Este [video](https://drive.google.com/file/d/1CM6ZfpGfJMF6A8IcXoK5cFBBq-CY8oBR/view?usp=sharing)
da Paloma também pode te ajudar nos seus primeiros passos. Repare que, apesar dos nomes diferentes,
a estrutura é similar ;)

### Recursos e tópicos relacionados

Aqui está um vídeo de Michelle que mostra o algoritmo de Luhn (o vídeo está em
espanhol, mas pode ser útil) e mais algumas coisas que você deve saber para
realizar este projeto. Ouça com atenção e siga os conselhos dela! :)

[![dicas de cartão de
crédito](https://img.youtube.com/vi/f0zL6Ot9y_w/0.jpg)](https://www.youtube.com/watch?v=f0zL6Ot9y_w)

Desenho da experiência do usuário (User Experience Design):

- Ideação
- Prototipagem
- Teste e iteração

Desenvolvimento de front-end:

- Valores
- Tipos
- Variáveis
- Controle de fluxo
- Testes unitários
- [Aprenda mais sobre
  `array`](https://lms.laboratoria.la/cohorts/spl-2021-04-bootcamp-js-spl006/topics/javascript-pt/04-arrays/01-arrays)
- [Aprenda mais sobre
  `Array.reverse()`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
- [Aprenda mais sobre
  `Array.join()`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
- [Documentação do NPM](https://docs.npmjs.com/)

Ferramentas:

- [Terminal](https://www.loom.com/share/29a6cf0f3c5245bf995738284b706468)
- [Git config](https://www.loom.com/share/c7d445872b9f4618a24605fdcb26a48d)
- GitHub e GitHub Pages.

Organização do trabalho:

- [Agilidade](https://www.youtube.com/watch?v=vozsjbh4noU)
- [Scrum em menos de 2 minutos](https://www.youtube.com/watch?v=IKZHPjCQ2m8)
- [Scrum em detalhes](https://www.youtube.com/watch?v=mt2hM4yrPn0). Não
  esperamos que você faça tudo isso neste projeto. Iremos aprofundando nesses
  conceitos ao longo do _bootcamp_.

## 9. Checklist

Essa seção é para te ajudar a ter um controle do que você precisa completar.

### Parte Obrigatória

- [ ] `README.md` adicionar informação sobre o processo e decisões do desenho.
- [ ] `README.md` explicar claramente quem são os usuários e as suas relações
      com o produto.
- [ ] `README.md` explicar claramente como o produto soluciona os
      problemas/necessidades dos usuários.
- [ ] Usar VanillaJS.
- [ ] Implementar `validator.isValid`.
- [ ] Implementar `validator.maskify`.
- [ ] Passar o linter com a configuração definida.
- [ ] Passar as provas unitárias.
- [ ] Testes unitários cobrindo 70% dos _statements_, _functions_ e _lines_, e
      no mínimo 50% das _branches_.
- [ ] Interface que permita escrever o número do cartão para ser validado
- [ ] Interface que não permita campo vazio no número do cartão
- [ ] Interface que mostre o resultado da validação
- [ ] Interface que oculte todos os números exceto os 4 últimos.

### Parte Opcional: "Hacker edition"

- [ ] Implementar função que identifique a emissor do cartão
- [ ] Interface que mostre o resultado do emissor
