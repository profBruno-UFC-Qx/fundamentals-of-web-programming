---
layout: default
title: Projeto Final
nav_order: 15
---

# Projeto Final

* [Descrição](#desc)
* [Requisitos mínimos](#req)
* [Entregas](#entregas)
  * [Proposta](#envio1) 
  * [Telas](#envio2) - **Prazo: 02/02/2025**
  * [Código](#envio3) - **Prazo: 17/02/2025**
* [Apresentação do projeto](#apresentacao)

---

## Descrição <a name="desc"></a>

Como projeto final da disciplina deverá ser construído um **frontend** de uma aplicação web utilizando o framework **HTML, CSS e JavaScript (TypeScript)**.

{:  .new }
A temática do projeto deve possuir viés de extensão. Se você precisa de inspiração confira a página <a href="https://profbruno-ufc-qx.github.io/HubEx/" alt="Site com ideias de projetos relacionados com extensão" target="_blank">HubEx, que contém ideias de projetos de extensão.</a>


A aplicação deve usar **CSS**, por essa razão, recomenda-se o uso do **Bootstrap ou de outro framework CSS de sua preferência** para melhorar o visual da aplicação de forma simplificada.

Lembre-se de seguir as boas práticas:

  - Dê preferência ao uso de Javascript e CSS externos ao HTML.
  - Evite o uso de CSS e Javascript diretamente nos elementos HTML.   

O **backend** (API REST) com o qual a sua aplicação deve se comunicar deve ser construído utilizando o <a href="http://strapi.io" target="_blank">Strapi</a>.

{: .note }
O trabalho pode ser feito em equipe

<hr>

## Requisitos mínimos <a name="req"></a>
  
  - A sua aplicação deve possuir pelo menos ***x* entidades (tabelas)**, onde :
<div>
\[x =
  \begin{cases}
    3       & \quad \text{quando o trabalho for individual }\\
   n + 1  & \quad \text{para trabalhos em equipe onde } n \text{ é o tamanho da equipe}
  \end{cases}
\]
</div>

  - A aplicação deve implementar os CRUDs de pelo menos duas dessas tabelas.
    - **Uma das entidades deve ser dependende da outra**, os CRUDs não podem ser totalmente independentes 
    - Para trabalhos em equipe com **mais de dois membros**, as regras de negócio serão avaliada para verificar a elegibilidade do projeto.
  - A aplicação deve possuir pelo menos **3 papéis de usuários** de forma que todos os **papéis** possuam permissões diferentes.
  - A aplicação deve persistir seus dados em **banco dados cuja iteração deve ser feita com um backend via requições HTTP**. 
  - A aplicação deve possuir uma **área pública com páginas/serviços acessíveis a todos; e uma área restrita com páginas/serviços acessíveis somente a usuários autenticados**. 
    - Consequentemente, o **frontend** deve implementar um mecanismo de **autenticação & autorização**.
    - O **backend** deve fornecer um serviço de **autenticação usando JWT**.
  - A aplicação deve ter uma barra de navegação/menu com todas as opções/links funcionando e a opção de logout deve estar sempre visível.

{: .warning }
> O código projeto que vai ser desenvolvido deve ser hospedado no <a href="http://www.github.com" target="_blank">GitHub</a>.

{: .warning }
TODOS os membros da equipe devem se envolver em atividades que incluem a ESCRITA de código HTML, CSS e principalmente JavaScript ou TypeScript.

<hr>

## Envio da proposta <a name="envio1"></a>

O autor do trabalho ou a equipe, deve escolher o domínio da aplicação com **viés de extensão**, e também deve descrever as funcionalidades do sistema, explicando **resumidamente os requisitos do sistema com suas entidades principais**. Essa definição deve ser enviada e **aprovada pelo professor**. 

Para auxiliar nessa tarefa, vocês irão realizar criar um repositório no GitHub a partir deste <a href="https://github.com/profBruno-UFC-Qx/qxd0020-projeto-final/generate" target="_blank">template</a>. Como vocês podem ver, o **Readme.md** já vem previamente preenchido com um modelo. 

**O link do repositório devidamente preenchido deve ser enviado via SIGAA.**

{: .highlight }
> Os trabalhos devem necessariamente ter domínios distintos. 
> 
> A ordem de envio para o professor determina quem tem prioridade por determinado domínio. Caso o domínio já tenha sido escolhido por outro aluno, deve-se propor um novo domínio.

<hr>

## Envio da proposta <a name="envio1"></a>

O envio das telas deve ser feito via commit no repositório do **GitHub** enviado com a proposta de projeto final.
Para esta entrega deverá ser enviadas a primeira versão de pelo menos **quatro** telas:

- A tela de login
- A tela de cadastro de usuários
- A tela principal do sistema (estou considerando que é primeira tela vista após o login)
- Mais uma tela que a equipe pode escolher

Por se tratar da primeira versão de cada tela, a parte visual não precisa ser feito com o maior capricho.
A ideia é que esta entrega não tome muito tempo, ainda assim, espero que as telas sejam capazes de apresentar o sistema de froma geral.

{: .highlight }
A entrega vale **1 ponto**. Desta forma, aquelas equipes que perderem o prazo não poderão atingir a nota máxima **10**. Ainda que todos os pré-requisitos sejam cumprindos.

<hr>

## Entrega final <a name="envio3"></a>

Antes de enviar o seu projeto para a avaliação será necessário realizar o preenchimento do restante do arquivo **README.md** do seu projeto.

{: .highlight }
Informações sobre como utilizar o sistema, além de nomes de usuários e senhas devem ser enviadas por email para que eu possa testar o sistema.

{: .warning } 
> Projetos que não disponibilizarem no README.md as informações acima serão desconsiderados.
>
> Na data final da entrega, todo o código deve estar disponibilizado no Github 
> 
> Não serão aceitos trabalhos enviados em formato compactados, ex: zip, rar e similares
>
> Caso o trabalho seja feito em equipe, cada membro da equipe deve usar seu próprio usuário para escrever código.
> 
> Não serão aceitos trabalhos implementados em um único commit.

**Strapi**:

O Strapi por padrão utiliza o banco Sqlite, que armazena todo a base de dados em um único arquivo. Logo, se você não alterou nenhuma configuração relacionada ao armazenamento de dados, a base de dados da sua aplicação deve estar localizada em uma pasta **oculta** chamada **.tmp** (isso mesmo, tem um ponto antes do nome), dentro da pasta do Strapi.

Por padrão, esse arquivo não é enviado ao GitHub por motivos óbvios, porém para facilitar a correção, peço que envie o arquivo do banco para o GitHub. Para isso, você precisará alterar o arquivo **.gitignore** presente na raiz do projeto Strapi e remover a segunite linha:

```
.tmp
```

Depois disso, será possível commit e enviar a pasta **.tmp** e o arquivo **data.db** gerado pelo Strapi.

<hr>

### Apresentação do trabalho <a name="apresentacao"></a>

{: .warning }
O trabalho também deverá necessariamente ser apresentado conforme cronograma da disciplina. A não apresentação do trabalho pelo aluno em sua anulação.
