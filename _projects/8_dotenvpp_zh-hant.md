---
layout: page
title: dotenvpp
description: 用於 .env 解析、驗證與環境設定的可重用 C++ 函式庫。
img:
importance: 8
category: systems
lang: zh-Hant
github: HSley13/dotenvpp
permalink: /zh-hant/projects/dotenvpp/
---

<div style="text-align: right; margin-bottom: 1.5rem;">
  <a href="/projects/8_dotenvpp/">English</a> | <strong>繁體中文</strong>
</div>

我設計並實作了 **dotenvpp**，一個可重用的 C++ 設定工具函式庫，簡化 `.env` 檔載入、數值驗證、預設值管理，以及執行期環境設定。

### 主要貢獻
- **函式庫 API 設計：** 提供易用且正確的 C++ `.env` 解析介面。
- **驗證與預設值：** 支援值驗證與可配置預設值，讓應用程式能及早發現設定問題。
- **可攜性：** 低依賴、可直接整合進不同 C++ 專案。
- **可重用基礎建設：** 不是一次性應用，而是可在多個專案重複使用的工具。

### 我學到的事
- 函式庫 API 的易用性與正確性設計。
- C++ 解析與設定驗證的防禦式寫法。
- 如何建立真正可重用的基礎建設元件。

**技術棧：** C++, CMake。
