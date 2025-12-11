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
        vocabulary: [{ french: "Bonjour", chinese: "你好", pronunciation: "Bonjour" }]
    }
    
    // === 新增的 基礎範例 題目 ===
    ,{
        type: "multiple",
        question: "「妳怎麼在這?」的法文是?",
        options: ["- Pourquoi tu es là ?","Il est","Je suis","Ça va"],
        answer: "- Pourquoi tu es là ?",
        frenchText: "- Pourquoi tu es là ?",
        explanation: "- Pourquoi tu es là ? 是「妳怎麼在這?」的法文表達。",
        vocabulary: [{ french: "Pourquoi tu es là ?", chinese: "妳怎麼在這?", pronunciation: "Pourquoi tu es là ?" }]
    }

    ,{
        type: "multiple",
        question: "「妳為何傷悲?」的法文是?",
        options: ["- Pourquoi tu es triste ?","Pardon","Je suis","Au revoir"],
        answer: "- Pourquoi tu es triste ?",
        frenchText: "- Pourquoi tu es triste ?",
        explanation: "- Pourquoi tu es triste ? 是「妳為何傷悲?」的法文表達。",
        vocabulary: [{ french: "Pourquoi tu es triste ?", chinese: "妳為何傷悲?", pronunciation: "Pourquoi tu es triste ?" }]
    }

    ,{
        type: "multiple",
        question: "「你為什麼對我這麼冷淡?」的法文是?",
        options: ["- Pourquoi tu es si froid avec moi ?","Comment allez-vous","Bon matin","Je suis"],
        answer: "- Pourquoi tu es si froid avec moi ?",
        frenchText: "- Pourquoi tu es si froid avec moi ?",
        explanation: "- Pourquoi tu es si froid avec moi ? 是「你為什麼對我這麼冷淡?」的法文表達。",
        vocabulary: [{ french: "Pourquoi tu es si froid avec moi ?", chinese: "你為什麼對我這麼冷淡?", pronunciation: "Pourquoi tu es si froid avec moi ?" }]
    }

    ,{
        type: "multiple",
        question: "「你為何笑?」的法文是?",
        options: ["- Pourquoi tu ris ?","Bon matin","Il est","Bonjour"],
        answer: "- Pourquoi tu ris ?",
        frenchText: "- Pourquoi tu ris ?",
        explanation: "- Pourquoi tu ris ? 是「你為何笑?」的法文表達。",
        vocabulary: [{ french: "Pourquoi tu ris ?", chinese: "你為何笑?", pronunciation: "Pourquoi tu ris ?" }]
    }

    ,{
        type: "multiple",
        question: "「你為何哭 ?」的法文是?",
        options: ["- Pourquoi tu pleures ?","Comment allez-vous","Oui","S'il vous plaît"],
        answer: "- Pourquoi tu pleures ?",
        frenchText: "- Pourquoi tu pleures ?",
        explanation: "- Pourquoi tu pleures ? 是「你為何哭 ?」的法文表達。",
        vocabulary: [{ french: "Pourquoi tu pleures ?", chinese: "你為何哭 ?", pronunciation: "Pourquoi tu pleures ?" }]
    }

    ,{
        type: "multiple",
        question: "「你看著我幹嘛 ?」的法文是?",
        options: ["- Pourquoi tu me regardes ?","Merci","Oui","Non"],
        answer: "- Pourquoi tu me regardes ?",
        frenchText: "- Pourquoi tu me regardes ?",
        explanation: "- Pourquoi tu me regardes ? 是「你看著我幹嘛 ?」的法文表達。",
        vocabulary: [{ french: "Pourquoi tu me regardes ?", chinese: "你看著我幹嘛 ?", pronunciation: "Pourquoi tu me regardes ?" }]
    }

    ,{
        type: "multiple",
        question: "「你為什麼惦惦 ?」的法文是?",
        options: ["- Pourquoi tu ne parles pas ?","Il est","Bonne nuit","Pardon"],
        answer: "- Pourquoi tu ne parles pas ?",
        frenchText: "- Pourquoi tu ne parles pas ?",
        explanation: "- Pourquoi tu ne parles pas ? 是「你為什麼惦惦 ?」的法文表達。",
        vocabulary: [{ french: "Pourquoi tu ne parles pas ?", chinese: "你為什麼惦惦 ?", pronunciation: "Pourquoi tu ne parles pas ?" }]
    }

    ,{
        type: "multiple",
        question: "「你為何離去?」的法文是?",
        options: ["- Pourquoi tu pars ?","Excusez-moi","Merci","Au revoir"],
        answer: "- Pourquoi tu pars ?",
        frenchText: "- Pourquoi tu pars ?",
        explanation: "- Pourquoi tu pars ? 是「你為何離去?」的法文表達。",
        vocabulary: [{ french: "Pourquoi tu pars ?", chinese: "你為何離去?", pronunciation: "Pourquoi tu pars ?" }]
    }

    ,{
        type: "multiple",
        question: "「你為什麼不喜歡我 ?」的法文是?",
        options: ["- Pourquoi tu ne m’aimes pas ?","Oui","Bon matin","Ça va"],
        answer: "- Pourquoi tu ne m’aimes pas ?",
        frenchText: "- Pourquoi tu ne m’aimes pas ?",
        explanation: "- Pourquoi tu ne m’aimes pas ? 是「你為什麼不喜歡我 ?」的法文表達。",
        vocabulary: [{ french: "Pourquoi tu ne m’aimes pas ?", chinese: "你為什麼不喜歡我 ?", pronunciation: "Pourquoi tu ne m’aimes pas ?" }]
    }

    ,{
        type: "multiple",
        question: "「你為什麼喜歡我 ?」的法文是?",
        options: ["- Pourquoi tu m’aimes ?","Bonne nuit","Bon matin","Il est"],
        answer: "- Pourquoi tu m’aimes ?",
        frenchText: "- Pourquoi tu m’aimes ?",
        explanation: "- Pourquoi tu m’aimes ? 是「你為什麼喜歡我 ?」的法文表達。",
        vocabulary: [{ french: "Pourquoi tu m’aimes ?", chinese: "你為什麼喜歡我 ?", pronunciation: "Pourquoi tu m’aimes ?" }]
    }

    ,{
        type: "multiple",
        question: "「你為什麼不跟我說話 ?」的法文是?",
        options: ["- Pourquoi tu ne me parles pas ?","S'il vous plaît","Tu es","Bonjour"],
        answer: "- Pourquoi tu ne me parles pas ?",
        frenchText: "- Pourquoi tu ne me parles pas ?",
        explanation: "- Pourquoi tu ne me parles pas ? 是「你為什麼不跟我說話 ?」的法文表達。",
        vocabulary: [{ french: "Pourquoi tu ne me parles pas ?", chinese: "你為什麼不跟我說話 ?", pronunciation: "Pourquoi tu ne me parles pas ?" }]
    }

    ,{
        type: "multiple",
        question: "「你為什麼遲到 ?」的法文是?",
        options: ["- Pourquoi tu es en retard ?","Au revoir","J'ai","S'il vous plaît"],
        answer: "- Pourquoi tu es en retard ?",
        frenchText: "- Pourquoi tu es en retard ?",
        explanation: "- Pourquoi tu es en retard ? 是「你為什麼遲到 ?」的法文表達。",
        vocabulary: [{ french: "Pourquoi tu es en retard ?", chinese: "你為什麼遲到 ?", pronunciation: "Pourquoi tu es en retard ?" }]
    }

    ,{
        type: "multiple",
        question: "「你幹嘛這樣說 ?」的法文是?",
        options: ["- Pourquoi tu dis ça ?","Bonjour","Tu es","Merci"],
        answer: "- Pourquoi tu dis ça ?",
        frenchText: "- Pourquoi tu dis ça ?",
        explanation: "- Pourquoi tu dis ça ? 是「你幹嘛這樣說 ?」的法文表達。",
        vocabulary: [{ french: "Pourquoi tu dis ça ?", chinese: "你幹嘛這樣說 ?", pronunciation: "Pourquoi tu dis ça ?" }]
    }

    ,{
        type: "multiple",
        question: "「你為什麼撒謊 ?」的法文是?",
        options: ["- Pourquoi tu mens ?","Je suis","Oui","Merci"],
        answer: "- Pourquoi tu mens ?",
        frenchText: "- Pourquoi tu mens ?",
        explanation: "- Pourquoi tu mens ? 是「你為什麼撒謊 ?」的法文表達。",
        vocabulary: [{ french: "Pourquoi tu mens ?", chinese: "你為什麼撒謊 ?", pronunciation: "Pourquoi tu mens ?" }]
    }

    ,{
        type: "multiple",
        question: "「你為什麼不回我話 ?」的法文是?",
        options: ["- Pourquoi tu ne me réponds pas ?","Ça va","Non","Bonne nuit"],
        answer: "- Pourquoi tu ne me réponds pas ?",
        frenchText: "- Pourquoi tu ne me réponds pas ?",
        explanation: "- Pourquoi tu ne me réponds pas ? 是「你為什麼不回我話 ?」的法文表達。",
        vocabulary: [{ french: "Pourquoi tu ne me réponds pas ?", chinese: "你為什麼不回我話 ?", pronunciation: "Pourquoi tu ne me réponds pas ?" }]
    }

    ,{
        type: "multiple",
        question: "「你為什麼不理我 ?」的法文是?",
        options: ["- Pourquoi tu ne veux pas me parler ?","Oui","Pardon","Il est"],
        answer: "- Pourquoi tu ne veux pas me parler ?",
        frenchText: "- Pourquoi tu ne veux pas me parler ?",
        explanation: "- Pourquoi tu ne veux pas me parler ? 是「你為什麼不理我 ?」的法文表達。",
        vocabulary: [{ french: "Pourquoi tu ne veux pas me parler ?", chinese: "你為什麼不理我 ?", pronunciation: "Pourquoi tu ne veux pas me parler ?" }]
    }

    ,{
        type: "multiple",
        question: "「你為什麼不跟我出門約會 ?」的法文是?",
        options: ["- Pourquoi tu ne veux pas sortir avec moi ?","Il est","Non","Merci"],
        answer: "- Pourquoi tu ne veux pas sortir avec moi ?",
        frenchText: "- Pourquoi tu ne veux pas sortir avec moi ?",
        explanation: "- Pourquoi tu ne veux pas sortir avec moi ? 是「你為什麼不跟我出門約會 ?」的法文表達。",
        vocabulary: [{ french: "Pourquoi tu ne veux pas sortir avec moi ?", chinese: "你為什麼不跟我出門約會 ?", pronunciation: "Pourquoi tu ne veux pas sortir avec moi ?" }]
    }

    ,{
        type: "multiple",
        question: "「你為什麼這樣對我 ?」的法文是?",
        options: ["- Pourquoi tu me fais ça ?","Merci","Pardon","Tu es"],
        answer: "- Pourquoi tu me fais ça ?",
        frenchText: "- Pourquoi tu me fais ça ?",
        explanation: "- Pourquoi tu me fais ça ? 是「你為什麼這樣對我 ?」的法文表達。",
        vocabulary: [{ french: "Pourquoi tu me fais ça ?", chinese: "你為什麼這樣對我 ?", pronunciation: "Pourquoi tu me fais ça ?" }]
    }

    ,{
        type: "multiple",
        question: "「你為什麼不相信我 ?」的法文是?",
        options: ["- Pourquoi tu ne me fais pas confiance ?","Comment allez-vous","Bon matin","Bonne nuit"],
        answer: "- Pourquoi tu ne me fais pas confiance ?",
        frenchText: "- Pourquoi tu ne me fais pas confiance ?",
        explanation: "- Pourquoi tu ne me fais pas confiance ? 是「你為什麼不相信我 ?」的法文表達。",
        vocabulary: [{ french: "Pourquoi tu ne me fais pas confiance ?", chinese: "你為什麼不相信我 ?", pronunciation: "Pourquoi tu ne me fais pas confiance ?" }]
    }

    ,{
        type: "multiple",
        question: "「妳為什麼這樣子口愛 ?」的法文是?",
        options: ["- Pourquoi tu es si mignon ?","Ça va","S'il vous plaît","Comment allez-vous"],
        answer: "- Pourquoi tu es si mignon ?",
        frenchText: "- Pourquoi tu es si mignon ?",
        explanation: "- Pourquoi tu es si mignon ? 是「妳為什麼這樣子口愛 ?」的法文表達。",
        vocabulary: [{ french: "Pourquoi tu es si mignon ?", chinese: "妳為什麼這樣子口愛 ?", pronunciation: "Pourquoi tu es si mignon ?" }]
    }

    // === 新增的 基礎範例 題目 ===
    ,{
        type: "multiple",
        question: "「不錯 !」的法文是?",
        options: ["Pas mal.","Je suis","Bonjour","Il est"],
        answer: "Pas mal.",
        frenchText: "Pas mal.",
        explanation: "Pas mal. 是「不錯 !」的法文表達。",
        vocabulary: "pas mal. - 不錯 !"
    }

    ,{
        type: "multiple",
        question: "「還不太差。」的法文是?",
        options: ["Pas trop mal.","Il est","Je suis","Pardon"],
        answer: "Pas trop mal.",
        frenchText: "Pas trop mal.",
        explanation: "Pas trop mal. 是「還不太差。」的法文表達。",
        vocabulary: "pas trop mal. - 還不太差。"
    }

    ,{
        type: "multiple",
        question: "「不懂。」的法文是?",
        options: ["Pas compris.","Bon matin","Comment allez-vous","Merci"],
        answer: "Pas compris.",
        frenchText: "Pas compris.",
        explanation: "Pas compris. 是「不懂。」的法文表達。",
        vocabulary: "pas compris. - 不懂。"
    }

    ,{
        type: "multiple",
        question: "「不貴。便宜。」的法文是?",
        options: ["Pas cher.","Bon matin","Au revoir","Merci"],
        answer: "Pas cher.",
        frenchText: "Pas cher.",
        explanation: "Pas cher. 是「不貴。便宜。」的法文表達。",
        vocabulary: "pas cher. - 不貴。便宜。"
    }

    ,{
        type: "multiple",
        question: "「沒甚麼。不客氣。」的法文是?",
        options: ["Pas de quoi.","Tu es","Oui","Ça va"],
        answer: "Pas de quoi.",
        frenchText: "Pas de quoi.",
        explanation: "Pas de quoi. 是「沒甚麼。不客氣。」的法文表達。",
        vocabulary: "pas de quoi. - 沒甚麼。不客氣。"
    }

    ,{
        type: "multiple",
        question: "「別費勁 ! 沒必要 !」的法文是?",
        options: ["Pas la peine.","Bonne nuit","Je suis","Excusez-moi"],
        answer: "Pas la peine.",
        frenchText: "Pas la peine.",
        explanation: "Pas la peine. 是「別費勁 ! 沒必要 !」的法文表達。",
        vocabulary: "pas la peine. - 別費勁 ! 沒必要 !"
    }

    ,{
        type: "multiple",
        question: "「沒問題 !」的法文是?",
        options: ["Pas de problèmes.","S'il vous plaît","Au revoir","Pardon"],
        answer: "Pas de problèmes.",
        frenchText: "Pas de problèmes.",
        explanation: "Pas de problèmes. 是「沒問題 !」的法文表達。",
        vocabulary: "pas de problèmes. - 沒問題 !"
    }

    ,{
        type: "multiple",
        question: "「別傷腦筋 !」的法文是?",
        options: ["Pas de soucis.","Merci","Bonne nuit","Au revoir"],
        answer: "Pas de soucis.",
        frenchText: "Pas de soucis.",
        explanation: "Pas de soucis. 是「別傷腦筋 !」的法文表達。",
        vocabulary: "pas de soucis. - 別傷腦筋 !"
    }

    ,{
        type: "multiple",
        question: "「此刻還不行。」的法文是?",
        options: ["Pas pourle moment.","Non","Bonjour","Il est"],
        answer: "Pas pourle moment.",
        frenchText: "Pas pourle moment.",
        explanation: "Pas pourle moment. 是「此刻還不行。」的法文表達。",
        vocabulary: "pas pourle moment. - 此刻還不行。"
    }

    ,{
        type: "multiple",
        question: "「我不要。」的法文是?",
        options: ["Pas pour moi.","Au revoir","Tu es","Bonne nuit"],
        answer: "Pas pour moi.",
        frenchText: "Pas pour moi.",
        explanation: "Pas pour moi. 是「我不要。」的法文表達。",
        vocabulary: "pas pour moi. - 我不要。"
    }

    ,{
        type: "multiple",
        question: "「此刻不行。」的法文是?",
        options: ["Pas pour l’instant.","Pardon","Merci","Au revoir"],
        answer: "Pas pour l’instant.",
        frenchText: "Pas pour l’instant.",
        explanation: "Pas pour l’instant. 是「此刻不行。」的法文表達。",
        vocabulary: "pas pour l’instant. - 此刻不行。"
    }

    ,{
        type: "multiple",
        question: "「不要太早。」的法文是?",
        options: ["Pas trop tôt.","Bon matin","J'ai","Il est"],
        answer: "Pas trop tôt.",
        frenchText: "Pas trop tôt.",
        explanation: "Pas trop tôt. 是「不要太早。」的法文表達。",
        vocabulary: "pas trop tôt. - 不要太早。"
    }

    ,{
        type: "multiple",
        question: "「不要太晚。」的法文是?",
        options: ["Pas trop tard.","Au revoir","Bon matin","Oui"],
        answer: "Pas trop tard.",
        frenchText: "Pas trop tard.",
        explanation: "Pas trop tard. 是「不要太晚。」的法文表達。",
        vocabulary: "pas trop tard. - 不要太晚。"
    }

    ,{
        type: "multiple",
        question: "「沒太累吧?」的法文是?",
        options: ["Pas trop fatigue ?","Au revoir","Bonne nuit","Je suis"],
        answer: "Pas trop fatigue ?",
        frenchText: "Pas trop fatigue ?",
        explanation: "Pas trop fatigue ? 是「沒太累吧?」的法文表達。",
        vocabulary: "pas trop fatigue ? - 沒太累吧?"
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
