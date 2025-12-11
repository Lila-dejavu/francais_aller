// 365法文日記 - 內容資料庫
// 包含365天的法文學習內容，從簡單到困難

// 內容生成器
window.getDayContent = function(day) {
    // 根據天數返回相應難度的內容
    if (day <= 100) {
        return getBeginnerContent(day);
    } else if (day <= 200) {
        return getIntermediateContent(day);
    } else {
        return getAdvancedContent(day);
    }
};

// 取得自訂題庫內容
window.getCustomPhrasesContent = function() {
    const customQuestions = window.customQuestions || [];
    
    // 使用熟練度系統選擇題目（最多30題）
    const proficiencyManager = window.game?.proficiencyManager;
    let selectedQuestions;
    
    if (proficiencyManager) {
        // 根據熟練度加權選題
        selectedQuestions = proficiencyManager.selectQuestions(customQuestions, 30);
        console.log(`🎯 已根據熟練度選出 ${selectedQuestions.length} 題（最多30題）`);
    } else {
        // 如果沒有熟練度管理器，隨機選30題
        const shuffled = [...customQuestions];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        selectedQuestions = shuffled.slice(0, 30);
        console.log(`🔀 隨機選出 ${selectedQuestions.length} 題`);
    }
    
    return {
        title: "必學句型",
        story: `這裡是你自己新增的法文句子練習！本次練習 ${selectedQuestions.length} 題，會根據你的熟練度調整出題頻率。`,
        questions: selectedQuestions
    };
};

