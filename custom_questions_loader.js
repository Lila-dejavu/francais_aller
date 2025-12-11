// ================================================================
// 📚 自訂題庫 - Custom Questions
// ================================================================
//
// 🎯 新架構說明（2025重構版）：
// 所有題目已按主題分類到 custom_questions/ 資料夾
// 此檔案會自動整合所有分類
//
// 📁 目前分類：
// ├── basic_examples.js  (📚 基礎範例 - 4題)
// ├── intentions.js      (💭 意願表達 - 10題)  
// ├── effects.js         (🎯 影響與改變 - 10題)
// ├── laziness.js        (😴 懶散表達 - 20題)
// ├── colloquial.js      (🗣️ 口語俚語 - 7題)
// └── emotions.js        (😊 情感與反應 - 21題)
//
// ⚡ 如何新增題目？
// 方法1（推薦）：使用 Excel 轉換器
//   1. 打開 excel_converter.html
//   2. 貼上句子 → 點「轉換」
//   3. 選擇適合的分類檔案
//   4. 在該檔案末尾貼上新題目
//
// 方法2：手動編輯
//   1. 找到適合的分類檔案（例如：emotions.js）
//   2. 參考現有格式新增題目
//   3. 記得在陣列中用逗號分隔
//
// 💡 創建新分類：
//   1. 在 custom_questions/ 創建新檔案
//   2. 複製任一檔案的格式
//   3. 在 index.html 中引入新檔案
//   4. 在下方合併所有題目
// ================================================================

// 等待所有分類檔案載入後合併
function loadAllQuestions() {
    const allQuestions = [];
    
    // 載入各個分類（如果存在）
    if (typeof window.basicExamples !== 'undefined') {
        allQuestions.push(...window.basicExamples);
    }
    if (typeof window.intentions !== 'undefined') {
        allQuestions.push(...window.intentions);
    }
    if (typeof window.effects !== 'undefined') {
        allQuestions.push(...window.effects);
    }
    if (typeof window.laziness !== 'undefined') {
        allQuestions.push(...window.laziness);
    }
    if (typeof window.colloquial !== 'undefined') {
        allQuestions.push(...window.colloquial);
    }
    if (typeof window.emotions !== 'undefined') {
        allQuestions.push(...window.emotions);
    }
    
    return allQuestions;
}

// 設定為全域變數供遊戲使用
if (typeof window !== 'undefined') {
    // 立即嘗試載入（如果檔案已載入）
    function tryLoadQuestions() {
        const questions = loadAllQuestions();
        console.log('🔍 嘗試載入自訂題目...', {
            '基礎範例': typeof window.basicExamples !== 'undefined',
            '意願表達': typeof window.intentions !== 'undefined',
            '影響與改變': typeof window.effects !== 'undefined',
            '懶散表達': typeof window.laziness !== 'undefined',
            '口語俚語': typeof window.colloquial !== 'undefined',
            '情感與反應': typeof window.emotions !== 'undefined',
            '總題數': questions.length
        });
        
        if (questions.length > 0) {
            window.customQuestions = questions;
            console.log(`✅ 已載入 ${window.customQuestions.length} 個自訂題目`);
            
            // 列出各分類題數
            const counts = {
                '基礎範例': window.basicExamples?.length || 0,
                '意願表達': window.intentions?.length || 0,
                '影響與改變': window.effects?.length || 0,
                '懶散表達': window.laziness?.length || 0,
                '口語俚語': window.colloquial?.length || 0,
                '情感與反應': window.emotions?.length || 0
            };
            console.table(counts);
            
            // 觸發自訂事件通知遊戲
            window.dispatchEvent(new Event('customQuestionsLoaded'));
            return true;
        } else {
            console.warn('⚠️ 沒有載入到任何自訂題目');
        }
        return false;
    }
    
    // 立即嘗試載入
    const loaded = tryLoadQuestions();
    if (!loaded) {
        console.log('📝 等待 DOMContentLoaded 事件...');
        // 如果還沒載入，在 DOMContentLoaded 時再試
        window.addEventListener('DOMContentLoaded', () => {
            console.log('📝 DOMContentLoaded 觸發，再次嘗試載入...');
            tryLoadQuestions();
        });
    }
}

// Node.js 環境支援
if (typeof module !== 'undefined' && module.exports) {
    module.exports = loadAllQuestions;
}
