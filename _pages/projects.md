---
layout: page
title: Project
permalink: /projects/
nav: true
nav_order: 3
---

{% assign sorted_projects = site.projects | sort: "start_date" | reverse %}

<div class="projects project-index" data-project-carousel>
  <div id="project-index-track" class="project-index-track" role="region" aria-label="Research projects" tabindex="0">
    {% for project in sorted_projects %}
      <article class="project-index-card">
        <a class="project-index-card-link" href="{{ project.url | relative_url }}" aria-label="View project: {{ project.title_en | escape }}">
          <div class="project-index-topline">
            <span class="project-index-number">{% if forloop.index < 10 %}0{% endif %}{{ forloop.index }}</span>
            {% if project.role %}
              <span class="project-index-role">{{ project.role }}</span>
            {% endif %}
          </div>

          <div class="project-index-field project-index-field--title">
            <h2 lang="ko">{{ project.title_ko }}</h2>
          </div>

          <div class="project-index-field project-index-field--english">
            <p>{{ project.title_en }}</p>
          </div>

          <div class="project-index-meta">
            <div class="project-index-field">
              <span class="project-index-label">Program</span>
              <p>{{ project.program }}</p>
            </div>
            <div class="project-index-field">
              <span class="project-index-label">Funding agency</span>
              <p>{{ project.funding_agency }}</p>
            </div>
          </div>

          <p class="project-index-period">{{ project.period }}</p>
        </a>
      </article>
    {% endfor %}

  </div>

  <div class="project-index-controls" aria-label="Project navigation">
    <button
      class="project-index-nav project-index-nav--previous"
      type="button"
      aria-label="Previous project"
      aria-controls="project-index-track"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
      </svg>
    </button>
    <button
      class="project-index-nav project-index-nav--next"
      type="button"
      aria-label="Next project"
      aria-controls="project-index-track"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>
    </button>
  </div>
</div>

<script src="{{ '/assets/js/project-carousel.js' | relative_url }}?v=1"></script>
