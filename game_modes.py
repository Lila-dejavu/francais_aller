"""
法文學習遊戲模組
提供多種遊戲模式來學習法文單字、文法和句型
"""

import random
import time
from typing import List, Dict, Tuple
from dataclasses import dataclass
from enum import Enum


class Difficulty(Enum):
    """難度等級"""
    EASY = "簡單"
    MEDIUM = "中等"
    HARD = "困難"


@dataclass
class Word:
    """單字資料結構"""
    french: str
    chinese: str
    category: str
    example: str = ""
    
    
@dataclass
class GameResult:
    """遊戲結果"""
    score: int
    total_questions: int
    correct_answers: int
    time_taken: float
    
    @property
    def accuracy(self) -> float:
        """計算正確率"""
        return (self.correct_answers / self.total_questions * 100) if self.total_questions > 0 else 0


class FrenchGameBase:
    """法文遊戲基礎類別"""
    
    def __init__(self, words: List[Word], difficulty: Difficulty = Difficulty.MEDIUM):
        self.words = words
        self.difficulty = difficulty
        self.score = 0
        self.correct_count = 0
        self.total_questions = 0
        self.start_time = None
        
    def start_game(self):
        """開始遊戲"""
        self.start_time = time.time()
        self.score = 0
        self.correct_count = 0
        self.total_questions = 0
        
    def end_game(self) -> GameResult:
        """結束遊戲並返回結果"""
        time_taken = time.time() - self.start_time if self.start_time else 0
        return GameResult(
            score=self.score,
            total_questions=self.total_questions,
            correct_answers=self.correct_count,
            time_taken=time_taken
        )
    
    def update_score(self, is_correct: bool, bonus: int = 0):
        """更新分數"""
        self.total_questions += 1
        if is_correct:
            self.correct_count += 1
            base_score = 10
            if self.difficulty == Difficulty.HARD:
                base_score = 20
            elif self.difficulty == Difficulty.MEDIUM:
                base_score = 15
            self.score += base_score + bonus


class FlashCardGame(FrenchGameBase):
    """閃卡遊戲模式"""
    
    def play_round(self) -> Tuple[Word, bool]:
        """進行一輪遊戲"""
        word = random.choice(self.words)
        print(f"\n{'='*50}")
        print(f"法文: {word.french}")
        if word.example:
            print(f"例句: {word.example}")
        print(f"{'='*50}")
        
        user_answer = input("請輸入中文意思: ").strip()
        is_correct = user_answer.lower() == word.chinese.lower()
        
        if is_correct:
            print("✓ 正確！")
        else:
            print(f"✗ 錯誤！正確答案是: {word.chinese}")
        
        self.update_score(is_correct)
        return word, is_correct


class MultipleChoiceGame(FrenchGameBase):
    """選擇題遊戲模式"""
    
    def __init__(self, words: List[Word], difficulty: Difficulty = Difficulty.MEDIUM, num_choices: int = 4):
        super().__init__(words, difficulty)
        self.num_choices = num_choices
    
    def play_round(self) -> Tuple[Word, bool]:
        """進行一輪選擇題"""
        if len(self.words) < self.num_choices:
            raise ValueError(f"單字數量不足以產生 {self.num_choices} 個選項")
        
        correct_word = random.choice(self.words)
        wrong_words = random.sample([w for w in self.words if w != correct_word], 
                                   self.num_choices - 1)
        choices = [correct_word] + wrong_words
        random.shuffle(choices)
        
        print(f"\n{'='*50}")
        print(f"法文: {correct_word.french}")
        if correct_word.example:
            print(f"例句: {correct_word.example}")
        print(f"{'='*50}")
        
        for idx, word in enumerate(choices, 1):
            print(f"{idx}. {word.chinese}")
        
        try:
            user_choice = int(input("\n請選擇正確答案 (輸入數字): "))
            if 1 <= user_choice <= len(choices):
                selected_word = choices[user_choice - 1]
                is_correct = selected_word == correct_word
                
                if is_correct:
                    print("✓ 正確！")
                else:
                    print(f"✗ 錯誤！正確答案是: {correct_word.chinese}")
                
                self.update_score(is_correct)
                return correct_word, is_correct
            else:
                print("無效的選項")
                return correct_word, False
        except ValueError:
            print("請輸入有效的數字")
            return correct_word, False


