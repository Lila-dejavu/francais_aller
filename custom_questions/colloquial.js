// 🗣️ 口語俚語 - Colloquial Slang
// 日常生活中的口語表達，包含俚語和非正式用法

const colloquial = [
    // === 新增的 口語俚語 題目 ===
    // 在這裡貼上新題目，記得上一題後面要加逗號！
    {
        type: "multiple",
        question: "「你在開玩笑吧！」的法文是?",
        options: ["Tu rigoles !","Au revoir","Oui","Excusez-moi"],
        answer: "Tu rigoles !",
        frenchText: "Tu rigoles !",
        explanation: "Tu rigoles ! 是「你在開玩笑吧！」的法文表達。",
        vocabulary: "tu rigoles ! - 你在開玩笑吧！"
    },

    {
        type: "multiple",
        question: "「認真的嗎？/ 你是說真的？」的法文是?",
        options: ["Sérieux ?","Bon matin","Pardon","Bonne nuit"],
        answer: "Sérieux ?",
        frenchText: "Sérieux ?",
        explanation: "Sérieux ? 是「認真的嗎？/ 你是說真的？」的法文表達。",
        vocabulary: "sérieux ? - 認真的嗎？/ 你是說真的？"
    },

    {
        type: "multiple",
        question: "「不會吧？/ 不是開玩笑吧？」的法文是?",
        options: ["Sans blague ?","Non","Tu es","Bonne nuit"],
        answer: "Sans blague ?",
        frenchText: "Sans blague ?",
        explanation: "Sans blague ? 是「不會吧？/ 不是開玩笑吧？」的法文表達。",
        vocabulary: "sans blague ? - 不會吧？/ 不是開玩笑吧？"
    },

    {
        type: "multiple",
        question: "「這不是真的！/ 怎麼可能！/ 不會吧 !」的法文是?",
        options: ["C'est pas vrai !","Tu es","Merci","Bonne nuit"],
        answer: "C'est pas vrai !",
        frenchText: "C'est pas vrai !",
        explanation: "C'est pas vrai ! 是「這不是真的！/ 怎麼可能！/ 不會吧 !」的法文表達。",
        vocabulary: "c'est pas vrai ! - 這不是真的！/ 怎麼可能！/ 不會吧 !"
    },

    {
        type: "multiple",
        question: "「真可惜！」的法文是?",
        options: ["C'est dommage !","J'ai","Ça va","Excusez-moi"],
        answer: "C'est dommage !",
        frenchText: "C'est dommage !",
        explanation: "C'est dommage ! 是「真可惜！」的法文表達。",
        vocabulary: "c'est dommage ! - 真可惜！"
    },

    {
        type: "multiple",
        question: "「我為你感到難過/抱歉。」的法文是?",
        options: ["Je suis désolé(e) pour toi.","Il est","Bonne nuit","S'il vous plaît"],
        answer: "Je suis désolé(e) pour toi.",
        frenchText: "Je suis désolé(e) pour toi.",
        explanation: "Je suis désolé(e) pour toi. 是「我為你感到難過/抱歉。」的法文表達。",
        vocabulary: "je suis désolé(e) pour toi. - 我為你感到難過/抱歉。"
    },

    {
        type: "multiple",
        question: "「這是胡說八道 / 這是亂七八糟。」的法文是?",
        options: ["C'est n'importe quoi.","Tu es","Oui","Pardon"],
        answer: "C'est n'importe quoi.",
        frenchText: "C'est n'importe quoi.",
        explanation: "C'est n'importe quoi. 是「這是胡說八道 / 這是亂七八糟。」的法文表達。",
        vocabulary: "c'est n'importe quoi. - 這是胡說八道 / 這是亂七八糟。"
    },

    {
        type: "multiple",
        question: "「這太棒了！/ 太厲害了！」的法文是?",
        options: ["C'est génial !","Bonjour","Il est","Ça va"],
        answer: "C'est génial !",
        frenchText: "C'est génial !",
        explanation: "C'est génial ! 是「這太棒了！/ 太厲害了！」的法文表達。",
        vocabulary: "c'est génial ! - 這太棒了！/ 太厲害了！"
    },

    {
        type: "multiple",
        question: "「超棒的。」的法文是?",
        options: ["C'est super.","Au revoir","Excusez-moi","Oui"],
        answer: "C'est super.",
        frenchText: "C'est super.",
        explanation: "C'est super. 是「超棒的。」的法文表達。",
        vocabulary: "c'est super. - 超棒的。"
    },

    {
        type: "multiple",
        question: "「真倒楣。/ 運氣不好。」的法文是?",
        options: ["C'est pas de chance.","Il est","Bon matin","Bonjour"],
        answer: "C'est pas de chance.",
        frenchText: "C'est pas de chance.",
        explanation: "C'est pas de chance. 是「真倒楣。/ 運氣不好。」的法文表達。",
        vocabulary: "c'est pas de chance. - 真倒楣。/ 運氣不好。"
    },

    {
        type: "multiple",
        question: "「這很煩人！/ 這很無聊！」的法文是?",
        options: ["Ça, c'est chiant !","Bonne nuit","Non","Oui"],
        answer: "Ça, c'est chiant !",
        frenchText: "Ça, c'est chiant !",
        explanation: "Ça, c'est chiant ! 是「這很煩人！/ 這很無聊！」的法文表達。",
        vocabulary: "ça, c'est chiant ! - 這很煩人！/ 這很無聊！"
    },

    {
        type: "multiple",
        question: "「我為你感到遺憾。」的法文是?",
        options: ["Je te plains.","Oui","Il est","Tu es"],
        answer: "Je te plains.",
        frenchText: "Je te plains.",
        explanation: "Je te plains. 是「我為你感到遺憾。」的法文表達。",
        vocabulary: "je te plains. - 我為你感到遺憾。"
    }
];

