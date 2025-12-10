// 😊 情感與反應 - Emotions and Reactions
// 表達感謝、驚訝、遺憾等各種情感反應

const emotions = [
    {
        type: "multiple",
        question: "「太客氣了！」的法文是?",
        options: ["C'est très gentil !","Pardon","S'il vous plaît","Il est"],
        answer: "C'est très gentil !",
        frenchText: "C'est très gentil !",
        explanation: "C'est très gentil ! 是「太客氣了！」的法文表達。",
        vocabulary: "c'est très gentil ! - 太客氣了！"
    },

    {
        type: "multiple",
        question: "「真是超級NICE！」的法文是?",
        options: ["C'est super sympa !","Ça va","Excusez-moi","Non"],
        answer: "C'est super sympa !",
        frenchText: "C'est super sympa !",
        explanation: "C'est super sympa ! 是「真是超級NICE！」的法文表達。",
        vocabulary: "c'est super sympa ! - 真是超級NICE！"
    },

    {
        type: "multiple",
        question: "「您實在不必如此！/ 您太破費了！」的法文是?",
        options: ["Vous n'auriez pas dû !","Ça va","Tu es","Pardon"],
        answer: "Vous n'auriez pas dû !",
        frenchText: "Vous n'auriez pas dû !",
        explanation: "Vous n'auriez pas dû ! 是「您實在不必如此！/ 您太破費了！」的法文表達。",
        vocabulary: "vous n'auriez pas dû ! - 您實在不必如此！/ 您太破費了！"
    },

    {
        type: "multiple",
        question: "「我感謝您的邀請。」的法文是?",
        options: ["Je vous remercie de votre invitation.","Pardon","Excusez-moi","Bonne nuit"],
        answer: "Je vous remercie de votre invitation.",
        frenchText: "Je vous remercie de votre invitation.",
        explanation: "Je vous remercie de votre invitation. 是「我感謝您的邀請。」的法文表達。",
        vocabulary: "je vous remercie de votre invitation. - 我感謝您的邀請。"
    },

    {
        type: "multiple",
        question: "「非常感謝！/ 多謝！」的法文是?",
        options: ["Merci beaucoup !","Bonne nuit","Oui","Pardon"],
        answer: "Merci beaucoup !",
        frenchText: "Merci beaucoup !",
        explanation: "Merci beaucoup ! 是「非常感謝！/ 多謝！」的法文表達。",
        vocabulary: "merci beaucoup ! - 非常感謝！/ 多謝！"
    },

    {
        type: "multiple",
        question: "「萬分感謝！/ 數不盡的感謝！」的法文是?",
        options: ["Mille mercis !","Bonjour","Comment allez-vous","Pardon"],
        answer: "Mille mercis !",
        frenchText: "Mille mercis !",
        explanation: "Mille mercis ! 是「萬分感謝！/ 數不盡的感謝！」的法文表達。",
        vocabulary: "mille mercis ! - 萬分感謝！/ 數不盡的感謝！"
    },

    {
        type: "multiple",
        question: "「我很感動！/ 我很受用！」的法文是?",
        options: ["Je suis touché(e) !","Il est","S'il vous plaît","Excusez-moi"],
        answer: "Je suis touché(e) !",
        frenchText: "Je suis touché(e) !",
        explanation: "Je suis touché(e) ! 是「我很感動！/ 我很受用！」的法文表達。",
        vocabulary: "je suis touché(e) ! - 我很感動！/ 我很受用！"
    },

    {
        type: "multiple",
        question: "「這讓我非常高興！」的法文是?",
        options: ["Ça me fait très plaisir !","Je suis","Non","Il est"],
        answer: "Ça me fait très plaisir !",
        frenchText: "Ça me fait très plaisir !",
        explanation: "Ça me fait très plaisir ! 是「這讓我非常高興！」的法文表達。",
        vocabulary: "ça me fait très plaisir ! - 這讓我非常高興！"
    },

    {
        type: "multiple",
        question: "「由衷感謝！/ 衷心感謝！」的法文是?",
        options: ["Merci du fond du cœur !","Au revoir","Pardon","Il est"],
        answer: "Merci du fond du cœur !",
        frenchText: "Merci du fond du cœur !",
        explanation: "Merci du fond du cœur ! 是「由衷感謝！/ 衷心感謝！」的法文表達。",
        vocabulary: "merci du fond du cœur ! - 由衷感謝！/ 衷心感謝！"
    },

    {
        type: "multiple",
        question: "「你在開玩笑吧！」的法文是?",
        options: ["Tu rigoles !","S'il vous plaît","Au revoir","Pardon"],
        answer: "Tu rigoles !",
        frenchText: "Tu rigoles !",
        explanation: "Tu rigoles ! 是「你在開玩笑吧！」的法文表達。",
        vocabulary: "tu rigoles ! - 你在開玩笑吧！"
    },

    {
        type: "multiple",
        question: "「認真的嗎？/ 你是說真的？」的法文是?",
        options: ["Sérieux ?","Tu es","Merci","Je suis"],
        answer: "Sérieux ?",
        frenchText: "Sérieux ?",
        explanation: "Sérieux ? 是「認真的嗎？/ 你是說真的？」的法文表達。",
        vocabulary: "sérieux ? - 認真的嗎？/ 你是說真的？"
    },

    {
        type: "multiple",
        question: "「不會吧？/ 不是開玩笑吧？」的法文是?",
        options: ["Sans blague ?","Au revoir","S'il vous plaît","Merci"],
        answer: "Sans blague ?",
        frenchText: "Sans blague ?",
        explanation: "Sans blague ? 是「不會吧？/ 不是開玩笑吧？」的法文表達。",
        vocabulary: "sans blague ? - 不會吧？/ 不是開玩笑吧？"
    },

    {
        type: "multiple",
        question: "「這不是真的！/ 怎麼可能！/ 不會吧 !」的法文是?",
        options: ["C'est pas vrai !","Je suis","Bon matin","Pardon"],
        answer: "C'est pas vrai !",
        frenchText: "C'est pas vrai !",
        explanation: "C'est pas vrai ! 是「這不是真的！/ 怎麼可能！/ 不會吧 !」的法文表達。",
        vocabulary: "c'est pas vrai ! - 這不是真的！/ 怎麼可能！/ 不會吧 !"
    },

    {
        type: "multiple",
        question: "「真可惜！」的法文是?",
        options: ["C'est dommage !","Je suis","Au revoir","Bonne nuit"],
        answer: "C'est dommage !",
        frenchText: "C'est dommage !",
        explanation: "C'est dommage ! 是「真可惜！」的法文表達。",
        vocabulary: "c'est dommage ! - 真可惜！"
    },

    {
        type: "multiple",
        question: "「我為你感到難過/抱歉。」的法文是?",
        options: ["Je suis désolé(e) pour toi.","Ça va","Bonne nuit","Merci"],
        answer: "Je suis désolé(e) pour toi.",
        frenchText: "Je suis désolé(e) pour toi.",
        explanation: "Je suis désolé(e) pour toi. 是「我為你感到難過/抱歉。」的法文表達。",
        vocabulary: "je suis désolé(e) pour toi. - 我為你感到難過/抱歉。"
    },

    {
        type: "multiple",
        question: "「這是胡說八道 / 這是亂七八糟。」的法文是?",
        options: ["C'est n'importe quoi.","J'ai","Non","Excusez-moi"],
        answer: "C'est n'importe quoi.",
        frenchText: "C'est n'importe quoi.",
        explanation: "C'est n'importe quoi. 是「這是胡說八道 / 這是亂七八糟。」的法文表達。",
        vocabulary: "c'est n'importe quoi. - 這是胡說八道 / 這是亂七八糟。"
    },

    {
        type: "multiple",
        question: "「這太棒了！/ 太厲害了！」的法文是?",
        options: ["C'est génial !","Au revoir","S'il vous plaît","Bonjour"],
        answer: "C'est génial !",
        frenchText: "C'est génial !",
        explanation: "C'est génial ! 是「這太棒了！/ 太厲害了！」的法文表達。",
        vocabulary: "c'est génial ! - 這太棒了！/ 太厲害了！"
    },

    {
        type: "multiple",
        question: "「超棒的。」的法文是?",
        options: ["C'est super.","Merci","Bonjour","Oui"],
        answer: "C'est super.",
        frenchText: "C'est super.",
        explanation: "C'est super. 是「超棒的。」的法文表達。",
        vocabulary: "c'est super. - 超棒的。"
    },

    {
        type: "multiple",
        question: "「真倒楣。/ 運氣不好。」的法文是?",
        options: ["C'est pas de chance.","S'il vous plaît","Tu es","Au revoir"],
        answer: "C'est pas de chance.",
        frenchText: "C'est pas de chance.",
        explanation: "C'est pas de chance. 是「真倒楣。/ 運氣不好。」的法文表達。",
        vocabulary: "c'est pas de chance. - 真倒楣。/ 運氣不好。"
    },

    {
        type: "multiple",
        question: "「這很煩人！/ 這很無聊！」的法文是?",
        options: ["Ça, c'est chiant !","Bonne nuit","Au revoir","J'ai"],
        answer: "Ça, c'est chiant !",
        frenchText: "Ça, c'est chiant !",
        explanation: "Ça, c'est chiant ! 是「這很煩人！/ 這很無聊！」的法文表達。",
        vocabulary: "ça, c'est chiant ! - 這很煩人！/ 這很無聊！"
    },

    {
        type: "multiple",
        question: "「我為你感到遺憾。」的法文是?",
        options: ["Je te plains.","Bonjour","Excusez-moi","Bon matin"],
        answer: "Je te plains.",
        frenchText: "Je te plains.",
        explanation: "Je te plains. 是「我為你感到遺憾。」的法文表達。",
        vocabulary: "je te plains. - 我為你感到遺憾。"
    }
];

// 匯出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = emotions;
}
if (typeof window !== 'undefined') {
    window.emotions = emotions;
}
