---
layout: page
title: NDHU Task Management
description: 結合 Moodle 同步與 C++ 後端的跨平台作業截止管理平台。
img:
importance: 1
category: mobile
lang: zh-Hant
github: https://github.com/HSley13/ndhu-task-management
permalink: /zh-hant/projects/ndhu-task-management/
---

<div style="text-align: right; margin-bottom: 1.5rem;">
  <a href="/projects/1_task_management/">English</a> | <strong>繁體中文</strong>
</div>

我打造了一個跨平台作業截止管理平台，結合以 TypeScript 為主的網頁／PWA 前端與高效能 C++ 後端（Drogon REST API），協助學生即時掌握課業進度與提醒流程。

### 主要貢獻
- **TypeScript 前端：** 以任務追蹤、優先排序與提醒流程為核心，設計易維護的元件與狀態架構。
- **C++ 後端：** 使用 Drogon 實作高效能伺服器，重視請求處理、資料持久化與清楚的 API 設計。
- **Moodle 整合：** 串接 Moodle LMS API，自動同步課程作業。
- **離線優先：** 以 SQLite 建立本機資料層，搭配推播提醒與行事曆檢視。
- **部署：** Android JWT 驗證、Cloudflare 穿透、可自架的後端服務。

### 我學到的事
- 把學生日常痛點轉成具體的 UX 與功能決策。
- 用 TypeScript 建立可擴充的前端模式。
- 以 C++ 設計高效能後端服務，理解記憶體與效能取捨。
- 透過 CMake 與環境自動化提升建置可靠度。

**技術棧：** React Native (Expo), TypeScript, C++ (Drogon), SQLite, JWT, Cloudflare, CMake。