class SpeedChallengeGame(FrenchGameBase):
    """限時挑戰模式"""
    
    def __init__(self, words: List[Word], difficulty: Difficulty = Difficulty.MEDIUM, 
                 time_limit: int = 60):
        super().__init__(words, difficulty)
        self.time_limit = time_limit
    
    def play_round(self) -> Tuple[Word, bool, float]:
        """進行一輪限時挑戰"""
        if time.time() - self.start_time >= self.time_limit:
            return None, False, 0
        
        word = random.choice(self.words)
        remaining_time = self.time_limit - (time.time() - self.start_time)
        
        print(f"\n{'='*50}")
        print(f"剩餘時間: {remaining_time:.1f} 秒")
        print(f"法文: {word.french}")
        print(f"{'='*50}")
        
        round_start = time.time()
        user_answer = input("請輸入中文意思 (或按 q 結束): ").strip()
        
        if user_answer.lower() == 'q':
            return None, False, 0
        
        response_time = time.time() - round_start
        is_correct = user_answer.lower() == word.chinese.lower()
        
        # 根據回答速度給予額外分數
        speed_bonus = 0
        if is_correct and response_time < 3:
            speed_bonus = 5
            print("✓ 正確！⚡ 快速回答獎勵 +5 分")
        elif is_correct:
            print("✓ 正確！")
        else:
            print(f"✗ 錯誤！正確答案是: {word.chinese}")
        
        self.update_score(is_correct, speed_bonus)
        return word, is_correct, response_time


class TypingGame(FrenchGameBase):
    """拼寫練習模式"""
    
    def play_round(self) -> Tuple[Word, bool, int]:
        """進行一輪拼寫練習"""
        word = random.choice(self.words)
        
        print(f"\n{'='*50}")
        print(f"中文: {word.chinese}")
        if word.example:
            print(f"例句提示: {word.example}")
        print(f"{'='*50}")
        
        user_answer = input("請輸入法文單字: ").strip()
        is_correct = user_answer.lower() == word.french.lower()
        
        if is_correct:
            print("✓ 完全正確！")
            self.update_score(True)
            return word, True, 0
        else:
            # 計算相似度 (簡單的字元差異)
            errors = sum(1 for a, b in zip(user_answer.lower(), word.french.lower()) if a != b)
            errors += abs(len(user_answer) - len(word.french))
            
            if errors <= 2:
                print(f"✓ 接近！有 {errors} 個小錯誤")
                print(f"正確拼寫: {word.french}")
                self.update_score(True, bonus=-5)  # 部分分數
                return word, True, errors
            else:
                print(f"✗ 錯誤！正確拼寫: {word.french}")
                self.update_score(False)
                return word, False, errors


class MemoryMatchGame(FrenchGameBase):
    """記憶配對遊戲"""
    
    def __init__(self, words: List[Word], difficulty: Difficulty = Difficulty.MEDIUM, 
                 pairs: int = 6):
        super().__init__(words, difficulty)
        self.pairs = min(pairs, len(words))
        self.game_words = []
        self.revealed_cards = []
        
    def setup_game(self):
        """設置遊戲卡片"""
        self.game_words = random.sample(self.words, self.pairs)
        cards = []
        for word in self.game_words:
            cards.append(('french', word.french, word))
            cards.append(('chinese', word.chinese, word))
        random.shuffle(cards)
        return cards
    
    def display_cards(self, cards: List, revealed_indices: List[int]):
        """顯示卡片"""
        print(f"\n{'='*50}")
        for idx, card in enumerate(cards):
            if idx in revealed_indices:
                print(f"{idx + 1}. [{card[1]}]")
            else:
                print(f"{idx + 1}. [?]")
        print(f"{'='*50}")
    
    def play_game(self):
        """玩記憶配對遊戲"""
        self.start_game()
        cards = self.setup_game()
        matched_pairs = []
        attempts = 0
        
        print("\n🎮 記憶配對遊戲開始！")
        print(f"總共有 {self.pairs} 對卡片需要配對")
        
        while len(matched_pairs) < self.pairs:
            self.display_cards(cards, matched_pairs)
            
            try:
                print("\n選擇兩張卡片來配對：")
                choice1 = int(input("第一張卡片編號: ")) - 1
                choice2 = int(input("第二張卡片編號: ")) - 1
                
                if choice1 == choice2 or choice1 in matched_pairs or choice2 in matched_pairs:
                    print("無效的選擇，請重新選擇")
                    continue
                
                if 0 <= choice1 < len(cards) and 0 <= choice2 < len(cards):
                    card1 = cards[choice1]
                    card2 = cards[choice2]
                    
                    print(f"\n第一張: {card1[1]}")
                    print(f"第二張: {card2[1]}")
                    
                    attempts += 1
                    
                    # 檢查是否配對成功
                    if card1[2] == card2[2] and card1[0] != card2[0]:
                        print("✓ 配對成功！")
                        matched_pairs.extend([choice1, choice2])
                        self.update_score(True)
                    else:
                        print("✗ 配對失敗")
                        time.sleep(1.5)  # 給玩家記憶時間
                else:
                    print("無效的卡片編號")
            except ValueError:
                print("請輸入有效的數字")
        
        print(f"\n🎉 恭喜完成！總共嘗試了 {attempts} 次")
        return self.end_game()


