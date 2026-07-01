---
layout: page
title: JsonFS
description: C++ virtual filesystem that mounts JSON files and live REST APIs as POSIX-navigable paths.
img:
importance: 7
category: systems
lang: en
github: https://github.com/HSley13/JsonFS
---

<div style="text-align: right; margin-bottom: 1.5rem;">
	<strong>English</strong> | <a href="/zh-hant/projects/jsonfs/">繁體中文</a>
</div>

<div style="margin-bottom: 1.5rem;">
  <a href="https://github.com/HSley13/JsonFS" target="_blank" rel="noopener" class="btn z-depth-1" role="button"><i class="fa-brands fa-github"></i>&nbsp; GitHub Repository →</a>
</div>

Created **JsonFS**, a systems-level C++ tool that bridges application-layer data models and POSIX filesystem abstractions allowing JSON files and live REST API responses to be mounted and navigated as ordinary files and directories.

### Key Contributions
- **POSIX Filesystem Abstraction:** Mapped structured JSON/API data into filesystem semantics (files, directories, paths), enabling intuitive file-based access to complex or remote data sources.
- **Live REST Integration:** Implemented support for mounting live REST endpoints as virtual filesystem nodes, handling serialization, HTTP caching/latency, and consistency when exposing remote data locally.
- **Systems-Level Design:** Engineered edge-case handling and error recovery appropriate for low-level infrastructure tools used in developer workflows.
- **Portable Build System:** Packaged with CMake for reproducible builds and portability across environments.

### What I Learned
- Advanced systems programming and interface design translating between very different paradigms (REST/JSON ↔ filesystem).
- Error handling and edge-case design for low-level tools where failures affect downstream consumers.
- Productizing technical infrastructure with developer ergonomics as a first-class concern.
- Caching and consistency tradeoffs when bridging remote/local data boundaries.

**Tech Stack:** C++, CMake, POSIX (FUSE), HTTP/REST.