// 初級內容 (第1-100天)
function getBeginnerContent(day) {
    const beginnerContent = {
        // 第1-10天：基礎問候
        1: {
            title: "初次見面",
            story: "你來到了巴黎的一家咖啡館，想要用法文點一杯咖啡。服務生微笑著向你打招呼...",
            questions: [
                {
                    type: "multiple",
                    question: "如何用法文說「你好」？",
                    options: ["Bonjour", "Goodbye", "Hello", "Ciao"],
                    answer: "Bonjour",
                    frenchText: "Bonjour",
                    explanation: "Bonjour 是法文最常用的問候語，適用於白天的任何時候。",
                    vocabulary: "Bonjour - 你好 (日安)"
                },
                {
                    type: "multiple",
                    question: "如何用法文說「謝謝」？",
                    options: ["Please", "Merci", "Sorry", "Yes"],
                    answer: "Merci",
                    frenchText: "Merci",
                    explanation: "Merci 是「謝謝」的意思，是法文中最重要的禮貌用語之一。",
                    vocabulary: "Merci - 謝謝"
                },
                {
                    type: "sorting",
                    question: "【排序題】將下列單字排成正確的法文句子：「我叫瑪麗」",
                    words: ["Marie", "m'appelle", "Je"],
                    answer: "Je m'appelle Marie",
                    frenchText: "Je m'appelle Marie",
                    explanation: "Je m'appelle 是「我叫」的意思，這是自我介紹最基本的句型。",
                    vocabulary: "Je m'appelle - 我叫"
                },
                {
                    type: "sorting",
                    question: "【排序題】將下列單字排成正確的法文句子：「請」",
                    words: ["plaît", "vous", "s'il"],
                    answer: "s'il vous plaît",
                    frenchText: "s'il vous plaît",
                    explanation: "S'il vous plaît 意思是「請」，是正式且禮貌的說法。",
                    vocabulary: "S'il vous plaît - 請 (正式)"
                },
                {
                    type: "multiple",
                    question: "如何用法文說「再見」？",
                    options: ["Au revoir", "Bonjour", "Merci", "Salut"],
                    answer: "Au revoir",
                    frenchText: "Au revoir",
                    explanation: "Au revoir 是正式的「再見」，適用於任何場合。",
                    vocabulary: "Au revoir - 再見"
                },
                {
                    type: "multiple",
                    question: "Oui 是什麼意思？",
                    options: ["是", "不", "謝謝", "對不起"],
                    answer: "是",
                    frenchText: "Oui",
                    explanation: "Oui 是法文的「是」，發音類似「wi」。",
                    vocabulary: "Oui - 是"
                },
                {
                    type: "multiple",
                    question: "Non 是什麼意思？",
                    options: ["不", "是", "好的", "不好"],
                    answer: "不",
                    frenchText: "Non",
                    explanation: "Non 是法文的「不」，發音類似「no」。",
                    vocabulary: "Non - 不"
                },
                {
                    type: "multiple",
                    question: "如何用法文說「對不起」？",
                    options: ["Pardon", "Merci", "Bonjour", "Au revoir"],
                    answer: "Pardon",
                    frenchText: "Pardon",
                    explanation: "Pardon 或 Excusez-moi 是「對不起」的意思。",
                    vocabulary: "Pardon - 對不起"
                },
                {
                    type: "multiple",
                    question: "Salut 是什麼意思？",
                    options: ["嗨（非正式問候）", "再見（正式）", "謝謝", "對不起"],
                    answer: "嗨（非正式問候）",
                    frenchText: "Salut",
                    explanation: "Salut 是朋友間的非正式問候語，也可以用來說再見。",
                    vocabulary: "Salut - 嗨/拜拜（非正式）"
                },
                {
                    type: "multiple",
                    question: "如何用法文說「晚安」？",
                    options: ["Bonsoir", "Bonjour", "Bonne nuit", "Salut"],
                    answer: "Bonsoir",
                    frenchText: "Bonsoir",
                    explanation: "Bonsoir 是「晚上好」，用於傍晚和晚上的問候。",
                    vocabulary: "Bonsoir - 晚上好"
                },
                {
                    type: "multiple",
                    question: "Bonne nuit 是什麼意思？",
                    options: ["晚安（睡前）", "晚上好", "早安", "午安"],
                    answer: "晚安（睡前）",
                    frenchText: "Bonne nuit",
                    explanation: "Bonne nuit 是睡前說的「晚安」，與 Bonsoir（晚上好）不同。",
                    vocabulary: "Bonne nuit - 晚安（睡前）"
                },
                {
                    type: "sorting",
                    question: "【排序題】將下列單字排成正確的法文句子：「早安」",
                    words: ["matin", "Bon"],
                    answer: "Bon matin",
                    frenchText: "Bon matin",
                    explanation: "Bon matin 是「早安」，不過法國人更常用 Bonjour。",
                    vocabulary: "Bon matin - 早安"
                },
                {
                    type: "multiple",
                    question: "De rien 是什麼意思？",
                    options: ["不客氣", "謝謝", "對不起", "再見"],
                    answer: "不客氣",
                    frenchText: "De rien",
                    explanation: "De rien 是「不客氣」，回應 Merci 時使用。",
                    vocabulary: "De rien - 不客氣"
                },
                {
                    type: "multiple",
                    question: "如何用法文說「請問」？",
                    options: ["Excusez-moi", "Merci", "Pardon", "Bonjour"],
                    answer: "Excusez-moi",
                    frenchText: "Excusez-moi",
                    explanation: "Excusez-moi 可以表示「請問」或「對不起」，用於禮貌地引起注意。",
                    vocabulary: "Excusez-moi - 請問/對不起"
                },
                {
                    type: "multiple",
                    question: "À bientôt 是什麼意思？",
                    options: ["待會見", "再見", "你好", "謝謝"],
                    answer: "待會見",
                    frenchText: "À bientôt",
                    explanation: "À bientôt 表示「待會見/回頭見」，比 Au revoir 更親切。",
                    vocabulary: "À bientôt - 待會見"
                }
            ],
            diary: "今天是我法文學習之旅的第一天！我學會了最基本的問候語：Bonjour（你好）、Merci（謝謝）、S'il vous plaît（請）和 Au revoir（再見）。這些是在法國生存的必備用語！"
        },
        
        2: {
            title: "自我介紹",
            story: "在咖啡館裡，鄰桌的法國人友善地和你搭話。是時候介紹自己了！",
            questions: [
                {
                    type: "multiple",
                    question: "「我的名字是...」法文怎麼說？",
                    options: ["Je m'appelle", "Mon nom", "Je suis", "J'ai"],
                    answer: "Je m'appelle",
                    frenchText: "Je m'appelle",
                    explanation: "Je m'appelle 是最常用的自我介紹方式，字面意思是「我叫做」。",
                    vocabulary: "Je m'appelle - 我的名字是"
                },
                {
                    type: "multiple",
                    question: "如何用法文說「我是學生」？",
                    options: ["Je suis étudiant", "Je m'appelle étudiant", "J'ai étudiant", "Mon étudiant"],
                    answer: "Je suis étudiant",
                    frenchText: "Je suis étudiant",
                    explanation: "Je suis 是「我是」的意思，後面接職業或身份。",
                    vocabulary: "Je suis - 我是"
                },
                {
                    type: "sorting",
                    question: "【排序題】將下列單字排成正確的法文句子：「你好嗎？（正式）」",
                    words: ["allez-vous", "Comment"],
                    answer: "Comment allez-vous",
                    frenchText: "Comment allez-vous",
                    explanation: "Comment allez-vous? 是正式的「你好嗎？」，朋友間可以說 Ça va?",
                    vocabulary: "Comment allez-vous? - 你好嗎？(正式)"
                },
                {
                    type: "multiple",
                    question: "Enchanté 是什麼意思？",
                    options: ["很高興認識你", "謝謝", "對不起", "再見"],
                    answer: "很高興認識你",
                    frenchText: "Enchanté",
                    explanation: "Enchanté(e) 是「很高興認識你」，初次見面時使用。",
                    vocabulary: "Enchanté(e) - 很高興認識你"
                },
                {
                    type: "multiple",
                    question: "如何用法文說「我來自台灣」？",
                    options: ["Je viens de Taïwan", "J'ai Taïwan", "Je suis Taïwan", "Mon Taïwan"],
                    answer: "Je viens de Taïwan",
                    frenchText: "Je viens de Taïwan",
                    explanation: "Je viens de 是「我來自」的意思，de 後面接地點。",
                    vocabulary: "Je viens de - 我來自"
                },
                {
                    type: "multiple",
                    question: "Ça va? 是什麼意思？",
                    options: ["你好嗎？（非正式）", "再見", "謝謝", "對不起"],
                    answer: "你好嗎？（非正式）",
                    frenchText: "Ça va",
                    explanation: "Ça va? 是朋友間問候的非正式說法，也可以回答「Ça va!」（我很好）。",
                    vocabulary: "Ça va? - 你好嗎？（非正式）"
                },
                {
                    type: "multiple",
                    question: "如何用法文說「我是老師」？",
                    options: ["Je suis professeur", "Je m'appelle professeur", "J'ai professeur", "Mon professeur"],
                    answer: "Je suis professeur",
                    frenchText: "Je suis professeur",
                    explanation: "Je suis professeur 表示「我是老師」。",
                    vocabulary: "professeur - 老師"
                },
                {
                    type: "multiple",
                    question: "Tu t'appelles comment? 是什麼意思？",
                    options: ["你叫什麼名字？", "你好嗎？", "你來自哪裡？", "你幾歲？"],
                    answer: "你叫什麼名字？",
                    frenchText: "Tu t'appelles comment",
                    explanation: "這是非正式的問法，正式用法是 Comment vous appelez-vous?",
                    vocabulary: "Tu t'appelles comment? - 你叫什麼名字？（非正式）"
                },
                {
                    type: "sorting",
                    question: "【排序題】將下列單字排成正確的法文句子：「我很好」",
                    words: ["bien", "vais", "Je"],
                    answer: "Je vais bien",
                    frenchText: "Je vais bien",
                    explanation: "Je vais bien 是「我很好」的意思，用來回答 Comment allez-vous?",
                    vocabulary: "Je vais bien - 我很好"
                },
                {
                    type: "multiple",
                    question: "如何用法文說「你呢？」",
                    options: ["Et toi?", "Tu es?", "Ça va?", "Comment?"],
                    answer: "Et toi?",
                    frenchText: "Et toi",
                    explanation: "Et toi?（非正式）或 Et vous?（正式）表示「你呢？」",
                    vocabulary: "Et toi? - 你呢？（非正式）"
                },
                {
                    type: "multiple",
                    question: "J'ai 25 ans 是什麼意思？",
                    options: ["我25歲", "我有25個", "我是25號", "我要25個"],
                    answer: "我25歲",
                    frenchText: "J'ai 25 ans",
                    explanation: "法文用「avoir（有）+ 年齡 + ans（年）」來表達年齡。",
                    vocabulary: "J'ai ... ans - 我...歲"
                },
                {
                    type: "multiple",
                    question: "如何用法文問「你幾歲？」",
                    options: ["Tu as quel âge?", "Tu es quel âge?", "Tu appelles quel âge?", "Tu viens quel âge?"],
                    answer: "Tu as quel âge?",
                    frenchText: "Tu as quel âge",
                    explanation: "Tu as quel âge?（非正式）或 Quel âge avez-vous?（正式）。",
                    vocabulary: "Quel âge? - 幾歲？"
                },
                {
                    type: "multiple",
                    question: "Où habites-tu? 是什麼意思？",
                    options: ["你住哪裡？", "你叫什麼？", "你幾歲？", "你是誰？"],
                    answer: "你住哪裡？",
                    frenchText: "Où habites-tu",
                    explanation: "Où habites-tu?（非正式）詢問居住地點。",
                    vocabulary: "Où habites-tu? - 你住哪裡？"
                },
                {
                    type: "sorting",
                    question: "【排序題】將下列單字排成正確的法文句子：「我住在巴黎」",
                    words: ["Paris", "à", "J'habite"],
                    answer: "J'habite à Paris",
                    frenchText: "J'habite à Paris",
                    explanation: "J'habite à + 城市名，表示「我住在...」。",
                    vocabulary: "J'habite à - 我住在"
                },
                {
                    type: "multiple",
                    question: "Quelle est ta nationalité? 是什麼意思？",
                    options: ["你的國籍是什麼？", "你叫什麼名字？", "你住哪裡？", "你幾歲？"],
                    answer: "你的國籍是什麼？",
                    frenchText: "Quelle est ta nationalité",
                    explanation: "用來詢問國籍，可以回答 Je suis taïwanais(e)（我是台灣人）。",
                    vocabulary: "nationalité - 國籍"
                }
            ],
            diary: "今天學會了自我介紹！我現在可以說 Je m'appelle（我叫...）、Je suis étudiant（我是學生）和 Je viens de Taïwan（我來自台灣）。終於可以和法國人聊聊天了！"
        },

        3: {
            title: "數字1-10",
            story: "你需要在市場買些水果，但要用法文數字來表達數量...",
            questions: [
                {
                    type: "multiple",
                    question: "法文的「1」怎麼說？",
                    options: ["un", "deux", "trois", "quatre"],
                    answer: "un",
                    frenchText: "un",
                    explanation: "Un 是法文的「1」，也是不定冠詞「一個」。",
                    vocabulary: "un - 一"
                },
                {
                    type: "multiple",
                    question: "Deux 是什麼數字？",
                    options: ["2", "3", "4", "5"],
                    answer: "2",
                    frenchText: "deux",
                    explanation: "Deux 是法文的「2」，發音類似「的」。",
                    vocabulary: "deux - 二"
                },
                {
                    type: "multiple",
                    question: "Trois 是什麼意思？",
                    options: ["3", "2", "4", "5"],
                    answer: "3",
                    frenchText: "trois",
                    explanation: "Trois 是「3」，發音類似「特哇」。",
                    vocabulary: "trois - 三"
                },
                {
                    type: "multiple",
                    question: "法文的「4」怎麼說？",
                    options: ["quatre", "cinq", "six", "trois"],
                    answer: "quatre",
                    frenchText: "quatre",
                    explanation: "Quatre 是「4」，發音類似「卡特」。",
                    vocabulary: "quatre - 四"
                },
                {
                    type: "sorting",
                    question: "【排序題】將下列字母排成正確的法文數字「5」",
                    words: ["c", "i", "n", "q"],
                    answer: "cinq",
                    frenchText: "cinq",
                    explanation: "Cinq 是「5」，發音類似「桑克」。",
                    vocabulary: "cinq - 五"
                },
                {
                    type: "multiple",
                    question: "Six 是什麼數字？",
                    options: ["6", "7", "8", "9"],
                    answer: "6",
                    frenchText: "six",
                    explanation: "Six 是「6」，發音類似「西斯」。",
                    vocabulary: "six - 六"
                },
                {
                    type: "multiple",
                    question: "Sept 是什麼意思？",
                    options: ["7", "6", "8", "9"],
                    answer: "7",
                    frenchText: "sept",
                    explanation: "Sept 是「7」，一週七天：sept jours。",
                    vocabulary: "sept - 七"
                },
                {
                    type: "multiple",
                    question: "法文的「8」怎麼說？",
                    options: ["huit", "sept", "neuf", "six"],
                    answer: "huit",
                    frenchText: "huit",
                    explanation: "Huit 是「8」，發音類似「喂特」。",
                    vocabulary: "huit - 八"
                },
                {
                    type: "multiple",
                    question: "Neuf 是什麼數字？",
                    options: ["9", "8", "10", "7"],
                    answer: "9",
                    frenchText: "neuf",
                    explanation: "Neuf 是「9」，發音類似「呢夫」。",
                    vocabulary: "neuf - 九"
                },
                {
                    type: "multiple",
                    question: "如何用法文說「10」？",
                    options: ["dix", "six", "sept", "huit"],
                    answer: "dix",
                    frenchText: "dix",
                    explanation: "Dix 是「10」，發音類似「迪斯」。",
                    vocabulary: "dix - 十"
                },
                {
                    type: "sorting",
                    question: "【排序題】將下列單字排成正確的法文句子：「我想要兩個蘋果」",
                    words: ["pommes", "deux", "veux", "Je"],
                    answer: "Je veux deux pommes",
                    frenchText: "Je veux deux pommes",
                    explanation: "Je veux 是「我想要」，deux 是「兩個」，pommes 是「蘋果」。",
                    vocabulary: "Je veux - 我想要"
                },
                {
                    type: "multiple",
                    question: "法文的「零」怎麼說？",
                    options: ["zéro", "un", "deux", "dix"],
                    answer: "zéro",
                    frenchText: "zéro",
                    explanation: "Zéro 是「0」，發音類似「賻羅」。",
                    vocabulary: "zéro - 零"
                },
                {
                    type: "multiple",
                    question: "如何用法文說「三個人」？",
                    options: ["trois personnes", "trois homme", "trois gens", "trois femme"],
                    answer: "trois personnes",
                    frenchText: "trois personnes",
                    explanation: "Personnes 是「人」的複數，數字 + personnes 表示「幾個人」。",
                    vocabulary: "personne(s) - 人"
                },
                {
                    type: "multiple",
                    question: "在法文中，哪個數字的發音與「neuf」相似？",
                    options: ["9", "8", "7", "6"],
                    answer: "9",
                    frenchText: "neuf",
                    explanation: "Neuf (9) 的發音類似「呢夫」。",
                    vocabulary: "neuf - 九"
                },
                {
                    type: "multiple",
                    question: "Combien? 是什麼意思？",
                    options: ["多少？", "什麼？", "哪裡？", "何時？"],
                    answer: "多少？",
                    frenchText: "Combien",
                    explanation: "Combien 用來詢問數量或價格，例如：Combien ça coûte? (這個多少錢？)",
                    vocabulary: "Combien? - 多少？"
                }
            ],
            diary: "今天掌握了法文數字1-10！Un, deux, trois, quatre, cinq, six, sept, huit, neuf, dix。現在可以在市場買東西了！"
        },

        4: {
            title: "顏色世界",
            story: "走進一家藝術用品店，五顏六色的畫筆讓你想學習法文的顏色...",
            questions: [
                {
                    type: "multiple",
                    question: "法文的「紅色」是？",
                    options: ["rouge", "bleu", "vert", "jaune"],
                    answer: "rouge",
                    frenchText: "rouge",
                    explanation: "Rouge 是「紅色」，例如：une pomme rouge（紅蘋果）。",
                    vocabulary: "rouge - 紅色"
                },
                {
                    type: "multiple",
                    question: "Bleu 是什麼顏色？",
                    options: ["藍色", "綠色", "黃色", "白色"],
                    answer: "藍色",
                    frenchText: "bleu",
                    explanation: "Bleu 是「藍色」，例如：le ciel bleu（藍色的天空）。",
                    vocabulary: "bleu - 藍色"
                },
                {
                    type: "sorting",
                    question: "【排序題】將下列字母排成正確的法文顏色「綠色」",
                    words: ["v", "e", "r", "t"],
                    answer: "vert",
                    frenchText: "vert",
                    explanation: "Vert 是「綠色」，例如：l'herbe verte（綠草）。",
                    vocabulary: "vert - 綠色"
                },
                {
                    type: "multiple",
                    question: "Jaune 是什麼顏色？",
                    options: ["黃色", "綠色", "藍色", "紅色"],
                    answer: "黃色",
                    frenchText: "jaune",
                    explanation: "Jaune 是「黃色」，例如：le soleil jaune（黃色的太陽）。",
                    vocabulary: "jaune - 黃色"
                },
                {
                    type: "multiple",
                    question: "Noir 是什麼意思？",
                    options: ["黑色", "白色", "灰色", "棕色"],
                    answer: "黑色",
                    frenchText: "noir",
                    explanation: "Noir 是「黑色」，例如：un chat noir（黑貓）。",
                    vocabulary: "noir - 黑色"
                },
                {
                    type: "multiple",
                    question: "如何用法文說「白色」？",
                    options: ["blanc", "noir", "gris", "rose"],
                    answer: "blanc",
                    frenchText: "blanc",
                    explanation: "Blanc 是「白色」，陰性形式是 blanche。",
                    vocabulary: "blanc - 白色"
                },
                {
                    type: "multiple",
                    question: "Rose 是什麼顏色？",
                    options: ["粉紅色", "紅色", "紫色", "橘色"],
                    answer: "粉紅色",
                    frenchText: "rose",
                    explanation: "Rose 是「粉紅色」，也是「玫瑰花」的意思。",
                    vocabulary: "rose - 粉紅色"
                },
                {
                    type: "multiple",
                    question: "法文的「灰色」怎麼說？",
                    options: ["gris", "noir", "blanc", "brun"],
                    answer: "gris",
                    frenchText: "gris",
                    explanation: "Gris 是「灰色」，例如：un ciel gris（灰色的天空）。",
                    vocabulary: "gris - 灰色"
                },
                {
                    type: "multiple",
                    question: "Orange 是什麼顏色？",
                    options: ["橘色", "紅色", "黃色", "紫色"],
                    answer: "橘色",
                    frenchText: "orange",
                    explanation: "Orange 是「橘色」，也是「橘子」的意思。",
                    vocabulary: "orange - 橘色/橘子"
                },
                {
                    type: "multiple",
                    question: "Violet 是什麼顏色？",
                    options: ["紫色", "粉紅色", "藍色", "灰色"],
                    answer: "紫色",
                    frenchText: "violet",
                    explanation: "Violet 是「紫色」，由藍色和紅色混合而成。",
                    vocabulary: "violet - 紫色"
                },
                {
                    type: "multiple",
                    question: "法文的「棕色」怎麼說？",
                    options: ["brun", "marron", "noir", "gris"],
                    answer: "brun",
                    frenchText: "brun",
                    explanation: "Brun 或 marron 都是「棕色」，brun 更常用於頭髮顏色。",
                    vocabulary: "brun / marron - 棕色"
                },
                {
                    type: "sorting",
                    question: "【排序題】將下列單字排成正確的法文句子：「我喜歡藍色」",
                    words: ["bleu", "le", "J'aime"],
                    answer: "J'aime le bleu",
                    frenchText: "J'aime le bleu",
                    explanation: "J'aime 是「我喜歡」，le 是陰性冠詞。",
                    vocabulary: "J'aime - 我喜歡"
                },
                {
                    type: "multiple",
                    question: "Quelle couleur? 是什麼意思？",
                    options: ["什麼顏色？", "什麼時候？", "多少顏色？", "哪裡？"],
                    answer: "什麼顏色？",
                    frenchText: "Quelle couleur",
                    explanation: "Quelle couleur 用來詢問顏色，可以回答 C'est rouge (是紅色)。",
                    vocabulary: "Quelle couleur? - 什麼顏色？"
                },
                {
                    type: "multiple",
                    question: "Beige 是什麼顏色？",
                    options: ["米色/淡棕色", "灰色", "白色", "黃色"],
                    answer: "米色/淡棕色",
                    frenchText: "beige",
                    explanation: "Beige 是「米色」或「淡棕色」，常用於服飾。",
                    vocabulary: "beige - 米色/淡棕色"
                },
                {
                    type: "multiple",
                    question: "如何用法文形容「深藍色」？",
                    options: ["bleu foncé", "bleu clair", "bleu grand", "bleu petit"],
                    answer: "bleu foncé",
                    frenchText: "bleu foncé",
                    explanation: "Foncé 表示「深、暗」，clair 表示「淡、明」。",
                    vocabulary: "foncé - 深色的; clair - 淡色的"
                }
            ],
            diary: "今天學了各種顏色！Rouge（紅）、Bleu（藍）、Vert（綠）、Jaune（黃）、Noir（黑）、Blanc（白）、Rose（粉紅）、Gris（灰）、Orange（橘）、Violet（紫）。世界變得更加多彩了！"
        },

        5: {
            title: "美味食物",
            story: "在一家傳統法式餐廳，你決定用法文點餐...",
            questions: [
                {
                    type: "multiple",
                    question: "法文的「麵包」怎麼說？",
                    options: ["pain", "vin", "eau", "café"],
                    answer: "pain",
                    frenchText: "pain",
                    explanation: "Pain 是「麵包」，法國麵包非常有名！",
                    vocabulary: "pain - 麵包"
                },
                {
                    type: "multiple",
                    question: "Eau 是什麼意思？",
                    options: ["水", "酒", "咖啡", "茶"],
                    answer: "水",
                    frenchText: "eau",
                    explanation: "Eau 是「水」，發音類似「喔」。",
                    vocabulary: "eau - 水"
                },
                {
                    type: "sorting",
                    question: "【排序題】將下列字母排成正確的法文單字「咖啡」",
                    words: ["c", "a", "f", "é"],
                    answer: "café",
                    frenchText: "café",
                    explanation: "Café 是「咖啡」，也指咖啡館。",
                    vocabulary: "café - 咖啡"
                },
                {
                    type: "multiple",
                    question: "Fromage 是什麼食物？",
                    options: ["起司", "麵包", "葡萄酒", "蛋糕"],
                    answer: "起司",
                    frenchText: "fromage",
                    explanation: "Fromage 是「起司」，法國起司世界聞名！",
                    vocabulary: "fromage - 起司"
                },
                {
                    type: "multiple",
                    question: "如何用法文說「葡萄酒」？",
                    options: ["vin", "eau", "lait", "jus"],
                    answer: "vin",
                    frenchText: "vin",
                    explanation: "Vin 是「葡萄酒」，法國葡萄酒享譽全球。",
                    vocabulary: "vin - 葡萄酒"
                },
                {
                    type: "multiple",
                    question: "Lait 是什麼意思？",
                    options: ["牛奶", "果汁", "茶", "水"],
                    answer: "牛奶",
                    frenchText: "lait",
                    explanation: "Lait 是「牛奶」，café au lait 是「咖啡牛奶」。",
                    vocabulary: "lait - 牛奶"
                },
                {
                    type: "multiple",
                    question: "法文的「肉」怎麼說？",
                    options: ["viande", "poisson", "légume", "fruit"],
                    answer: "viande",
                    frenchText: "viande",
                    explanation: "Viande 是「肉類」的總稱。",
                    vocabulary: "viande - 肉"
                },
                {
                    type: "multiple",
                    question: "Poisson 是什麼食物？",
                    options: ["魚", "肉", "蔬菜", "水果"],
                    answer: "魚",
                    frenchText: "poisson",
                    explanation: "Poisson 是「魚」，法式料理中常見的食材。",
                    vocabulary: "poisson - 魚"
                },
                {
                    type: "multiple",
                    question: "Légume 是什麼意思？",
                    options: ["蔬菜", "水果", "肉類", "飲料"],
                    answer: "蔬菜",
                    frenchText: "légume",
                    explanation: "Légume 是「蔬菜」，例如：tomate（番茄）、carotte（紅蘿蔔）。",
                    vocabulary: "légume - 蔬菜"
                },
                {
                    type: "multiple",
                    question: "如何用法文說「水果」？",
                    options: ["fruit", "légume", "viande", "dessert"],
                    answer: "fruit",
                    frenchText: "fruit",
                    explanation: "Fruit 是「水果」，例如：pomme（蘋果）、banane（香蕉）。",
                    vocabulary: "fruit - 水果"
                },
                {
                    type: "multiple",
                    question: "Beurre 是什麼食物？",
                    options: ["奶油", "牛奶", "起司", "麵包"],
                    answer: "奶油",
                    frenchText: "beurre",
                    explanation: "Beurre 是「奶油」，法國料理不可或缺的材料。",
                    vocabulary: "beurre - 奶油"
                },
                {
                    type: "sorting",
                    question: "【排序題】將下列單字排成正確的法文句子：「我想要一杯咖啡」",
                    words: ["café", "un", "veux", "Je"],
                    answer: "Je veux un café",
                    frenchText: "Je veux un café",
                    explanation: "Je veux 是「我想要」，un 是「一個/一杯」。",
                    vocabulary: "Je veux - 我想要"
                },
                {
                    type: "multiple",
                    question: "Thé 是什麼飲料？",
                    options: ["茶", "咖啡", "水", "果汁"],
                    answer: "茶",
                    frenchText: "thé",
                    explanation: "Thé 是「茶」，例如：thé vert（綠茶）、thé noir（紅茶）。",
                    vocabulary: "thé - 茶"
                },
                {
                    type: "multiple",
                    question: "Sucre 是什麼意思？",
                    options: ["糖", "鹽", "胡椒", "奶油"],
                    answer: "糖",
                    frenchText: "sucre",
                    explanation: "Sucre 是「糖」，加在咖啡或茶裡。",
                    vocabulary: "sucre - 糖"
                },
                {
                    type: "multiple",
                    question: "如何用法文說「鹽」？",
                    options: ["sel", "sucre", "poivre", "beurre"],
                    answer: "sel",
                    frenchText: "sel",
                    explanation: "Sel 是「鹽」，烹飪的基本調味料。",
                    vocabulary: "sel - 鹽"
                },
                {
                    type: "multiple",
                    question: "Bon appétit 是什麼意思？",
                    options: ["祝你好胃口", "好吃", "謝謝", "再見"],
                    answer: "祝你好胃口",
                    frenchText: "Bon appétit",
                    explanation: "Bon appétit 是用餐前的祝福語，類似英文的「Enjoy your meal」。",
                    vocabulary: "Bon appétit - 祝你好胃口"
                }
            ],
            diary: "今天學習了食物單字！Pain（麵包）、Eau（水）、Café（咖啡）、Fromage（起司）、Vin（葡萄酒）、Lait（牛奶）、Viande（肉）、Poisson（魚）、Légume（蔬菜）、Fruit（水果）。我已經可以點一頓法式大餐了！"
        },
        
        30: {
            title: "生日邀請函",
            story: "你的法國朋友 Sophie 生日快到了，你想用法文寫一封邀請簡訊給她...",
            questions: [
                {
                    type: "multiple",
                    question: "「生日快樂」法文怎麼說？",
                    options: ["Joyeux anniversaire", "Bon voyage", "Bonne année", "Bon appétit"],
                    answer: "Joyeux anniversaire",
                    frenchText: "Joyeux anniversaire",
                    explanation: "Joyeux anniversaire 是「生日快樂」，joyeux 表示快樂的。",
                    vocabulary: "Joyeux anniversaire - 生日快樂"
                },
                {
                    type: "writing",
                    question: "【DELF A1 寫作】請用法文寫一封簡短的生日邀請簡訊給朋友 Sophie（至少40字）。\n\n要包含：\n• 邀請她參加你的生日派對\n• 日期和時間\n• 地點\n• 簡單的結尾祝福",
                    minWords: 40,
                    frenchText: "Salut Sophie! C'est mon anniversaire samedi. Tu viens chez moi à 19h?",
                    sampleAnswer: "Salut Sophie! C'est mon anniversaire samedi 15 juin. Je fais une fête chez moi à 19h. Tu viens? Ce sera super! Bisous, Marie",
                    keywords: ["anniversaire", "samedi", "chez moi", "viens"],
                    explanation: "DELF A1 常考邀請函。記得包含：Salut（嗨）、C'est mon anniversaire（我生日）、Tu viens?（你來嗎？）、chez moi（在我家）。",
                    vocabulary: "chez moi - 在我家；Tu viens? - 你來嗎？"
                },
                {
                    type: "multiple",
                    question: "如何問「你有空嗎？」",
                    options: ["Tu es libre?", "Tu as faim?", "Tu es content?", "Tu as peur?"],
                    answer: "Tu es libre?",
                    frenchText: "Tu es libre?",
                    explanation: "Tu es libre? 是「你有空嗎？」，libre 表示自由的、有空的。",
                    vocabulary: "Tu es libre? - 你有空嗎？"
                },
                {
                    type: "sorting",
                    question: "【排序題】將下列字母排成正確的法文單字「星期六」",
                    words: ["s", "a", "m", "e", "d", "i"],
                    answer: "samedi",
                    frenchText: "samedi",
                    explanation: "Samedi 是「星期六」，法文的星期不需要大寫。",
                    vocabulary: "samedi - 星期六"
                },
                {
                    type: "multiple",
                    question: "簡訊結尾，如何說「親親」？",
                    options: ["Bisous", "Salut", "Merci", "Pardon"],
                    answer: "Bisous",
                    frenchText: "Bisous",
                    explanation: "Bisous 是「親親」，是法國人簡訊常用的親密結尾。",
                    vocabulary: "Bisous - 親親（複數）"
                }
            ],
            diary: "今天學會寫生日邀請函了！C'est mon anniversaire, tu viens? 這是 DELF A1 的常見題型，很實用！"
        },
        
        60: {
            title: "搬家通知",
            story: "你在巴黎找到新公寓了！需要用法文寫訊息通知朋友們你的新地址...",
            questions: [
                {
                    type: "multiple",
                    question: "「我搬家了」法文怎麼說？",
                    options: ["J'ai déménagé", "J'ai mangé", "J'ai voyagé", "J'ai dormi"],
                    answer: "J'ai déménagé",
                    frenchText: "J'ai déménagé",
                    explanation: "J'ai déménagé 是「我搬家了」，déménager 是搬家的動詞。",
                    vocabulary: "déménager - 搬家"
                },
                {
                    type: "writing",
                    question: "【DELF A2 寫作】請用法文寫一則搬家通知給朋友（至少50字）。\n\n要包含：\n• 告知你搬家了\n• 新地址\n• 邀請朋友來參觀\n• 提供聯絡方式",
                    minWords: 50,
                    frenchText: "Salut! J'ai déménagé. Ma nouvelle adresse est 25 rue de la Paix. Viens me voir!",
                    sampleAnswer: "Salut les amis! J'ai déménagé! Ma nouvelle adresse est 25 rue de la Paix, 75002 Paris. Venez visiter mon nouvel appartement samedi prochain! Mon numéro de téléphone: 06 12 34 56 78. À bientôt!",
                    keywords: ["déménagé", "nouvelle adresse", "venez", "appartement"],
                    explanation: "搬家通知要清楚寫出新地址和邀請。用 J'ai déménagé（我搬家了）、Ma nouvelle adresse（我的新地址）、Venez visiter（來參觀）。",
                    vocabulary: "nouvelle adresse - 新地址；venez visiter - 來參觀"
                },
                {
                    type: "multiple",
                    question: "「公寓」法文是？",
                    options: ["appartement", "maison", "hôtel", "restaurant"],
                    answer: "appartement",
                    frenchText: "appartement",
                    explanation: "Appartement 是「公寓」，maison 是「房子」。",
                    vocabulary: "appartement - 公寓"
                },
                {
                    type: "input",
                    question: "「來參觀」（命令式，複數）怎麼寫？",
                    answer: "Venez visiter",
                    frenchText: "Venez visiter",
                    hint: "Venir 的命令式 + visiter",
                    explanation: "Venez 是 venir（來）的命令式第二人稱複數，visiter 是參觀。",
                    vocabulary: "Venez - 來（命令式複數）"
                },
                {
                    type: "multiple",
                    question: "「下週六」法文是？",
                    options: ["samedi prochain", "samedi dernier", "ce samedi", "tous les samedis"],
                    answer: "samedi prochain",
                    frenchText: "samedi prochain",
                    explanation: "Samedi prochain 是「下週六」，prochain 表示下一個。",
                    vocabulary: "prochain - 下一個的"
                }
            ],
            diary: "今天學會寫搬家通知！J'ai déménagé, venez visiter mon nouvel appartement! 這種實用寫作對生活很有幫助。"
        },
        
        80: {
            title: "【DELF A2 真題】週末活動提案",
            story: "DELF A2 Production écrite 真題練習：你想組織一個週末活動，需要寫訊息給朋友們...",
            questions: [
                {
                    type: "multiple",
                    question: "「我提議」法文怎麼說？",
                    options: ["Je propose", "Je pense", "Je veux", "J'aime"],
                    answer: "Je propose",
                    frenchText: "Je propose",
                    explanation: "Je propose 是「我提議」，用於提出建議或計畫。",
                    vocabulary: "Je propose - 我提議"
                },
                {
                    type: "writing",
                    question: "【DELF A2 真題】寫一封訊息給朋友們，提議週末一起去野餐（至少60字）。\n\n必須包含：\n• 活動內容（去公園野餐）\n• 日期和時間\n• 集合地點\n• 建議大家帶什麼\n• 詢問誰可以參加",
                    minWords: 60,
                    frenchText: "Salut! Je propose d'aller pique-niquer au parc samedi à midi.",
                    sampleAnswer: "Salut tout le monde! Je propose d'aller pique-niquer au Parc des Buttes-Chaumont samedi prochain à midi. Rendez-vous à l'entrée principale à 12h. Apportez des sandwichs, des fruits et des boissons. Qui peut venir? Répondez-moi vite! Ça va être super! Bisous, Thomas",
                    keywords: ["propose", "pique-niquer", "samedi", "rendez-vous", "apportez", "qui peut venir"],
                    explanation: "DELF A2 常考組織活動。關鍵句型：Je propose de（我提議）、Rendez-vous à（約在）、Apportez（帶來）、Qui peut venir?（誰能來？）",
                    vocabulary: "pique-niquer - 野餐；Rendez-vous - 約會、集合"
                },
                {
                    type: "multiple",
                    question: "「野餐」法文名詞是？",
                    options: ["pique-nique", "dîner", "déjeuner", "goûter"],
                    answer: "pique-nique",
                    frenchText: "pique-nique",
                    explanation: "Pique-nique 是「野餐」（名詞），動詞是 pique-niquer。",
                    vocabulary: "pique-nique - 野餐"
                },
                {
                    type: "input",
                    question: "「集合點」或「約會」的法文是？",
                    answer: "rendez-vous",
                    frenchText: "rendez-vous",
                    hint: "連字號連接兩個字",
                    explanation: "Rendez-vous 表示約會、集合點，常用於約時間地點。",
                    vocabulary: "rendez-vous - 約會、集合"
                },
                {
                    type: "multiple",
                    question: "「帶來」（命令式複數）是？",
                    options: ["Apportez", "Venez", "Allez", "Mangez"],
                    answer: "Apportez",
                    frenchText: "Apportez",
                    explanation: "Apportez 是 apporter（帶來）的命令式，用於要求大家帶東西。",
                    vocabulary: "Apporter - 帶來"
                }
            ],
            diary: "今天練習了 DELF A2 真題！學會如何用法文組織活動：Je propose de + 動詞不定式。Rendez-vous、Apportez 都是關鍵詞！"
        }
    };

    // 如果有具體內容就返回，否則生成通用內容
    if (beginnerContent[day]) {
        return beginnerContent[day];
    }

    // 為第6-100天生成通用初級內容
    return generateBeginnerTemplate(day);
}

