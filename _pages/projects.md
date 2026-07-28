---
layout: page
title: Project
permalink: /projects/
description: Research projects in efficient AI systems and hardware.
nav: true
nav_order: 3
---

{% assign sorted_projects = site.projects | sort: "importance" %}

<div class="projects project-index">
  <div class="project-index-track" role="region" aria-label="Research projects" tabindex="0">
    {% for project in sorted_projects %}
      <article class="project-index-card">
        <a class="project-index-card-link" href="{{ project.url | relative_url }}" aria-label="View project: {{ project.title_en | escape }}">
          <div class="project-index-topline">
            <span class="project-index-number">Project 0{{ forloop.index }}</span>
            {% if project.role %}
              <span class="project-index-role">{{ project.role }}</span>
            {% endif %}
          </div>

          <div class="project-index-field project-index-field--title">
            <span class="project-index-label">Project title · Korean</span>
            <h2 lang="ko">{{ project.title_ko }}</h2>
          </div>

          <div class="project-index-field project-index-field--english">
            <span class="project-index-label">Project title · English</span>
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
            <div class="project-index-field">
              <span class="project-index-label">Project period</span>
              <p>{{ project.period }}</p>
            </div>
          </div>
        </a>
      </article>
    {% endfor %}

  </div>
</div>
