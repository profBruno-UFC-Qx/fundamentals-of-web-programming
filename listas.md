---
layout: default
title: Lista de Exercícios
jsarr:
- /assets/js/sheetApi.js
nav_order: 14
---

### Lista de Exercícios

Durante a disciplina iremos construir um Twitter simplificado, chamado Tzeeter. 
A construção desse clone será feito por meio de diversas atividades menores.
Confiram a lista de atividades a seguir:

<table>
 <caption>Lista de atividades que devem ser enviadas e seus prazos</caption>
 <thead>
    <tr>
        <th> Nome </th>
        <th> Prazo de Entrega </th>
    </tr>
 </thead>
 <tbody>


{% assign atividades = site.atividades | sort: "numero" %}
{% assign today = "now" | date: "%s" %} 
{% for atividade in atividades %}
    <tr>
        <td> <a href="{{ atividade.url | relative_url }}" target="_blank">{{  atividade.nome }}</a></td>
        <td> {{ atividade.prazo }}

        {% comment %}
        {% assign prazo = atividade.prazo | date: "%d/%m/%Y" | date: "%s" %}
        {% if prazo >= today %}
        <span class="label label-green">
        {% else %}
        <span class="label label-red">
        {% endif %}
        {{ atividade.prazo }}</span>
        {% endcomment %}</td>
    </tr>
{% endfor %}
  </tbody>
</table>