// 中級內容 (第101-200天)
function getIntermediateContent(day) {
    const intermediateTemplates = {
        101: {
            title: "日常對話",
            story: "你在巴黎的公園散步，遇到了一位想要練習中文的法國朋友，你們開始用法文聊天...",
            questions: [
                {
                    type: "multiple",
                    question: "如何問「你叫什麼名字？」",
                    options: ["Comment vous appelez-vous?", "Où habitez-vous?", "Quel âge avez-vous?", "Que faites-vous?"],
                    answer: "Comment vous appelez-vous?",
                    explanation: "Comment vous appelez-vous? 是正式的問法，朋友間可用 Comment tu t'appelles?",
                    vocabulary: "Comment vous appelez-vous? - 你叫什麼名字？"
                },
                {
                    type: "input",
                    question: "「我住在巴黎」法文怎麼說？",
                    answer: "J'habite à Paris",
                    hint: "提示：habiter（居住）+ à（在）",
                    explanation: "J'habite à Paris 表示「我住在巴黎」，habiter 是「居住」的動詞。",
                    vocabulary: "J'habite à - 我住在"
                },
                {
                    type: "multiple",
                    question: "Quel âge avez-vous? 是什麼意思？",
                    options: ["你幾歲？", "你來自哪裡？", "你做什麼工作？", "你好嗎？"],
                    answer: "你幾歲？",
                    explanation: "這是詢問年齡的標準說法，回答用 J'ai ... ans（我...歲）。",
                    vocabulary: "Quel âge avez-vous? - 你幾歲？"
                },
                {
                    type: "multiple",
                    question: "如何說「我喜歡音樂」？",
                    options: ["J'aime la musique", "Je déteste la musique", "J'ai la musique", "Je veux la musique"],
                    answer: "J'aime la musique",
                    explanation: "J'aime 是「我喜歡」，是表達喜好的基本動詞。",
                    vocabulary: "J'aime - 我喜歡"
                },
                {
                    type: "multiple",
                    question: "Parlez-vous anglais? 什麼意思？",
                    options: ["你會說英文嗎？", "你喜歡英文嗎？", "你學英文嗎？", "你是英國人嗎？"],
                    answer: "你會說英文嗎？",
                    explanation: "Parlez-vous...? 是詢問「你會說...語言嗎？」的句型。",
                    vocabulary: "Parlez-vous...? - 你會說...嗎？"
                }
            ],
            diary: "進入中級階段了！今天學會了更複雜的對話，可以詢問他人的資訊並表達自己的喜好。法文對話越來越流暢了！"
        },
        
        130: {
            title: "【DELF B1 真題】結婚邀請函",
            story: "你的好友 Claire 和 Thomas 要結婚了！他們請你幫忙用法文寫邀請函給賓客...",
            questions: [
                {
                    type: "multiple",
                    question: "「結婚」法文動詞是？",
                    options: ["se marier", "marier", "marié", "mariage"],
                    answer: "se marier",
                    frenchText: "se marier",
                    explanation: "Se marier 是「結婚」的動詞，是反身動詞。Mariage 是名詞。",
                    vocabulary: "se marier - 結婚"
                },
                {
                    type: "writing",
                    question: "【DELF B1 真題】請撰寫一封正式的結婚邀請函（至少80字）。\n\n必須包含：\n• 新郎新娘的名字\n• 婚禮日期、時間、地點\n• 邀請語氣正式且溫馨\n• 回覆方式（RSVP）\n• 適當的祝福語",
                    minWords: 80,
                    frenchText: "Nous avons le plaisir de vous inviter à notre mariage.",
                    sampleAnswer: "Claire Dubois et Thomas Martin ont l'honneur de vous inviter à leur mariage qui sera célébré le samedi 20 juillet 2024 à 15h en l'église Saint-Pierre, suivie d'une réception au Château de Versailles. Nous serions ravis de partager ce jour exceptionnel avec vous. Merci de confirmer votre présence avant le 30 juin. Répondez à claire.thomas2024@email.fr. Dans l'attente de vous retrouver, nous vous adressons nos sentiments les meilleurs.",
                    keywords: ["honneur", "inviter", "mariage", "célébré", "réception", "confirmer", "présence"],
                    explanation: "DELF B1 寫作要求正式且完整。關鍵句型：Avoir l'honneur de（很榮幸）、sera célébré（將舉行）、serions ravis de（很高興）、confirmer votre présence（確認出席）。",
                    vocabulary: "avoir l'honneur de - 很榮幸；sera célébré - 將舉行"
                },
                {
                    type: "multiple",
                    question: "正式邀請函中，「請回覆」的縮寫是？",
                    options: ["RSVP", "SVP", "ASAP", "PS"],
                    answer: "RSVP",
                    frenchText: "RSVP",
                    explanation: "RSVP = Répondez s'il vous plaît（請回覆），是邀請函的標準用語。",
                    vocabulary: "RSVP - 請回覆（Répondez s'il vous plaît）"
                },
                {
                    type: "input",
                    question: "「在...教堂」的法文介系詞是？",
                    answer: "en l'église",
                    frenchText: "en l'église",
                    hint: "en + l'église",
                    explanation: "En l'église 是「在教堂」的正式說法，用於婚禮等場合。",
                    vocabulary: "en l'église - 在教堂"
                },
                {
                    type: "multiple",
                    question: "「隨後是晚宴」怎麼說？",
                    options: ["suivie d'une réception", "après manger", "puis dîner", "et après"],
                    answer: "suivie d'une réception",
                    frenchText: "suivie d'une réception",
                    explanation: "Suivie de（隨後是）+ réception（招待會）是正式的表達方式。",
                    vocabulary: "suivie de - 隨後是"
                }
            ],
            diary: "今天學會寫正式的結婚邀請函了！Avoir l'honneur de、sera célébré、RSVP 這些正式用語很重要。這是 DELF B1 的經典題型！"
        },
        
        160: {
            title: "【DELF B1 真題】抱怨信",
            story: "你在網路上買了一件衣服，但收到的商品有問題。你需要寫一封抱怨信給商家...",
            questions: [
                {
                    type: "multiple",
                    question: "「抱怨」的法文動詞是？",
                    options: ["se plaindre", "pleurer", "parler", "payer"],
                    answer: "se plaindre",
                    frenchText: "se plaindre",
                    explanation: "Se plaindre 是「抱怨」的動詞，名詞是 une plainte。",
                    vocabulary: "se plaindre - 抱怨"
                },
                {
                    type: "writing",
                    question: "【DELF B1 真題】寫一封抱怨信給網路商店（至少90字）。\n\n必須包含：\n• 說明你購買了什麼（訂單編號）\n• 描述問題（尺寸錯誤/破損/顏色不符）\n• 表達不滿\n• 要求解決方案（退款/換貨）\n• 正式的開頭和結尾",
                    minWords: 90,
                    frenchText: "Je vous écris pour vous signaler un problème concernant ma commande.",
                    sampleAnswer: "Madame, Monsieur,\n\nJe vous écris pour vous signaler un problème grave concernant ma commande n°12345 passée le 5 décembre. J'ai commandé une robe rouge en taille M, mais j'ai reçu une robe bleue en taille L. De plus, le tissu est déchiré. Je suis très déçue de cette situation car j'avais besoin de cette robe pour un événement important. Je vous demande donc soit un remboursement complet, soit l'envoi d'un article conforme dans les plus brefs délais. J'attends votre réponse rapide.\n\nCordialement,\nMarie Dupont",
                    keywords: ["vous écris", "signaler", "problème", "commande", "reçu", "déçue", "demande", "remboursement"],
                    explanation: "抱怨信結構：開頭（Madame, Monsieur）→ 說明問題（Je vous écris pour signaler）→ 描述情況 → 表達不滿（Je suis déçu(e)）→ 要求解決（Je demande）→ 結尾（Cordialement）。",
                    vocabulary: "signaler un problème - 指出問題；je suis déçu(e) - 我很失望"
                },
                {
                    type: "multiple",
                    question: "正式信件的開頭稱呼是？",
                    options: ["Madame, Monsieur", "Salut", "Bonjour", "Cher ami"],
                    answer: "Madame, Monsieur",
                    frenchText: "Madame, Monsieur",
                    explanation: "Madame, Monsieur 是寫給不認識的人或公司的正式開頭。",
                    vocabulary: "Madame, Monsieur - 女士、先生（正式）"
                },
                {
                    type: "input",
                    question: "「退款」的法文是？",
                    answer: "remboursement",
                    frenchText: "remboursement",
                    hint: "rembours-",
                    explanation: "Un remboursement 是「退款」，動詞是 rembourser。",
                    vocabulary: "remboursement - 退款"
                },
                {
                    type: "multiple",
                    question: "如何禮貌地說「我要求...」？",
                    options: ["Je vous demande", "Je veux", "Donnez-moi", "Il faut"],
                    answer: "Je vous demande",
                    frenchText: "Je vous demande",
                    explanation: "Je vous demande 是禮貌的要求方式，比 Je veux 更正式。",
                    vocabulary: "Je vous demande - 我請求您"
                }
            ],
            diary: "今天練習了 DELF B1 的抱怨信寫作！學會了正式信件的結構：Madame/Monsieur → signaler un problème → exprimer sa déception → demander une solution → Cordialement。"
        },
        
        180: {
            title: "【DELF B2 真題】論述文：網路對社會的影響",
            story: "DELF B2 Production écrite：你需要寫一篇論述文，討論網路對現代社會的正面和負面影響...",
            questions: [
                {
                    type: "multiple",
                    question: "「然而」的正式法文連接詞是？",
                    options: ["Cependant", "Mais", "Et", "Ou"],
                    answer: "Cependant",
                    frenchText: "Cependant",
                    explanation: "Cependant（然而）比 mais 更正式，適合論述文使用。",
                    vocabulary: "Cependant - 然而、不過"
                },
                {
                    type: "writing",
                    question: "【DELF B2 真題】請撰寫一篇論述文（至少120字），討論網路對社會的影響。\n\n結構要求：\n• 引言：提出主題\n• 正面影響（2-3點，附例子）\n• 負面影響（2-3點，附例子）\n• 結論：個人觀點\n• 使用連接詞（Cependant, En effet, Par ailleurs, Finalement）",
                    minWords: 120,
                    frenchText: "Internet a profondément transformé notre société.",
                    sampleAnswer: "Internet a profondément transformé notre société. D'une part, il présente des avantages indéniables. En effet, il facilite l'accès à l'information et permet de communiquer instantanément avec le monde entier. Par ailleurs, il offre de nouvelles opportunités professionnelles grâce au télétravail. Cependant, Internet comporte également des risques importants. Tout d'abord, il peut créer une dépendance, notamment chez les jeunes. De plus, la diffusion de fausses informations pose un problème majeur pour la démocratie. Finalement, bien qu'Internet soit un outil formidable, il est essentiel de l'utiliser avec discernement et de rester vigilant face à ses dangers.",
                    keywords: ["d'une part", "en effet", "par ailleurs", "cependant", "tout d'abord", "de plus", "finalement", "bien que"],
                    explanation: "DELF B2 論述文關鍵：結構清晰（引言-論點-結論）+ 連接詞豐富（D'une part/D'autre part, En effet, Cependant, Finalement）+ 舉例支持論點。",
                    vocabulary: "D'une part... D'autre part - 一方面...另一方面；En effet - 事實上"
                },
                {
                    type: "multiple",
                    question: "「首先」的正式表達是？",
                    options: ["Tout d'abord", "D'abord", "Après", "Enfin"],
                    answer: "Tout d'abord",
                    frenchText: "Tout d'abord",
                    explanation: "Tout d'abord 是「首先」的正式說法，用於論述的第一點。",
                    vocabulary: "Tout d'abord - 首先"
                },
                {
                    type: "input",
                    question: "「此外、另外」的正式連接詞？",
                    answer: "Par ailleurs",
                    frenchText: "Par ailleurs",
                    hint: "Par ail...",
                    explanation: "Par ailleurs 表示「此外、另外」，是論述文常用的連接詞。",
                    vocabulary: "Par ailleurs - 此外、另外"
                },
                {
                    type: "multiple",
                    question: "如何表達「雖然...但是...」（論述文）？",
                    options: ["Bien que... mais", "Si... alors", "Quand... donc", "Parce que... et"],
                    answer: "Bien que... mais",
                    frenchText: "Bien que",
                    explanation: "Bien que（雖然）+ 虛擬語氣，但經常搭配 mais 來強調對比。",
                    vocabulary: "Bien que - 雖然（接虛擬語氣）"
                }
            ],
            diary: "今天挑戰了 DELF B2 的論述文寫作！學會了高級連接詞：D'une part/D'autre part, En effet, Cependant, Par ailleurs, Finalement。論述結構很重要：引言-正面論點-負面論點-結論。"
        }
    };

    if (intermediateTemplates[day]) {
        return intermediateTemplates[day];
    }

    return generateIntermediateTemplate(day);
}

