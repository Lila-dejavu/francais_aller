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
    
    // === 新增的 基礎範例 題目 ===
    ,{
        type: "multiple",
        question: "「妳怎麼在這?」的法文是?",
        options: ["- Pourquoi tu es là ?","Il est","Je suis","Ça va"],
        answer: "- Pourquoi tu es là ?",
        frenchText: "- Pourquoi tu es là ?",
        explanation: "- Pourquoi tu es là ? 是「妳怎麼在這?」的法文表達。",
        vocabulary: "- pourquoi tu es là ? - 妳怎麼在這?"
    }

    ,{
        type: "multiple",
        question: "「妳為何傷悲?」的法文是?",
        options: ["- Pourquoi tu es triste ?","Pardon","Je suis","Au revoir"],
        answer: "- Pourquoi tu es triste ?",
        frenchText: "- Pourquoi tu es triste ?",
        explanation: "- Pourquoi tu es triste ? 是「妳為何傷悲?」的法文表達。",
        vocabulary: "- pourquoi tu es triste ? - 妳為何傷悲?"
    }

    ,{
        type: "multiple",
        question: "「你為什麼對我這麼冷淡?」的法文是?",
        options: ["- Pourquoi tu es si froid avec moi ?","Comment allez-vous","Bon matin","Je suis"],
        answer: "- Pourquoi tu es si froid avec moi ?",
        frenchText: "- Pourquoi tu es si froid avec moi ?",
        explanation: "- Pourquoi tu es si froid avec moi ? 是「你為什麼對我這麼冷淡?」的法文表達。",
        vocabulary: "- pourquoi tu es si froid avec moi ? - 你為什麼對我這麼冷淡?"
    }

    ,{
        type: "multiple",
        question: "「你為何笑?」的法文是?",
        options: ["- Pourquoi tu ris ?","Bon matin","Il est","Bonjour"],
        answer: "- Pourquoi tu ris ?",
        frenchText: "- Pourquoi tu ris ?",
        explanation: "- Pourquoi tu ris ? 是「你為何笑?」的法文表達。",
        vocabulary: "- pourquoi tu ris ? - 你為何笑?"
    }

    ,{
        type: "multiple",
        question: "「你為何哭 ?」的法文是?",
        options: ["- Pourquoi tu pleures ?","Comment allez-vous","Oui","S'il vous plaît"],
        answer: "- Pourquoi tu pleures ?",
        frenchText: "- Pourquoi tu pleures ?",
        explanation: "- Pourquoi tu pleures ? 是「你為何哭 ?」的法文表達。",
        vocabulary: "- pourquoi tu pleures ? - 你為何哭 ?"
    }

    ,{
        type: "multiple",
        question: "「你看著我幹嘛 ?」的法文是?",
        options: ["- Pourquoi tu me regardes ?","Merci","Oui","Non"],
        answer: "- Pourquoi tu me regardes ?",
        frenchText: "- Pourquoi tu me regardes ?",
        explanation: "- Pourquoi tu me regardes ? 是「你看著我幹嘛 ?」的法文表達。",
        vocabulary: "- pourquoi tu me regardes ? - 你看著我幹嘛 ?"
    }

    ,{
        type: "multiple",
        question: "「你為什麼惦惦 ?」的法文是?",
        options: ["- Pourquoi tu ne parles pas ?","Il est","Bonne nuit","Pardon"],
        answer: "- Pourquoi tu ne parles pas ?",
        frenchText: "- Pourquoi tu ne parles pas ?",
        explanation: "- Pourquoi tu ne parles pas ? 是「你為什麼惦惦 ?」的法文表達。",
        vocabulary: "- pourquoi tu ne parles pas ? - 你為什麼惦惦 ?"
    }

    ,{
        type: "multiple",
        question: "「你為何離去?」的法文是?",
        options: ["- Pourquoi tu pars ?","Excusez-moi","Merci","Au revoir"],
        answer: "- Pourquoi tu pars ?",
        frenchText: "- Pourquoi tu pars ?",
        explanation: "- Pourquoi tu pars ? 是「你為何離去?」的法文表達。",
        vocabulary: "- pourquoi tu pars ? - 你為何離去?"
    }

    ,{
        type: "multiple",
        question: "「你為什麼不喜歡我 ?」的法文是?",
        options: ["- Pourquoi tu ne m’aimes pas ?","Oui","Bon matin","Ça va"],
        answer: "- Pourquoi tu ne m’aimes pas ?",
        frenchText: "- Pourquoi tu ne m’aimes pas ?",
        explanation: "- Pourquoi tu ne m’aimes pas ? 是「你為什麼不喜歡我 ?」的法文表達。",
        vocabulary: "- pourquoi tu ne m’aimes pas ? - 你為什麼不喜歡我 ?"
    }

    ,{
        type: "multiple",
        question: "「你為什麼喜歡我 ?」的法文是?",
        options: ["- Pourquoi tu m’aimes ?","Bonne nuit","Bon matin","Il est"],
        answer: "- Pourquoi tu m’aimes ?",
        frenchText: "- Pourquoi tu m’aimes ?",
        explanation: "- Pourquoi tu m’aimes ? 是「你為什麼喜歡我 ?」的法文表達。",
        vocabulary: "- pourquoi tu m’aimes ? - 你為什麼喜歡我 ?"
    }

    ,{
        type: "multiple",
        question: "「你為什麼不跟我說話 ?」的法文是?",
        options: ["- Pourquoi tu ne me parles pas ?","S'il vous plaît","Tu es","Bonjour"],
        answer: "- Pourquoi tu ne me parles pas ?",
        frenchText: "- Pourquoi tu ne me parles pas ?",
        explanation: "- Pourquoi tu ne me parles pas ? 是「你為什麼不跟我說話 ?」的法文表達。",
        vocabulary: "- pourquoi tu ne me parles pas ? - 你為什麼不跟我說話 ?"
    }

    ,{
        type: "multiple",
        question: "「你為什麼遲到 ?」的法文是?",
        options: ["- Pourquoi tu es en retard ?","Au revoir","J'ai","S'il vous plaît"],
        answer: "- Pourquoi tu es en retard ?",
        frenchText: "- Pourquoi tu es en retard ?",
        explanation: "- Pourquoi tu es en retard ? 是「你為什麼遲到 ?」的法文表達。",
        vocabulary: "- pourquoi tu es en retard ? - 你為什麼遲到 ?"
    }

    ,{
        type: "multiple",
        question: "「你幹嘛這樣說 ?」的法文是?",
        options: ["- Pourquoi tu dis ça ?","Bonjour","Tu es","Merci"],
        answer: "- Pourquoi tu dis ça ?",
        frenchText: "- Pourquoi tu dis ça ?",
        explanation: "- Pourquoi tu dis ça ? 是「你幹嘛這樣說 ?」的法文表達。",
        vocabulary: "- pourquoi tu dis ça ? - 你幹嘛這樣說 ?"
    }

    ,{
        type: "multiple",
        question: "「你為什麼撒謊 ?」的法文是?",
        options: ["- Pourquoi tu mens ?","Je suis","Oui","Merci"],
        answer: "- Pourquoi tu mens ?",
        frenchText: "- Pourquoi tu mens ?",
        explanation: "- Pourquoi tu mens ? 是「你為什麼撒謊 ?」的法文表達。",
        vocabulary: "- pourquoi tu mens ? - 你為什麼撒謊 ?"
    }

    ,{
        type: "multiple",
        question: "「你為什麼不回我話 ?」的法文是?",
        options: ["- Pourquoi tu ne me réponds pas ?","Ça va","Non","Bonne nuit"],
        answer: "- Pourquoi tu ne me réponds pas ?",
        frenchText: "- Pourquoi tu ne me réponds pas ?",
        explanation: "- Pourquoi tu ne me réponds pas ? 是「你為什麼不回我話 ?」的法文表達。",
        vocabulary: "- pourquoi tu ne me réponds pas ? - 你為什麼不回我話 ?"
    }

    ,{
        type: "multiple",
        question: "「你為什麼不理我 ?」的法文是?",
        options: ["- Pourquoi tu ne veux pas me parler ?","Oui","Pardon","Il est"],
        answer: "- Pourquoi tu ne veux pas me parler ?",
        frenchText: "- Pourquoi tu ne veux pas me parler ?",
        explanation: "- Pourquoi tu ne veux pas me parler ? 是「你為什麼不理我 ?」的法文表達。",
        vocabulary: "- pourquoi tu ne veux pas me parler ? - 你為什麼不理我 ?"
    }

    ,{
        type: "multiple",
        question: "「你為什麼不跟我出門約會 ?」的法文是?",
        options: ["- Pourquoi tu ne veux pas sortir avec moi ?","Il est","Non","Merci"],
        answer: "- Pourquoi tu ne veux pas sortir avec moi ?",
        frenchText: "- Pourquoi tu ne veux pas sortir avec moi ?",
        explanation: "- Pourquoi tu ne veux pas sortir avec moi ? 是「你為什麼不跟我出門約會 ?」的法文表達。",
        vocabulary: "- pourquoi tu ne veux pas sortir avec moi ? - 你為什麼不跟我出門約會 ?"
    }

    ,{
        type: "multiple",
        question: "「你為什麼這樣對我 ?」的法文是?",
        options: ["- Pourquoi tu me fais ça ?","Merci","Pardon","Tu es"],
        answer: "- Pourquoi tu me fais ça ?",
        frenchText: "- Pourquoi tu me fais ça ?",
        explanation: "- Pourquoi tu me fais ça ? 是「你為什麼這樣對我 ?」的法文表達。",
        vocabulary: "- pourquoi tu me fais ça ? - 你為什麼這樣對我 ?"
    }

    ,{
        type: "multiple",
        question: "「你為什麼不相信我 ?」的法文是?",
        options: ["- Pourquoi tu ne me fais pas confiance ?","Comment allez-vous","Bon matin","Bonne nuit"],
        answer: "- Pourquoi tu ne me fais pas confiance ?",
        frenchText: "- Pourquoi tu ne me fais pas confiance ?",
        explanation: "- Pourquoi tu ne me fais pas confiance ? 是「你為什麼不相信我 ?」的法文表達。",
        vocabulary: "- pourquoi tu ne me fais pas confiance ? - 你為什麼不相信我 ?"
    }

    ,{
        type: "multiple",
        question: "「妳為什麼這樣子口愛 ?」的法文是?",
        options: ["- Pourquoi tu es si mignon ?","Ça va","S'il vous plaît","Comment allez-vous"],
        answer: "- Pourquoi tu es si mignon ?",
        frenchText: "- Pourquoi tu es si mignon ?",
        explanation: "- Pourquoi tu es si mignon ? 是「妳為什麼這樣子口愛 ?」的法文表達。",
        vocabulary: "- pourquoi tu es si mignon ? - 妳為什麼這樣子口愛 ?"
    }

    // === 基礎範例 題目結束 ===
];

// 匯出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = basicExamples;
}
if (typeof window !== 'undefined') {
    window.basicExamples = basicExamples;
}
