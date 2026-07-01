---
layout: page
title: NDHU Second Hand Book Store
description: 具備 AI 書況分類、CI/CD 與正式部署的校園二手書市集平台。
img: ndhu_shbs-1400.webp
importance: 5
category: web
lang: zh-Hant
github: https://github.com/ntsrigaud/NDHU-SHBS
permalink: /zh-hant/projects/ndhu-second-hand-book-store/
---

<div style="text-align: right; margin-bottom: 1.5rem;">
  <a href="/projects/5_second_hand_book/">English</a> | <strong>繁體中文</strong>
</div>

這是一個為東華學生打造的全端校園二手書市集，結合 AI 圖像模型自動判斷書況，並能根據使用者上傳照片自動給出品質評分。此專案為 2026 春季軟體工程課程作品。

### 主要貢獻
- **全端架構與後端主導：** 從零規劃並實作後端 API、服務邏輯，以及與 TypeScript 前端與 Python AI 工具的整合。
- **AI 整合：** 將書況分類模型串入後端流程，讓上傳圖片可以自動得到客觀的書況評分。
- **DevOps 與 CI/CD：** 規劃基礎架構、建立自動化測試與部署流程。
- **部署與網路：** 以 Vercel 進行部署，並用 Tailscale 管理安全的服務連線。
- **多語言技術棧：** 以 Go、TypeScript 與 Python 分工，設計乾淨的 API 合約。

### 我學到的事
- 如何把全端系統從概念推進到可部署的產品，並主導後端架構。
- 跨語言 API 合約設計與服務整合。
- 雲端部署與安全網路設定。
- 在多位協作者專案中建立可重現的建置與發佈流程。

**技術棧：** Go (後端), TypeScript (前端), Python (AI／工具), Docker, Vercel, Tailscale。
