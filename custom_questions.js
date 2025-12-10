// 自訂題庫 - 在這裡新增你自己的中法文句子
// Custom Question Bank - Add your own Chinese-French sentences here

// ⚡ 最簡單的新增方式：
// 1. 打開 excel_converter.html
// 2. 貼上你的句子 → 點「轉換」
// 3. 點「📋 自動複製」
// 4. 回到這個檔案，在陣列最後按 Ctrl+V 貼上 → 完成！
//
// 💡 提示：貼上位置在最後一個 }, 之後、]; 之前

const customQuestions = [
    // 範例 1: 選擇題
    {
        type: "multiple",
        question: "「早安」的法文是?",
        options: ["Bonjour", "Bonsoir", "Bonne nuit", "Salut"],
        answer: "Bonjour",
        frenchText: "Bonjour",
        explanation: "Bonjour 用於早上到傍晚的問候。",
        vocabulary: "Bonjour - 早安/你好 (崩住)"
    },

    // 範例 2: 排序題(拖曳排列)
    {
        type: "sorting",
        question: "請排列正確的句子:「我愛你」",
        words: ["t'", "Je", "aime"],
        answer: "Je t' aime",
        frenchText: "Je t'aime",
        explanation: "Je t'aime 是法文「我愛你」的表達方式。",
        vocabulary: "Je t'aime - 我愛你"
    },

    // 範例 3: 填空題(適合進階學習)
    {
        type: "input",
        question: "請輸入「謝謝」的法文:",
        answer: "merci",
        frenchText: "Merci",
        explanation: "Merci 是最常用的感謝用語。",
        vocabulary: "Merci - 謝謝 (梅西)"
    },

    // ============================================
    // 在下方新增你自己的題目
    // ============================================
    
    // 測試題目 - 你可以在左側「必學句型」中查看
    {
        type: "multiple",
        question: "「我餓了」的法文是?",
        options: ["J'ai faim", "Je suis faim", "Tu as faim", "Nous avons faim"],
        answer: "J'ai faim",
        frenchText: "J'ai faim",
        explanation: "J'ai faim 是「我餓了」的表達方式,faim 是名詞「飢餓」。",
        vocabulary: "J'ai faim - 我餓了 (熱 番)"
    }

    // ⚠️ 重要：上面的題目請不要動！
    // ⚠️ 從這裡開始貼上你的新題目 ↓↓↓
    // ============================================
    // 📝 新題目貼上區（安全區域）
    // 使用方法：
    // 1. 在 excel_converter.html 轉換完成後
    // 2. 點擊「📋 自動複製」
    // 3. 回到這裡，把游標放在下面這一行
    // 4. 按 Ctrl+V 貼上
    // ============================================
    
    // ← 在這一行按 Ctrl+V 貼上新題目

];

// ⚠️ 注意：]; 這行不要刪除！

// 匯出題庫供 data.js 使用
// Export for use in data.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = customQuestions;
}

// 在瀏覽器環境中設定為全域變數
if (typeof window !== 'undefined') {
    window.customQuestions = customQuestions;
}