class GameManager:
    """遊戲管理器"""
    
    def __init__(self, words: List[Word]):
        self.words = words
        
    def show_menu(self):
        """顯示遊戲選單"""
        print("\n" + "="*50)
        print("🇫🇷 法文學習遊戲中心 🇫🇷")
        print("="*50)
        print("1. 📇 閃卡模式 - 看法文猜中文")
        print("2. ✅ 選擇題模式 - 多選一")
        print("3. ⚡ 限時挑戰 - 速度與準確度")
        print("4. ⌨️  拼寫練習 - 看中文寫法文")
        print("5. 🎴 記憶配對 - 翻牌配對遊戲")
        print("6. 📊 查看統計")
        print("0. 退出")
        print("="*50)
    
    def select_difficulty(self) -> Difficulty:
        """選擇難度"""
        print("\n選擇難度：")
        print("1. 簡單")
        print("2. 中等")
        print("3. 困難")
        
        choice = input("請選擇 (1-3): ").strip()
        difficulty_map = {
            '1': Difficulty.EASY,
            '2': Difficulty.MEDIUM,
            '3': Difficulty.HARD
        }
        return difficulty_map.get(choice, Difficulty.MEDIUM)
    
    def play_game(self, game_type: int):
        """開始遊戲"""
        if not self.words:
            print("❌ 沒有可用的單字資料")
            return
        
        difficulty = self.select_difficulty()
        num_rounds = int(input("請輸入遊戲回合數: ").strip() or "10")
        
        if game_type == 1:
            game = FlashCardGame(self.words, difficulty)
            game.start_game()
            for _ in range(num_rounds):
                game.play_round()
                if input("\n繼續？(Enter繼續/q退出): ").lower() == 'q':
                    break
            result = game.end_game()
            
        elif game_type == 2:
            game = MultipleChoiceGame(self.words, difficulty)
            game.start_game()
            for _ in range(num_rounds):
                game.play_round()
                if input("\n繼續？(Enter繼續/q退出): ").lower() == 'q':
                    break
            result = game.end_game()
            
        elif game_type == 3:
            time_limit = int(input("請輸入時間限制(秒): ").strip() or "60")
            game = SpeedChallengeGame(self.words, difficulty, time_limit)
            game.start_game()
            while True:
                word, is_correct, response_time = game.play_round()
                if word is None:
                    break
            result = game.end_game()
            
        elif game_type == 4:
            game = TypingGame(self.words, difficulty)
            game.start_game()
            for _ in range(num_rounds):
                game.play_round()
                if input("\n繼續？(Enter繼續/q退出): ").lower() == 'q':
                    break
            result = game.end_game()
            
        elif game_type == 5:
            pairs = int(input("請輸入配對數量 (3-10): ").strip() or "6")
            game = MemoryMatchGame(self.words, difficulty, pairs)
            result = game.play_game()
        
        else:
            print("❌ 無效的遊戲類型")
            return
        
        self.show_result(result)
    
    def show_result(self, result: GameResult):
        """顯示遊戲結果"""
        print("\n" + "="*50)
        print("🏆 遊戲結果")
        print("="*50)
        print(f"總分: {result.score}")
        print(f"正確率: {result.accuracy:.1f}%")
        print(f"答對題數: {result.correct_answers}/{result.total_questions}")
        print(f"遊戲時間: {result.time_taken:.1f} 秒")
        print("="*50)
        
        # 評級
        if result.accuracy >= 90:
            print("🌟🌟🌟 優秀！")
        elif result.accuracy >= 70:
            print("🌟🌟 良好！")
        elif result.accuracy >= 50:
            print("🌟 還不錯！")
        else:
            print("💪 繼續加油！")
    
    def run(self):
        """運行遊戲管理器"""
        while True:
            self.show_menu()
            choice = input("\n請選擇遊戲模式: ").strip()
            
            if choice == '0':
                print("👋 再見！繼續加油學習法文！")
                break
            elif choice in ['1', '2', '3', '4', '5']:
                self.play_game(int(choice))
            elif choice == '6':
                print("📊 統計功能開發中...")
            else:
                print("❌ 無效的選擇，請重新輸入")


if __name__ == "__main__":
    # 範例單字資料
    sample_words = [
        Word("bonjour", "你好", "問候", "Bonjour! Comment allez-vous?"),
        Word("merci", "謝謝", "問候", "Merci beaucoup!"),
        Word("chat", "貓", "動物", "J'ai un chat blanc."),
        Word("chien", "狗", "動物", "Le chien est mignon."),
        Word("maison", "房子", "建築", "C'est ma maison."),
        Word("livre", "書", "物品", "Je lis un livre."),
        Word("eau", "水", "飲料", "Je bois de l'eau."),
        Word("pain", "麵包", "食物", "J'achète du pain."),
        Word("ami", "朋友", "人", "C'est mon ami."),
        Word("école", "學校", "地點", "Je vais à l'école."),
    ]
    
    # 啟動遊戲
    manager = GameManager(sample_words)
    manager.run()
