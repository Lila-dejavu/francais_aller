// 自訂題庫 - 在這裡新增你自己的中法文句子
// Custom Question Bank - Add your own Chinese-French sentences here

// 使用說明:
// 1. 在 customQuestions 陣列中新增問題
// 2. 每個問題可以是選擇題、排序題或填空題
// 3. 設定 frenchText 屬性來啟用語音播放功能
// 4. 儲存檔案後,在 data.js 中引用這些題目

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
    },
    
    // 你的題目範例:
    /*
    {
        type: "multiple",  // 或 "sorting" 或 "input"
        question: "你的中文問題",
        options: ["選項1", "選項2", "選項3", "選項4"],  // 僅選擇題需要
        answer: "選項1",  // 選擇題:正確答案的文字 | 排序題/填空題:正確答案字串
        frenchText: "法文發音文字",  // 設定後會顯示播放按鈕
        explanation: "答案解釋",
        vocabulary: "法文 - 中文 (發音)"
    },
    */

];

// 匯出題庫供 data.js 使用
// Export for use in data.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = customQuestions;
}

// 在瀏覽器環境中設定為全域變數
if (typeof window !== 'undefined') {
    window.customQuestions = customQuestions;
}
