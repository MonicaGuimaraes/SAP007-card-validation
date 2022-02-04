# Cartão de Crédito Válido

## Índice

- [1. Introdução](#1-Introdução)
- [2. Resumo do projeto](#2-resumo-do-projeto)
- [3. Considerações gerais](#3-consideracoes-gerais)
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




## 3. Considerações gerais

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