// 📚 基礎範例 - Basic Examples
// 這是示範如何新增題目的範例

const basicExamples = [
    // 範例：選擇題
    {
        type: "multiple",
        question: "「你好」的法文是？",
        options: ["Bonjour", "Bonsoir", "Merci", "Au revoir"],
        answer: "Bonjour",
        frenchText: "Bonjour",
        explanation: "Bonjour 是法文最常用的問候語。",
        vocabulary: "Bonjour - 你好"
    }
    
    // 在這裡新增更多題目...
];

// 匯出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = basicExamples;
}
if (typeof window !== 'undefined') {
    window.basicExamples = basicExamples;
}
