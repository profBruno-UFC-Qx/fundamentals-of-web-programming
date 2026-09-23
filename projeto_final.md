---
layout: default
title: Projeto Final
nav_order: 15
prazo_form: 01/09/2026
prazo_proposta: 04/10/2026
prazo_final: 29/11/2026
---

# Projeto Final

* [Descrição](#desc)
* [Requisitos mínimos](#req)
* [Como funciona a entrega do projeto final](#fluxo)
  * [Formulário e repositório dai equipe](#formulario) **Prazo: {{ page.prazo_form }}**
  * [Envio da proposta](#envio-proposta) - **Prazo: {{ page.prazo_proposta }}**
  * [Desenvolvimento](#desenvolvimento)
  * [Entrega final](#envio-entrega) - **Prazo: {{ page.prazo_final }}**
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
O trabalho pode ser feito em equipe. Não há limite para o número de membros.

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

## Como funciona a entrega do projeto final <a name="fluxo"></a>

O projeto final não usa mais o GitHub Classroom. O fluxo passa por um
formulário, um repositório de equipe já pronto no GitHub, e duas
aprovações do professor via Pull Request: uma na proposta, outra na
entrega final.

### Formulário e repositório da equipe <a name="formulario"></a>

Preencha o formulário abaixo — uma resposta por equipe (um integrante
preenche pelos demais):

<a href="https://forms.gle/xuZcYUVpqtrX4XDP8" class="btn" target="_blank">Formulário de equipes</a>

- Informe o tema do projeto e, para cada integrante, nome completo,
  matrícula e o **link do perfil do GitHub** (ex: `github.com/seu-usuario`).

{: .warning }
Confira o link do perfil do GitHub de cada integrante antes de enviar. 
Essa informação é essecial para que seja possível adicionar os membros da equipe
como colaboradores do repositório da equipe — um link errado significa que a pessoa errada (ou ninguém)
recebe acesso.

Depois disso, após  processar as respostas, cada integrante recebe um
**convite de colaborador** (por e-mail, ou em
<a href="https://github.com/notifications" target="_blank">github.com/notifications</a>)
para o repositório da equipe, já criado a partir do template da
disciplina. **Aceite o convite** e clone o repositório:

```bash
git clone https://github.com/profBruno-UFC-Qx/<nome-do-repositorio>.git
```

<hr>

### Envio da proposta <a name="envio-proposta"></a>

No repositório da equipe, crie uma branch e edite o arquivo
**`PROPOSTA.md`**, preenchendo todas as seções (objetivo, público-alvo,
funcionalidades, entidades...):

```bash
git checkout -b proposta
# edite PROPOSTA.md
git add PROPOSTA.md
git commit -m "Proposta do projeto"
git push origin proposta
```

Abra um **Pull Request** da branch `proposta` para `main` no GitHub. Um
check automático confere se todas as seções foram preenchidas (sem o
texto de exemplo).  Passando nessa primeira validação, a proposta terá seu conteúdo revisado. 
Qualquer ajuste necessário será informado diretamente no PR — **o desenvolvimento só está oficialmente
liberado depois do merge**.

{: .warning }
> Os temas devem ser distintos entre as equipes da disciplina. A ordem de
> envio determina a prioridade sobre um tema — se já tiver sido escolhido
> por outra equipe, proponha um novo.

<hr>

### Desenvolvimento <a name="desenvolvimento"></a>

Depois da proposta aprovada, desenvolva o projeto livremente em uma ou
mais branches, sem precisar de aprovação do professor a cada commit ou PR
intermediário. A branch `main` só recebe o merge da proposta e, mais
adiante, o merge da entrega final — todo o código da equipe deve estar
incluído na branch usada na entrega.

{: .warning }
TODOS os membros da equipe devem se envolver na escrita de código.

<hr>

### Entrega final <a name="envio-entrega"></a>

Próximo ao prazo final, garanta que todo o código do projeto está na
branch, crie/atualize uma branch e edite o arquivo **`ENTREGA.md`**
preenchendo: como executar o projeto, credenciais de acesso para teste,
uso de ferramentas de Inteligência Artificial e as maiores dificuldades
encontradas.

```bash
git checkout -b entrega-final
# edite ENTREGA.md
git add ENTREGA.md
git commit -m "Entrega final"
git push origin entrega-final
```

Abra um Pull Request da branch `entrega-final` para `main`. Um check
automático confere se as seções obrigatórias de `ENTREGA.md` foram
preenchidas. **O merge desse PR é a
confirmação formal da entrega**.

{: .warning }
> Na data final, todo o código deve estar disponível no GitHub. Não serão
> aceitos trabalhos enviados em formato compactado (zip, rar etc.) nem
> implementados em um único commit.
>
> Caso o trabalho seja feito em equipe, cada membro deve usar o próprio
> usuário do GitHub para escrever código.

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