// 高級內容 (第201-365天)
// C1-C2 級別：複雜語法、文學表達、專業用語
function getAdvancedContent(day) {
    const advancedTemplates = {
        201: {
            title: "虛擬語氣的藝術",
            story: "你受邀參加一個法國文學沙龍。主持人說：'Il faut que nous parlions de la beauté de la langue française.' 你需要掌握虛擬語氣來參與這場高層次的討論...",
            questions: [
                {
                    type: "multiple",
                    question: "虛擬語氣在法文中如何使用？",
                    options: ["表達願望、懷疑或可能性", "只用於過去式", "表達命令", "表達事實"],
                    answer: "表達願望、懷疑或可能性",
                    explanation: "法文的虛擬語氣（subjonctif）用於表達主觀態度、願望、懷疑等。",
                    vocabulary: "Subjonctif - 虛擬語氣"
                },
                {
                    type: "input",
                    question: "「雖然...但是...」的法文句型是？",
                    answer: "Bien que",
                    hint: "提示：後接虛擬語氣",
                    explanation: "Bien que（雖然）後面要用虛擬語氣，是高級寫作常用句型。",
                    vocabulary: "Bien que - 雖然（接虛擬語氣）"
                },
                {
                    type: "multiple",
                    question: "Plus-que-parfait（愈過去時）用於什麼情況？",
                    options: ["描述過去的過去", "描述未來", "描述現在", "描述習慣"],
                    answer: "描述過去的過去",
                    explanation: "愈過去時用於表示「過去某個時間點之前」發生的動作。",
                    vocabulary: "Plus-que-parfait - 愈過去時"
                },
                {
                    type: "multiple",
                    question: "如何用法文說「由於...所以...」？",
                    options: ["Puisque... donc...", "Si... alors...", "Quand... puis...", "Où... là..."],
                    answer: "Puisque... donc...",
                    explanation: "Puisque 表示「由於」（已知的原因），donc 表示「所以」。",
                    vocabulary: "Puisque... donc... - 由於...所以..."
                },
                {
                    type: "multiple",
                    question: "條件式過去時的主要用途是？",
                    options: ["表達未實現的假設", "表達事實", "表達命令", "表達正在進行"],
                    answer: "表達未實現的假設",
                    explanation: "條件式過去時（conditionnel passé）用於表達「本來會...但沒有」的情況。",
                    vocabulary: "Conditionnel passé - 條件式過去時"
                }
            ],
            diary: "進入高級階段！今天深入學習了法文的複雜語法結構，包括虛擬語氣和各種時態。這些是真正掌握法文的關鍵！"
        },
        
        210: {
            title: "商務法文",
            story: "你在巴黎的一家跨國公司面試。面試官問：'Pourriez-vous nous expliquer votre expérience professionnelle?' 這需要使用正式的商務用語...",
            questions: [
                {
                    type: "multiple",
                    question: "正式商務場合如何說「我想申請這個職位」？",
                    options: ["Je voudrais postuler à ce poste", "Je veux ce travail", "Donne-moi ce job", "J'aime ce poste"],
                    answer: "Je voudrais postuler à ce poste",
                    frenchText: "Je voudrais postuler à ce poste",
                    explanation: "Voudrais（條件式）比 veux 更禮貌，postuler 是「申請」的專業用語。",
                    vocabulary: "postuler - 申請（工作）"
                },
                {
                    type: "input",
                    question: "「根據我的經驗」法文怎麼說？",
                    answer: "Selon mon expérience",
                    frenchText: "Selon mon expérience",
                    hint: "Selon + 名詞",
                    explanation: "Selon 表示「根據」，是商務溝通的常用詞。",
                    vocabulary: "Selon - 根據"
                },
                {
                    type: "multiple",
                    question: "如何禮貌地表達不同意見？",
                    options: ["Je ne suis pas tout à fait d'accord", "Tu as tort", "C'est faux", "Non"],
                    answer: "Je ne suis pas tout à fait d'accord",
                    frenchText: "Je ne suis pas tout à fait d'accord",
                    explanation: "'不完全同意'比直接說'錯了'更委婉專業。",
                    vocabulary: "pas tout à fait - 不完全"
                },
                {
                    type: "multiple",
                    question: "「我很榮幸...」的正式表達是？",
                    options: ["J'ai l'honneur de", "Je suis content de", "C'est bien de", "J'aime"],
                    answer: "J'ai l'honneur de",
                    frenchText: "J'ai l'honneur de",
                    explanation: "Avoir l'honneur de 是極正式的表達，用於重要場合。",
                    vocabulary: "avoir l'honneur de - 很榮幸"
                },
                {
                    type: "input",
                    question: "「達成協議」法文是？",
                    answer: "parvenir à un accord",
                    frenchText: "parvenir à un accord",
                    hint: "parvenir à",
                    explanation: "Parvenir 表示「達到、實現」，常用於商務談判。",
                    vocabulary: "parvenir à - 達成、實現"
                }
            ],
            diary: "今天學習商務法文！掌握了專業場合的正式用語和禮貌表達，這對職場非常重要。"
        },
        
        250: {
            title: "法國文學賞析",
            story: "你在索邦大學的文學課上討論雨果的《悲慘世界》。教授引用：'La vie, le malheur, l'isolement, l'abandon, la pauvreté, sont des champs de bataille...' 你需要理解文學性的法文...",
            questions: [
                {
                    type: "multiple",
                    question: "文學中「隱喻」的法文是？",
                    options: ["métaphore", "comparaison", "allégorie", "personnification"],
                    answer: "métaphore",
                    frenchText: "métaphore",
                    explanation: "Métaphore（隱喻）是文學修辭的核心技巧。",
                    vocabulary: "métaphore - 隱喻"
                },
                {
                    type: "input",
                    question: "「象徵主義」法文怎麼拼？",
                    answer: "symbolisme",
                    frenchText: "symbolisme",
                    hint: "19世紀文學流派",
                    explanation: "Symbolisme 是19世紀末法國重要的文學運動。",
                    vocabulary: "symbolisme - 象徵主義"
                },
                {
                    type: "multiple",
                    question: "如何用法文說「這部作品反映了社會現實」？",
                    options: ["Cette œuvre reflète la réalité sociale", "Ce livre parle de la société", "C'est un livre social", "Il y a la société"],
                    answer: "Cette œuvre reflète la réalité sociale",
                    frenchText: "Cette œuvre reflète la réalité sociale",
                    explanation: "Refléter（反映）和 œuvre（作品）是文學評論的專業用語。",
                    vocabulary: "refléter - 反映"
                },
                {
                    type: "multiple",
                    question: "「敘事者」的法文是？",
                    options: ["narrateur", "auteur", "écrivain", "conteur"],
                    answer: "narrateur",
                    frenchText: "narrateur",
                    explanation: "Narrateur 是「敘事者」，auteur 是「作者」，要區分清楚。",
                    vocabulary: "narrateur - 敘事者"
                },
                {
                    type: "input",
                    question: "「第一人稱敘事」法文是？",
                    answer: "narration à la première personne",
                    frenchText: "narration à la première personne",
                    hint: "à la première personne",
                    explanation: "Narration（敘事）+ à la première personne（第一人稱）。",
                    vocabulary: "narration - 敘事"
                }
            ],
            diary: "沉浸在法國文學的世界中！學習了文學評論的專業術語，能夠更深入理解法文經典作品。"
        },
        
        300: {
            title: "哲學對話",
            story: "在巴黎的咖啡館，你與一位哲學教授討論存在主義。他說：'L'existence précède l'essence.' 這是沙特的名言，你需要用哲學法文來交流...",
            questions: [
                {
                    type: "multiple",
                    question: "「存在先於本質」這個哲學命題的意義是？",
                    options: ["人先存在，再定義自己", "本質決定存在", "存在即合理", "本質是永恆的"],
                    answer: "人先存在，再定義自己",
                    explanation: "這是存在主義的核心思想：人沒有預定的本質，通過選擇創造自己。",
                    vocabulary: "existence - 存在；essence - 本質"
                },
                {
                    type: "input",
                    question: "「荒謬」（加繆的哲學概念）法文是？",
                    answer: "absurde",
                    frenchText: "absurde",
                    hint: "加繆《異鄉人》的主題",
                    explanation: "L'absurde 是加繆哲學的核心概念，描述人生的無意義狀態。",
                    vocabulary: "absurde - 荒謬的"
                },
                {
                    type: "multiple",
                    question: "如何表達「我思故我在」？",
                    options: ["Je pense, donc je suis", "Je pense, alors j'existe", "Penser c'est être", "Ma pensée est mon être"],
                    answer: "Je pense, donc je suis",
                    frenchText: "Je pense, donc je suis",
                    explanation: "笛卡爾的名言，法文哲學中最著名的句子之一。",
                    vocabulary: "donc - 因此、所以"
                },
                {
                    type: "multiple",
                    question: "「自由意志」的法文是？",
                    options: ["libre arbitre", "liberté simple", "volonté libre", "choix personnel"],
                    answer: "libre arbitre",
                    frenchText: "libre arbitre",
                    explanation: "Libre arbitre 是哲學術語，指人的自主選擇能力。",
                    vocabulary: "libre arbitre - 自由意志"
                },
                {
                    type: "input",
                    question: "「現象學」的法文是？",
                    answer: "phénoménologie",
                    frenchText: "phénoménologie",
                    hint: "胡塞爾創立的哲學",
                    explanation: "Phénoménologie 研究意識經驗的本質結構。",
                    vocabulary: "phénoménologie - 現象學"
                }
            ],
            diary: "今天探索了法文哲學的深度！討論了存在主義、荒謬主義等複雜概念，法文思維又提升了一個層次。"
        },
        
        365: {
            title: "完美法文之旅",
            story: "365天過去了，你已經從完全不會法文，進化成可以在巴黎自由生活、工作、思考的人。今天是最後的綜合測試，檢驗你這一年的學習成果...",
            questions: [
                {
                    type: "multiple",
                    question: "請選出正確的虛擬語氣句子：",
                    options: [
                        "Il faut que tu viennes demain",
                        "Il faut que tu viens demain",
                        "Il faut que tu venir demain",
                        "Il faut tu viennes demain"
                    ],
                    answer: "Il faut que tu viennes demain",
                    frenchText: "Il faut que tu viennes demain",
                    explanation: "Il faut que 後接虛擬語氣，venir 的虛擬式第二人稱是 viennes。",
                    vocabulary: "il faut que + subjonctif - 必須（虛擬語氣）"
                },
                {
                    type: "input",
                    question: "用法文寫出：如果我當時知道，我就不會來了",
                    answer: "Si j'avais su, je ne serais pas venu",
                    frenchText: "Si j'avais su, je ne serais pas venu",
                    hint: "Si + 愈過去時，條件式過去時",
                    explanation: "表達過去未實現的假設：Si + plus-que-parfait, conditionnel passé。",
                    vocabulary: "Si + 愈過去時，條件式過去時 - 過去假設句"
                },
                {
                    type: "multiple",
                    question: "選出最地道的法式表達：",
                    options: [
                        "C'est le bouquet! (太過分了！)",
                        "C'est trop!",
                        "C'est exagéré!",
                        "C'est beaucoup!"
                    ],
                    answer: "C'est le bouquet! (太過分了！)",
                    frenchText: "C'est le bouquet",
                    explanation: "'C'est le bouquet!' 是道地的法式口語，表達「真是太過分了！」",
                    vocabulary: "C'est le bouquet! - 太過分了！（慣用語）"
                },
                {
                    type: "multiple",
                    question: "以下哪個關係代名詞用法正確？",
                    options: [
                        "La fille dont je t'ai parlé",
                        "La fille que je t'ai parlé",
                        "La fille qui je t'ai parlé",
                        "La fille où je t'ai parlé"
                    ],
                    answer: "La fille dont je t'ai parlé",
                    frenchText: "La fille dont je t'ai parlé",
                    explanation: "Parler de quelqu'un → dont；dont 取代 de + 名詞。",
                    vocabulary: "dont - 關係代名詞（取代 de + 名詞）"
                },
                {
                    type: "input",
                    question: "用一個詞總結這365天的學習",
                    answer: "incroyable",
                    frenchText: "incroyable",
                    hint: "難以置信的...",
                    explanation: "Incroyable（難以置信）！你完成了365天的法文學習之旅，這是真正的成就！",
                    vocabulary: "incroyable - 難以置信的、了不起的"
                }
            ],
            diary: "🎉 365天完成了！從 Bonjour 到虛擬語氣，從簡單對話到哲學討論，我已經可以用法文自由表達思想。這不僅是語言的學習，更是思維方式的轉變。Merci pour ce voyage extraordinaire! 感謝這段非凡的旅程！"
        }
    };

    if (advancedTemplates[day]) {
        return advancedTemplates[day];
    }

    return generateAdvancedTemplate(day);
}

