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

        <svg
          class="news-index-arrow"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
        </svg>
      </a>
    </li>

{% endfor %}

</ul>
