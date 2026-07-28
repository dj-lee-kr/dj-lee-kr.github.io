---
layout: page
title: Efficient Inference and Acceleration System for MoE-Based Large Language Models
title_ko: Mixture-of-Experts 기반 대규모 언어 모델의 추론 최적화 및 가속 시스템
title_en: Efficient Inference and Acceleration System for MoE-Based Large Language Models
program: 2025 Promising Young Investigator Teams (PYIT) Research Support Program
funding_agency: Seoul National University of Science and Technology
period: Jun. 2025 – Aug. 2025
start_date: 2025-06-09
description: Research on prefetching, compression, and hardware-friendly acceleration for efficient MoE inference.
importance: 2
category: research
permalink: /projects/pyit-moe-acceleration/
---

<div class="project-detail">
  <header class="project-detail-header">
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
      This project investigates model and system techniques for efficient Mixture-of-Experts inference. The research
      combines lightweight expert prediction, aggressive model compression, and hardware-friendly encoding to reduce
      expert-parameter storage and data movement while supporting deployment on resource-constrained platforms.
    </p>
  </section>

  <section class="project-detail-section">
    <h2>Research focus</h2>
    <ol class="project-detail-focus">
      <li>
        <span>01</span>
        <h3>Expert prefetching</h3>
        <p>Predict upcoming expert selections with a lightweight model to hide memory-transfer latency.</p>
      </li>
      <li>
        <span>02</span>
        <h3>Ultra-low-bit compression</h3>
        <p>Reduce expert-parameter storage through ternary quantization and pattern-aware encoding.</p>
      </li>
      <li>
        <span>03</span>
        <h3>Hardware-friendly acceleration</h3>
        <p>Develop efficient encoding and compute structures suitable for FPGA and edge deployment.</p>
      </li>
    </ol>
  </section>

  <div class="project-detail-back-row">
    <a class="project-detail-back" href="{{ '/projects/' | relative_url }}">Back to Project</a>
  </div>
</div>
