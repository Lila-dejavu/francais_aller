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
    ,{
        type: "multiple",
        question: "「太客氣了！」的法文是?",
        options: ["C'est très gentil !","J'ai","Comment allez-vous","S'il vous plaît"],
        answer: "C'est très gentil !",
        frenchText: "C'est très gentil !",
        explanation: "C'est très gentil ! 是「太客氣了！」的法文表達。",
        vocabulary: [{"french":"c'est très gentil !","chinese":"太客氣了！","pronunciation":""}]
    }

    ,{
        type: "multiple",
        question: "「真是超級NICE！」的法文是?",
        options: ["C'est super sympa !","Bon matin","J'ai","Il est"],
        answer: "C'est super sympa !",
        frenchText: "C'est super sympa !",
        explanation: "C'est super sympa ! 是「真是超級NICE！」的法文表達。",
        vocabulary: [{"french":"c'est super sympa !","chinese":"真是超級NICE！","pronunciation":""}]
    }

    ,{
        type: "multiple",
        question: "「您實在不必如此！/ 您太破費了！」的法文是?",
        options: ["Vous n'auriez pas dû !","Oui","Au revoir","Pardon"],
        answer: "Vous n'auriez pas dû !",
        frenchText: "Vous n'auriez pas dû !",
        explanation: "Vous n'auriez pas dû ! 是「您實在不必如此！/ 您太破費了！」的法文表達。",
        vocabulary: [{"french":"vous n'auriez pas dû !","chinese":"您實在不必如此！/ 您太破費了！","pronunciation":""}]
    }

    ,{
        type: "multiple",
        question: "「我感謝您的邀請。」的法文是?",
        options: ["Je vous remercie de votre invitation.","Tu es","Ça va","Bonne nuit"],
        answer: "Je vous remercie de votre invitation.",
        frenchText: "Je vous remercie de votre invitation.",
        explanation: "Je vous remercie de votre invitation. 是「我感謝您的邀請。」的法文表達。",
        vocabulary: [{"french":"je vous remercie de votre invitation.","chinese":"我感謝您的邀請。","pronunciation":""}]
    }

    ,{
        type: "multiple",
        question: "「非常感謝！/ 多謝！」的法文是?",
        options: ["Merci beaucoup !","Merci","Ça va","Bonjour"],
        answer: "Merci beaucoup !",
        frenchText: "Merci beaucoup !",
        explanation: "Merci beaucoup ! 是「非常感謝！/ 多謝！」的法文表達。",
        vocabulary: [{"french":"merci beaucoup !","chinese":"非常感謝！/ 多謝！","pronunciation":""}]
    }

    ,{
        type: "multiple",
        question: "「萬分感謝！/ 數不盡的感謝！」的法文是?",
        options: ["Mille mercis !","Je suis","Bonjour","Bon matin"],
        answer: "Mille mercis !",
        frenchText: "Mille mercis !",
        explanation: "Mille mercis ! 是「萬分感謝！/ 數不盡的感謝！」的法文表達。",
        vocabulary: [{"french":"mille mercis !","chinese":"萬分感謝！/ 數不盡的感謝！","pronunciation":""}]
    }

    ,{
        type: "multiple",
        question: "「我很感動！/ 我很受用！」的法文是?",
        options: ["Je suis touché(e) !","Bonne nuit","Non","Bon matin"],
        answer: "Je suis touché(e) !",
        frenchText: "Je suis touché(e) !",
        explanation: "Je suis touché(e) ! 是「我很感動！/ 我很受用！」的法文表達。",
        vocabulary: [{"french":"je suis touché(e) !","chinese":"我很感動！/ 我很受用！","pronunciation":""}]
    }

    ,{
        type: "multiple",
        question: "「這讓我非常高興！」的法文是?",
        options: ["Ça me fait très plaisir !","Non","Il est","Bonjour"],
        answer: "Ça me fait très plaisir !",
        frenchText: "Ça me fait très plaisir !",
        explanation: "Ça me fait très plaisir ! 是「這讓我非常高興！」的法文表達。",
        vocabulary: [{"french":"ça me fait très plaisir !","chinese":"這讓我非常高興！","pronunciation":""}]
    }

    ,{
        type: "multiple",
        question: "「由衷感謝！/ 衷心感謝！」的法文是?",
        options: ["Merci du fond du cœur !","J'ai","Ça va","Merci"],
        answer: "Merci du fond du cœur !",
        frenchText: "Merci du fond du cœur !",
        explanation: "Merci du fond du cœur ! 是「由衷感謝！/ 衷心感謝！」的法文表達。",
        vocabulary: [{"french":"merci du fond du cœur !","chinese":"由衷感謝！/ 衷心感謝！","pronunciation":""}]
    }

    ,{
        type: "multiple",
        question: "「我只想睡覺。」的法文是?",
        options: ["- Je veux juste dormir.","Non","Il est","Je suis"],
        answer: "- Je veux juste dormir.",
        frenchText: "- Je veux juste dormir.",
        explanation: "- Je veux juste dormir. 是「我只想睡覺。」的法文表達。",
        vocabulary: [{"french":"- je veux juste dormir.","chinese":"我只想睡覺。","pronunciation":""}]
    }

    ,{
        type: "multiple",
        question: "「我只想吃一塊。」的法文是?",
        options: ["- Je veux juste manger un morceau.","Ça va","Comment allez-vous","Au revoir"],
        answer: "- Je veux juste manger un morceau.",
        frenchText: "- Je veux juste manger un morceau.",
        explanation: "- Je veux juste manger un morceau. 是「我只想吃一塊。」的法文表達。",
        vocabulary: [{"french":"- je veux juste manger un morceau.","chinese":"我只想吃一塊。","pronunciation":""}]
    }

    ,{
        type: "multiple",
        question: "「我只想安靜一下。」的法文是?",
        options: ["- Je veux juste être tranquille.","Il est","Excusez-moi","Bonne nuit"],
        answer: "- Je veux juste être tranquille.",
        frenchText: "- Je veux juste être tranquille.",
        explanation: "- Je veux juste être tranquille. 是「我只想安靜一下。」的法文表達。",
        vocabulary: [{"french":"- je veux juste être tranquille.","chinese":"我只想安靜一下。","pronunciation":""}]
    }

    ,{
        type: "multiple",
        question: "「我就只想和你共度光陰。」的法文是?",
        options: ["- Je veux juste passer du temps avec toi.","Excusez-moi","Bonjour","Tu es"],
        answer: "- Je veux juste passer du temps avec toi.",
        frenchText: "- Je veux juste passer du temps avec toi.",
        explanation: "- Je veux juste passer du temps avec toi. 是「我就只想和你共度光陰。」的法文表達。",
        vocabulary: [{"french":"- je veux juste passer du temps avec toi.","chinese":"我就只想和你共度光陰。","pronunciation":""}]
    }

    ,{
        type: "multiple",
        question: "「我只是想知道。」的法文是?",
        options: ["- Je veux juste comprendre.","Excusez-moi","Bonne nuit","J'ai"],
        answer: "- Je veux juste comprendre.",
        frenchText: "- Je veux juste comprendre.",
        explanation: "- Je veux juste comprendre. 是「我只是想知道。」的法文表達。",
        vocabulary: [{"french":"- je veux juste comprendre.","chinese":"我只是想知道。","pronunciation":""}]
    }

    ,{
        type: "multiple",
        question: "「我只想嘗試一下。」的法文是?",
        options: ["- Je veux juste essayer.","Tu es","Non","Ça va"],
        answer: "- Je veux juste essayer.",
        frenchText: "- Je veux juste essayer.",
        explanation: "- Je veux juste essayer. 是「我只想嘗試一下。」的法文表達。",
        vocabulary: [{"french":"- je veux juste essayer.","chinese":"我只想嘗試一下。","pronunciation":""}]
    }

    ,{
        type: "multiple",
        question: "「我就只想度假。」的法文是?",
        options: ["- Je veux juste partir en vacances.","Il est","Pardon","S'il vous plaît"],
        answer: "- Je veux juste partir en vacances.",
        frenchText: "- Je veux juste partir en vacances.",
        explanation: "- Je veux juste partir en vacances. 是「我就只想度假。」的法文表達。",
        vocabulary: [{"french":"- je veux juste partir en vacances.","chinese":"我就只想度假。","pronunciation":""}]
    }

    ,{
        type: "multiple",
        question: "「我只想對你說謝謝。」的法文是?",
        options: ["- Je veux juste te dire merci.","Non","Je suis","Bonne nuit"],
        answer: "- Je veux juste te dire merci.",
        frenchText: "- Je veux juste te dire merci.",
        explanation: "- Je veux juste te dire merci. 是「我只想對你說謝謝。」的法文表達。",
        vocabulary: [{"french":"- je veux juste te dire merci.","chinese":"我只想對你說謝謝。","pronunciation":""}]
    }

    ,{
        type: "multiple",
        question: "「我只想忘記。」的法文是?",
        options: ["- Je veux juste oublier.","Ça va","Merci","Il est"],
        answer: "- Je veux juste oublier.",
        frenchText: "- Je veux juste oublier.",
        explanation: "- Je veux juste oublier. 是「我只想忘記。」的法文表達。",
        vocabulary: [{"french":"- je veux juste oublier.","chinese":"我只想忘記。","pronunciation":""}]
    }

    ,{
        type: "multiple",
        question: "「我只想要快樂。」的法文是?",
        options: ["- Je veux juste être heureux.","Au revoir","Non","Comment allez-vous"],
        answer: "- Je veux juste être heureux.",
        frenchText: "- Je veux juste être heureux.",
        explanation: "- Je veux juste être heureux. 是「我只想要快樂。」的法文表達。",
        vocabulary: [{"french":"- je veux juste être heureux.","chinese":"我只想要快樂。","pronunciation":""}]
    }

    ,{
        type: "multiple",
        question: "「我只想喝杯咖啡。」的法文是?",
        options: ["- Je veux juste boire un café.","Comment allez-vous","J'ai","Bonne nuit"],
        answer: "- Je veux juste boire un café.",
        frenchText: "- Je veux juste boire un café.",
        explanation: "- Je veux juste boire un café. 是「我只想喝杯咖啡。」的法文表達。",
        vocabulary: [{"french":"- je veux juste boire un café.","chinese":"我只想喝杯咖啡。","pronunciation":""}]
    }

    ,{
        type: "multiple",
        question: "「我只想跟你說件事 : 我愛你。」的法文是?",
        options: ["- Je veux juste te dire une chose : je t’aime.","Tu es","Je suis","Ça va"],
        answer: "- Je veux juste te dire une chose : je t’aime.",
        frenchText: "- Je veux juste te dire une chose : je t’aime.",
        explanation: "- Je veux juste te dire une chose : je t’aime. 是「我只想跟你說件事 : 我愛你。」的法文表達。",
        vocabulary: [{"french":"- je veux juste te dire une chose : je t’aime.","chinese":"我只想跟你說件事 : 我愛你。","pronunciation":""}]
    }

];

// 匯出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = basicExamples;
}
if (typeof window !== 'undefined') {
    window.basicExamples = basicExamples;
}
