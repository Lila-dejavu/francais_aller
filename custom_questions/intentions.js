// 💭 意願表達 - Intentions (Je n'avais jamais eu l'intention de...)
// 表達過去從未有過某種意願的句型

const intentions = [
    {
        type: "multiple",
        question: "「我之前從未有過來法國學習的意願。」的法文是?",
        options: ["Je n'avais jamais eu l'intention de venir étudier en France.","Comment allez-vous","Excusez-moi","J'ai"],
        answer: "Je n'avais jamais eu l'intention de venir étudier en France.",
        frenchText: "Je n'avais jamais eu l'intention de venir étudier en France.",
        explanation: "Je n'avais jamais eu l'intention de venir étudier en France. 是「我之前從未有過來法國學習的意願。」的法文表達。",
        vocabulary: "je n'avais jamais eu l'intention de venir étudier en france. - 我之前從未有過來法國學習的意願。"
    },

    {
        type: "multiple",
        question: "「我之前從未有過跟外國人結婚的念頭。」的法文是?",
        options: ["Je n'avais jamais eu l'intention de me marier avec un étranger.","Oui","S'il vous plaît","Bonjour"],
        answer: "Je n'avais jamais eu l'intention de me marier avec un étranger.",
        frenchText: "Je n'avais jamais eu l'intention de me marier avec un étranger.",
        explanation: "Je n'avais jamais eu l'intention de me marier avec un étranger. 是「我之前從未有過跟外國人結婚的念頭。」的法文表達。",
        vocabulary: "je n'avais jamais eu l'intention de me marier avec un étranger. - 我之前從未有過跟外國人結婚的念頭。"
    },

    {
        type: "multiple",
        question: "「我之前從未有過做母親的意願。」的法文是?",
        options: ["Je n'avais jamais eu l'intention de devenir mère.","J'ai","Ça va","Comment allez-vous"],
        answer: "Je n'avais jamais eu l'intention de devenir mère.",
        frenchText: "Je n'avais jamais eu l'intention de devenir mère.",
        explanation: "Je n'avais jamais eu l'intention de devenir mère. 是「我之前從未有過做母親的意願。」的法文表達。",
        vocabulary: "je n'avais jamais eu l'intention de devenir mère. - 我之前從未有過做母親的意願。"
    },

    {
        type: "multiple",
        question: "「我之前從未有過搬到這個城市的意願。」的法文是?",
        options: ["Je n'avais jamais eu l'intention de déménager dans cette ville.","J'ai","Tu es","Merci"],
        answer: "Je n'avais jamais eu l'intention de déménager dans cette ville.",
        frenchText: "Je n'avais jamais eu l'intention de déménager dans cette ville.",
        explanation: "Je n'avais jamais eu l'intention de déménager dans cette ville. 是「我之前從未有過搬到這個城市的意願。」的法文表達。",
        vocabulary: "je n'avais jamais eu l'intention de déménager dans cette ville. - 我之前從未有過搬到這個城市的意願。"
    },

    {
        type: "multiple",
        question: "「我之前從未有過對你說謊的想法。」的法文是?",
        options: ["Je n'avais jamais eu l'intention de te mentir.","Pardon","J'ai","Au revoir"],
        answer: "Je n'avais jamais eu l'intention de te mentir.",
        frenchText: "Je n'avais jamais eu l'intention de te mentir.",
        explanation: "Je n'avais jamais eu l'intention de te mentir. 是「我之前從未有過對你說謊的想法。」的法文表達。",
        vocabulary: "je n'avais jamais eu l'intention de te mentir. - 我之前從未有過對你說謊的想法。"
    },

    {
        type: "multiple",
        question: "「我之前從未有過離職的意願。」的法文是?",
        options: ["Je n'avais jamais eu l'intention de démissionner de mon poste.","Tu es","Ça va","Bonjour"],
        answer: "Je n'avais jamais eu l'intention de démissionner de mon poste.",
        frenchText: "Je n'avais jamais eu l'intention de démissionner de mon poste.",
        explanation: "Je n'avais jamais eu l'intention de démissionner de mon poste. 是「我之前從未有過離職的意願。」的法文表達。",
        vocabulary: "je n'avais jamais eu l'intention de démissionner de mon poste. - 我之前從未有過離職的意願。"
    },

    {
        type: "multiple",
        question: "「我之前從未有過購買一輛這麼貴的汽車的意願。」的法文是?",
        options: ["Je n'avais jamais eu l'intention d'acheter une voiture si chère.","Bonne nuit","Ça va","Bonjour"],
        answer: "Je n'avais jamais eu l'intention d'acheter une voiture si chère.",
        frenchText: "Je n'avais jamais eu l'intention d'acheter une voiture si chère.",
        explanation: "Je n'avais jamais eu l'intention d'acheter une voiture si chère. 是「我之前從未有過購買一輛這麼貴的汽車的意願。」的法文表達。",
        vocabulary: "je n'avais jamais eu l'intention d'acheter une voiture si chère. - 我之前從未有過購買一輛這麼貴的汽車的意願。"
    },

    {
        type: "multiple",
        question: "「我之前從未有過這麼早就結婚的意願。」的法文是?",
        options: ["Je n'avais jamais eu l'intention de me marier si jeune.","Je suis","Pardon","J'ai"],
        answer: "Je n'avais jamais eu l'intention de me marier si jeune.",
        frenchText: "Je n'avais jamais eu l'intention de me marier si jeune.",
        explanation: "Je n'avais jamais eu l'intention de me marier si jeune. 是「我之前從未有過這麼早就結婚的意願。」的法文表達。",
        vocabulary: "je n'avais jamais eu l'intention de me marier si jeune. - 我之前從未有過這麼早就結婚的意願。"
    },

    {
        type: "multiple",
        question: "「我之前從未有過將我的婚姻生活告訴任何人的意願。」的法文是?",
        options: ["Je n'avais jamais eu l'intention de parler de ma vie conjugale à personne.","Au revoir","Il est","Ça va"],
        answer: "Je n'avais jamais eu l'intention de parler de ma vie conjugale à personne.",
        frenchText: "Je n'avais jamais eu l'intention de parler de ma vie conjugale à personne.",
        explanation: "Je n'avais jamais eu l'intention de parler de ma vie conjugale à personne. 是「我之前從未有過將我的婚姻生活告訴任何人的意願。」的法文表達。",
        vocabulary: "je n'avais jamais eu l'intention de parler de ma vie conjugale à personne. - 我之前從未有過將我的婚姻生活告訴任何人的意願。"
    },

    {
        type: "multiple",
        question: "「我之前從未有過獨自一人去亞洲旅行的意願。」的法文是?",
        options: ["Je n'avais jamais eu l'intention de voyager seule en Asie.","Ça va","Bonne nuit","Je suis"],
        answer: "Je n'avais jamais eu l'intention de voyager seule en Asie.",
        frenchText: "Je n'avais jamais eu l'intention de voyager seule en Asie.",
        explanation: "Je n'avais jamais eu l'intention de voyager seule en Asie. 是「我之前從未有過獨自一人去亞洲旅行的意願。」的法文表達。",
        vocabulary: "je n'avais jamais eu l'intention de voyager seule en asie. - 我之前從未有過獨自一人去亞洲旅行的意願。"
    }
];

// 匯出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = intentions;
}
if (typeof window !== 'undefined') {
    window.intentions = intentions;
}
