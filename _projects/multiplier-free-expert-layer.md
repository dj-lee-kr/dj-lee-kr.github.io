---
layout: page
title: Multiplier-Free Hardware Platform for Expert Layers
description: NRF Master's Student Research Encouragement Grant · Sep. 2025 – Aug. 2026
importance: 1
category: research
---

## Project overview

**Official title:** Multiplier-Free Hardware Platform Design Based on Ultra-Low Precision Quantization for Expert Layers

- **Funding agency:** National Research Foundation of Korea (NRF)
- **Program:** 2025 Master's Student Research Encouragement Grant
- **Project period:** September 2025 – August 2026

This project develops an ultra-low-precision quantization and encoding method for Mixture-of-Experts (MoE) models and a multiplier-free hardware architecture optimized for the proposed method. The goal is to reduce memory and computation costs while enabling efficient deployment in resource-constrained edge and processing-in-memory environments.

## Research objectives

- Analyze memory-access and computation bottlenecks in MoE expert layers.
- Develop ternary and other ultra-low-precision quantization methods with a target compression ratio of at least 10× over FP16.
- Improve encoding efficiency by increasing repeated weight patterns through permutation-based weight reordering.
- Design MUX- and inverter-based multiplier-free processing elements and a pipelined dataflow.
- Reduce multiplier DSP usage by at least 50% and validate the design through RTL simulation, synthesis, and on-board evaluation.

## Research plan

### September 2025 – February 2026

- Analyze memory and computation bottlenecks in MoE expert layers.
- Implement and evaluate ultra-low-precision quantization and encoding methods in PyTorch.
- Design the processing-element architecture and pipelined dataflow for hardware implementation.

### March 2026 – August 2026

- Implement the multiplier-free accelerator in RTL.
- Perform simulation, synthesis, timing optimization, and on-board verification.
- Evaluate accuracy, resource utilization, memory reduction, and energy efficiency, and prepare the research results for publication.

## Expected outcomes

The project aims to establish a hardware-friendly MoE compression method and a corresponding accelerator architecture that can support high-performance, low-power inference under limited memory and computing resources.
