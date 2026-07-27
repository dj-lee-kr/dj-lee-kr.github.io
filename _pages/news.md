---
layout: page
title: News
permalink: /news/
nav: true
nav_order: 2
---

{% assign news_items = site.news | sort: "date" | reverse %}

<ul class="news-index">
  {% for item in news_items %}
    <li>
      <a class="news-index-item" href="{{ item.url | relative_url }}">
        <span class="news-index-tag">{{ item.tag }}</span>

        <div class="news-index-content">
          <p class="news-index-summary">{{ item.summary | default: item.excerpt | strip_html | strip_newlines }}</p>
          <time datetime="{{ item.date | date_to_xmlschema }}">{{ item.date | date: "%b %d, %Y" }}</time>
        </div>

        <span class="news-index-arrow" aria-hidden="true">&rarr;</span>
      </a>
    </li>

{% endfor %}

</ul>
