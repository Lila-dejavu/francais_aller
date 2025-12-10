// 📚 基礎範例 - Basic Examples
// 這些是示範如何新增題目的範例

const basicExamples = [
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

    {
        type: "multiple",
        question: "「我餓了」的法文是?",
        options: ["J'ai faim", "Je suis faim", "Tu as faim", "Nous avons faim"],
        answer: "J'ai faim",
        frenchText: "J'ai faim",
        explanation: "J'ai faim 是「我餓了」的表達方式,faim 是名詞「飢餓」。",
        vocabulary: "J'ai faim - 我餓了 (熱 番)"
    }
];

// 匯出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = basicExamples;
}
if (typeof window !== 'undefined') {
    window.basicExamples = basicExamples;
}