// 生成初級模板
function generateBeginnerTemplate(day) {
    const topics = [
        { title: "家庭成員", vocab: ["père", "mère", "frère", "sœur", "famille"] },
        { title: "動物世界", vocab: ["chat", "chien", "oiseau", "poisson", "lapin"] },
        { title: "身體部位", vocab: ["tête", "main", "pied", "yeux", "bouche"] },
        { title: "天氣", vocab: ["soleil", "pluie", "vent", "neige", "nuage"] },
        { title: "交通工具", vocab: ["voiture", "train", "avion", "vélo", "bus"] }
    ];

    const topic = topics[day % topics.length];
    
    return {
        title: topic.title,
        story: `今天你將學習關於${topic.title}的法文單字。讓我們開始這個有趣的學習旅程！`,
        questions: generateSimpleQuestions(topic.vocab),
        diary: `第${day}天的學習聚焦在${topic.title}。透過練習，我逐漸建立起法文的詞彙基礎。`
    };
}

// 生成中級模板
function generateIntermediateTemplate(day) {
    return {
        title: `中級挑戰 - 第${day}天`,
        story: "繼續深入學習法文的語法和複雜句型...",
        questions: [
            {
                type: "multiple",
                question: "選擇正確的動詞變位：Être (是)",
                options: ["je suis", "je es", "je être", "je sont"],
                answer: "je suis",
                frenchText: "je suis",
                explanation: "Être（是）動詞的第一人稱單數是 je suis。",
                vocabulary: "être - 是（動詞）"
            },
            {
                type: "multiple",
                question: "Avoir (有) 的第一人稱單數是？",
                options: ["j'ai", "je suis", "je avoir", "j'avoir"],
                answer: "j'ai",
                frenchText: "j'ai",
                explanation: "J'ai 是 avoir 的第一人稱變位。",
                vocabulary: "avoir - 有"
            },
            {
                type: "sorting",
                question: "【排序題】排列成否定句：「我不說法語」",
                words: ["ne", "parle", "Je", "pas"],
                answer: "Je ne parle pas",
                frenchText: "Je ne parle pas",
                explanation: "法文否定句用 ne...pas 包圍動詞。",
                vocabulary: "ne...pas - 不（否定）"
            },
            {
                type: "multiple",
                question: "如何說「我正在學法文」？",
                options: ["J'apprends le français", "Je apprendre français", "J'ai apprendre", "Je suis apprendre"],
                answer: "J'apprends le français",
                frenchText: "J'apprends le français",
                explanation: "Apprendre 的第一人稱現在式是 j'apprends。",
                vocabulary: "apprendre - 學習"
            },
            {
                type: "multiple",
                question: "Aller (去) 的第一人稱單數是？",
                options: ["je vais", "je alle", "j'aller", "je suis"],
                answer: "je vais",
                frenchText: "je vais",
                explanation: "Je vais 是 aller 的第一人稱變位。",
                vocabulary: "aller - 去"
            },
            {
                type: "multiple",
                question: "Faire (做) 的第一人稱單數是？",
                options: ["je fais", "je faire", "je fes", "j'ai faire"],
                answer: "je fais",
                frenchText: "je fais",
                explanation: "Je fais 是 faire 的第一人稱變位。",
                vocabulary: "faire - 做"
            },
            {
                type: "sorting",
                question: "【排序題】排列成疑問句：「你去哪裡？」",
                words: ["vas", "tu", "Où"],
                answer: "Où vas tu",
                frenchText: "Où vas-tu",
                explanation: "疑問詞 + 動詞 + 主語，注意加連字號。",
                vocabulary: "où - 哪裡"
            },
            {
                type: "multiple",
                question: "Vouloir (想要) 的第一人稱單數是？",
                options: ["je veux", "je vouloir", "je voule", "j'ai vouloir"],
                answer: "je veux",
                frenchText: "je veux",
                explanation: "Je veux 是 vouloir 的第一人稱變位。",
                vocabulary: "vouloir - 想要"
            },
            {
                type: "multiple",
                question: "Pouvoir (能夠) 的第一人稱單數是？",
                options: ["je peux", "je pouvoir", "je peut", "j'ai pouvoir"],
                answer: "je peux",
                frenchText: "je peux",
                explanation: "Je peux 是 pouvoir 的第一人稱變位。",
                vocabulary: "pouvoir - 能夠"
            },
            {
                type: "multiple",
                question: "Devoir (必須) 的第一人稱單數是？",
                options: ["je dois", "je devoir", "je doit", "j'ai devoir"],
                answer: "je dois",
                frenchText: "je dois",
                explanation: "Je dois 是 devoir 的第一人稱變位。",
                vocabulary: "devoir - 必須"
            },
            {
                type: "multiple",
                question: "如何說「我有一本書」？",
                options: ["J'ai un livre", "Je suis un livre", "J'avoir un livre", "Je livre"],
                answer: "J'ai un livre",
                frenchText: "J'ai un livre",
                explanation: "J'ai (avoir) 表示擁有。",
                vocabulary: "un livre - 一本書"
            },
            {
                type: "sorting",
                question: "【排序題】排列成：「我去學校」",
                words: ["à", "vais", "l'école", "Je"],
                answer: "Je vais à l'école",
                frenchText: "Je vais à l'école",
                explanation: "Aller à 表示「去」某地。",
                vocabulary: "l'école - 學校"
            },
            {
                type: "multiple",
                question: "如何說「我喜歡音樂」？",
                options: ["J'aime la musique", "Je suis musique", "J'ai musique", "Je musique"],
                answer: "J'aime la musique",
                frenchText: "J'aime la musique",
                explanation: "Aimer 表示喜歡。",
                vocabulary: "aimer - 喜歡"
            },
            {
                type: "multiple",
                question: "Parler (說話) 的第一人稱單數是？",
                options: ["je parle", "je parler", "j'ai parler", "je suis parler"],
                answer: "je parle",
                frenchText: "je parle",
                explanation: "Je parle 是 parler 的第一人稱變位。",
                vocabulary: "parler - 說話"
            },
            {
                type: "multiple",
                question: "如何說「我住在巴黎」？",
                options: ["J'habite à Paris", "Je suis à Paris", "J'ai Paris", "Je Paris"],
                answer: "J'habite à Paris",
                frenchText: "J'habite à Paris",
                explanation: "Habiter 表示居住。",
                vocabulary: "habiter - 居住"
            }
        ],
        diary: `第${day}天，中級課程讓我更深入理解法文的語法結構。`
    };
}

