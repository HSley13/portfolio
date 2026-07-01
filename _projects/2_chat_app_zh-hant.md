---
layout: page
title: Cross-Platform Chat App
description: 以 C++/Go 後端與 QML/C++ 客戶端打造的即時通訊系統。
img:
importance: 2
category: desktop
lang: zh-Hant
github: https://github.com/HSley13/chatApp_client
permalink: /zh-hant/projects/cross-platform-chat-app/
---

<div style="text-align: right; margin-bottom: 1.5rem;">
  <a href="/projects/2_chat_app/">English</a> | <strong>繁體中文</strong>
</div>

我設計了一套即時通訊系統，包含低延遲訊息處理的多語言後端（C++ + Go），以及可部署到 Android、iOS、macOS、Windows 與 WebAssembly 的真跨平台客戶端（QML + C++）。

### 主要貢獻
- **C++ / Go 後端：** 結合 C++ 的底層控制與 Go 的服務彈性，處理並發訊息、會話狀態與長連線穩定性。
- **跨平台客戶端：** 以 C++ 共用核心邏輯，QML 負責 UI 層，維持各平台一致的功能體驗。
- **即時功能：** 語音訊息、檔案傳輸、群組聊天與打字提示。
- **響應式體驗：** 依不同裝置與網路條件調整互動方式。

### 我學到的事
- 低延遲後端系統與實際並發模型設計。
- 長連線網路服務的穩定性與健壯性。
- 跨平台架構與 UI 適配。
- 從協定到裝置端體驗的端到端產品思維。

**技術棧：** C++, Go, Qt, QML, AWS, MongoDB。目標平台：Android, iOS, macOS, Windows, WebAssembly。
