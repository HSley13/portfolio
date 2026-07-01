---
layout: page
title: dotenvpp
description: Reusable C++ library for .env file parsing, validation, and environment-based runtime configuration.
img:
importance: 8
category: systems
lang: en
github: HSley13/dotenvpp
---

<div style="text-align: right; margin-bottom: 1.5rem;">
	<strong>English</strong> | <a href="/zh-hant/projects/dotenvpp/">繁體中文</a>
</div>

<div style="margin-bottom: 1.5rem;">
  <a href="https://github.com/HSley13/dotenvpp" target="_blank" rel="noopener" class="btn btn-sm z-depth-0" role="button">GitHub Repository →</a>
</div>

Designed and implemented **dotenvpp**, a reusable C++ configuration utility library that simplifies `.env` file loading, value validation, defaults management, and runtime environment configuration for C++ applications.

### Key Contributions
- **Library API Design:** Designed an ergonomic, correct C++ API for `.env` parsing focused on ease of integration while handling edge cases defensively.
- **Validation & Defaults:** Implemented value validation patterns and configurable defaults so applications can fail fast on misconfiguration instead of silently using wrong values.
- **Portability:** Built for easy drop-in integration in any C++ project without heavy dependencies; portable across common platforms.
- **Reusable Infrastructure:** Wrote a general-purpose library component rather than one-off app logic designed for reuse across multiple projects.

### What I Learned
- Library API design principles: balancing ergonomics, correctness, and minimal footprint.
- Defensive parsing and configuration validation patterns for production-grade C++ tooling.
- Writing reusable infrastructure components that improve developer experience across projects.

**Tech Stack:** C++, CMake.
