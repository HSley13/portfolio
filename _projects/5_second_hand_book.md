---
layout: page
title: NDHU Second Hand Book Store
description: Full-stack campus marketplace with AI-based book condition classification, CI/CD pipelines, and production deployment via Vercel and Tailscale.
img: ndhu_shbs-1400.webp
importance: 5
category: web
lang: en
github: ntsrigaud/NDHU-SHBS
---

<div style="text-align: right; margin-bottom: 1.5rem;">
	<strong>English</strong> | <a href="/zh-hant/projects/ndhu-second-hand-book-store/">繁體中文</a>
</div>

<div style="margin-bottom: 1.5rem;">
  <a href="https://github.com/ntsrigaud/NDHU-SHBS" target="_blank" rel="noopener" class="btn btn-sm z-depth-0" role="button">GitHub Repository →</a>
</div>

<img src="/assets/img/ndhu_shbs-1400.webp" alt="NDHU Second Hand Book Store" style="width:100%;border-radius:6px;margin-bottom:1.5rem;">

A comprehensive full-stack campus marketplace for buying and selling second-hand textbooks among NDHU students, with a standout **AI-based condition classification model** that automatically rates book quality from user-uploaded images. Built as a Software Engineering course project (Spring 2026).

### Key Contributions
- **Full-Stack Architecture (Backend Lead):** Architected and built the entire backend from the ground up API design, service logic, and integration with the TypeScript frontend and Python AI tooling.
- **AI Integration:** Implemented the condition classification model into the backend pipeline, providing objective, automated book condition ratings from uploaded photos.
- **DevOps & CI/CD:** Led all DevOps efforts configured the initial infrastructure, established continuous integration and deployment pipelines, and automated testing and build workflows.
- **Hosting & Networking:** Deployed the application to **Vercel**; managed server configurations and secure inter-service networking using **Tailscale**.
- **Multi-Language Stack:** Split responsibilities across Go (backend), TypeScript (frontend), and Python (AI/tooling), designing API contracts to keep services cleanly integrated.

### What I Learned
- Bringing a full-stack application from concept to production while owning backend architecture end-to-end.
- API contract design across languages and teams, with a focus on reliability and developer ergonomics.
- Cloud deployment and secure networking in a real production environment.
- Practical software delivery with build/runtime automation across a multi-contributor project.

**Tech Stack:** Go (backend), TypeScript (frontend), Python (AI/tooling), Docker, Vercel, Tailscale.
