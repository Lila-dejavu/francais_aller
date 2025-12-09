"""
法文單字資料庫
包含各種主題的法文單字
"""

from game_modes import Word
from typing import List, Dict


class WordDatabase:
    """單字資料庫管理器"""
    
    def __init__(self):
        self.words: Dict[str, List[Word]] = {
            "問候": self._get_greetings(),
            "數字": self._get_numbers(),
            "顏色": self._get_colors(),
            "動物": self._get_animals(),
            "食物": self._get_food(),
            "家庭": self._get_family(),
            "身體": self._get_body(),
            "時間": self._get_time(),
            "地點": self._get_places(),
            "動詞": self._get_verbs(),
        }
    
    def _get_greetings(self) -> List[Word]:
        """問候語"""
        return [
            Word("bonjour", "你好", "問候", "Bonjour! Comment allez-vous?"),
            Word("bonsoir", "晚上好", "問候", "Bonsoir madame!"),
            Word("salut", "嗨", "問候", "Salut! Ça va?"),
            Word("au revoir", "再見", "問候", "Au revoir! À bientôt!"),
            Word("merci", "謝謝", "問候", "Merci beaucoup pour votre aide."),
            Word("s'il vous plaît", "請", "問候", "Un café, s'il vous plaît."),
            Word("pardon", "對不起", "問候", "Pardon, excusez-moi."),
            Word("oui", "是", "問候", "Oui, je suis d'accord."),
            Word("non", "不", "問候", "Non, merci."),
            Word("bienvenue", "歡迎", "問候", "Bienvenue en France!"),
        ]
    
    def _get_numbers(self) -> List[Word]:
        """數字"""
        return [
            Word("un", "一", "數字", "J'ai un chat."),
            Word("deux", "二", "數字", "Deux cafés, s'il vous plaît."),
            Word("trois", "三", "數字", "Il y a trois personnes."),
            Word("quatre", "四", "數字", "Quatre saisons dans l'année."),
            Word("cinq", "五", "數字", "Cinq doigts sur la main."),
            Word("six", "六", "數字", "Six heures du matin."),
            Word("sept", "七", "數字", "Sept jours dans la semaine."),
            Word("huit", "八", "數字", "Huit heures du soir."),
            Word("neuf", "九", "數字", "Neuf mois de grossesse."),
            Word("dix", "十", "數字", "Dix ans d'expérience."),
        ]
    
    def _get_colors(self) -> List[Word]:
        """顏色"""
        return [
            Word("rouge", "紅色", "顏色", "Une pomme rouge."),
            Word("bleu", "藍色", "顏色", "Le ciel est bleu."),
            Word("vert", "綠色", "顏色", "L'herbe est verte."),
            Word("jaune", "黃色", "顏色", "Un citron jaune."),
            Word("noir", "黑色", "顏色", "Un chat noir."),
            Word("blanc", "白色", "顏色", "La neige est blanche."),
            Word("orange", "橙色", "顏色", "Une orange orange."),
            Word("rose", "粉紅色", "顏色", "Une fleur rose."),
            Word("violet", "紫色", "顏色", "Une robe violette."),
            Word("gris", "灰色", "顏色", "Un ciel gris."),
        ]
    
    def _get_animals(self) -> List[Word]:
        """動物"""
        return [
            Word("chat", "貓", "動物", "Le chat dort sur le canapé."),
            Word("chien", "狗", "動物", "Le chien aboie."),
            Word("oiseau", "鳥", "動物", "L'oiseau chante."),
            Word("poisson", "魚", "動物", "Le poisson nage."),
            Word("cheval", "馬", "動物", "Le cheval galope."),
            Word("vache", "牛", "動物", "La vache donne du lait."),
            Word("mouton", "羊", "動物", "Le mouton broute."),
            Word("lapin", "兔子", "動物", "Le lapin mange des carottes."),
            Word("souris", "老鼠", "動物", "La souris est petite."),
            Word("éléphant", "大象", "動物", "L'éléphant est grand."),
        ]
    
    def _get_food(self) -> List[Word]:
        """食物"""
        return [
            Word("pain", "麵包", "食物", "Je mange du pain."),
            Word("fromage", "起司", "食物", "Le fromage français est délicieux."),
            Word("vin", "葡萄酒", "食物", "Un verre de vin rouge."),
            Word("eau", "水", "食物", "Je bois de l'eau."),
            Word("café", "咖啡", "食物", "Un café au lait."),
            Word("thé", "茶", "食物", "Une tasse de thé."),
            Word("pomme", "蘋果", "食物", "Une pomme verte."),
            Word("gâteau", "蛋糕", "食物", "Un gâteau au chocolat."),
            Word("viande", "肉", "食物", "De la viande grillée."),
            Word("légume", "蔬菜", "食物", "Manger des légumes."),
        ]
    
    def _get_family(self) -> List[Word]:
        """家庭"""
        return [
            Word("père", "父親", "家庭", "Mon père travaille."),
            Word("mère", "母親", "家庭", "Ma mère cuisine."),
            Word("frère", "兄弟", "家庭", "J'ai un frère."),
            Word("sœur", "姊妹", "家庭", "Ma sœur étudie."),
            Word("fils", "兒子", "家庭", "C'est mon fils."),
            Word("fille", "女兒", "家庭", "C'est ma fille."),
            Word("grand-père", "祖父", "家庭", "Mon grand-père est gentil."),
            Word("grand-mère", "祖母", "家庭", "Ma grand-mère fait des gâteaux."),
            Word("oncle", "叔叔", "家庭", "Mon oncle habite à Paris."),
            Word("tante", "阿姨", "家庭", "Ma tante est professeur."),
        ]
    
    def _get_body(self) -> List[Word]:
        """身體部位"""
        return [
            Word("tête", "頭", "身體", "J'ai mal à la tête."),
            Word("yeux", "眼睛", "身體", "Elle a les yeux bleus."),
            Word("nez", "鼻子", "身體", "Un grand nez."),
            Word("bouche", "嘴巴", "身體", "Ouvrir la bouche."),
            Word("oreille", "耳朵", "身體", "J'écoute avec mes oreilles."),
            Word("main", "手", "身體", "Je lève la main."),
            Word("pied", "腳", "身體", "Mes pieds sont fatigués."),
            Word("bras", "手臂", "身體", "Lever les bras."),
            Word("jambe", "腿", "身體", "Courir avec les jambes."),
            Word("cœur", "心臟", "身體", "Mon cœur bat vite."),
        ]
    
    def _get_time(self) -> List[Word]:
        """時間"""
        return [
            Word("jour", "天", "時間", "Un beau jour."),
            Word("semaine", "週", "時間", "Une semaine de vacances."),
            Word("mois", "月", "時間", "Le mois de janvier."),
            Word("année", "年", "時間", "Bonne année!"),
            Word("heure", "小時", "時間", "Quelle heure est-il?"),
            Word("minute", "分鐘", "時間", "Cinq minutes."),
            Word("matin", "早上", "時間", "Le matin, je me réveille."),
            Word("après-midi", "下午", "時間", "L'après-midi, je travaille."),
            Word("soir", "晚上", "時間", "Le soir, je me repose."),
            Word("nuit", "夜晚", "時間", "La nuit, je dors."),
        ]
    
    def _get_places(self) -> List[Word]:
        """地點"""
        return [
            Word("maison", "房子", "地點", "J'habite dans une maison."),
            Word("école", "學校", "地點", "Je vais à l'école."),
            Word("magasin", "商店", "地點", "Faire les courses au magasin."),
            Word("restaurant", "餐廳", "地點", "Dîner au restaurant."),
            Word("hôpital", "醫院", "地點", "Aller à l'hôpital."),
            Word("parc", "公園", "地點", "Se promener au parc."),
            Word("rue", "街道", "地點", "Traverser la rue."),
            Word("ville", "城市", "地點", "Habiter en ville."),
            Word("pays", "國家", "地點", "Mon pays natal."),
            Word("mer", "海", "地點", "Aller à la mer."),
        ]
    
    def _get_verbs(self) -> List[Word]:
        """常用動詞"""
        return [
            Word("être", "是", "動詞", "Je suis étudiant."),
            Word("avoir", "有", "動詞", "J'ai un chat."),
            Word("aller", "去", "動詞", "Je vais à Paris."),
            Word("faire", "做", "動詞", "Je fais mes devoirs."),
            Word("pouvoir", "能夠", "動詞", "Je peux parler français."),
            Word("vouloir", "想要", "動詞", "Je veux un café."),
            Word("savoir", "知道", "動詞", "Je sais nager."),
            Word("voir", "看見", "動詞", "Je vois la tour Eiffel."),
            Word("manger", "吃", "動詞", "Je mange du pain."),
            Word("boire", "喝", "動詞", "Je bois de l'eau."),
        ]
    
    def get_all_words(self) -> List[Word]:
        """取得所有單字"""
        all_words = []
        for category_words in self.words.values():
            all_words.extend(category_words)
        return all_words
    
    def get_words_by_category(self, category: str) -> List[Word]:
        """根據類別取得單字"""
        return self.words.get(category, [])
    
    def get_categories(self) -> List[str]:
        """取得所有類別"""
        return list(self.words.keys())
    
    def search_words(self, keyword: str) -> List[Word]:
        """搜尋單字"""
        results = []
        keyword = keyword.lower()
        for word in self.get_all_words():
            if (keyword in word.french.lower() or 
                keyword in word.chinese.lower() or 
                keyword in word.category.lower()):
                results.append(word)
        return results


def get_sample_words(num_words: int = 20) -> List[Word]:
    """取得範例單字"""
    db = WordDatabase()
    all_words = db.get_all_words()
    import random
    return random.sample(all_words, min(num_words, len(all_words)))


if __name__ == "__main__":
    # 測試資料庫
    db = WordDatabase()
    print(f"總共有 {len(db.get_all_words())} 個單字")
    print(f"類別: {', '.join(db.get_categories())}")
    
    # 顯示每個類別的單字數量
    for category in db.get_categories():
        words = db.get_words_by_category(category)
        print(f"{category}: {len(words)} 個單字")
