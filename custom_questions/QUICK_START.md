# 🚀 快速開始 - 新增題目

## 📝 最簡單的方式

### 步驟 1：選擇分類
打開 `custom_questions/` 資料夾，選擇適合的檔案：

- 😴 **懶得做某事** → `laziness.js`
- 💭 **從未想過做某事** → `intentions.js`
- 🎯 **某事會帶來影響** → `effects.js`
- 😊 **表達感謝、驚訝、遺憾** → `emotions.js`
- 🗣️ **口語俚語** → `colloquial.js`
- 📚 **基礎問候** → `basic_examples.js`

### 步驟 2：找到貼上位置
打開檔案後，滾動到最底部，找到：

```javascript
    }
    // 最後一題 ↑
];  // ← 在這之前貼上

// 匯出（不要動）
if (typeof module !== 'undefined' && module.exports) {
```

### 步驟 3：貼上新題目

在 `];` **之前**貼上，記得：
1. 在上一題的 `}` 後面加**逗號** `,`
2. 貼上你的新題目
3. 最後一題**不要**逗號

**範例：**

```javascript
    },  // ← 上一題要有逗號

    {
        type: "multiple",
        question: "「我愛學法文」的法文是?",
        options: ["J'adore apprendre le français", "Je déteste", "C'est difficile", "Bonjour"],
        answer: "J'adore apprendre le français",
        frenchText: "J'adore apprendre le français",
        explanation: "J'adore 是「我熱愛」的意思。",
        vocabulary: "J'adore - 我熱愛"
    }  // ← 最後一題不要逗號

];  // ← 這行不要動
```

### 步驟 4：儲存並測試
1. 儲存檔案（Ctrl+S）
2. 重新整理網頁（F5）
3. 點擊「⭐ 必學句型」查看新題目

## ⚠️ 常見錯誤

### ❌ 錯誤 1：忘記逗號
```javascript
    }     // ← 少了逗號
    {
```

### ✅ 正確：
```javascript
    },    // ← 要有逗號
    {
```

### ❌ 錯誤 2：最後一題有逗號
```javascript
    },    // ← 多了逗號
];
```

### ✅ 正確：
```javascript
    }     // ← 不要逗號
];
```

### ❌ 錯誤 3：引號問題
```javascript
answer: "C'est" // ← 中間的引號會出錯
```

### ✅ 正確：
```javascript
answer: "C'est"  // ← 用反斜線轉義
// 或
answer: "C'est"  // ← 用單引號包雙引號
```

## 🎯 題型說明

### 選擇題 (multiple)
```javascript
{
    type: "multiple",
    question: "問題？",
    options: ["選項1", "選項2", "選項3", "選項4"],
    answer: "正確答案",
    frenchText: "法文原文",
    explanation: "解釋",
    vocabulary: "單字 - 中文"
}
```

### 排序題 (sorting)
```javascript
{
    type: "sorting",
    question: "排列正確句子",
    words: ["單字1", "單字2", "單字3"],
    answer: "單字1 單字2 單字3",  // 正確順序
    frenchText: "完整句子",
    explanation: "解釋",
    vocabulary: "單字 - 中文"
}
```

### 填空題 (input)
```javascript
{
    type: "input",
    question: "請輸入...",
    answer: "正確答案",
    frenchText: "法文原文",
    explanation: "解釋",
    vocabulary: "單字 - 中文"
}
```

## 🎨 使用 Excel 轉換器

更簡單的方法：
1. 打開 `excel_converter.html`
2. 貼上句子
3. 選擇題型
4. 點「轉換」→「自動複製」
5. 貼到對應分類檔案

---

**就這麼簡單！享受學習法文的樂趣吧！** 🇫🇷✨
