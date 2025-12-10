# 📚 自訂題庫使用說明

## 🎯 新架構（2025重構版）

為了更好管理大量題目，我們已將題庫按主題分類！

## 📁 檔案結構

```
francais_aller/
├── custom_questions/          ← 📂 所有題目都在這裡
│   ├── basic_examples.js      📚 基礎範例 (4題)
│   ├── intentions.js          💭 意願表達 (10題)
│   ├── effects.js             🎯 影響與改變 (10題)
│   ├── laziness.js            😴 懶散表達 (20題)
│   ├── colloquial.js          🗣️ 口語俚語 (7題)
│   └── emotions.js            😊 情感與反應 (21題)
├── custom_questions_loader.js ← 整合所有分類
└── custom_questions.js        ← 舊檔案（已棄用）
```

## ⚡ 如何新增題目？

### 方法 1：使用 Excel 轉換器（推薦）

1. 打開 `excel_converter.html`
2. 貼上你的中法文句子
3. 點擊「轉換」
4. 點擊「📋 自動複製」
5. 選擇適合的分類檔案（例如：`emotions.js`）
6. 在檔案末尾（`]` 之前）貼上新題目
7. 記得在上一題後面加逗號 `,`

### 方法 2：手動編輯

打開適合的分類檔案，參考現有格式：

```javascript
{
    type: "multiple",  // 或 "sorting", "input"
    question: "「你好」的法文是?",
    options: ["Bonjour", "Bonsoir", "Au revoir", "Merci"],
    answer: "Bonjour",
    frenchText: "Bonjour",
    explanation: "Bonjour 是法文的「你好」。",
    vocabulary: "Bonjour - 你好"
}
```

## 📂 各分類說明

| 檔案 | 主題 | 適合內容 |
|------|------|----------|
| `basic_examples.js` | 基礎範例 | 簡單問候、基本單字 |
| `intentions.js` | 意願表達 | Je n'avais jamais eu l'intention de... |
| `effects.js` | 影響與改變 | Ça va vraiment... |
| `laziness.js` | 懶散表達 | J'ai la flemme de... |
| `colloquial.js` | 口語俚語 | 日常口語、俚語用法 |
| `emotions.js` | 情感與反應 | 感謝、驚訝、遺憾等 |

## 💡 創建新分類

如果現有分類不適合，可以創建新分類：

1. 在 `custom_questions/` 資料夾中創建新檔案：
   ```
   custom_questions/my_new_category.js
   ```

2. 複製任一現有檔案的格式：
   ```javascript
   const myNewCategory = [
       {
           type: "multiple",
           question: "...",
           // ... 其他屬性
       }
   ];
   
   // 匯出
   if (typeof module !== 'undefined' && module.exports) {
       module.exports = myNewCategory;
   }
   if (typeof window !== 'undefined') {
       window.myNewCategory = myNewCategory;
   }
   ```

3. 在 `index.html` 中引入：
   ```html
   <script src="custom_questions/my_new_category.js"></script>
   ```

4. 在 `custom_questions_loader.js` 中加入：
   ```javascript
   if (typeof window.myNewCategory !== 'undefined') {
       allQuestions.push(...window.myNewCategory);
   }
   ```

## ✅ 優點

- ✨ **易於管理**：每個檔案只有相關主題的題目
- 🔍 **快速查找**：知道要找什麼主題就打開對應檔案
- 📝 **不易出錯**：檔案小，不會搞混
- 🚀 **載入快速**：可選擇性載入需要的分類
- 👥 **協作友好**：多人可同時編輯不同分類

## 🔧 疑難排解

### 題目沒有顯示？

1. 檢查瀏覽器控制台（F12）是否有錯誤
2. 確認檔案格式正確（特別注意逗號）
3. 重新整理網頁（Ctrl+F5 強制刷新）

### 語法錯誤？

- 每個題目後面要有逗號 `,`
- 最後一個題目後面不要有逗號
- 字串中的引號要用 `\"` 轉義

## 📊 統計

開啟網頁後，在控制台（F12）會看到：
```
✅ 已載入 72 個自訂題目
┌─────────────┬────────┐
│   分類      │ 題數   │
├─────────────┼────────┤
│ 基礎範例    │   4    │
│ 意願表達    │  10    │
│ 影響與改變  │  10    │
│ 懶散表達    │  20    │
│ 口語俚語    │   7    │
│ 情感與反應  │  21    │
└─────────────┴────────┘
```

## 📞 需要幫助？

有問題歡迎隨時詢問！
