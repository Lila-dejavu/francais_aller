// 每日練習 - 臨時題目練習區
// Daily Practice - Temporary practice area

// 使用說明:
// 1. 在下方的文字框輸入中文和法文句子（用分隔線隔開）
// 2. 點擊「生成練習題」按鈕
// 3. 完成練習後可以點擊「清空練習」準備新內容
// 4. 這裡的內容練習完可以清空，不會保存

class DailyPracticeManager {
    constructor() {
        this.practiceQuestions = [];
        this.loadFromLocalStorage();
    }
    
    // 從 localStorage 載入今日練習
    loadFromLocalStorage() {
        const saved = localStorage.getItem('dailyPracticeQuestions');
        if (saved) {
            this.practiceQuestions = JSON.parse(saved);
        }
    }
    
    // 保存到 localStorage
    saveToLocalStorage() {
        localStorage.setItem('dailyPracticeQuestions', JSON.stringify(this.practiceQuestions));
    }
    
    // 從文字輸入生成題目
    generateFromText(inputText) {
        const lines = inputText.split('\n').filter(line => line.trim());
        const questions = [];
        
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();
            
            // 格式1: "中文 | 法文" 或 "中文｜法文"
            if (line.includes('|') || line.includes('｜')) {
                const parts = line.split(/[|｜]/).map(p => p.trim());
                if (parts.length >= 2) {
                    const chinese = parts[0];
                    const french = parts[1];
                    questions.push(this.createQuestionFromPair(chinese, french));
                }
            }
            // 格式2: "中文 - 法文"
            else if (line.includes(' - ')) {
                const parts = line.split(' - ').map(p => p.trim());
                if (parts.length >= 2) {
                    const chinese = parts[0];
                    const french = parts[1];
                    questions.push(this.createQuestionFromPair(chinese, french));
                }
            }
            // 格式3: 連續兩行（中文在前，法文在後）
            else if (i + 1 < lines.length && this.isFrench(lines[i + 1])) {
                const chinese = line;
                const french = lines[i + 1].trim();
                questions.push(this.createQuestionFromPair(chinese, french));
                i++; // 跳過下一行
            }
        }
        
        this.practiceQuestions = questions;
        this.saveToLocalStorage();
        return questions.length;
    }
    
    // 判斷是否為法文（簡單檢測）
    isFrench(text) {
        // 包含法文特殊字符或常見法文單字
        const frenchPatterns = /[àâäéèêëïîôùûüÿæœç]|je|tu|il|elle|nous|vous|ils|elles|est|sont|avoir|être/i;
        return frenchPatterns.test(text);
    }
    
    // 從一對中法文生成題目
    createQuestionFromPair(chinese, french) {
        const words = french.split(/\s+/);
        
        // 如果句子很短（1-3個詞），生成填空題
        if (words.length <= 3) {
            return {
                type: "input",
                question: `請輸入「${chinese}」的法文:`,
                answer: french,
                frenchText: french,
                explanation: `${french} 的中文意思是「${chinese}」`,
                vocabulary: `${french} - ${chinese}`
            };
        }
        // 如果句子較長（4個詞以上），生成排序題
        else {
            return {
                type: "sorting",
                question: `請排列正確的句子:「${chinese}」`,
                words: [...words].sort(() => Math.random() - 0.5), // 隨機打亂
                answer: french,
                frenchText: french,
                explanation: `${french} 的中文意思是「${chinese}」`,
                vocabulary: `${french} - ${chinese}`
            };
        }
    }
    
    // 獲取所有練習題目
    getQuestions() {
        return this.practiceQuestions;
    }
    
    // 清空練習
    clear() {
        this.practiceQuestions = [];
        localStorage.removeItem('dailyPracticeQuestions');
    }
    
    // 獲取練習內容（供遊戲使用）
    getContent() {
        return {
            title: "每日練習",
            story: "這是你今天的練習內容，完成後可以清空準備明天的新內容！",
            questions: this.practiceQuestions
        };
    }
}

// 建立全域實例
if (typeof window !== 'undefined') {
    window.dailyPracticeManager = new DailyPracticeManager();
    
    // 提供全域函數供 data.js 使用
    window.getDailyPracticeContent = function() {
        return window.dailyPracticeManager.getContent();
    };
}
