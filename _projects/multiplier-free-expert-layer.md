---
layout: page
title: Multiplier-Free Hardware Platform for Expert Layers
description: NRF Master's Student Research Encouragement Grant · Sep. 2025 – Aug. 2026
importance: 1
category: research
---

<div class="project-hero">
  <p class="project-kicker">NRF Research Grant · 2025–2026</p>
  <h2>Multiplier-Free Hardware Platform Design Based on Ultra-Low Precision Quantization for Expert Layers</h2>
  <p class="project-lead">
    An algorithm–hardware co-design project for efficient Mixture-of-Experts inference in resource-constrained environments.
  </p>
  <div class="project-meta-grid">
    <div>
      <span>Program</span>
      <strong>Master's Student Research Encouragement Grant</strong>
    </div>
    <div>
      <span>Funding agency</span>
      <strong>National Research Foundation of Korea</strong>
    </div>
    <div>
      <span>Project period</span>
      <strong>Sep. 2025 – Aug. 2026</strong>
    </div>
  </div>
</div>

## Research focus

This project develops an ultra-low-precision quantization and encoding method for Mixture-of-Experts (MoE) models and a multiplier-free hardware architecture optimized for the proposed method. The goal is to reduce memory and computation costs while enabling efficient deployment in edge and processing-in-memory environments.

<div class="project-focus-grid">
  <div class="project-focus-card">
    <i class="fa-solid fa-compress" aria-hidden="true"></i>
    <h3>Ultra-low precision</h3>
    <p>Ternary and low-bit quantization with a target compression ratio of at least 10× over FP16.</p>
  </div>
  <div class="project-focus-card">
    <i class="fa-solid fa-shuffle" aria-hidden="true"></i>
    <h3>Efficient encoding</h3>
    <p>Permutation-based weight reordering to increase repeated patterns and improve compression efficiency.</p>
  </div>
  <div class="project-focus-card">
    <i class="fa-solid fa-microchip" aria-hidden="true"></i>
    <h3>Multiplier-free hardware</h3>
    <p>MUX- and inverter-based processing elements with a pipelined dataflow for efficient MoE inference.</p>
  </div>
</div>

## Research roadmap

<div class="project-timeline">
  <section>
    <div class="project-phase">Phase 01</div>
    <div>
      <h3>Quantization and architecture design</h3>
      <p class="project-period">September 2025 – February 2026</p>
      <ul>
        <li>Analyze memory and computation bottlenecks in MoE expert layers.</li>
        <li>Implement and evaluate ultra-low-precision quantization and encoding methods in PyTorch.</li>
        <li>Design the processing-element architecture and pipelined dataflow.</li>
      </ul>
    </div>
  </section>
  <section>
    <div class="project-phase">Phase 02</div>
    <div>
      <h3>RTL implementation and evaluation</h3>
      <p class="project-period">March 2026 – August 2026</p>
      <ul>
        <li>Implement the multiplier-free accelerator in RTL.</li>
        <li>Perform simulation, synthesis, timing optimization, and on-board verification.</li>
        <li>Evaluate accuracy, resource utilization, memory reduction, and energy efficiency.</li>
      </ul>
    </div>
  </section>
</div>

<div class="project-outcome">
  <i class="fa-solid fa-bullseye" aria-hidden="true"></i>
  <div>
    <span>Target outcome</span>
    <p>
      A hardware-friendly MoE compression method and accelerator architecture supporting high-performance,
      low-power inference with at least 50% fewer multiplier DSP resources.
    </p>
  </div>
</div>
