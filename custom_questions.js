// ================================================================
// 📚 自訂題庫主檔案 - Custom Questions Main File
// ================================================================
//
// 🎯 新架構說明：
// 所有題目已經按主題分類到 custom_questions/ 資料夾中
// 這個檔案會自動載入所有分類的題目
//
// 📁 題庫分類：
// - basic_examples.js  (基礎範例)
// - intentions.js      (意願表達)
// - effects.js         (影響與改變)
// - laziness.js        (懶散表達)
// - colloquial.js      (口語俚語)
// - emotions.js        (情感與反應)
//
// ⚡ 新增題目方式：
// 1. 選擇適合的分類檔案（或創建新分類）
// 2. 在該檔案中新增題目
// 3. 重新整理網頁即可看到新題目
//
// 💡 如果要創建新分類：
// 1. 在 custom_questions/ 資料夾中創建新檔案（例如：new_category.js）
// 2. 參考其他檔案的格式
// 3. 在下方的 customQuestions 陣列中引入
// ================================================================

// 注意：以下檔案會在 index.html 中載入
// 這裡只是整合所有題目

const customQuestions = [
    // 這個陣列會由各個分類檔案填充
    // 請在 custom_questions/ 資料夾中編輯各個分類檔案

    // 範例 2: 排序題(拖曳排列)
    {
        type: "sorting",
        question: "請排列正確的句子:「我愛你」",
        words: ["t'", "Je", "aime"],
        answer: "Je t' aime",
        frenchText: "Je t'aime",
        explanation: "Je t'aime 是法文「我愛你」的表達方式。",
        vocabulary: "Je t'aime - 我愛你"
    },

    // 範例 3: 填空題(適合進階學習)
    {
        type: "input",
        question: "請輸入「謝謝」的法文:",
        answer: "merci",
        frenchText: "Merci",
        explanation: "Merci 是最常用的感謝用語。",
        vocabulary: "Merci - 謝謝 (梅西)"
    },

    // ============================================
    // 在下方新增你自己的題目
    // ============================================
    
    // 測試題目 - 你可以在左側「必學句型」中查看
    {
        type: "multiple",
        question: "「我餓了」的法文是?",
        options: ["J'ai faim", "Je suis faim", "Tu as faim", "Nous avons faim"],
        answer: "J'ai faim",
        frenchText: "J'ai faim",
        explanation: "J'ai faim 是「我餓了」的表達方式,faim 是名詞「飢餓」。",
        vocabulary: "J'ai faim - 我餓了 (熱 番)"
    }

    // ⚠️ 重要：上面的題目請不要動！
    // ⚠️ 從這裡開始貼上你的新題目 ↓↓↓
    // ============================================
    // 📝 新題目貼上區（安全區域）
    // 使用方法：
    // 1. 在 excel_converter.html 轉換完成後
    // 2. 點擊「📋 自動複製」
    // 3. 回到這裡，把游標放在下面這一行
    // 4. 按 Ctrl+V 貼上
    // ============================================
    
    // 
    // === 從這裡開始是新加入的題目 ===
    ,{
        type: "multiple",
        question: "「我之前從未有過來法國學習的意願。」的法文是?",
        options: ["Je n'avais jamais eu l'intention de venir étudier en France.","Comment allez-vous","Excusez-moi","J'ai"],
        answer: "Je n'avais jamais eu l'intention de venir étudier en France.",
        frenchText: "Je n'avais jamais eu l'intention de venir étudier en France.",
        explanation: "Je n'avais jamais eu l'intention de venir étudier en France. 是「我之前從未有過來法國學習的意願。」的法文表達。",
        vocabulary: "je n'avais jamais eu l'intention de venir étudier en france. - 我之前從未有過來法國學習的意願。"
    }

    ,{
        type: "multiple",
        question: "「我之前從未有過跟外國人結婚的念頭。」的法文是?",
        options: ["Je n'avais jamais eu l'intention de me marier avec un étranger.","Oui","S'il vous plaît","Bonjour"],
        answer: "Je n'avais jamais eu l'intention de me marier avec un étranger.",
        frenchText: "Je n'avais jamais eu l'intention de me marier avec un étranger.",
        explanation: "Je n'avais jamais eu l'intention de me marier avec un étranger. 是「我之前從未有過跟外國人結婚的念頭。」的法文表達。",
        vocabulary: "je n'avais jamais eu l'intention de me marier avec un étranger. - 我之前從未有過跟外國人結婚的念頭。"
    }

    ,{
        type: "multiple",
        question: "「我之前從未有過做母親的意願。」的法文是?",
        options: ["Je n'avais jamais eu l'intention de devenir mère.","J'ai","Ça va","Comment allez-vous"],
        answer: "Je n'avais jamais eu l'intention de devenir mère.",
        frenchText: "Je n'avais jamais eu l'intention de devenir mère.",
        explanation: "Je n'avais jamais eu l'intention de devenir mère. 是「我之前從未有過做母親的意願。」的法文表達。",
        vocabulary: "je n'avais jamais eu l'intention de devenir mère. - 我之前從未有過做母親的意願。"
    }

    ,{
        type: "multiple",
        question: "「我之前從未有過搬到這個城市的意願。」的法文是?",
        options: ["Je n'avais jamais eu l'intention de déménager dans cette ville.","J'ai","Tu es","Merci"],
        answer: "Je n'avais jamais eu l'intention de déménager dans cette ville.",
        frenchText: "Je n'avais jamais eu l'intention de déménager dans cette ville.",
        explanation: "Je n'avais jamais eu l'intention de déménager dans cette ville. 是「我之前從未有過搬到這個城市的意願。」的法文表達。",
        vocabulary: "je n'avais jamais eu l'intention de déménager dans cette ville. - 我之前從未有過搬到這個城市的意願。"
    }

    ,{
        type: "multiple",
        question: "「我之前從未有過對你說謊的想法。」的法文是?",
        options: ["Je n'avais jamais eu l'intention de te mentir.","Pardon","J'ai","Au revoir"],
        answer: "Je n'avais jamais eu l'intention de te mentir.",
        frenchText: "Je n'avais jamais eu l'intention de te mentir.",
        explanation: "Je n'avais jamais eu l'intention de te mentir. 是「我之前從未有過對你說謊的想法。」的法文表達。",
        vocabulary: "je n'avais jamais eu l'intention de te mentir. - 我之前從未有過對你說謊的想法。"
    }

    ,{
        type: "multiple",
        question: "「我之前從未有過離職的意願。」的法文是?",
        options: ["Je n'avais jamais eu l'intention de démissionner de mon poste.","Tu es","Ça va","Bonjour"],
        answer: "Je n'avais jamais eu l'intention de démissionner de mon poste.",
        frenchText: "Je n'avais jamais eu l'intention de démissionner de mon poste.",
        explanation: "Je n'avais jamais eu l'intention de démissionner de mon poste. 是「我之前從未有過離職的意願。」的法文表達。",
        vocabulary: "je n'avais jamais eu l'intention de démissionner de mon poste. - 我之前從未有過離職的意願。"
    }

    ,{
        type: "multiple",
        question: "「我之前從未有過購買一輛這麼貴的汽車的意願。」的法文是?",
        options: ["Je n'avais jamais eu l'intention d'acheter une voiture si chère.","Bonne nuit","Ça va","Bonjour"],
        answer: "Je n'avais jamais eu l'intention d'acheter une voiture si chère.",
        frenchText: "Je n'avais jamais eu l'intention d'acheter une voiture si chère.",
        explanation: "Je n'avais jamais eu l'intention d'acheter une voiture si chère. 是「我之前從未有過購買一輛這麼貴的汽車的意願。」的法文表達。",
        vocabulary: "je n'avais jamais eu l'intention d'acheter une voiture si chère. - 我之前從未有過購買一輛這麼貴的汽車的意願。"
    }

    ,{
        type: "multiple",
        question: "「我之前從未有過這麼早就結婚的意願。」的法文是?",
        options: ["Je n'avais jamais eu l'intention de me marier si jeune.","Je suis","Pardon","J'ai"],
        answer: "Je n'avais jamais eu l'intention de me marier si jeune.",
        frenchText: "Je n'avais jamais eu l'intention de me marier si jeune.",
        explanation: "Je n'avais jamais eu l'intention de me marier si jeune. 是「我之前從未有過這麼早就結婚的意願。」的法文表達。",
        vocabulary: "je n'avais jamais eu l'intention de me marier si jeune. - 我之前從未有過這麼早就結婚的意願。"
    }

    ,{
        type: "multiple",
        question: "「我之前從未有過將我的婚姻生活告訴任何人的意願。」的法文是?",
        options: ["Je n'avais jamais eu l'intention de parler de ma vie conjugale à personne.","Au revoir","Il est","Ça va"],
        answer: "Je n'avais jamais eu l'intention de parler de ma vie conjugale à personne.",
        frenchText: "Je n'avais jamais eu l'intention de parler de ma vie conjugale à personne.",
        explanation: "Je n'avais jamais eu l'intention de parler de ma vie conjugale à personne. 是「我之前從未有過將我的婚姻生活告訴任何人的意願。」的法文表達。",
        vocabulary: "je n'avais jamais eu l'intention de parler de ma vie conjugale à personne. - 我之前從未有過將我的婚姻生活告訴任何人的意願。"
    }

    ,{
        type: "multiple",
        question: "「我之前從未有過獨自一人去亞洲旅行的意願。」的法文是?",
        options: ["Je n'avais jamais eu l'intention de voyager seule en Asie.","Ça va","Bonne nuit","Je suis"],
        answer: "Je n'avais jamais eu l'intention de voyager seule en Asie.",
        frenchText: "Je n'avais jamais eu l'intention de voyager seule en Asie.",
        explanation: "Je n'avais jamais eu l'intention de voyager seule en Asie. 是「我之前從未有過獨自一人去亞洲旅行的意願。」的法文表達。",
        vocabulary: "je n'avais jamais eu l'intention de voyager seule en asie. - 我之前從未有過獨自一人去亞洲旅行的意願。"
    }

    ,{
        type: "multiple",
        question: "「這真的有幫到我。」的法文是?",
        options: ["Ça va vraiment m'aider.","S'il vous plaît","Oui","Pardon"],
        answer: "Ça va vraiment m'aider.",
        frenchText: "Ça va vraiment m'aider.",
        explanation: "Ça va vraiment m'aider. 是「這真的有幫到我。」的法文表達。",
        vocabulary: "ça va vraiment m'aider. - 這真的有幫到我。"
    }

    ,{
        type: "multiple",
        question: "「這真的會改變他的生活。」的法文是?",
        options: ["Ça va vraiment changer sa vie.)","Merci","Ça va","Oui"],
        answer: "Ça va vraiment changer sa vie.)",
        frenchText: "Ça va vraiment changer sa vie.)",
        explanation: "Ça va vraiment changer sa vie.) 是「這真的會改變他的生活。」的法文表達。",
        vocabulary: "ça va vraiment changer sa vie.) - 這真的會改變他的生活。"
    }

    ,{
        type: "multiple",
        question: "「這真的會讓我更有動力。」的法文是?",
        options: ["Ça va vraiment me motiver.","S'il vous plaît","Excusez-moi","Oui"],
        answer: "Ça va vraiment me motiver.",
        frenchText: "Ça va vraiment me motiver.",
        explanation: "Ça va vraiment me motiver. 是「這真的會讓我更有動力。」的法文表達。",
        vocabulary: "ça va vraiment me motiver. - 這真的會讓我更有動力。"
    }

    ,{
        type: "multiple",
        question: "「這真的會讓你很驚訝。」的法文是?",
        options: ["Ça va vraiment te surprendre.","Oui","Non","Bonjour"],
        answer: "Ça va vraiment te surprendre.",
        frenchText: "Ça va vraiment te surprendre.",
        explanation: "Ça va vraiment te surprendre. 是「這真的會讓你很驚訝。」的法文表達。",
        vocabulary: "ça va vraiment te surprendre. - 這真的會讓你很驚訝。"
    }

    ,{
        type: "multiple",
        question: "「這真的會讓事情更順利。」的法文是?",
        options: ["Ça va vraiment arranger les choses.","Ça va","Oui","Au revoir"],
        answer: "Ça va vraiment arranger les choses.",
        frenchText: "Ça va vraiment arranger les choses.",
        explanation: "Ça va vraiment arranger les choses. 是「這真的會讓事情更順利。」的法文表達。",
        vocabulary: "ça va vraiment arranger les choses. - 這真的會讓事情更順利。"
    }

    ,{
        type: "multiple",
        question: "「這真的會造成問題。」的法文是?",
        options: ["Ça va vraiment poser problème.","Tu es","Bon matin","Ça va"],
        answer: "Ça va vraiment poser problème.",
        frenchText: "Ça va vraiment poser problème.",
        explanation: "Ça va vraiment poser problème. 是「這真的會造成問題。」的法文表達。",
        vocabulary: "ça va vraiment poser problème. - 這真的會造成問題。"
    }

    ,{
        type: "multiple",
        question: "「這真的會讓我們的生活更簡化。」的法文是?",
        options: ["Ça va vraiment nous simplifier la vie.","Bonne nuit","Bonjour","Ça va"],
        answer: "Ça va vraiment nous simplifier la vie.",
        frenchText: "Ça va vraiment nous simplifier la vie.",
        explanation: "Ça va vraiment nous simplifier la vie. 是「這真的會讓我們的生活更簡化。」的法文表達。",
        vocabulary: "ça va vraiment nous simplifier la vie. - 這真的會讓我們的生活更簡化。"
    }

    ,{
        type: "multiple",
        question: "「這真的會很花錢。」的法文是?",
        options: ["Ça va vraiment coûter cher.","Au revoir","Tu es","Non"],
        answer: "Ça va vraiment coûter cher.",
        frenchText: "Ça va vraiment coûter cher.",
        explanation: "Ça va vraiment coûter cher. 是「這真的會很花錢。」的法文表達。",
        vocabulary: "ça va vraiment coûter cher. - 這真的會很花錢。"
    }

    ,{
        type: "multiple",
        question: "「這真的會失控。」的法文是?",
        options: ["Ça va vraiment dégénérer.","Au revoir","Il est","Tu es"],
        answer: "Ça va vraiment dégénérer.",
        frenchText: "Ça va vraiment dégénérer.",
        explanation: "Ça va vraiment dégénérer. 是「這真的會失控。」的法文表達。",
        vocabulary: "ça va vraiment dégénérer. - 這真的會失控。"
    }

    ,{
        type: "multiple",
        question: "「這真的會讓大家很開心。」的法文是?",
        options: ["Ça va vraiment faire plaisir à tout le monde.","Merci","Excusez-moi","S'il vous plaît"],
        answer: "Ça va vraiment faire plaisir à tout le monde.",
        frenchText: "Ça va vraiment faire plaisir à tout le monde.",
        explanation: "Ça va vraiment faire plaisir à tout le monde. 是「這真的會讓大家很開心。」的法文表達。",
        vocabulary: "ça va vraiment faire plaisir à tout le monde. - 這真的會讓大家很開心。"
    }

    ,{
        type: "multiple",
        question: "「我已經有好幾天沒出門了，因為我很不爽自己的鳥臉。」的法文是?",
        options: ["Je ne suis pas sorti dehors depuis des jours parce que j'ai honte de ma gueule.","Je suis","Il est","Merci"],
        answer: "Je ne suis pas sorti dehors depuis des jours parce que j'ai honte de ma gueule.",
        frenchText: "Je ne suis pas sorti dehors depuis des jours parce que j'ai honte de ma gueule.",
        explanation: "Je ne suis pas sorti dehors depuis des jours parce que j'ai honte de ma gueule. 是「我已經有好幾天沒出門了，因為我很不爽自己的鳥臉。」的法文表達。",
        vocabulary: "je ne suis pas sorti dehors depuis des jours parce que j'ai honte de ma gueule. - 我已經有好幾天沒出門了，因為我很不爽自己的鳥臉。"
    }

    ,{
        type: "multiple",
        question: "「我今天早上翹了課，因為我起床太晚了。」的法文是?",
        options: ["J'ai zappé le cours ce matin parce que je me suis levée trop tard.","Non","Oui","Tu es"],
        answer: "J'ai zappé le cours ce matin parce que je me suis levée trop tard.",
        frenchText: "J'ai zappé le cours ce matin parce que je me suis levée trop tard.",
        explanation: "J'ai zappé le cours ce matin parce que je me suis levée trop tard. 是「我今天早上翹了課，因為我起床太晚了。」的法文表達。",
        vocabulary: "j'ai zappé le cours ce matin parce que je me suis levée trop tard. - 我今天早上翹了課，因為我起床太晚了。"
    }

    ,{
        type: "multiple",
        question: "「我約會遲到了，因為公車總是拖拖拉拉。」的法文是?",
        options: ["Je suis en retard au rendez-vous parce que le bus est tout le temps à la bourre.","Merci","J'ai","Bon matin"],
        answer: "Je suis en retard au rendez-vous parce que le bus est tout le temps à la bourre.",
        frenchText: "Je suis en retard au rendez-vous parce que le bus est tout le temps à la bourre.",
        explanation: "Je suis en retard au rendez-vous parce que le bus est tout le temps à la bourre. 是「我約會遲到了，因為公車總是拖拖拉拉。」的法文表達。",
        vocabulary: "je suis en retard au rendez-vous parce que le bus est tout le temps à la bourre. - 我約會遲到了，因為公車總是拖拖拉拉。"
    }

    ,{
        type: "multiple",
        question: "「我跟我爸媽吵架了，因為我想離開去巴黎找工作。」的法文是?",
        options: ["Je me suis disputé avec mes parents parce que je voulais partir chercher du boulot à Paris.","J'ai","Je suis","Au revoir"],
        answer: "Je me suis disputé avec mes parents parce que je voulais partir chercher du boulot à Paris.",
        frenchText: "Je me suis disputé avec mes parents parce que je voulais partir chercher du boulot à Paris.",
        explanation: "Je me suis disputé avec mes parents parce que je voulais partir chercher du boulot à Paris. 是「我跟我爸媽吵架了，因為我想離開去巴黎找工作。」的法文表達。",
        vocabulary: "je me suis disputé avec mes parents parce que je voulais partir chercher du boulot à paris. - 我跟我爸媽吵架了，因為我想離開去巴黎找工作。"
    }

    ,{
        type: "multiple",
        question: "「我不能買這件毛衣，因為我把所有的錢都砸在電玩上了。」的法文是?",
        options: ["Je ne peux pas m'acheter ce pull parce que j'ai claqué tout mon fric dans les jeux vidéo.","Pardon","Comment allez-vous","S'il vous plaît"],
        answer: "Je ne peux pas m'acheter ce pull parce que j'ai claqué tout mon fric dans les jeux vidéo.",
        frenchText: "Je ne peux pas m'acheter ce pull parce que j'ai claqué tout mon fric dans les jeux vidéo.",
        explanation: "Je ne peux pas m'acheter ce pull parce que j'ai claqué tout mon fric dans les jeux vidéo. 是「我不能買這件毛衣，因為我把所有的錢都砸在電玩上了。」的法文表達。",
        vocabulary: "je ne peux pas m'acheter ce pull parce que j'ai claqué tout mon fric dans les jeux vidéo. - 我不能買這件毛衣，因為我把所有的錢都砸在電玩上了。"
    }

    ,{
        type: "multiple",
        question: "「我為駕照考試壓力超大，因為我怕搞砸路考。」的法文是?",
        options: ["Je stresse grave pour le permis parce que j'ai peur de foirer l'examen pratique.","Non","Au revoir","Je suis"],
        answer: "Je stresse grave pour le permis parce que j'ai peur de foirer l'examen pratique.",
        frenchText: "Je stresse grave pour le permis parce que j'ai peur de foirer l'examen pratique.",
        explanation: "Je stresse grave pour le permis parce que j'ai peur de foirer l'examen pratique. 是「我為駕照考試壓力超大，因為我怕搞砸路考。」的法文表達。",
        vocabulary: "je stresse grave pour le permis parce que j'ai peur de foirer l'examen pratique. - 我為駕照考試壓力超大，因為我怕搞砸路考。"
    }

    ,{
        type: "multiple",
        question: "「我沒有申請這份工作，因為我對我的英語水平感到羞恥。」的法文是?",
        options: ["Je n’ai pas postulé pour ce job parce que j'ai honte de mon niveau d'anglais.","Tu es","Au revoir","Bon matin"],
        answer: "Je n’ai pas postulé pour ce job parce que j'ai honte de mon niveau d'anglais.",
        frenchText: "Je n’ai pas postulé pour ce job parce que j'ai honte de mon niveau d'anglais.",
        explanation: "Je n’ai pas postulé pour ce job parce que j'ai honte de mon niveau d'anglais. 是「我沒有申請這份工作，因為我對我的英語水平感到羞恥。」的法文表達。",
        vocabulary: "je n’ai pas postulé pour ce job parce que j'ai honte de mon niveau d'anglais. - 我沒有申請這份工作，因為我對我的英語水平感到羞恥。"
    }

    ,{
        type: "multiple",
        question: "「太客氣了！」的法文是?",
        options: ["C'est très gentil !","Pardon","S'il vous plaît","Il est"],
        answer: "C'est très gentil !",
        frenchText: "C'est très gentil !",
        explanation: "C'est très gentil ! 是「太客氣了！」的法文表達。",
        vocabulary: "c'est très gentil ! - 太客氣了！"
    }

    ,{
        type: "multiple",
        question: "「真是超級NICE！」的法文是?",
        options: ["C'est super sympa !","Ça va","Excusez-moi","Non"],
        answer: "C'est super sympa !",
        frenchText: "C'est super sympa !",
        explanation: "C'est super sympa ! 是「真是超級NICE！」的法文表達。",
        vocabulary: "c'est super sympa ! - 真是超級NICE！"
    }

    ,{
        type: "multiple",
        question: "「您實在不必如此！/ 您太破費了！」的法文是?",
        options: ["Vous n'auriez pas dû !","Ça va","Tu es","Pardon"],
        answer: "Vous n'auriez pas dû !",
        frenchText: "Vous n'auriez pas dû !",
        explanation: "Vous n'auriez pas dû ! 是「您實在不必如此！/ 您太破費了！」的法文表達。",
        vocabulary: "vous n'auriez pas dû ! - 您實在不必如此！/ 您太破費了！"
    }

    ,{
        type: "multiple",
        question: "「我感謝您的邀請。」的法文是?",
        options: ["Je vous remercie de votre invitation.","Pardon","Excusez-moi","Bonne nuit"],
        answer: "Je vous remercie de votre invitation.",
        frenchText: "Je vous remercie de votre invitation.",
        explanation: "Je vous remercie de votre invitation. 是「我感謝您的邀請。」的法文表達。",
        vocabulary: "je vous remercie de votre invitation. - 我感謝您的邀請。"
    }

    ,{
        type: "multiple",
        question: "「非常感謝！/ 多謝！」的法文是?",
        options: ["Merci beaucoup !","Bonne nuit","Oui","Pardon"],
        answer: "Merci beaucoup !",
        frenchText: "Merci beaucoup !",
        explanation: "Merci beaucoup ! 是「非常感謝！/ 多謝！」的法文表達。",
        vocabulary: "merci beaucoup ! - 非常感謝！/ 多謝！"
    }

    ,{
        type: "multiple",
        question: "「萬分感謝！/ 數不盡的感謝！」的法文是?",
        options: ["Mille mercis !","Bonjour","Comment allez-vous","Pardon"],
        answer: "Mille mercis !",
        frenchText: "Mille mercis !",
        explanation: "Mille mercis ! 是「萬分感謝！/ 數不盡的感謝！」的法文表達。",
        vocabulary: "mille mercis ! - 萬分感謝！/ 數不盡的感謝！"
    }

    ,{
        type: "multiple",
        question: "「我很感動！/ 我很受用！」的法文是?",
        options: ["Je suis touché(e) !","Il est","S'il vous plaît","Excusez-moi"],
        answer: "Je suis touché(e) !",
        frenchText: "Je suis touché(e) !",
        explanation: "Je suis touché(e) ! 是「我很感動！/ 我很受用！」的法文表達。",
        vocabulary: "je suis touché(e) ! - 我很感動！/ 我很受用！"
    }

    ,{
        type: "multiple",
        question: "「這讓我非常高興！」的法文是?",
        options: ["Ça me fait très plaisir !","Je suis","Non","Il est"],
        answer: "Ça me fait très plaisir !",
        frenchText: "Ça me fait très plaisir !",
        explanation: "Ça me fait très plaisir ! 是「這讓我非常高興！」的法文表達。",
        vocabulary: "ça me fait très plaisir ! - 這讓我非常高興！"
    }

    ,{
        type: "multiple",
        question: "「由衷感謝！/ 衷心感謝！」的法文是?",
        options: ["Merci du fond du cœur !","Au revoir","Pardon","Il est"],
        answer: "Merci du fond du cœur !",
        frenchText: "Merci du fond du cœur !",
        explanation: "Merci du fond du cœur ! 是「由衷感謝！/ 衷心感謝！」的法文表達。",
        vocabulary: "merci du fond du cœur ! - 由衷感謝！/ 衷心感謝！"
    }

    ,{
        type: "multiple",
        question: "「你在開玩笑吧！」的法文是?",
        options: ["Tu rigoles !","S'il vous plaît","Au revoir","Pardon"],
        answer: "Tu rigoles !",
        frenchText: "Tu rigoles !",
        explanation: "Tu rigoles ! 是「你在開玩笑吧！」的法文表達。",
        vocabulary: "tu rigoles ! - 你在開玩笑吧！"
    }

    ,{
        type: "multiple",
        question: "「認真的嗎？/ 你是說真的？」的法文是?",
        options: ["Sérieux ?","Tu es","Merci","Je suis"],
        answer: "Sérieux ?",
        frenchText: "Sérieux ?",
        explanation: "Sérieux ? 是「認真的嗎？/ 你是說真的？」的法文表達。",
        vocabulary: "sérieux ? - 認真的嗎？/ 你是說真的？"
    }

    ,{
        type: "multiple",
        question: "「不會吧？/ 不是開玩笑吧？」的法文是?",
        options: ["Sans blague ?","Au revoir","S'il vous plaît","Merci"],
        answer: "Sans blague ?",
        frenchText: "Sans blague ?",
        explanation: "Sans blague ? 是「不會吧？/ 不是開玩笑吧？」的法文表達。",
        vocabulary: "sans blague ? - 不會吧？/ 不是開玩笑吧？"
    }

    ,{
        type: "multiple",
        question: "「這不是真的！/ 怎麼可能！/ 不會吧 !」的法文是?",
        options: ["C'est pas vrai !","Je suis","Bon matin","Pardon"],
        answer: "C'est pas vrai !",
        frenchText: "C'est pas vrai !",
        explanation: "C'est pas vrai ! 是「這不是真的！/ 怎麼可能！/ 不會吧 !」的法文表達。",
        vocabulary: "c'est pas vrai ! - 這不是真的！/ 怎麼可能！/ 不會吧 !"
    }

    ,{
        type: "multiple",
        question: "「真可惜！」的法文是?",
        options: ["C'est dommage !","Je suis","Au revoir","Bonne nuit"],
        answer: "C'est dommage !",
        frenchText: "C'est dommage !",
        explanation: "C'est dommage ! 是「真可惜！」的法文表達。",
        vocabulary: "c'est dommage ! - 真可惜！"
    }

    ,{
        type: "multiple",
        question: "「我為你感到難過/抱歉。」的法文是?",
        options: ["Je suis désolé(e) pour toi.","Ça va","Bonne nuit","Merci"],
        answer: "Je suis désolé(e) pour toi.",
        frenchText: "Je suis désolé(e) pour toi.",
        explanation: "Je suis désolé(e) pour toi. 是「我為你感到難過/抱歉。」的法文表達。",
        vocabulary: "je suis désolé(e) pour toi. - 我為你感到難過/抱歉。"
    }

    ,{
        type: "multiple",
        question: "「這是胡說八道 / 這是亂七八糟。」的法文是?",
        options: ["C'est n'importe quoi.","J'ai","Non","Excusez-moi"],
        answer: "C'est n'importe quoi.",
        frenchText: "C'est n'importe quoi.",
        explanation: "C'est n'importe quoi. 是「這是胡說八道 / 這是亂七八糟。」的法文表達。",
        vocabulary: "c'est n'importe quoi. - 這是胡說八道 / 這是亂七八糟。"
    }

    ,{
        type: "multiple",
        question: "「這太棒了！/ 太厲害了！」的法文是?",
        options: ["C'est génial !","Au revoir","S'il vous plaît","Bonjour"],
        answer: "C'est génial !",
        frenchText: "C'est génial !",
        explanation: "C'est génial ! 是「這太棒了！/ 太厲害了！」的法文表達。",
        vocabulary: "c'est génial ! - 這太棒了！/ 太厲害了！"
    }

    ,{
        type: "multiple",
        question: "「超棒的。」的法文是?",
        options: ["C'est super.","Merci","Bonjour","Oui"],
        answer: "C'est super.",
        frenchText: "C'est super.",
        explanation: "C'est super. 是「超棒的。」的法文表達。",
        vocabulary: "c'est super. - 超棒的。"
    }

    ,{
        type: "multiple",
        question: "「真倒楣。/ 運氣不好。」的法文是?",
        options: ["C'est pas de chance.","S'il vous plaît","Tu es","Au revoir"],
        answer: "C'est pas de chance.",
        frenchText: "C'est pas de chance.",
        explanation: "C'est pas de chance. 是「真倒楣。/ 運氣不好。」的法文表達。",
        vocabulary: "c'est pas de chance. - 真倒楣。/ 運氣不好。"
    }

    ,{
        type: "multiple",
        question: "「這很煩人！/ 這很無聊！」的法文是?",
        options: ["Ça, c'est chiant !","Bonne nuit","Au revoir","J'ai"],
        answer: "Ça, c'est chiant !",
        frenchText: "Ça, c'est chiant !",
        explanation: "Ça, c'est chiant ! 是「這很煩人！/ 這很無聊！」的法文表達。",
        vocabulary: "ça, c'est chiant ! - 這很煩人！/ 這很無聊！"
    }

    ,{
        type: "multiple",
        question: "「我為你感到遺憾。」的法文是?",
        options: ["Je te plains.","Bonjour","Excusez-moi","Bon matin"],
        answer: "Je te plains.",
        frenchText: "Je te plains.",
        explanation: "Je te plains. 是「我為你感到遺憾。」的法文表達。",
        vocabulary: "je te plains. - 我為你感到遺憾。"
    }

    ,{
        type: "multiple",
        question: "「我懶得寫作業。」的法文是?",
        options: ["J'ai la flemme de faire les devoirs.","Il est","J'ai","Excusez-moi"],
        answer: "J'ai la flemme de faire les devoirs.",
        frenchText: "J'ai la flemme de faire les devoirs.",
        explanation: "J'ai la flemme de faire les devoirs. 是「我懶得寫作業。」的法文表達。",
        vocabulary: "j'ai la flemme de faire les devoirs. - 我懶得寫作業。"
    }

    ,{
        type: "multiple",
        question: "「我懶得起來。」的法文是?",
        options: ["J'ai la flemme de me lever.","Bonjour","S'il vous plaît","Excusez-moi"],
        answer: "J'ai la flemme de me lever.",
        frenchText: "J'ai la flemme de me lever.",
        explanation: "J'ai la flemme de me lever. 是「我懶得起來。」的法文表達。",
        vocabulary: "j'ai la flemme de me lever. - 我懶得起來。"
    }

    ,{
        type: "multiple",
        question: "「我懶得工作。」的法文是?",
        options: ["J'ai la flemme de bosser.","Non","Au revoir","Bon matin"],
        answer: "J'ai la flemme de bosser.",
        frenchText: "J'ai la flemme de bosser.",
        explanation: "J'ai la flemme de bosser. 是「我懶得工作。」的法文表達。",
        vocabulary: "j'ai la flemme de bosser. - 我懶得工作。"
    }

    ,{
        type: "multiple",
        question: "「我懶得跟她/他說話。」的法文是?",
        options: ["J'ai la flemme de lui parler.","Pardon","S'il vous plaît","Bonjour"],
        answer: "J'ai la flemme de lui parler.",
        frenchText: "J'ai la flemme de lui parler.",
        explanation: "J'ai la flemme de lui parler. 是「我懶得跟她/他說話。」的法文表達。",
        vocabulary: "j'ai la flemme de lui parler. - 我懶得跟她/他說話。"
    }

    ,{
        type: "multiple",
        question: "「我懶得想你。」的法文是?",
        options: ["J'ai la flemme de penser à toi.","Bon matin","Je suis","Merci"],
        answer: "J'ai la flemme de penser à toi.",
        frenchText: "J'ai la flemme de penser à toi.",
        explanation: "J'ai la flemme de penser à toi. 是「我懶得想你。」的法文表達。",
        vocabulary: "j'ai la flemme de penser à toi. - 我懶得想你。"
    }

    ,{
        type: "multiple",
        question: "「我懶得洗碗 。」的法文是?",
        options: ["J'ai la flemme de faire la vaisselle.","Ça va","J'ai","Non"],
        answer: "J'ai la flemme de faire la vaisselle.",
        frenchText: "J'ai la flemme de faire la vaisselle.",
        explanation: "J'ai la flemme de faire la vaisselle. 是「我懶得洗碗 。」的法文表達。",
        vocabulary: "j'ai la flemme de faire la vaisselle. - 我懶得洗碗 。"
    }

    ,{
        type: "multiple",
        question: "「我懶得接電話 。」的法文是?",
        options: ["J’ai la flemme de répondre au téléphone.","Tu es","Excusez-moi","S'il vous plaît"],
        answer: "J’ai la flemme de répondre au téléphone.",
        frenchText: "J’ai la flemme de répondre au téléphone.",
        explanation: "J’ai la flemme de répondre au téléphone. 是「我懶得接電話 。」的法文表達。",
        vocabulary: "j’ai la flemme de répondre au téléphone. - 我懶得接電話 。"
    }

    ,{
        type: "multiple",
        question: "「我懶得走到公車站 。」的法文是?",
        options: ["J'ai la flemme de marcher jusqu'à l'arrêt de bus.","S'il vous plaît","Je suis","Bonjour"],
        answer: "J'ai la flemme de marcher jusqu'à l'arrêt de bus.",
        frenchText: "J'ai la flemme de marcher jusqu'à l'arrêt de bus.",
        explanation: "J'ai la flemme de marcher jusqu'à l'arrêt de bus. 是「我懶得走到公車站 。」的法文表達。",
        vocabulary: "j'ai la flemme de marcher jusqu'à l'arrêt de bus. - 我懶得走到公車站 。"
    }

    ,{
        type: "multiple",
        question: "「我懶得煮飯 。」的法文是?",
        options: ["J'ai la flemme de cuisiner.","Oui","Bonne nuit","Il est"],
        answer: "J'ai la flemme de cuisiner.",
        frenchText: "J'ai la flemme de cuisiner.",
        explanation: "J'ai la flemme de cuisiner. 是「我懶得煮飯 。」的法文表達。",
        vocabulary: "j'ai la flemme de cuisiner. - 我懶得煮飯 。"
    }

    ,{
        type: "multiple",
        question: "「我懶得整理我的房間 。」的法文是?",
        options: ["J'ai la flemme de ranger ma chambre.","Il est","Comment allez-vous","Pardon"],
        answer: "J'ai la flemme de ranger ma chambre.",
        frenchText: "J'ai la flemme de ranger ma chambre.",
        explanation: "J'ai la flemme de ranger ma chambre. 是「我懶得整理我的房間 。」的法文表達。",
        vocabulary: "j'ai la flemme de ranger ma chambre. - 我懶得整理我的房間 。"
    }

    ,{
        type: "multiple",
        question: "「我懶得讀這本書 。」的法文是?",
        options: ["J'ai la flemme de lire ce livre.","S'il vous plaît","Bonne nuit","Non"],
        answer: "J'ai la flemme de lire ce livre.",
        frenchText: "J'ai la flemme de lire ce livre.",
        explanation: "J'ai la flemme de lire ce livre. 是「我懶得讀這本書 。」的法文表達。",
        vocabulary: "j'ai la flemme de lire ce livre. - 我懶得讀這本書 。"
    }

    ,{
        type: "multiple",
        question: "「我懶得遛狗 。」的法文是?",
        options: ["J'ai la flemme de sortir le chien.","Ça va","Bonjour","J'ai"],
        answer: "J'ai la flemme de sortir le chien.",
        frenchText: "J'ai la flemme de sortir le chien.",
        explanation: "J'ai la flemme de sortir le chien. 是「我懶得遛狗 。」的法文表達。",
        vocabulary: "j'ai la flemme de sortir le chien. - 我懶得遛狗 。"
    }

    ,{
        type: "multiple",
        question: "「我懶得穿襪子 。」的法文是?",
        options: ["J'ai la flemme de mettre des chaussettes.","Pardon","S'il vous plaît","Bonne nuit"],
        answer: "J'ai la flemme de mettre des chaussettes.",
        frenchText: "J'ai la flemme de mettre des chaussettes.",
        explanation: "J'ai la flemme de mettre des chaussettes. 是「我懶得穿襪子 。」的法文表達。",
        vocabulary: "j'ai la flemme de mettre des chaussettes. - 我懶得穿襪子 。"
    }

    ,{
        type: "multiple",
        question: "「我懶得跟韓國人交朋友。」的法文是?",
        options: ["J'ai la flemme de faire des amis avec les coréens.","Je suis","Bonjour","Bon matin"],
        answer: "J'ai la flemme de faire des amis avec les coréens.",
        frenchText: "J'ai la flemme de faire des amis avec les coréens.",
        explanation: "J'ai la flemme de faire des amis avec les coréens. 是「我懶得跟韓國人交朋友。」的法文表達。",
        vocabulary: "j'ai la flemme de faire des amis avec les coréens. - 我懶得跟韓國人交朋友。"
    }

    ,{
        type: "multiple",
        question: "「我懶得記植物的名稱 。」的法文是?",
        options: ["J'ai la flemme de mémoriser les noms de plantes","Ça va","Bon matin","Il est"],
        answer: "J'ai la flemme de mémoriser les noms de plantes",
        frenchText: "J'ai la flemme de mémoriser les noms de plantes",
        explanation: "J'ai la flemme de mémoriser les noms de plantes 是「我懶得記植物的名稱 。」的法文表達。",
        vocabulary: "j'ai la flemme de mémoriser les noms de plantes - 我懶得記植物的名稱 。"
    }

    ,{
        type: "multiple",
        question: "「我懶得刷牙 。」的法文是?",
        options: ["J'ai la flemme de me brosser les dents.","Comment allez-vous","Ça va","Au revoir"],
        answer: "J'ai la flemme de me brosser les dents.",
        frenchText: "J'ai la flemme de me brosser les dents.",
        explanation: "J'ai la flemme de me brosser les dents. 是「我懶得刷牙 。」的法文表達。",
        vocabulary: "j'ai la flemme de me brosser les dents. - 我懶得刷牙 。"
    }

    ,{
        type: "multiple",
        question: "「我懶得洗澡 。」的法文是?",
        options: ["J'ai la flemme de prendre une douche.","Comment allez-vous","Je suis","Pardon"],
        answer: "J'ai la flemme de prendre une douche.",
        frenchText: "J'ai la flemme de prendre une douche.",
        explanation: "J'ai la flemme de prendre une douche. 是「我懶得洗澡 。」的法文表達。",
        vocabulary: "j'ai la flemme de prendre une douche. - 我懶得洗澡 。"
    }

    ,{
        type: "multiple",
        question: "「我懶得去超市 。」的法文是?",
        options: ["J'ai la flemme d’aller au supermarché.","Pardon","Bon matin","Il est"],
        answer: "J'ai la flemme d’aller au supermarché.",
        frenchText: "J'ai la flemme d’aller au supermarché.",
        explanation: "J'ai la flemme d’aller au supermarché. 是「我懶得去超市 。」的法文表達。",
        vocabulary: "j'ai la flemme d’aller au supermarché. - 我懶得去超市 。"
    }

    ,{
        type: "multiple",
        question: "「我懶得今天做運動 。」的法文是?",
        options: ["J'ai la flemme de faire du sport aujourd'hui.","Tu es","S'il vous plaît","Au revoir"],
        answer: "J'ai la flemme de faire du sport aujourd'hui.",
        frenchText: "J'ai la flemme de faire du sport aujourd'hui.",
        explanation: "J'ai la flemme de faire du sport aujourd'hui. 是「我懶得今天做運動 。」的法文表達。",
        vocabulary: "j'ai la flemme de faire du sport aujourd'hui. - 我懶得今天做運動 。"
    }

    ,{
        type: "multiple",
        question: "「我今晚懶得出門。」的法文是?",
        options: ["J'ai la flemme de sortir ce soir.","Non","Bonjour","Bon matin"],
        answer: "J'ai la flemme de sortir ce soir.",
        frenchText: "J'ai la flemme de sortir ce soir.",
        explanation: "J'ai la flemme de sortir ce soir. 是「我今晚懶得出門。」的法文表達。",
        vocabulary: "j'ai la flemme de sortir ce soir. - 我今晚懶得出門。"
    }

    // === 新題目結束 ===
    // 在這一行按 Ctrl+V 貼上新題目

];

// ⚠️ 注意：]; 這行不要刪除！

// 匯出題庫供 data.js 使用
// Export for use in data.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = customQuestions;
}

// 在瀏覽器環境中設定為全域變數
if (typeof window !== 'undefined') {
    window.customQuestions = customQuestions;
}