// 生成高級模板（第202-364天的通用內容）
function generateAdvancedTemplate(day) {
    // 根據不同天數範圍生成不同主題
    const themes = [
        { range: [201, 220], topic: "虛擬語氣與條件句", level: "C1" },
        { range: [221, 240], topic: "商務與職場法文", level: "C1" },
        { range: [241, 260], topic: "文學與藝術評論", level: "C1-C2" },
        { range: [261, 280], topic: "學術寫作與論述", level: "C2" },
        { range: [281, 300], topic: "哲學與抽象思維", level: "C2" },
        { range: [301, 320], topic: "政治與社會議題", level: "C2" },
        { range: [321, 340], topic: "科技與創新", level: "C2" },
        { range: [341, 364], topic: "文化深度探索", level: "C2" }
    ];
    
    const currentTheme = themes.find(t => day >= t.range[0] && day <= t.range[1]) || themes[0];
    
    return {
        title: `${currentTheme.topic} - 第${day}天`,
        story: `今天進入${currentTheme.topic}的學習。這是 ${currentTheme.level} 級別的內容，需要深入理解和精確表達...`,
        questions: [
            {
                type: "multiple",
                question: "關係代名詞 qui 的用法？",
                options: ["作為主語", "作為直接賓語", "作為間接賓語", "表示地點"],
                answer: "作為主語",
                frenchText: "qui",
                explanation: "Qui 在從句中作為主語。",
                vocabulary: "qui - 關係代名詞（主語）"
            },
            {
                type: "multiple",
                question: "關係代名詞 que 的用法？",
                options: ["作為直接賓語", "作為主語", "取代 de", "表示地點"],
                answer: "作為直接賓語",
                frenchText: "que",
                explanation: "Que 在從句中作為直接賓語。",
                vocabulary: "que - 關係代名詞（賓語）"
            },
            {
                type: "multiple",
                question: "關係代名詞 dont 的用法？",
                options: ["取代 de + 名詞", "作為主語", "作為直接賓語", "表示時間"],
                answer: "取代 de + 名詞",
                frenchText: "dont",
                explanation: "Dont 取代 de + 名詞，如 parler de。",
                vocabulary: "dont - 關係代名詞（de）"
            },
            {
                type: "multiple",
                question: "關係代名詞 où 的用法？",
                options: ["表示地點或時間", "作為主語", "取代 de", "作為賓語"],
                answer: "表示地點或時間",
                frenchText: "où",
                explanation: "Où 表示地點或時間。",
                vocabulary: "où - 關係代名詞（地點/時間）"
            },
            {
                type: "sorting",
                question: "【排序題】排列被動語態：「他被愛」",
                words: ["est", "aimé", "Il"],
                answer: "Il est aimé",
                frenchText: "Il est aimé",
                explanation: "被動語態：être + 過去分詞。",
                vocabulary: "Voix passive - 被動語態"
            },
            {
                type: "multiple",
                question: "虛擬語氣的觸發詞？",
                options: ["il faut que", "je pense que", "je sais que", "il est clair que"],
                answer: "il faut que",
                frenchText: "il faut que",
                explanation: "Il faut que 後面必須使用虛擬語氣。",
                vocabulary: "Il faut que - 必須（接虛擬語氣）"
            },
            {
                type: "multiple",
                question: "哪個不是虛擬語氣觸發詞？",
                options: ["je sais que", "bien que", "pour que", "avant que"],
                answer: "je sais que",
                frenchText: "je sais que",
                explanation: "Je sais que 後面用直陳式，不用虛擬語氣。",
                vocabulary: "je sais que - 我知道（直陳式）"
            },
            {
                type: "multiple",
                question: "「然而」的正式連接詞？",
                options: ["cependant", "mais", "et", "ou"],
                answer: "cependant",
                frenchText: "cependant",
                explanation: "Cependant 比 mais 更正式。",
                vocabulary: "cependant - 然而"
            },
            {
                type: "multiple",
                question: "「儘管如此」的高級詞彙？",
                options: ["néanmoins", "mais", "et", "donc"],
                answer: "néanmoins",
                frenchText: "néanmoins",
                explanation: "Néanmoins 是書面語中的高級表達。",
                vocabulary: "néanmoins - 儘管如此"
            },
            {
                type: "multiple",
                question: "「依我之見」的正式表達？",
                options: ["À mon sens", "Je pense", "Peut-être", "Oui"],
                answer: "À mon sens",
                frenchText: "À mon sens",
                explanation: "À mon sens 是高級正式的觀點表達。",
                vocabulary: "à mon sens - 依我之見"
            },
            {
                type: "multiple",
                question: "「事實上」的法文？",
                options: ["En effet", "Mais", "Et", "Ou"],
                answer: "En effet",
                frenchText: "En effet",
                explanation: "En effet 表示「事實上」。",
                vocabulary: "en effet - 事實上"
            },
            {
                type: "multiple",
                question: "「此外」的正式連接詞？",
                options: ["Par ailleurs", "Et", "Mais", "Donc"],
                answer: "Par ailleurs",
                frenchText: "Par ailleurs",
                explanation: "Par ailleurs 表示「此外、另外」。",
                vocabulary: "par ailleurs - 此外"
            },
            {
                type: "multiple",
                question: "「首先」的正式說法？",
                options: ["Tout d'abord", "D'abord", "Après", "Enfin"],
                answer: "Tout d'abord",
                frenchText: "Tout d'abord",
                explanation: "Tout d'abord 是「首先」的正式表達。",
                vocabulary: "tout d'abord - 首先"
            },
            {
                type: "multiple",
                question: "「最後」的正式連接詞？",
                options: ["Finalement", "Enfin", "Après", "Puis"],
                answer: "Finalement",
                frenchText: "Finalement",
                explanation: "Finalement 表示「最後、終於」。",
                vocabulary: "finalement - 最後"
            },
            {
                type: "sorting",
                question: "【排序題】排列虛擬語氣句：「必須你來」",
                words: ["que", "tu", "Il faut", "viennes"],
                answer: "Il faut que tu viennes",
                frenchText: "Il faut que tu viennes",
                explanation: "Il faut que + 虛擬語氣。",
                vocabulary: "Il faut que - 必須"
            }
        ],
        diary: `第${day}天，${currentTheme.topic}的學習讓我的法文達到 ${currentTheme.level} 水準。距離母語者又近了一步！`
    };
}

