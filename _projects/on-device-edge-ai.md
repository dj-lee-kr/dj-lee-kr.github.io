---
layout: page
title: Development of AI Accelerator-Based Edge AI Application for On-Device AI
title_ko: 온디바이스 AI를 위한 AI 가속 SoC 기반 엣지 AI 어플리케이션 개발
title_en: Development of AI Accelerator-Based Edge AI Application for On-Device AI
program: LINC 3.0 Industry-Academia Joint Technology Development Project
funding_agency: SeoulTech LINC 3.0 Project Group
period: May 2024 – Nov. 2024
start_date: 2024-05-01
description: Development of lightweight AI models and accelerator-based edge applications for on-device AI.
importance: 4
category: research
permalink: /projects/on-device-edge-ai/
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
      This industry-academia project developed lightweight AI models and accelerator-based edge applications for
      on-device inference. SeoulTech collaborated with Gwanak Analog to optimize TTS and CNN workloads, map multimodal
      models to FPGA platforms, and build practical training materials for AI algorithms and semiconductor systems.
    </p>
  </section>

  <section class="project-detail-section">
    <h2>Research focus</h2>
    <ol class="project-detail-focus">
      <li>
        <span>01</span>
        <h3>Lightweight TTS inference</h3>
        <p>Improve TTS efficiency using compact vocoders, knowledge distillation, token pruning, and approximation.</p>
      </li>
      <li>
        <span>02</span>
        <h3>Hardware-aware CNN optimization</h3>
        <p>Apply structured pruning and variable-precision quantization for efficient on-device CNN execution.</p>
      </li>
      <li>
        <span>03</span>
        <h3>FPGA and SDK deployment</h3>
        <p>Optimize multimodal models and map them to accelerator hardware through compiler and SDK workflows.</p>
      </li>
    </ol>
  </section>

  <div class="project-detail-back-row">
    <a class="project-detail-back" href="{{ '/projects/' | relative_url }}">Back to Project</a>
  </div>
</div>
