---
layout: page
title: JsonFS
description: 將 JSON 檔與即時 REST API 掛載成 POSIX 路徑的 C++ 虛擬檔案系統。
img:
importance: 7
category: systems
lang: zh-Hant
github: https://github.com/HSley13/JsonFS
permalink: /zh-hant/projects/jsonfs/
---

<div style="text-align: right; margin-bottom: 1.5rem;">
  <a href="/projects/7_jsonfs/">English</a> | <strong>繁體中文</strong>
</div>

我打造了 **JsonFS**，一個系統層級的 C++ 工具，把應用層資料模型與 POSIX 檔案系統抽象串接起來，讓 JSON 檔案與即時 REST API 可以像一般檔案與資料夾一樣被掛載與瀏覽。

### 主要貢獻
- **POSIX 抽象：** 將結構化 JSON / API 資料映射成檔案、資料夾與路徑。
- **即時 REST 整合：** 支援掛載 live REST endpoint，並處理序列化、快取與一致性問題。
- **系統設計：** 以低階工具常見的錯誤處理與邊界條件為核心。
- **可攜式建置：** 使用 CMake 建構，方便重現與跨環境移植。

### 我學到的事
- 進階系統程式設計與介面設計。
- 將 REST/JSON 與檔案系統兩種不同範式進行轉換。
- 低階工具的錯誤處理與邊界設計。
- 兼顧開發者體驗的技術基礎建設產品化。

**技術棧：** C++, CMake, POSIX (FUSE), HTTP/REST。
