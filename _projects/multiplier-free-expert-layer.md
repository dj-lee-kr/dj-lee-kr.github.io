---
layout: page
title: Multiplier-Free Hardware Platform Design Based on Ultra-Low Precision Quantization for Expert Layers
title_ko: Expert Layer를 위한 초저정밀도 양자화 기반 Multiplier-Free 하드웨어 플랫폼 설계
title_en: Multiplier-Free Hardware Platform Design Based on Ultra-Low Precision Quantization for Expert Layers
program: Master's Student Research Encouragement Grant
funding_agency: National Research Foundation of Korea (NRF)
period: Sep. 2025 – Aug. 2026
role: Principal Investigator
description: An algorithm–hardware co-design project for efficient Mixture-of-Experts inference.
importance: 1
category: research
permalink: /projects/multiplier-free-expert-layer/
---

<div class="project-detail">
  <header class="project-detail-header">
    <span class="project-detail-role">{{ page.role }}</span>
    <h1 class="project-detail-title-ko" lang="ko">{{ page.title_ko }}</h1>
    <p class="project-detail-title-en">{{ page.title_en }}</p>
  </header>

  <dl class="project-detail-meta">
    <div>
      <dt>Program</dt>
      <dd>{{ page.program }}</dd>
    </div>
    <div>
      <dt>Funding agency</dt>
      <dd>{{ page.funding_agency }}</dd>
    </div>
    <div>
      <dt>Project period</dt>
      <dd>{{ page.period }}</dd>
    </div>
  </dl>

  <section class="project-detail-section">
    <h2>Overview</h2>
    <p>
      This project develops ultra-low-precision quantization and encoding methods together with a multiplier-free
      hardware architecture for efficient Mixture-of-Experts inference. The objective is to reduce model storage and
      computation costs while retaining deployability in resource-constrained edge and processing-in-memory systems.
    </p>
  </section>

  <section class="project-detail-section">
    <h2>Research focus</h2>
    <ol class="project-detail-focus">
      <li>
        <span>01</span>
        <h3>Ultra-low-precision quantization</h3>
        <p>Develop ternary and low-bit quantization methods for compact expert-layer representations.</p>
      </li>
      <li>
        <span>02</span>
        <h3>Efficient encoding</h3>
        <p>Reorder and encode weights to increase repeated patterns and reduce memory traffic.</p>
      </li>
      <li>
        <span>03</span>
        <h3>Multiplier-free hardware</h3>
        <p>Design MUX- and inverter-based processing elements with an efficient pipelined dataflow.</p>
      </li>
    </ol>
  </section>

  <div class="project-detail-back-row">
    <a class="project-detail-back" href="{{ '/projects/' | relative_url }}">Back to Project</a>
  </div>
</div>