// 生成簡單問題
function generateSimpleQuestions(vocab) {
    const questions = [];
    
    // 對每個單字生成多種題型
    vocab.forEach((word, index) => {
        // 題型1: 認識單字
        questions.push({
            type: "multiple",
            question: `這個法文單字是什麼意思：${word}？`,
            options: [word, "autre", "mot", "chose"],
            answer: word,
            frenchText: word,
            explanation: `${word} 是今天學習的重點單字之一。`,
            vocabulary: `${word} - （單字）`
        });
        
        // 題型2: 拼寫單字（排序題）
        if (word.length >= 3) {
            const letters = word.split('');
            questions.push({
                type: "sorting",
                question: `【排序題】將下列字母排成正確的法文單字`,
                words: [...letters].sort(() => Math.random() - 0.5),
                answer: word,
                frenchText: word,
                explanation: `${word} 是今天學習的重點單字之一。`,
                vocabulary: `${word} - （單字）`
            });
        }
        
        // 題型3: 聽力辨識（選擇題）
        questions.push({
            type: "multiple",
            question: `哪個單字是 ${word}？`,
            options: [word, "bonjour", "merci", "oui"],
            answer: word,
            frenchText: word,
            explanation: `${word} 的發音和拼寫要牢記。`,
            vocabulary: `${word} - （單字）`
        });
    });
    
    // 確保至少15題
    while (questions.length < 15) {
        questions.push({
            type: "multiple",
            question: `複習：以下哪個是今天學的單字？`,
            options: vocab.slice(0, 4),
            answer: vocab[0],
            frenchText: vocab[0],
            explanation: `今天學習了這些單字：${vocab.join(', ')}。`,
            vocabulary: `${vocab[0]} - （單字）`
        });
    }
    
    return questions.slice(0, 15);
}
