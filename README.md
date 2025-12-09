# 📖 365法文日記 | Journal Français 365

一個創新的法文學習遊戲，透過365天的冒險故事，將每天的學習成果記錄在你的數位日記本中。從零基礎到流利對話，每天進步一點點！

![遊戲難度](https://img.shields.io/badge/難度-簡單到困難-blue)
![學習天數](https://img.shields.io/badge/學習天數-365天-green)
![語言](https://img.shields.io/badge/語言-JavaScript-yellow)

## 🎮 遊戲特色

### 1. 📇 閃卡模式 (Flash Card)
- 顯示法文單字，玩家輸入中文意思
- 適合快速記憶和複習
- 包含例句提示

### 2. ✅ 選擇題模式 (Multiple Choice)
- 從多個選項中選擇正確答案
- 可調整選項數量 (預設4個)
- 降低難度，適合初學者

### 3. ⚡ 限時挑戰 (Speed Challenge)
- 在限定時間內盡可能多答題
- 快速回答有額外獎勵分數
- 訓練反應速度和單字熟練度

### 4. ⌨️ 拼寫練習 (Typing Game)
- 看中文輸入法文單字
- 檢測拼寫錯誤並給予提示
- 強化拼寫能力

### 5. 🎴 記憶配對 (Memory Match)
- 翻牌配對法文和中文
- 訓練記憶力和單字關聯
- 可調整配對數量

## 📚 單字資料庫

包含10個主題類別，共100個常用法文單字：

- 問候 (Greetings)
- 數字 (Numbers)
- 顏色 (Colors)
- 動物 (Animals)
- 食物 (Food)
- 家庭 (Family)
- 身體 (Body)
- 時間 (Time)
- 地點 (Places)
- 動詞 (Verbs)

## 🎯 難度等級

- **簡單**: 基礎分數，適合初學者
- **中等**: 標準分數，適合有基礎者
- **困難**: 高分獎勵，適合進階學習者

## 🚀 使用方法

### 快速開始

```python
python main.py
```

### 使用範例

#### 1. 使用預設遊戲管理器

```python
from main import main

# 啟動完整遊戲系統
main()
```

#### 2. 自訂遊戲

```python
from game_modes import FlashCardGame, Difficulty
from word_database import WordDatabase

# 建立單字資料庫
db = WordDatabase()
words = db.get_words_by_category("動物")

# 建立閃卡遊戲
game = FlashCardGame(words, Difficulty.MEDIUM)
game.start_game()

# 進行5輪遊戲
for _ in range(5):
    game.play_round()

# 查看結果
result = game.end_game()
print(f"得分: {result.score}")
print(f"正確率: {result.accuracy:.1f}%")
```

#### 3. 選擇題遊戲

```python
from game_modes import MultipleChoiceGame, Difficulty
from word_database import get_sample_words

# 取得隨機單字
words = get_sample_words(20)

# 建立選擇題遊戲 (4個選項)
game = MultipleChoiceGame(words, Difficulty.EASY, num_choices=4)
game.start_game()

for _ in range(10):
    game.play_round()

result = game.end_game()
print(f"答對 {result.correct_answers}/{result.total_questions} 題")
```

#### 4. 限時挑戰

```python
from game_modes import SpeedChallengeGame, Difficulty
from word_database import WordDatabase

db = WordDatabase()
words = db.get_all_words()

# 60秒限時挑戰
game = SpeedChallengeGame(words, Difficulty.HARD, time_limit=60)
game.start_game()

while True:
    word, is_correct, response_time = game.play_round()
    if word is None:  # 時間到
        break

result = game.end_game()
print(f"限時挑戰結束！總分: {result.score}")
```

#### 5. 記憶配對遊戲

```python
from game_modes import MemoryMatchGame, Difficulty
from word_database import WordDatabase

db = WordDatabase()
words = db.get_words_by_category("顏色")

# 建立6對配對遊戲
game = MemoryMatchGame(words, Difficulty.MEDIUM, pairs=6)
result = game.play_game()

print(f"遊戲完成！得分: {result.score}")
```

## 📊 遊戲結果

每個遊戲結束後會顯示：
- 總分
- 正確率 (%)
- 答對/總題數
- 遊戲時間
- 評級 (🌟🌟🌟 優秀 / 🌟🌟 良好 / 🌟 還不錯 / 💪 繼續加油)

## 🛠️ 擴展功能

### 新增自訂單字

```python
from game_modes import Word
from word_database import WordDatabase

# 建立自訂單字
custom_words = [
    Word("bibliothèque", "圖書館", "地點", "Je vais à la bibliothèque."),
    Word("ordinateur", "電腦", "物品", "J'utilise un ordinateur."),
]

# 加入遊戲
from game_modes import GameManager
manager = GameManager(custom_words)
manager.run()
```

### 搜尋單字

```python
from word_database import WordDatabase

db = WordDatabase()

# 搜尋包含關鍵字的單字
results = db.search_words("chat")
for word in results:
    print(f"{word.french} - {word.chinese}")
```

## 📝 架構說明

### 核心模組

- `game_modes.py`: 遊戲模式實作
  - `FrenchGameBase`: 遊戲基礎類別
  - `FlashCardGame`: 閃卡遊戲
  - `MultipleChoiceGame`: 選擇題遊戲
  - `SpeedChallengeGame`: 限時挑戰
  - `TypingGame`: 拼寫練習
  - `MemoryMatchGame`: 記憶配對
  - `GameManager`: 遊戲管理器

- `word_database.py`: 單字資料庫
  - `WordDatabase`: 管理所有單字
  - 按主題分類
  - 提供搜尋功能

- `main.py`: 主程式入口
  - 整合所有模組
  - 提供互動式選單

### 資料結構

```python
@dataclass
class Word:
    french: str      # 法文
    chinese: str     # 中文
    category: str    # 類別
    example: str     # 例句

@dataclass
class GameResult:
    score: int                  # 分數
    total_questions: int        # 總題數
    correct_answers: int        # 答對數
    time_taken: float          # 遊戲時間
```

## 💡 學習建議

1. **初學者**: 從「問候」類別的閃卡模式開始
2. **進階者**: 使用限時挑戰測試熟練度
3. **加強拼寫**: 多玩拼寫練習模式
4. **記憶訓練**: 使用記憶配對遊戲
5. **系統學習**: 按類別逐一學習所有單字

## 🔧 系統需求

- Python 3.7+
- 無需額外依賴套件 (純Python標準庫)

## 📈 未來功能

- [ ] 語音發音功能
- [ ] 學習進度追蹤
- [ ] 成就系統
- [ ] 排行榜
- [ ] 更多單字類別
- [ ] 句型練習
- [ ] 文法測驗
- [ ] 匯出學習報告

## 🤝 貢獻

歡迎提交新的單字、遊戲模式或改進建議！

## 📄 授權

MIT License

---

**Bonne chance! 祝你學習愉快！** 🎉