// 暫時清空，等待新增題目
const colloquial_backup = [
    {
        type: "multiple",
        question: "「我已經有好幾天沒出門了，因為我很不爽自己的鳥臉。」的法文是?",
        options: ["Je ne suis pas sorti dehors depuis des jours parce que j'ai honte de ma gueule.","Je suis","Il est","Merci"],
        answer: "Je ne suis pas sorti dehors depuis des jours parce que j'ai honte de ma gueule.",
        frenchText: "Je ne suis pas sorti dehors depuis des jours parce que j'ai honte de ma gueule.",
        explanation: "Je ne suis pas sorti dehors depuis des jours parce que j'ai honte de ma gueule. 是「我已經有好幾天沒出門了，因為我很不爽自己的鳥臉。」的法文表達。",
        vocabulary: "je ne suis pas sorti dehors depuis des jours parce que j'ai honte de ma gueule. - 我已經有好幾天沒出門了，因為我很不爽自己的鳥臉。"
    },

    {
        type: "multiple",
        question: "「我今天早上翹了課，因為我起床太晚了。」的法文是?",
        options: ["J'ai zappé le cours ce matin parce que je me suis levée trop tard.","Non","Oui","Tu es"],
        answer: "J'ai zappé le cours ce matin parce que je me suis levée trop tard.",
        frenchText: "J'ai zappé le cours ce matin parce que je me suis levée trop tard.",
        explanation: "J'ai zappé le cours ce matin parce que je me suis levée trop tard. 是「我今天早上翹了課，因為我起床太晚了。」的法文表達。",
        vocabulary: "j'ai zappé le cours ce matin parce que je me suis levée trop tard. - 我今天早上翹了課，因為我起床太晚了。"
    },

    {
        type: "multiple",
        question: "「我約會遲到了，因為公車總是拖拖拉拉。」的法文是?",
        options: ["Je suis en retard au rendez-vous parce que le bus est tout le temps à la bourre.","Merci","J'ai","Bon matin"],
        answer: "Je suis en retard au rendez-vous parce que le bus est tout le temps à la bourre.",
        frenchText: "Je suis en retard au rendez-vous parce que le bus est tout le temps à la bourre.",
        explanation: "Je suis en retard au rendez-vous parce que le bus est tout le temps à la bourre. 是「我約會遲到了，因為公車總是拖拖拉拉。」的法文表達。",
        vocabulary: "je suis en retard au rendez-vous parce que le bus est tout le temps à la bourre. - 我約會遲到了，因為公車總是拖拖拉拉。"
    },

    {
        type: "multiple",
        question: "「我跟我爸媽吵架了，因為我想離開去巴黎找工作。」的法文是?",
        options: ["Je me suis disputé avec mes parents parce que je voulais partir chercher du boulot à Paris.","J'ai","Je suis","Au revoir"],
        answer: "Je me suis disputé avec mes parents parce que je voulais partir chercher du boulot à Paris.",
        frenchText: "Je me suis disputé avec mes parents parce que je voulais partir chercher du boulot à Paris.",
        explanation: "Je me suis disputé avec mes parents parce que je voulais partir chercher du boulot à Paris. 是「我跟我爸媽吵架了，因為我想離開去巴黎找工作。」的法文表達。",
        vocabulary: "je me suis disputé avec mes parents parce que je voulais partir chercher du boulot à paris. - 我跟我爸媽吵架了，因為我想離開去巴黎找工作。"
    },

    {
        type: "multiple",
        question: "「我不能買這件毛衣，因為我把所有的錢都砸在電玩上了。」的法文是?",
        options: ["Je ne peux pas m'acheter ce pull parce que j'ai claqué tout mon fric dans les jeux vidéo.","Pardon","Comment allez-vous","S'il vous plaît"],
        answer: "Je ne peux pas m'acheter ce pull parce que j'ai claqué tout mon fric dans les jeux vidéo.",
        frenchText: "Je ne peux pas m'acheter ce pull parce que j'ai claqué tout mon fric dans les jeux vidéo.",
        explanation: "Je ne peux pas m'acheter ce pull parce que j'ai claqué tout mon fric dans les jeux vidéo. 是「我不能買這件毛衣，因為我把所有的錢都砸在電玩上了。」的法文表達。",
        vocabulary: "je ne peux pas m'acheter ce pull parce que j'ai claqué tout mon fric dans les jeux vidéo. - 我不能買這件毛衣，因為我把所有的錢都砸在電玩上了。"
    },

    {
        type: "multiple",
        question: "「我為駕照考試壓力超大，因為我怕搞砸路考。」的法文是?",
        options: ["Je stresse grave pour le permis parce que j'ai peur de foirer l'examen pratique.","Non","Au revoir","Je suis"],
        answer: "Je stresse grave pour le permis parce que j'ai peur de foirer l'examen pratique.",
        frenchText: "Je stresse grave pour le permis parce que j'ai peur de foirer l'examen pratique.",
        explanation: "Je stresse grave pour le permis parce que j'ai peur de foirer l'examen pratique. 是「我為駕照考試壓力超大，因為我怕搞砸路考。」的法文表達。",
        vocabulary: "je stresse grave pour le permis parce que j'ai peur de foirer l'examen pratique. - 我為駕照考試壓力超大，因為我怕搞砸路考。"
    },

    {
        type: "multiple",
        question: "「我沒有申請這份工作，因為我對我的英語水平感到羞恥。」的法文是?",
        options: ["Je n'ai pas postulé pour ce job parce que j'ai honte de mon niveau d'anglais.","Tu es","Au revoir","Bon matin"],
        answer: "Je n'ai pas postulé pour ce job parce que j'ai honte de mon niveau d'anglais.",
        frenchText: "Je n'ai pas postulé pour ce job parce que j'ai honte de mon niveau d'anglais.",
        explanation: "Je n'ai pas postulé pour ce job parce que j'ai honte de mon niveau d'anglais. 是「我沒有申請這份工作，因為我對我的英語水平感到羞恥。」的法文表達。",
        vocabulary: "je n'ai pas postulé pour ce job parce que j'ai honte de mon niveau d'anglais. - 我沒有申請這份工作，因為我對我的英語水平感到羞恥。"
    }
    
    // === 口語俚語 題目結束 ===
];

// 匯出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = colloquial;
}
if (typeof window !== 'undefined') {
    window.colloquial = colloquial;
}
