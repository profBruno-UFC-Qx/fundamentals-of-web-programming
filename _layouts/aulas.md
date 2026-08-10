---
layout: default
---

{% unless page.parent %}
{% assign title = page.title | split: "-"  %}
{% assign slide =  title[1] | replace: " ", "-" | prepend: page.nav_order %}
    
    {% if page.nav_order < 10 %}
    {% assign slide =   slide | prepend: "0" %}
    {% assign next = page.nav_order | plus: 1 | prepend: "0" %}
    {% else %}
    {% assign next = page.nav_order | plus: 1 %}
    {% endif %}

{% endunless %}

{% capture md %}
## {{ title | slice: 1 | default: page.title}}

{% if slide %}
### Recurso
{% endif %}

{% endcapture %}
{{ md | markdownify }}
 
 
{% if slide %}
<span class="fs-3">
    <a href="{{site.baseurl}}/assets/downloads/{{ slide }}.pdf" class="btn" target="_blank">Notas de aula</a>
    {% if page.animated %}
     <a href="{{ page.animated }}" class="btn" target="_blank">Notas de aula com animações</a>
</span>
    {% endif %}
{% endif %}
{{ content }}

<span class="fs-3 float-right">
    {% if page.next %}
    <a href="{{ page.next }}" class="btn"> Próximas aulas </a>
    {% else %}
    <a href="../{{ next }}" class="btn"> Próximas aulas </a>
    {% endif %}
</span>

