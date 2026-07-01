---
layout: page
permalink: /repositories/
title: GitHub Repositories
description: Source code for my projects.
nav: false
nav_order: 4
lang: en
---

<div style="text-align: right; margin-bottom: 1.5rem;">
  <strong>English</strong> | <a href="/zh-hant/repositories/">繁體中文</a>
</div>

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
